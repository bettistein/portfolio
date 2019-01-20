const workMdxPaths = require.context('./pages/work', true, /^\.\/.*\.mdx$/)

const importAllMdx = ctx => {
  let modules = []
  ctx.keys().forEach(key => {
    const module = ctx(key)

    const match = key.match(/\.\/(.*)\.mdx/)

    /* We convert the filename to a href-able path
       and attach it to the frontMatter object as
       the attribute "href". Therefore, it's not
       allowed to use the "href" attribute in any
       actual frontMatter export */
    let href
    if (match) {
      const name = match[1]
      href = '/work/' + name
      module.name = name
    }

    if (module.frontMatter == null) {
      console.warn(`${key} -> No 'frontMatter' export found!`)
      module.frontMatter = {}
    }

    module.frontMatter.href = href
    modules.push(module)
    console.log(module)
  })
  return applyMoreProjects(modules)
}

/**

AllWorkMdx = [
  { name: "aigner", href: "/work/..."} <-- 0
  { name: "run-wild", href: "/work/..."}
  { name: "reason-association", href: "/work/..."}
  { name: "reason-association", href: "/work/..."} Array.length-1
]
 */

/* This will add a moreProjects attribute to a given workMdx frontMatter */
const applyMoreProjects = allWorkMdx => {
  let maxSlots = allWorkMdx.length - 1
  if (maxSlots > 3) {
    maxSlots = 3
  }
  
  allWorkMdx.map((workMdx, i) => {
    const slots = []

    let j = i
    // console.log("WorkMdx: ", workMdx.name)

    while (slots.length < maxSlots) {
      // console.log("j vs allWorkMdx.length: ", j, " ", allWorkMdx.length)
      if (j >= allWorkMdx.length - 1) {
        j = 0
      } else {
        j = j + 1
      }

      // console.log("j: ", j)

      const {thumbnail, sideinfo, href} = allWorkMdx[j].frontMatter;
      slots.push({sideinfo, thumbnail, href})
    }
    workMdx.frontMatter.moreProjects = slots;
  })

  return allWorkMdx
}

export const allFrontMatters = pages => {
  return _.reduce(
    pages,
    (acc, page) => {
      return [...acc, page.frontMatter]
    },
    []
  )
}

let workMdxes = importAllMdx(workMdxPaths)

export const workFrontMatters = allFrontMatters(workMdxes)

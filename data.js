const workMdxPaths = require.context('./pages/work', true, /^\.\/.*\.mdx$/)

const importAllMdx = ctx => {
  let modules = []
  ctx.keys().forEach(key => {
    const module = ctx(key)

    console.log(key)

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
    }

    if (module.frontMatter == null) {
      console.warn(`${key} -> No 'frontMatter' export found!`)
      module.frontMatter = {}
    }

    module.frontMatter.href = href
    modules.push(module)
  })
  return modules
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

const workMdxPaths = require.context('./pages/work', true, /^\.\/.*\.mdx$/)

const importAllMdx = ctx => {
  let modules = []
  ctx.keys().forEach(key => {
    const module = ctx(key)
    if (module.frontMatter == null) {
      console.warn(`${key} -> No 'frontMatter' export found!`)
      module.frontMatter = {}
    }
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
    [],
  )
}

let workMdxes = importAllMdx(workMdxPaths)

export const workFrontMatters = allFrontMatters(workMdxes)

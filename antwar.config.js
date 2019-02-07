const path = require('path')
const _ = require('lodash')
const {workMdxes} = require('./data')

const workPaths = workMdxes.reduce((acc, module) => {
  acc[`work/${module.name}`] = () => workMdxPage(`${module.name}.mdx`)
  return acc
}, {})

module.exports = {
  apiUrl: '',
  template: {
    file: path.resolve(__dirname, 'templates/page.ejs'),
    context: {
      helmet: {},
    },
  },
  renderPage: require('./utils/render-page'),
  output: 'build',
  layout: () => require('./layouts').default,
  paths: Object.assign({}, workPaths, {
    '/': () => require('./pages/frontpage').default,
    about: () => require('./pages/about').default,
  }),
}

function cleanBlogPath(resourcePath) {
  const parts = resourcePath.split('/')
  const beginning = parts.slice(0, -1)
  const end = _.trimStart(parts.slice(-1)[0], '0123456789-_')

  return beginning
    .concat(end)
    .join('/')
    .toLowerCase()
    .replace(/ /g, '-')
    .replace(/_/g, '-')
}

/*
 * We need this since antwar requires the module.exports
 * to be the React component. We apply the necessary
 * extra info, like frontMatter, to the actual Component
 * as a workaround. This object will be consumed by Antwar
 * and by our registered layout.
 */
function mdxPage(page) {
  const ret = page.default
  const frontMatter = page.frontMatter

  ret.meta = page.meta || {title: frontMatter.title}
  ret.frontMatter = frontMatter
  return ret
}

function workMdxPage(name) {
  const page = require(`./pages/work/${name}`)
  return mdxPage(page)
}

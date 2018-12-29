const path = require('path')
const page = require('./utils/page')
const _ = require('lodash')

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
  paths: {
    '/': () => require('./pages/frontpage').default,
    'work/aigner': () => mdxPage(require('./pages/work/aigner.mdx')),
    'work/run-wild': () => mdxPage(require('./pages/work/run-wild.mdx')),
    'work/runtastic-webconcept': () => mdxPage(require('./pages/work/runtastic-webconcept.mdx')),
    'work/tictactoe': () => mdxPage(require('./pages/work/tictactoe.mdx')),
  },
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

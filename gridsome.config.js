// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'Marketing Scaffold',
  siteDescription: 'A marketing site scaffold that uses Gridsome, GraphQL, TailwindCSS, and Forestry.io',
  plugins: [{
    use: 'gridsome-plugin-tailwindcss'
  }, {
    use: 'gridsome-plugin-svg'
  }, {
    use: 'gridsome-plugin-base-components'
  }, {
    use: '@gridsome/source-filesystem',
    options: {
      typeName: 'Job',
      path: './src/content/careers/**/*.md'
    }
  }],
  templates: {
    Job: '/careers/:slug'
  },
  chainWebpack: config => {
    const svgRule = config.module.rule('svg')
    svgRule.uses.clear()
    svgRule
      .use('vue-svg-loader')
      .loader('vue-svg-loader')
  }
}

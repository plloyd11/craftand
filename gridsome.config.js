// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'Marketing Scaffold',
  siteDescription: 'A marketing site scaffold that uses Gridsome, GraphQL, TailwindCSS, and Forestry.io',
  plugins: [{
    use: 'gridsome-plugin-tailwindcss'
  },
  {
    use: 'gridsome-plugin-svg'
  },
  {
    use: 'gridsome-plugin-base-components'
  },
  {
    use: '@gridsome/source-filesystem',
    options: {
      typeName: 'Job',
      path: './src/content/careers/**/*.md'
    }
  },
  {
    use: '@gridsome/source-filesystem',
    options: {
      typeName: 'Employees',
      path: './src/data/**/*.json'
    }
  }
  ],
  templates: {
    Job: '/careers/:slug'
  },
  transformers: {
    remark: {
      plugins: [
        ['@noxify/gridsome-remark-classes', {
          'heading[depth=1]': 'title',
          'heading[depth=2]': 'subtitle',
          paragraph: 'body-text',
          a: 'body-link'
        }]
      ]
    }
  },
  chainWebpack: config => {
    const svgRule = config.module.rule('svg')
    svgRule.uses.clear()
    svgRule
      .use('vue-svg-loader')
      .loader('vue-svg-loader')
  }
}

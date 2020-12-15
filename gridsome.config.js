const tailwindcss = require('tailwindcss')

module.exports = {
  siteName: 'Craft & Commerce',
  siteUrl: 'https://www.craftand.com/',
  siteDescription:
    'Craft &amp; Commerce is a hands-on team of digital media specialists dedicated to achieving better results, for things that matter.',
  plugins: [
    {
      use: '@gridsome/plugin-google-analytics',
      options: {
        id: 'UA-66544710-1'
      }
    },
    {
      use: 'gridsome-plugin-svg'
    },
    {
      use: 'gridsome-plugin-base-components'
    },
    {
      use: 'gridsome-plugin-robots-txt',
      options: {
        policy: [
          {
            userAgent: '*',
            allow: '/',
            crawlDelay: 10
          }
        ]
      }
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
        typeName: 'CaseStudy',
        path: './src/content/case-studies/**/*.json'
      }
    },
    {
      use: '@gridsome/source-filesystem',
      options: {
        typeName: 'TeamMembers',
        path: './src/content/team/team.json'
      }
    }
  ],
  templates: {
    CaseStudy: '/case-studies/:slug',
    Job: '/careers/:slug'
  },
  css: {
    loaderOptions: {
      postcss: {
        plugins: [tailwindcss]
      }
    }
  },
  transformers: {
    remark: {
      plugins: [
        [
          '@noxify/gridsome-remark-classes',
          {
            'heading[depth=1]': 'title',
            'heading[depth=2]': 'subtitle',
            paragraph: 'body-text',
            a: 'body-link'
          }
        ]
      ]
    }
  },
  chainWebpack: (config) => {
    const svgRule = config.module.rule('svg')
    svgRule.uses.clear()
    svgRule.use('vue-svg-loader').loader('vue-svg-loader')
    config.resolve.alias.set('@img', '@/assets/img')
  }
}

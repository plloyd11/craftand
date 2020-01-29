// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

// Import global CSS file
// It's recommended to keep the global styles at minimal and add styles in
// Vue components instead to get proper code-splitting and Critical CSS support.
import '~/assets/css/global.css'

import DefaultLayout from '~/layouts/Default'

export default function (Vue, { router, head, isClient }) {
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout)

  head.htmlAttrs = {
    lang: 'en_US'
  }

  // Load custom fonts
  head.link.push({
    rel: 'stylesheet',
    href: 'https://use.typekit.net/iyb1djz.css'
  })

  head.bodyAttrs = {
    class: 'antialiased text-gray-900'
  }
}

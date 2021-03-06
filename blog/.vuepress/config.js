module.exports = {
  title: 'Hexch\'s blog',
  description: 'This is a blog writing by Hexch',
  base: "/blog/",
  dest: "docs/",
  theme: '@vuepress/theme-blog',
  themeConfig: {
    dateFormat: 'YYYY.MM.DD',
    /**
     * Ref: https://vuepress-theme-blog.ulivz.com/#modifyblogpluginoptions
     */
    modifyBlogPluginOptions(blogPluginOptions) {
      return blogPluginOptions
    },
    /**
     * Ref: https://vuepress-theme-blog.ulivz.com/#nav
     */
    nav: [
      {
        text: 'Blog',
        link: '/',
      },
      {
        text: 'Tags',
        link: '/tag/',
      },
    ],
    /**
     * Ref: https://vuepress-theme-blog.ulivz.com/#footer
     */
    footer: {
      contact: [
        {
          type: 'github',
          link: 'https://github.com/hexch',
        },
        // {
        //   type: 'twitter',
        //   link: 'https://twitter.com/_ulivz',
        // },
      ],
      copyright: [
        {
          text: 'Copyright © 2018-present Hexch',
          link:'',
        },
        // {
        //   text: 'Privacy Policy',
        //   link: 'https://policies.google.com/privacy?hl=en-US',
        // },
        // {
        //   text: 'MIT Licensed | Copyright © 2018-present Vue.js',
        //   link: '',
        // },
      ],
    },
  },
  plugins: [
    require('./plugins/firebase'),
  ],
  head: [
    ['script', { src: "https://www.gstatic.com/firebasejs/7.15.4/firebase-app.js" }],
    ['script', { src: "https://www.gstatic.com/firebasejs/7.15.4/firebase-analytics.js" }]
  ],
}

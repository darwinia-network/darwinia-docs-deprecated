/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

// List of projects/orgs using your project for the users page.
/* 
const users = [{
  caption: 'User1',
  // You will need to prepend the image path with your baseUrl
  // if it is not '/', like: '/test-site/img/image.jpg'.
  image: '/img/undraw_open_source.svg',
  infoLink: 'https://www.facebook.com',
  pinned: true,
}, ]; 
*/

const siteConfig = {
  title: 'Darwinia Documentation', // Title for your website.
  tagline: 'Cross-chain App Hub and Internet of Tokens',
  url: 'https://docs.darwinia.network',
  baseUrl: '/docs/', // Base URL for your project, /
  editUrl: 'https://github.com/darwinia-network/docs/edit/master/content/en/', //https://github.com/darwinia/docs/edit/master/docs/
  repoUrl: 'https://github.com/darwinia-network/darwinia',

  customDocsPath: 'content/en',

  // Used for publishing and more
  projectName: 'docs', //docs
  organizationName: 'darwinia-network', //darwinia
  // cname: 'docs.darwinia.network',

  // For top-level user or org sites, the organization is still the same.
  // e.g., for the https://JoelMarcey.github.io site, it would be set like...
  //   organizationName: 'JoelMarcey'

  // For no header links in the top nav bar -> headerLinks: [],
  headerLinks: [
    { blog: true, label: 'Blog' },
    { doc: 'wiki-home', label: 'Wiki' },
    { doc: 'crab-home', label: 'Crab Network' },
    { doc: 'dev-home', label: 'Developers' },
    // { doc: 'doc4', label: 'API' },
    // { page: 'help', label: 'Help' },
    { languages: true },
  ],

  disableHeaderTitle: true,
  disableTitleTagline: false,

  // If you have users set above, you add it here:
  // users,

  /* path to images for header/footer */
  headerIcon: 'img/logo.png',
  footerIcon: 'img/logo.png',
  favicon: 'img/favicon.ico',

  /* Colors for website */
  colors: {
    primaryColor: '#3a30dd', //'#5a66a3',
    secondaryColor: '#fe3876', //'#3e4772',
  },

  /* Custom fonts for website */
  /*
  fonts: {
    myFont: [
      "Times New Roman",
      "Serif"
    ],
    myOtherFont: [
      "-apple-system",
      "system-ui"
    ]
  },
  */

  // Blogs
  blogSidebarCount: '10',
  blogSidebarTitle: { default: 'Recent posts', all: 'All blog posts' },

  // This copyright info is used in /core/Footer.js and blog RSS/Atom feeds.
  copyright: `Copyright © ${new Date().getFullYear()} Darwinia Network`,

  highlight: {
    // Highlight.js theme to use for syntax highlighting in code blocks.
    theme: 'default',
  },

  // Add custom scripts here that would be placed in <script> tags.
  scripts: ['https://buttons.github.io/buttons.js'],

  // On page navigation for the current documentation page.
  onPageNav: 'separate',
  // No .html extensions for paths.
  cleanUrl: true,
  scrollToTop: true,
  scrollToTopOptions: {
    zIndex: 100,
  },

  // Open Graph and Twitter card images.
  ogImage: 'img/undraw_online.svg',
  twitter: true,
  twitterUsername: "DarwiniaNetwork",
  twitterImage: 'img/undraw_tweetstorm.svg',

  fonts: {
    myFont: [
      'Rajdhani', 'Rajdhani-Regular', 'Rajdhani-SemiBold',
      "-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif"
      // 'Rajdhani', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', 'sans-serif'
    ]
  },



  // For sites with a sizable amount of content, set collapsible to true.
  // Expand/collapse the links and subcategories under categories.
  docsSideNavCollapsible: true,

  // Show documentation's last contributor's name.
  // enableUpdateBy: true,

  // Show documentation's last update time.
  enableUpdateTime: true,

  gaTrackingId: 'UA-159909608-2',

  // You may provide arbitrary config keys to be used as needed by your
  // template. For example, if you need your repo's URL...
  //   repoUrl: 'https://github.com/facebook/test-site',
};

module.exports = siteConfig;
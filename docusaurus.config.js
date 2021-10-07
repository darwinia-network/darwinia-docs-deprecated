const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

// With JSDoc @type annotations, IDEs can provide config autocompletion
/** @type {import('@docusaurus/types').DocusaurusConfig} */
(module.exports = {
  title: 'Darwinia Documentation',
  tagline: 'Cross-chain App Hub and Internet of Tokens',
  url: 'https://docs.darwinia.network',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'darwinia-network', // Usually your GitHub org/user name.
  projectName: 'docs', // Usually your repo name.

  presets: [
    [
      '@docusaurus/preset-classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/darwinia-network/docs/edit/master/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'Darwinia Network',
        logo: {
          alt: 'Darwinia Logo',
          src: 'img/favicon.ico',
        },
        items: [
          {
            href: 'https://github.com/darwinia-network/docs',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Community',
            items: [
              {
                label: 'Medium',
                href: 'https://darwinianetwork.medium.com/',
              },
              {
                label: 'Github',
                href: 'https://github.com/darwinia-network',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/DarwiniaNetwork',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Official Website',
                href: 'https://darwinia.network/',
              },
              {
                label: 'Darwinia Wallet Apps',
                href: 'https://apps.darwinia.network/',
              }
            ],
          },
        ],
        logo: {
          alt: 'Darwinia Logo',
          src: 'img/logo.png',
        },
        copyright: `Copyright © ${new Date().getFullYear()} Darwinia Network. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      algolia: {
        apiKey: '3acc2ef550d1b049b83fce041599348b',
        indexName: 'darwinia',
        searchParameters: { facetFilters: ["language:LANGUAGE"] } // Optional, if provided by Algolia
      },
      googleAnalytics: {
        trackingID: 'UA-159909608-2',
        anonymizeIP: true,
      },
    }),
});

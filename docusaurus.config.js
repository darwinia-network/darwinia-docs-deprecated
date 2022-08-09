// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Darwinia docs',
  tagline: 'Dinosaurs are cool',
  url: 'https://docs.darwinia.network',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.svg',
  organizationName: 'darwinia-network', // Usually your GitHub org/user name.
  projectName: 'darwinia-docs', // Usually your repo name.

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          breadcrumbs: true,
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/darwinia-network/darwinia-docs/blob/main',
          routeBasePath: '/',
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
      hideableSidebar: false,
      navbar: {
        hideOnScroll: false,
        title: 'DARWINIA',
        logo: {
          alt: 'Darwinia',
          src: 'img/favicon.svg',
        }
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Community',
            items: [
              {
                label: 'Medium',
                href: 'https://medium.com/darwinianetwork',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/DarwiniaNetwork',
              }
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Crab network',
                href: 'https://crab.network/',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/darwinia-network',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Darwinia. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;

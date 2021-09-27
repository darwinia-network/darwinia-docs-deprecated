/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');

const shareEmail =    '/img/share/share-email.png';
const shareGithub =   '/img/share/share-github.png';
const shareMedia =    '/img/share/share-medium.png';
const shareTwitter =  '/img/share/share-twitter.png';
const shareTelegram = '/img/share/share-telegram.png';
const shareDiscord =  '/img/share/share-discord.png';
const shareElement =  '/img/share/share-element.svg';
const shareYoutube =  '/img/share/share-youtube.svg';

class Footer extends React.Component {
    docUrl(doc, language) {
        const baseUrl = this.props.config.baseUrl;
        const docsUrl = this.props.config.docsUrl;
        const docsPart = `${docsUrl ? `${docsUrl}/` : ''}`;
    const langPart = `${language ? `${language}/` : ''}`;
    return `${baseUrl}${docsPart}${langPart}${doc}`;
  }

  pageUrl(doc, language) {
    const baseUrl = this.props.config.baseUrl;
    return baseUrl + (language ? `${language}/` : '') + doc;
  }

  render() {
    return (
      <footer className="nav-footer" id="footer">
        <section className="sitemap">
          {/* <a href={this.props.config.baseUrl} className="nav-home">
            {this.props.config.footerIcon && (
              <img
                src={this.props.config.baseUrl + this.props.config.footerIcon}
                alt={this.props.config.title}
                width="66"
                height="58"
              />
            )}
          </a> */}
          <div>
            <h5>Links</h5>
            <a href="/blog">
              Blog
            </a>
            <a href="https://darwinia.network">
              Official Website
            </a>
            <a href="https://apps.darwinia.network">
              Darwinia Wallet Apps
            </a>
          </div>

          <div></div>
          {/* <div>
            <h5>Community</h5>
            <a href={this.pageUrl('users.html', this.props.language)}>
              User Showcase
            </a>
            <a
              href="https://stackoverflow.com/questions/tagged/"
              target="_blank"
              rel="noreferrer noopener">
              Stack Overflow
            </a>
            <a href="https://discordapp.com/">Project Chat</a>
            <a
              href="https://twitter.com/"
              target="_blank"
              rel="noreferrer noopener">
              Twitter
            </a>
          </div> */}
          
          <div>
            <a href={this.props.config.baseUrl} className="nav-home">
              {this.props.config.footerIcon && (
                <img
                  src={this.props.config.baseUrl + this.props.config.footerIcon}
                  alt={this.props.config.title} 
                  width="160"
                />
              )}
            </a>
            <div className="share-links">
              <div>
                <a href="mailto:hello@darwinia.network" target="_blank" rel='noopener noreferrer'>
                  <img alt='...' src={shareEmail} />
                </a>
                <a href="https://github.com/darwinia-network" target="_blank" rel='noopener noreferrer'>
                  <img alt='...' src={shareGithub} />
                </a>
                <a href="https://darwinianetwork.medium.com/" target="_blank" rel='noopener noreferrer'>
                  <img alt='...' src={shareMedia} />
                </a>
                <a href="https://twitter.com/DarwiniaNetwork" target="_blank" rel='noopener noreferrer'>
                  <img alt='...' src={shareTwitter} />
                </a>
              </div>
              <div>
                <a href="https://t.me/DarwiniaNetwork" target="_blank" rel='noopener noreferrer'>
                  <img alt='...' src={shareTelegram} />
                </a>
                <a href="https://discord.com/channels/456092011347443723/795384466930663434" target="_blank" rel='noopener noreferrer'>
                  <img alt='...' src={shareDiscord} />
                </a>
                <a href="https://app.element.io/#/room/#darwinia:matrix.org" target="_blank">
                  <img alt='...' src={shareElement} />
                </a>
                <a href="https://www.youtube.com/channel/UCgtFX6DJn66fM7rPp99fOGg/featured" target="_blank" rel='noopener noreferrer'>
                  <img alt='...' src={shareYoutube} />
                </a>
              </div>
            </div>
          
            
            {this.props.config.twitterUsername && (
              <div className="social">
                <a
                  href={`https://twitter.com/${this.props.config.twitterUsername}`}
                  className="twitter-follow-button">
                  Follow @{this.props.config.twitterUsername}
                </a>
              </div>
            )}
            {this.props.config.facebookAppId && (
              <div className="social">
                <div
                  className="fb-like"
                  data-href={this.props.config.url}
                  data-colorscheme="dark"
                  data-layout="standard"
                  data-share="true"
                  data-width="225"
                  data-show-faces="false"
                />
              </div>
            )}

            <a
              className="github-button"
              href={this.props.config.repoUrl}
              data-icon="octicon-star"
              data-count-href="/facebook/docusaurus/stargazers"
              data-show-count="true"
              data-count-aria-label="# stargazers on GitHub"
              aria-label="Star this project on GitHub">
              Star
            </a>
          </div>
        </section>

        {/* <a
          href="https://opensource.facebook.com/"
          target="_blank"
          rel="noreferrer noopener"
          className="fbOpenSource">
          <img
            src={`${this.props.config.baseUrl}img/oss_logo.png`}
            alt="Facebook Open Source"
            width="170"
            height="45"
          />
        </a> */}
        <section className="copyright">{this.props.config.copyright}</section>
      </footer>
    );
  }
}

module.exports = Footer;
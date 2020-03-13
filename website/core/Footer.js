/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');

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
            <h5>Docs</h5>
            <a href={this.docUrl('doc1.html', this.props.language)}>
              Getting Started (or other categories)
            </a>
            <a href={this.docUrl('doc2.html', this.props.language)}>
              Guides (or other categories)
            </a>
            <a href={this.docUrl('doc3.html', this.props.language)}>
              API Reference (or other categories)
            </a>
          </div>
          <div>
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
          </div>
          
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
                <a href="https://medium.com/@DarwiniaNetwork" target="_blank">
                  <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADgAAAA4BAMAAABaqCYtAAAAJFBMVEVHcEx7cK97cK98bbZ7ca57ca97ca98cK97ca97cK57ca97cK5wzXcXAAAAC3RSTlMA6c8Mn1yPbyW6RucScUEAAAExSURBVDjL7ZShb8JQEMZfgG60iqVbQlJDgqxhODKDmJvBz5CQYDB4TBNkzTxmHlUGpI/753jfvZUWesUQHKeu3y/Xu/e9axVdCfWAN0P9iQj/pfyB4VYh1pZp5PVV/to5hJqFO+SDQs8DBMdCH4VhASYRlIDzsUnds2m7KF1wGuUdVKHR+2keAT6dMgE2s3kuoQftC/Msy9AZGS3GPBMBduwJdN0XIHzwkPwJkI8Qku9KkA//TeNYhEO2IZqJMDXis1aBCPfw/s0hESY9o85dGdobjysguzqrgGx+UAE31iMZ0i+7W4Yp7rLD91KGI+McdnAhwD3viMY81Lrcvh8jmB2PvGxLC3u7gTl9omGDqM2fRj+HKa9XQOmHLcxKGb7yh2WariiZ2ggf/6E7w5crcQRAZIKOcJdRHwAAAABJRU5ErkJggg==" />
                </a>
                <a href="https://t.me/DarwiniaNetwork" target="_blank">
                  <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADgAAAA4BAMAAABaqCYtAAAAIVBMVEVHcEx7cK95cK97cK57cK57cK98cK97cK97cK57cK97cK6mrj9uAAAACnRSTlMAhw7iKK5Iye5eWDkJwgAAAR1JREFUOMvt1b9rwkAUB/Bvok3rJtR2uCkZiq2b0EGcshU6FQcHp4Bbx9JFN0E6ZAod3UIIhvdXej+C7em7m9zaN+TgPtzdy0vuDuEtOWIcY0jO+IBwY4mpGyuQJ/7x4jh/cmI1QOjCOoMTxymAiMc5VAQcyuWAlxRXDNaFtOQL6JzjRi83kQmNznClVgvFVj7fT7AZ6FSWlRoubNwX2hJ6Vs3CwjLVFk33sWpzC42FC7kDZHTtwptJl2QGRjZW97LvgWhmFeiY7Sbr5VRrOxbo5z2bNdGbwRvuY5fG8MphOxA7DvstCg6LFtc+zDnMcBf/LpCFaaDr3uNR6KkDFhP1q8S4ZlFn+YlH93ZovsXfOxO8h7H3GPdeAL6r4wA5SoNsrYNlIwAAAABJRU5ErkJggg==" />
                </a>
                <a href="https://twitter.com/DarwiniaNetwork" target="_blank">
                  <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADgAAAA4BAMAAABaqCYtAAAAJFBMVEVHcEx7cK56bbB7cK57cK57cK97cK97b697cK57cK97cK97cK6/O/qOAAAAC3RSTlMA8AngmXxTGcgxrQuz9RgAAAHNSURBVDjLjVW7S8NAGD+LbY1TkZaCWSKIoG6C9dFFpBW0SwU3l6AgYpeqILgp4tTFB04uRUGETiFGkt4/5+Xu+y53uTT4m5L73fd+HCESy0cPtrfZfiImChc25fC+DK58SCXW+yk5haO05mjkKdXQULlFmsKuYnCQJsPE7Cs1sIGcZZukj6LXlE4ULQyyyFCEM00zscPJXjb5y7U2s0k/1lukE9Bl5KV+NN9CTXVGHutZdYg1oLU48oCZ5BmIbCWA4t4SGC3xw+GzINdE6OLPJbPCuNWEf57PNg9vSBbAsxXeIo6a7Qp5x3TE9R5rZYrA2Tt2ck7pj1amgHTgEsPbPUgKJ9lVUZJQnN5qZEiEl98faktBRn0i1LtXKglF9IhaPMQM5BLIOY1cRUkbHFPRQ7KZFE9ihA5Bd42V4Sljj0ESaHXfiITZglpHilbsjQASj23KAcqYwBR8JSkqYctUoNjMNTetlRVb3vNhJsuyj11oMGXW5VjFbQHuPgJXkvMYgInx2QsmoCNbuI4hNxxz43TlIFVPYu5mlBokrMF26+DTGMH84c0d+9yFoeQkgSc3a4bo1v/WW+5izF+p+ctYS2qtn/MAOBnvg2U8HX8bGacuzEIM4QAAAABJRU5ErkJggg==" />
                </a>
                <a href="https://github.com/darwinia-network" target="_blank">
                  <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADgAAAA4BAMAAABaqCYtAAAAKlBMVEVHcEx7cK57cK57cK58bq57cK57cK5/a7F7cK97cK57cK98cbB7cK97cK5qBv59AAAADXRSTlMA9OK4FZ5zCUXNXSmEsKrC2AAAAglJREFUOMt1lLtLxEAQxhfNmXvYiIXIIQiCjQbEwsqDu1JEsFIbQTxULAQFFTwsTtFCULAQ5JSD66wEBRsLwUpsLJJ7cA/3f3F2ZpPsbuIUybK/7O7MN9+GsSAyW7NDQxMrLywmLh2O4a1FkL3Jg5jcN6DCgOrsnWvxqLIBbsSGcmDOhPXw2AUeiTufWdUo7OQlPOExcS/hehxsEkvD0B2L0BrCVxg1Mrvh9PTFBzyzCEUdt4xd+Rs8MNYnqhEsKT5ehkHx+42xxet5KDEh5sowlxKDT13NQU67sRtDrkDOtjwydiUcmsEEZ3TYj5MvsiHjOkzJ1tC7rEOsADJaUrQKAxVtULI9ExYo3Z+YfKQKv7TBhgnTdFiVkjbCwoYztHI+4mPRAQ+fPOp/scZl/H/IaWX8ti7BSEI2R+iEfjH186hjyyaUPUMRRkzYRyLsiVfLhM80i8K7RrqWQ8IfxDkBdYfD+nlMQ3/kijS5fFVlR/6FsOmWeIpRkvRfcfeFI5qHsE3nyWclec9/YfwBq5Kw3J3DlK2if+F6lFkL65L/geD/IIxuwZe1RHDn7IJkVDtoNG5XA4ETEnZ977fZqTNaVg3t6wJa1U1vQW1S0TPtltkEs6FJm4ryXL89UMjw17YGu6G/NX9iHYpxzk04pWaY02Fda37aUaFnuPHYCaG3Y1qqVPFHlaB5f4TVPVm1Z2ZDAAAAAElFTkSuQmCC" />
                </a>
              </div>
              <div>
                <a href="https://bihu.com/people/1100617" target="_blank">
                  <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADgAAAA4BAMAAABaqCYtAAAAJ1BMVEVHcEx7cK56cq97cK97cK97cK97ca57cK57cK58cK97cK57cK97cK75Og5xAAAADHRSTlMA7g+TrSJnethIxTKkC5eQAAABvElEQVQ4y5WVv0tCURTHD2aWOUVUBG+IGsImESIIl8gmHYTaaqihWhqkGhuiJYI3SEM0NAehg0VtLaLpy+4f1T3X++O8e98V+i763sf3zo97zlcAqtXZu2XwaCpgrOlh2ZBxFRNZroWMdY4SWKrERhq2XXjMlLpOUk/MaMFi+4zqNV4gi2uXsExgwU7dLoIqakg2WWWuerURLLEkLQmWTmSsI3rxbAJtnl6Z1G4R6ohzGCangwwQBvEUdHpDvFK/VKeRUUEI/NFln8uMCMQH82cnOBAO7PFve7LnVRvO8zERqRUADm1YUAV3ASZsWIOUrKkBWQtGOg92I0s3kL9sWsJfgBUhDQcqDdk2JXGnD/Clhu9/cOxr4wkdvPPT+fSVwqPMkCa0IRWaJliQt+9NhUzb8JtPiHi0jnlbEI9sjbetwj9bNsQnIPf4AOJQonJ5m8K+ru1a3qEDpnZnghEYxtfdbBWI8GpwcbPyesYjMol4vDuXW2YdxAGsJy8SjhzvcGvMlrlLL9iFxy5QGx6jQTU9FoW695gbatFji4nmR/wmwTazoe1P4HoccTbXHYsek8dyK75/B/gIXujlHztymte5NqsQAAAAAElFTkSuQmCC" />
                </a>
                <a href="https://weibo.com/DarwiniaNetwork" target="_blank">
                  <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADgAAAA4BAMAAABaqCYtAAAAJFBMVEV7cK5HcEx7cK57cK17cK97cK97cK97cK57cK57cK97ca97cK6hJEZ6AAAADHRSTlP/AOYQxHoqZ6Y/UZKe82coAAACIUlEQVQ4y41VvW/TUBC/Oi5NYfrxkpC0i0MoArE0FahUXXAkvtSFAAHERPioBCxEUCTEElhYCUggxFIzdcRC4u/j7n3Ez5FtcYNl3+/u3t3v7p0J2B5QgZx5DRDWIiqUIGHwFpXIMmiNSiWhrXKwR6/KwRW6Ug6GFJWDQYHu3OjgY5n9CbC8LAFrAuJyMbiqQRRXEYwGN5jXcnKCO4uu15/szIsOx2j42F8+SCvC+w8i6qHjYTclC61YAnYpBKJ8dVA6XQVMaYbfXme1mK86NinNMjprsJaQd5do2KAYh85xbMBOcI+fnylep+4ctI5AXx5N6growo7hS4viNoe1w3U8h3HOq49pyBlrGeZBXe3M1hka3fOD0Tsdvy3KScs4HhPNtu5+8KlvSdx4k0XddWRt8MdPrz9s3IzmA3WN0ac+rYozu/AVO1NLiJr3jo+8yHxK/br9Mb88cmAX0oBUZ3xoh2jdgR+E78CU07DdO+XAVOxWhLZEK+vwxisV+xpU/+SSJqfue8YCdtU0vDSRA3SQdpYQg9xBmphwMvJb2Yg32YINEpNl6s97CBVRranP2uRPLlhlk5ew4TK+zwwzPTe/9u5L3ImU+cU4uj5b5n9R8BY4ImOUu3/noW4TnY7MDUInvwr+QB2JZk9muzVduHJyi/Z/6MFcxFiuuul8Vrhe9h5+23/xfkD/LZVLqnK9VS7GypVauYwr13j1D6Di1/EPT15bwQ40s+UAAAAASUVORK5CYII=" />
                </a>
                <a href="#" target="_blank">
                  <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADgAAAA4BAMAAABaqCYtAAAAJ1BMVEVHcEx7cK57cK97cK56cbB7cK57cK97cK97cK57cK57cK97cK57cK5LMTsCAAAADHRSTlMA32q3EDaNTe/LoSSkSkY9AAAByUlEQVQ4y32VO0/DMBCAr6UvqQsIUIXIUCEQSwcojB1SsSGGwIDKY0CwQNWhA0OLWFCRkCADFLF1KEIMoA4ZWaOqJS3+UZxjO3GeN1zsfPH5fHc5A0Byk4TI/CqgZBUSKlYRYYlEyBgXkkgpQjUaPkVbpXYr0dAEJRoScEZLWy9RsKvhqdJXofATmByHwDcQchSAY3Cl4YdFCSZ9UF7oiTWFG/gqZQOqMx5oGQD53jI1qeN3KUWG1OoMmaLeI7+ob2X454MJGT6DMJvV+55NEZ55nD2of8hQPmX+cnK+vvLuwqbLUo2uSp+HegjcL/DBbtBsuqOKYSvg0E/f3VxhcNZ58yq5VmNw5CTk3pcdhEMxT+DuyTusl9YDznosK8LdGrqTozmqmCzEFC5wWLdjh8tLNBc5Bif8AGWqTuiRDDsXrEy2GSx4gpzh0DTs6WIotLPmXynM8iCVPTAhoAY3aypceOAphxa0Uc3pqgwHHE7bRLLOMyQq3uKZH0mw6vk/6ZEkuxU/dAIJsEMC0NREMfWCkEwN150AJI/XFDVZH4FgR/z+IhNtEA5tGZZiIK/42CYV295iG2NsS41txrFtPP4CiLg6Onh1/AOW8A5j2jJ12wAAAABJRU5ErkJggg==" />
                </a>
                <a href="mailto:hello@darwinia.network" target="_blank">
                  <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADgAAAA4BAMAAABaqCYtAAAAJ1BMVEVHcEx7cK96cK97cK57cK56b697cK57cK57cK98cLB8ca97cK97cK7X/FnnAAAADHRSTlMAcmbD4BTzooYoQlTd6cQGAAABcElEQVQ4y83VP0+DUBAA8GubhkKXOpg4dPADdCyDkc04kDBgSvwAJg41DLgzkLg6OBhnJ1ydOrmY9wLV3ofyoIX3R3ir3kKbH+X13bs7AOBqiR1xcQwUgxg7o5gRptgTJf0Qe2MG1/14C/N+/ASvHxkE/cgBDfF3yI7UOPEk3IIWjwI5JqpZGLToeiyUbeyxVYuZhb6MESaTFk8hLV6F2cEWhhIO8EZgTicpI3xg1tgQd6CiE5ftNqolFIRndJtt+KCjHfCn/Tbqq4qwwjsQT9DQjuu1gyLsQKomSvGGKqcLKZ3nb1XldOAUOTVGsdx/0zBnIVW/D5vv32jHbn0DOHWaVYw4/Uv7nT4t1jqOvXWTvkmVBQVH0pmllxqmO3FkI1pBxslhr4cqcRVcKPUXMRkdtfzsOBGYvTC1NPNSFNhZ4Ko4xYcWCx5qFT+X2uFLbwdLQn5vaKT/1PbGIWUcb8bBaBypxmFsHOPmF4Dh1fEDXvxFF7KNXsoAAAAASUVORK5CYII=" />
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

        <a
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
        </a>
        <section className="copyright">{this.props.config.copyright}</section>
      </footer>
    );
  }
}

module.exports = Footer;
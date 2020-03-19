/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');

const CompLibrary = require('../../core/CompLibrary.js');

const MarkdownBlock = CompLibrary.MarkdownBlock; /* Used to read markdown */
const Container = CompLibrary.Container;
const GridBlock = CompLibrary.GridBlock;

const translate = require('../../server/translate.js').translate;

class HomeSplash extends React.Component {
    render() {
        const { siteConfig, language = '' } = this.props;
        const { baseUrl, docsUrl } = siteConfig;
        const docsPart = `${docsUrl ? `${docsUrl}/` : ''}`;
    const langPart = `${language ? `${language}/` : ''}`;
    const docUrl = doc => `${baseUrl}${docsPart}${langPart}${doc}`;
    const blogUrl = `${baseUrl}blog`;

    const SplashContainer = props => (
      <div className="homeContainer">
        <div className="homeSplashFade">
          <div className="wrapper homeWrapper">{props.children}</div>
        </div>
      </div>
    );

    const Logo = props => (
      <div className="projectLogo">
        <img src={props.img_src} alt="Project Logo" />
      </div>
    );

    const ProjectTitle = props => (
      <h2 className="projectTitle">
        <translate desc="">home_title</translate>
        <small><translate desc="">home_tagline</translate></small>
        <small><translate desc="">darwin-intro-text</translate></small>
      </h2>
    );

    const PromoSection = props => (
      <div className="section promoSection">
        <div className="promoRow">
          <div className="pluginRowBlock">{props.children}</div>
        </div>
      </div>
    );

    const Button = props => (
      <div className="pluginWrapper buttonWrapper">
        <a className="button" href={props.href} target={props.target}>
          {props.children}
        </a>
      </div>
    );

    return (
      <SplashContainer>
        {/* <Logo img_src={`${baseUrl}img/undraw_monitor.svg`} /> */}
        <div className="inner">
          <ProjectTitle tagline={siteConfig.tagline} title={siteConfig.title} />
          <PromoSection>
            <Button href={blogUrl}><translate desc="">latest_update</translate></Button>
            <Button href={docUrl('wiki-home')}><translate desc="">knowledge_base</translate></Button>
          </PromoSection>
        </div>
      </SplashContainer>
    );
  }
}

class Index extends React.Component {
  render() {
    const {config: siteConfig, language = ''} = this.props;
    const {baseUrl} = siteConfig;
    // console.log(this.props);

    const Block = props => (
      <Container
        padding={['bottom']}
        id={props.id}
        background={props.background}
        className={props.className}>
        <GridBlock
          align="center"
          contents={props.children}
          layout={props.layout}
        />
      </Container>
    );

    /*
    const FeatureCallout = () => (
      <div
        className="productShowcaseSection paddingBottom"
        style={{textAlign: 'center'}}>
        <h2>Feature Callout</h2>
        <MarkdownBlock>These are features of this project</MarkdownBlock>
      </div>
    );

    const TryOut = () => (
      <Block id="try">
        {[
          {
            content:
              'To make your landing page more attractive, use illustrations! Check out ' +
              '[**unDraw**](https://undraw.co/) which provides you with customizable illustrations which are free to use. ' +
              'The illustrations you see on this page are from unDraw.',
            image: `${baseUrl}img/undraw_code_review.svg`,
            imageAlign: 'left',
            title: 'Wonderful SVG Illustrations',
          },
        ]}
      </Block>
    );

    const Description = () => (
      <Block background="dark">
        {[
          {
            content:
              'This is another description of how this project is useful',
            image: `${baseUrl}img/undraw_note_list.svg`,
            imageAlign: 'right',
            title: 'Description',
          },
        ]}
      </Block>
    );

    const LearnHow = () => (
      <Block background="light">
        {[
          {
            content:
              'Each new Docusaurus project has **randomly-generated** theme colors.',
            image: `${baseUrl}img/undraw_youtube_tutorial.svg`,
            imageAlign: 'right',
            title: 'Randomly Generated Theme Colors',
          },
        ]}
      </Block>
    );
    //*/

    const Features = () => (
      <div
        className="featuresSection paddingBottom"
        style={{textAlign: 'center'}}>
        <h1><translate desc="">feat_title</translate></h1>
        <Block layout="threeColumn" className="featuresContainer">
          {[
            {
              content: <translate desc="">feat1_desc</translate>,
              image: `${baseUrl}img/feature-1.png`,
              imageAlign: 'top',
              title: <translate desc="">feat_1</translate>,
            },
            {
              content: <translate desc="">feat2_desc</translate>,
              image: `${baseUrl}img/feature-2.png`,
              imageAlign: 'top',
              title: <translate desc="">feat2</translate>,
            },
            {
              content: <translate desc="">feat3_desc</translate>,
              image: `${baseUrl}img/feature-3.png`,
              imageAlign: 'top',
              title: <translate desc="">feat3</translate>,
            },
            {
              content: <translate desc="">feat4_desc</translate>,
              image: `${baseUrl}img/feature-4.png`,
              imageAlign: 'top',
              title: <translate desc="">feat4</translate>,
            },
            {
              content: <translate desc="">feat5_desc</translate>,
              image: `${baseUrl}img/feature-5.png`,
              imageAlign: 'top',
              title: <translate desc="">feat5</translate>,
            },
            {
              content: <translate desc="">feat6_desc</translate>,
              image: `${baseUrl}img/feature-6.png`,
              imageAlign: 'top',
              title: <translate desc="">feat6</translate>,
            },
          ]}
        </Block>
      </div>
    );

    const Economics = () => (
      <div
        className="economicsSection paddingBottom"
        style={{textAlign: 'center'}}>
        <h1><translate desc="">eco_title</translate></h1>
      
        <Block layout="threeColumn" className="economicsContrainer">
          {[
            {
              content: <translate desc="">eco1_desc</translate>,
              image: `${baseUrl}img/eco-1.png`,
              imageAlign: 'top',
              title: <translate desc="">eco1</translate>
            },
            {
              content: <translate desc="">eco2_desc</translate>,
              image: `${baseUrl}img/eco-2.png`,
              imageAlign: 'top',
              title: <translate desc="">eco2</translate>
            },
            {
              content: <translate desc="">eco3_desc</translate>,
              image: `${baseUrl}img/eco-3.png`,
              imageAlign: 'top',
              title: <translate desc="">eco3</translate>
            }
          ]}
        </Block>
      </div>
    );

    /*
    const Showcase = () => {
      if ((siteConfig.users || []).length === 0) {
        return null;
      }

      const showcase = siteConfig.users
        .filter(user => user.pinned)
        .map(user => (
          <a href={user.infoLink} key={user.infoLink}>
            <img src={user.image} alt={user.caption} title={user.caption} />
          </a>
        ));

      const pageUrl = page => baseUrl + (language ? `${language}/` : '') + page;

      return (
        <div className="productShowcaseSection paddingBottom">
          <h2>Who is Using This?</h2>
          <p>This project is used by all these people</p>
          <div className="logos">{showcase}</div>
          <div className="more-users">
            <a className="button" href={pageUrl('users.html')}>
              More {siteConfig.title} Users
            </a>
          </div>
        </div>
      );
    };
    //*/

    return (
      <div>
        <HomeSplash siteConfig={siteConfig} language={language} />
        <div className="mainContainer">
          <Features />
          <Economics />
          {/* <FeatureCallout /> */}
          {/* <LearnHow /> */}
          {/* <TryOut /> */}
          {/* <Description /> */}
          {/* <Showcase /> */}
        </div>
      </div>
    );
  }
}

module.exports = Index;
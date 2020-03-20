const React = require('react');

const BlogPost = require('docusaurus/lib/core/BlogPost');
const Container = require('docusaurus/lib/core/Container');
const MetadataBlog = require('docusaurus/lib/core/MetadataBlog');

const MetadataPublicBlog =
  process.env.NODE_ENV === 'development' ?
  MetadataBlog :
  MetadataBlog.filter(item => !item.unlisted);
const Site = require('docusaurus/lib/core/Site.js');
const utils = require('docusaurus/lib/core/utils.js');

class RecentBlogs extends React.Component {
  getPageURL(page) {
    let url = `${this.props.config.baseUrl}blog/`;
    if (page > 0) {
      url += `page${page + 1}/`;
    }
    return url;
  }

  render(){
    const perPage = this.props.perPage || 3;
    const page = this.props.page || 0;

    return (
      
      <Container className="mainContainer postContainer blogContainer homeRecentBlogContrainer">
        <div className="posts gridBlock">
          {MetadataPublicBlog.slice(
            page * perPage,
            (page + 1) * perPage,
          ).map(post => (
            <div 
              className="threeByGridBlock"
              key={
                utils.getPath(post.path, this.props.config.cleanUrl) +
                post.title
              }
            >
              <BlogPost
                post={post}
                content={post.content}
                truncate
                config={this.props.config}
              />
            </div>
          ))}
        </div>
      </Container>
      
    )
  }
}

module.exports = RecentBlogs;
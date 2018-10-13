import React from 'react';
import Helmet from 'react-helmet';
import { withPrefix } from 'gatsby';
import { siteMetadata } from '../../gatsby-config';

const defaultSEO = {
  title: `Lego's Site`,
  description: `Lego's Blog, enjoy and have fun!`,
  image: withPrefix('/avatar.jpg'),
  url: siteMetadata.siteUrl,
}

/* TODO:
 *  refer to https://github.com/Vagr9K/gatsby-advanced-starter/blob/master/src/components/SEO/SEO.jsx
const defaultSchemaOrgJSONLD = {
  "@context": "http://schema.org",
  "@type": "WebSite",
  url: defaultSEO.url,
  name: defaultSEO.title,
}
 */

export const postToSEO = post => ({
  type: 'post',
  ...defaultSEO,
  title : `${post.frontmatter.title} - ${defaultSEO.title}`,
  description: post.excerpt,
  image: withPrefix(post.frontmatter.cover),
  url: `${defaultSEO.url}${post.fields.slug}`,
});

export const postListToSEO = (posts, type='index') => ({
  type,
  ...defaultSEO,
});

export default ({ seo = defaultSEO }) => (
  <Helmet>
    <title>{seo.title}</title>

    <meta name="description" content={seo.description} />
    <meta name="image" content={seo.image}/>

    <meta property="og:url" content={seo.url} />
    { seo.type === 'post' && <meta property="og:type" content="article" /> }
    <meta property="og:title" content={seo.title}/>
    <meta property="og:description" content={seo.description} />
    <meta property="og:image" content={seo.image} />

    <meta name="twitter:title" content={seo.title} />
    <meta name="twitter:description" content={seo.description} />
    <meta name="twitter:image" content={seo.image} />
  </Helmet>
)

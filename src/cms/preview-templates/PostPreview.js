import React from 'react';
import Post from '../../components/Post';


const PostPreview = ({ entry, widgetFor }) => (
  <Post active
    post = {{
      html: widgetFor('body'),
      timeToRead: 'TLDR;',
      excerpt: '',
      frontmatter: {
        title: entry.getIn(['data', 'title']),
        cover: '',
        date: entry.getIn(['data', 'date']),
        category: entry.getIn(['data', 'title']),
        tags:  entry.getIn(['data', 'tags']),
      },
      fields: {
        slug: '/', // TODO
      }
    }}
  />
)

export default PostPreview;

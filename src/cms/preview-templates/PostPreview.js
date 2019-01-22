import React from 'react';
import moment from 'moment';
import Post from '../../components/Post';


const PostPreview = ({ entry, widgetFor }) => (
  <Post active isNetlifyCMS
    post = {{
      html: widgetFor('body'),
      timeToRead: 0,
      excerpt: '',
      frontmatter: {
        title: entry.getIn(['data', 'title']),
        cover: '',
        date: moment(entry.getIn(['data', 'date'])).format("MMM D, YYYY"),
        category: entry.getIn(['data', 'category']),
        tags:  entry.getIn(['data', 'tags']),
      },
      fields: {
        slug: '/', // TODO
      }
    }}
  />
)

export default PostPreview;

import React, { Fragment } from 'react';
import moment from 'moment';

import Post from '../../components/Post';
import typography from '../../layouts/typography';
import '../../layouts/theme.css';



const PostPreview = ({ entry, widgetFor }) => (
  <Fragment>
    <style>{typography.toString()}</style>
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
  </Fragment>
)

export default PostPreview;

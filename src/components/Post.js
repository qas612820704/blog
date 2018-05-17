import React from 'react';
import Link from 'gatsby-link';
import { Button } from 'reactstrap';
import GoCalendar from 'react-icons/lib/go/calendar';
import GoPackage from 'react-icons/lib/go/package';
import GoGitCommit from 'react-icons/lib/go/git-commit';
import GoCommentDiscussion from 'react-icons/lib/go/comment-discussion';
import styled, { css } from 'styled-components';
import Disqus from './Disqus';
import { Hr } from './Components.styled';
import _ from '../variables';

const shrinkedHeight = 650;
const shadowHeight = 0.5 * shrinkedHeight;

const Post = styled.div`
  position: relative;
  max-height: ${shrinkedHeight}px;
  overflow: hidden;

  ${props => props.active && css`
    max-height: initial;
    margin-bottom: 2em;
  `};
`;

const Info = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-top: 1em;
  margin-bottom: 1em;
  padding-left: 1em;
  padding-right: 1em;

  color: ${_.grayDark};
`;

const Pan = styled.div`
  display: flex;
  align-items: center;

  margin-right: 1em;
  margin-bottom: 1em;

  svg {
    font-size: 1.5rem;
    margin-right: 1rem;
  }

  div {
    p {
      line-height: 1.2;
      margin-bottom: 0;
    }
  }
`

const Text = styled.article`
  margin-top: 1em;
  margin-bottom: 2em;
`

const Shadow = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: center;
  position: absolute;
  left: 0;
  bottom: 0;
  height: 30%;
  width: 100%;

  background: linear-gradient(rgba(0,0,0,0) 30%,rgba(0,0,0,0.5));
`;

const ReadMoreBtn = styled(Button)`
  margin: 1em;
  border-radius: 2em !important;

  a {
    color: ${_.white};
    &:hover {
      color: ${_.white};
    }
  }
`;

export default ({ post, active }) => (
  <Post active={active}>
    <h3>
      <GoGitCommit />
      {' '}
      <Link to={post.fields.slug}>
      { post.frontmatter.title }
      </Link>
    </h3>
    <Info>
      <Pan>
        <GoCalendar />
        <div>
          <p><b>Publish on</b> {post.frontmatter.date}</p>
          <p style={{ color: _.secondary }}>{post.timeToRead} min read</p>
        </div>
      </Pan>
      <Pan>
        <GoPackage />
        <div>
          <b>In Category</b>
          <p style={{ color: _.secondary }}>{post.frontmatter.category}</p>
        </div>
      </Pan>
    </Info>
    <Text dangerouslySetInnerHTML={{ __html: post.html }} />
    { active !== true &&
      <Link to={post.fields.slug}>
        <Shadow>
          <ReadMoreBtn color="danger">Read more</ReadMoreBtn>
        </Shadow>
      </Link>
    }
    { active && (
      <div>
        <Hr />
        <h4>
          <GoCommentDiscussion />{' '}Comments
        </h4>
        <Disqus post={post}/>
      </div>
    )}
  </Post>
);

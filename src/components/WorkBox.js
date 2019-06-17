import React from 'react';
import styled from '@emotion/styled';
import { Flex, Box } from '../elements/flex';

const Chip = styled.span`
  font-size: 0.8em;
  padding: 0.3em;
  color: white;
  background: #db6044;
  border-radius: 5px;
`;

const WorkBox = ({
  avatar = '',
  title = '',
  description = '',
  chips = [],
  demoLink = '',
  githubLink = '',
}) => {
  return (
    <Box w={1/2} style={{ marginBottom: '2em', padding: '0 1em' }}>
      <Flex>
        <Box w={1/3}>
          {avatar}
        </Box>
        <Box w={2/3}>
          <h3 style={{ marginTop: 0 }}>{title}</h3>
          <p>{description}</p>
          <p>
            {chips.map(chip =>  (
              <>
                <Chip><code>{chip}</code></Chip>
                <span> </span>
              </>
            ))}
            </p>
            <p>
              { demoLink && (
                <>
                  <a href={demoLink} target='_blank' rel='noopener noreferrer'>demo</a>
                  <span> | </span>
                </>
              )}
              { githubLink && (
                <a href={githubLink} target='_blank' rel="noopener noreferrer">GitHub</a>
              )}
            </p>
        </Box>
      </Flex>
    </Box>
  )
}

export default WorkBox;

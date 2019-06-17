import React from 'react';
import { Timeline, TimelineEvent } from 'react-event-timeline';
import { FaPhone, FaCubes, FaPalette, FaLaptop, FaSkating, FaLine, FaEnvelope, FaGithub, FaBirthdayCake, FaHome } from 'react-icons/fa';
import { GoLocation, GoPerson, GoMortarBoard } from 'react-icons/go';
import Layout, { layoutCss } from '../../layouts';
import { withFadeIn } from '../../layouts/FadeIn';
import ScoreBar from '../../components/ScoreBar';
import WorkBox from '../../components/WorkBox';
import CharAvatar from '../../components/CharAvatar';
import { Flex, Box } from '../../elements/flex';

import './index.css';

const Resume = () => {
  return (
    <Layout fluid={true}>
      <section style={layoutCss}>
        <Flex>
          <Box w={1/3} style={{
            padding: '0 3em 0 0',
          }}>
            <img
              src="/img/DSC_0941.JPG"
              style={{
                border: '1px solid #dee2e6',
                padding: '.25em',
                maxWidth: '100%',
                maxHeight: '600px',
              }}
              alt="Avatar"
            />
            <p className="primary" style={{ 'margin-bottom': '.5em' }}><a href="https://github.com/qas612820704" className="primary"><FaGithub /> | qas612820704</a></p>
            <p className="primary" style={{ 'margin-bottom': '.5em' }}><FaLine /> | qas612820704</p>
            <p className="primary" style={{ 'margin-bottom': '.5em', 'white-space': 'nowrap' }}>
              <a href="https://github.com/qas612820704" className="primary"><FaEnvelope /> | qas612820704@gmail.com</a>
            </p>
          </Box>
          <Box w={2/3}>
            <h1 style={{ marginTop: '0' }}>江柏廷 <span style={{ fontSize: '.8em' }}>(Lego)</span></h1>
            <p>前端工程師, 熟習 React, Redux, Node.js. 目前致力於 <span className="primary">Progessive Web App (PWA), Isomorphic Javascript</span>. 並以優秀的 Open Sourcer 邁進.</p>
            <p>
              畢業於國立交通大學 (NCTU) 網路工程所, 研習 Software Defined Network, VxLAN Tunneling, P4. <br />
              從大學數學系中, 接觸系上教授教導 Debian 系統維護, 於是開始了 Linux 之旅, 現在是 <span className="primary">Archlinux</span> 的使用者.<br />
              以成為網頁全端 (Full stack) 工程師為目標邁進, 目標成為對<span className="primary">開源有重要貢獻</span>的人.
            </p>
            <hr />
            <p style={{ fontStyle: 'italic', textAlign: 'center' }}>
              Don't forget your original goal. <br/> Keep going and keep work hard.<br/>
            </p>
          </Box>
        </Flex>
      </section>
      <section style={layoutCss}>
        <Flex style={{ 'text-align': 'center' }}>
          <Box w={1/3}>
            <h1><GoPerson /></h1>
            <Flex>
              <Box w={1/2}>
                <b><FaBirthdayCake style={{ marginRight: '1em' }} />出生於</b>
                <p>1993 / 07 / 04</p>
              </Box>
              <Box w={1/2}>
                <b><FaHome style={{ marginRight: '1em' }} />故鄉</b>
                <p>基隆, 台灣</p>
              </Box>
            </Flex>
          </Box>
          <Box w={1/3}>
            <h1><GoLocation /></h1>
            <Flex>
              <Box w={1/2}>
                <b><GoMortarBoard style={{ marginRight: '1em' }} />研究所</b>
                <p style={{ margin: '0.3em 0' }}>國立交通大學</p>
                <p style={{ margin: '0.3em 0' }}>網路工程所</p>
                <p><a href="http://140.113.208.152">MBL Labtory</a></p>
              </Box>
              <Box w={1/2}>
                <b><GoMortarBoard style={{ marginRight: '1em' }} />大學</b>
                <p style={{ margin: '0.3em 0' }}>國立中興大學</p>
                <p>應用數學系</p>
              </Box>
            </Flex>
          </Box>
          <Box w={1/3}>
            <h1><FaCubes /></h1>
            <Flex>
              <Box w={1/2}>
                <b><FaSkating style={{ marginRight: '1em' }} />社團</b>
                <p>溜冰社 <span className="primary">副社長</span></p>
              </Box>
              <Box w={1/2}>
                <b><FaLaptop style={{ marginRight: '1em' }} />社團</b>
                <p>資訊社 社員</p>
              </Box>
              <Box w={1} style={{ marginTop: '1.5em' }}>
                <b><FaPalette style={{ marginRight: '1em' }} />興趣</b>
                <Flex>
                  <Box w={1/2} style={{ margin: '0.3em 0' }}>
                    街舞
                  </Box>
                  <Box w={1/2} style={{ margin: '0.3em 0' }}>
                    唱歌
                  </Box>
                  <Box w={1/2} style={{ margin: '0.3em 0' }}>
                    直排輪
                  </Box>
                  <Box w={1/2} style={{ margin: '0.3em 0' }}>
                    口技
                  </Box>
                  <Box w={1/2} style={{ margin: '0.3em 0' }}>
                    腳踏車
                  </Box>
                  <Box w={1/2} />
                </Flex>
              </Box>
            </Flex>
          </Box>
        </Flex>
        <hr style={{ marginTop: '2em' }} />
        <img style={{ width: '100%' }} src="/img/github-green-dot.png" alt=""/>
      </section>
      <section className="second-background motto-section">
        <h1 style={{ marginTop: 0, ...layoutCss}}>座右銘 <small>/ Motto</small></h1>
        <Flex style={layoutCss}>
          <Box w={2/3} style={{ display: 'flex', 'align-items': 'center' }}>
            <blockquote>
              <p style={{ margin: 0 }}>“</p>
              <p style={{ margin: 0, 'padding-left': '1em' }}>
                I am not a visionary. I'm an engineer. I'm happy with the people who are wandering around looking at the stars but I am looking at the ground and I want to fix the pothole before I fall in.
              </p>
              <p style={{ margin: 0 }}>”</p>
              <p style={{ textAlign: 'right', paddingRight: '1em' }}>― Linus Torvalds</p>
            </blockquote>
          </Box>
          <Box w={1/3} style={{ 'padding-left': '2em', display: 'flex', 'align-items': 'center' }}>
            <img style={{ margin: 0 }} src="/img/LinusTorvalds_2016-embed.jpg" alt=""/>
          </Box>
        </Flex>
      </section>
      <section style={layoutCss}>
        <Flex>
          <Box w={1/2}>
            <h1>時間線 <small>/ Timeline</small></h1>
            <Timeline lineColor="gray">
              <TimelineEvent iconColor="gray" title="2017 年 | MordenWeb 會眾, Akatsuki 遊戲黑客松" />
              <TimelineEvent iconColor="gray" title="2016 年 | COSCUP 會眾, FGJ 工作坊" />
              <TimelineEvent iconColor="gray" title={<>2015 年 | 溜<a className="primary" href="https://www.youtube.com/watch?v=AywX2A3_PDE" traget="_blank">島</a>俠環西路溜, MOPCON 會眾</>} />
              <TimelineEvent iconColor="gray" title="2013 年 | 資訊社, SITCON 會眾" />
              <TimelineEvent iconColor="gray" title="2012 年 | 溜冰社副社長" />
            </Timeline>
          </Box>
          <Box w={1/2}>
            <h1>經歷 <small>/ Experience</small></h1>
            <Timeline>
              <TimelineEvent iconColor="gray" title="2015 年 | 矽品精密 實習生" />
            </Timeline>
          </Box>
        </Flex>
      </section>
      <section className="second-background" style={{ padding: '1.5em 0' }}>
        <div style={layoutCss}>
        <h1>技能 <small>/ Skill</small></h1>
          <Flex style={{ justifyContent: 'left' }}>
            <Box w={1}>
              <h2>主要 <small>/ Main</small></h2>
              <ScoreBar title='Progressive Web App' score={6} scoreText='Good' />
              <ScoreBar title='Isomorphic Javascript' score={7.2} scoreText='Good' />
            </Box>
            <Box w={1/2}>
              <h2>前端 <small>/ Front-End</small></h2>
              <div style={{ paddingRight: '2em', marginBottom: '1em' }}>
                <ScoreBar title='React' score={9.3} scoreText='Great' />
                <ScoreBar title='Redux' score={9.3} scoreText='Great' />
                <ScoreBar title='RxJs' score={3.5} scoreText='Learning' />
                <Flex>
                  <Box w={2/9}>...</Box>
                  <Box w={7/9}>
                    <p className="second">
                      <small>
                        WebSocket,
                        <span className="primary">WebRTC</span>,
                        Gatsby, Angular 1, jQuery...
                      </small>
                    </p>
                  </Box>
                </Flex>
              </div>
            </Box>
            <Box w={1/2}>
              <h2>後端 <small>/ Back-End</small></h2>
              <div style={{ paddingRight: '2em', marginBottom: '1em' }}>
                <ScoreBar title='Node.js' score={9} scoreText='Great' />
                <ScoreBar title='Express' score={8.8} scoreText='Great' />
                <ScoreBar title='GraphQL' score={6} scoreText='Well' />
                <Flex>
                  <Box w={2/9}>...</Box>
                  <Box w={7/9}>
                    <p className="second">
                      <small>Koa, Django, Laravel...</small>
                    </p>
                  </Box>
                </Flex>
              </div>
            </Box>
            <Box w={1/2}>
              <h2>工具 <small>/ Tools</small></h2>
              <div style={{ paddingRight: '2em', marginBottom: '1em' }}>
                <ScoreBar title='Travis CI' score={6} scoreText='Good' />
                <ScoreBar title='Linux' score={6} scoreText='Good' />
                <ScoreBar title='Git' score={7} scoreText='Good' />
                <Flex>
                  <Box w={2/9}>...</Box>
                  <Box w={7/9}>
                    <p className="second">
                      <small>Yarn, Webpack, ShellScript...</small>
                    </p>
                  </Box>
                </Flex>
              </div>
            </Box>
            <Box w={1/2}>
              <h2>其他 <small>/ Etc</small></h2>
              <div style={{ paddingRight: '2em', marginBottom: '1em' }}>
                <ScoreBar title='SDN / P4' score={6} scoreText='Well' />
                <ScoreBar title='Unity 3D' score={5} scoreText='Well' />
                <Flex>
                  <Box w={2/9}>
                    Leetcode
                  </Box>
                  <Box w={7/9}>
                    <span className="primary">179</span>
                    <small> / 1077 Solved</small>
                  </Box>
                </Flex>
              </div>
            </Box>
          </Flex>
        </div>
      </section>
      <section style={layoutCss}>
        <h1>Works <small>/ 作品集</small></h1>
        <Flex>
          <WorkBox
            avatar={
              <img
                style={{ margin: 'auto' }}
                src='/img/tgmeetup-logo.png'
                alt='logo'
              />
            }
            title='TGmeetup'
            description="A collection set of technical groups' information"
            chips={[ 'GatsbyJs', 'GitHub api', 'Google api' ]}
            demoLink="https://tgmeetup.github.io/"
            githubLink="https://github.com/TGmeetup/TGmeetup"
          />
          <WorkBox
            avatar={
              <img
                style={{ margin: 'auto' }}
                src='/img/river-logo/logo.png'
                alt='logo'
              />
            }
            title={<>River <small className="second">— read it forever</small></>}
            description='Translate, record and exam of vocabulary.'
            chips={['serverless', 'react', 'redux', 'node.js' ]}
            demoLink="https://rivers-dictionary.github.io/"
            githubLink="https://github.com/rivers-dictionary/rivers"
          />
          <WorkBox
            avatar={
              <img
                style={{
                  margin: 'auto',
                  transform: 'scale(.8)'
                }}
                src='/img/bazaar-logo.png'
                alt='logo'
              />
            }
            title='Bazaar'
            description='分散式互動平台'
            chips={['Web RTC', 'Phaser (HTML5 game framework)' ]}
            demoLink="https://bazaar-pre.pastleo.me/"
            githubLink="https://github.com/pastleo/bazaar"
          />
          <Box w={1/2}>
            <Flex>
              <Box w={1/4}></Box>
              <Box w={3/4}>
                <h3 style={{ marginTop: 0 }}>Other</h3>
                <ul style={{ listStyle: 'none' }}>
                  <li>
                    <CharAvatar char="T" style={{ marginRight: '1em' }} />
                    <a href="https://www.npmjs.com/package/cambridge-dictionary" target="_blank" rel="noopener noreferrer">
                      Tinycards API
                    </a>
                  </li>
                  <li>
                    <CharAvatar char="C" style={{ marginRight: '1em' }} />
                    <a href="https://www.npmjs.com/package/cambridge-dictionary" target="_blank" rel="noopener noreferrer">
                      Cambridge Dictionary CLI / API
                    </a>
                  </li>
                  <li>
                    <CharAvatar char="R" style={{ marginRight: '1em' }} />
                    <a href="http://" target="_blank" rel="noopener noreferrer">
                      Redux Bomb
                    </a>
                  </li>
                  <li className="second"> NP, NLP...</li>
                </ul>
              </Box>
            </Flex>
          </Box>
        </Flex>
      </section>
      <hr style={{ margin: '0 3em'}}/>
      <section style={layoutCss}>
        <h1>Contribute <small>/ 貢獻</small></h1>
        <ul style={{ listStyle: 'none' }}>
          <li><a href="https://cdnjs.com/" target="_blank" rel="noopener noreferrer">cdnjs</a></li>
          <li><a href="https://overreacted.io/">Overreacted.io Translation</a></li>
          <li><a href="https://github.com/valr/cbatticon">cbatticon</a></li>
          <li className="second">TravisCI Document Translation, React Router...</li>
        </ul>
      </section>
      <section className="second-background motto-section">
        <div style={layoutCss}>
          <Flex>
            <Box w={1/3} className="vertical-center-container">
              <img className="left" src="/img/richard.jpg" alt=""/>
            </Box>
            <Box w={2/3} className="vertical-center-container">
              <blockquote>
                <p>“ Programming is not a science. Programming is a <span className="primary">craft</span>.”</p>
                <p className="author">― Richard Stallman</p>
              </blockquote>
            </Box>
          </Flex>
        </div>
      </section>
      <section style={layoutCss}>
        <Flex>
          <Box w={1/3}>
            <div style={{ textAlign: 'center' }}>
              <h1>Thanks!</h1>
              <img src="logo.png" style={{ width: '200px' }} alt=""/>
              <p>如果您對我的履歷有興趣歡迎聯絡我.</p>
            </div>
            <p className="primary" style={{ 'margin-bottom': '.5em' }}><FaPhone /> | 0937873835</p>
            <p className="primary" style={{ 'margin-bottom': '.5em' }}><FaLine /> | qas612820704</p>
            <p className="primary" style={{ 'margin-bottom': '.5em', 'white-space': 'nowrap' }}>
              <a href="https://github.com/qas612820704" className="primary"><FaEnvelope /> | qas612820704@gmail.com</a>
            </p>
          </Box>
        </Flex>
      </section>
    </Layout>
  );
};

export default withFadeIn(Resume);

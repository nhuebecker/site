import React from 'react'
import {
  Flex,
  Box,
  Column,
  Heading,
  Subhead,
  Text,
  Avatar,
  Link,
  Image,
} from 'rebass'
import { kebabCase } from 'lodash'
import { colors, mx } from '../style'
import {
  SectionHeading,
  Float,
  FloatLink,
  ProjectGrid,
  Project,
  Icon,
  Service,
  Footer,
} from '../components'
import { main, oss, prev } from '../data'

const sections = [
  ['Projects', 'layers', main],
  ['Open Source', 'open_in_browser', oss],
  ['Previously', 'access_time', prev],
]

const Masthead = Flex.extend.attrs({
  direction: ['column', 'row'],
  px: 3,
})`
  text-align: center;
  ${mx[0]} {
    min-height: 80vh;
    text-align: left;
  }
`
const Name = Heading.extend.attrs({ f: 6, m: 0 })`
  font-weight: 900 !important;
  line-height: 1;
`
const Bio = Subhead.extend.attrs({ is: 'h2', color: 'grey', mt: 1, mb: 3 })`
  font-weight: 400;
  line-height: 1.5;
`
const Status = Text.extend.attrs({ f: 3, color: 'slate', mt: 0, mb: 4 })`
  display: inline-block;
  background-color: #f6bbc2;
  background-image: linear-gradient(-100deg, ${props =>
    props.gradientVals[2] || '#e6f3fb'}, ${props =>
  props.gradientVals[1] || '#cbe7f8'} 95%, ${props =>
  props.gradientVals[0] || '#add9f4'});
  border-radius: 999px;
  padding: 0 .5em;
  margin-left: -0.5em;
  line-height: 1.5;
`

const PortraitBox = props => (
  <Flex
    column
    justify="center"
    align={['center', 'flex-end']}
    flex="1 1 auto"
    p={[3, 4]}
    pr={[null, 0]}
    {...props}
  />
)

const Portrait = FloatLink.withComponent(Image).extend`
  border-radius: 12px;
  max-height: 40vh;
  max-width: 50vw;
  ${mx[0]} {
    border-radius: 24px;
    max-height: 64vh;
  }
`

const NameBox = Column.extend.attrs({ py: 2, pl: [null, 5] })`
  ${mx[0]} {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
`

export default () => (
  <div>
    <Masthead>
      <PortraitBox>
        <Portrait src="/static/portrait-new.jpg" />
      </PortraitBox>
      <NameBox>
        <Name>Nikolas Huebecker</Name>
        <Bio>Entrepreneur, developer and high schooler.</Bio>
        <Box>
          <Status gradientVals={[]}>
            {'building dope things  @ '}
            <Link href="https://teenmade.com" color="#288ecd">
              teenmade
            </Link>
          </Status>
        </Box>
        <Box mt={'-1em'}>
          <Status gradientVals={['#f3d2fb', '#f3d2fb', '#f9e9fd']}>
            {'intern / master of PANDAmonium  @ '}
            <Link href="https://panda.af" color="#9800ba">
              panda
            </Link>
          </Status>
        </Box>
        <Flex align="center" justify={['center', 'flex-start']}>
          <Service href="https://twitter.com/nhuebecker" icon="twitter" />
          <Service href="https://github.com/nhuebecker" icon="github" />
          <Service href="https://instagram.com/nhuebecker" icon="instagram" />
          <Service href="mailto:nikolas@stersvoice.com" icon="mail_outline" />
        </Flex>
      </NameBox>
    </Masthead>
    <Footer file="index" />
  </div>
)

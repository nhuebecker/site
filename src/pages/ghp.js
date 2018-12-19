import React from 'react'
import { Flex, Box, Banner, Heading, Text, Group } from 'rebass'
import { kebabCase } from 'lodash'
import { colors, mx } from '../style'
import {
  SectionHeading,
  Float,
  FloatLink,
  ResumeGrid,
  ResumeProject,
  Icon,
  Service,
  Footer,
} from '../components'

export const groups = [
  {
    name: 'Science',
    url: '//groupme.com/join_group/39668401/czPPXR',
    description: '',
    color: '#288ecd',
  },
  {
    name: 'Math',
    url: '//groupme.com/join_group/39667359/wtcRNx',
    description: '',
    color: '#6728cd',
  },
  {
    name: 'Comm Arts',
    url: '//groupme.com/join_group/37850597/nqrwC9',
    description: '',
    color: '#bb28ce',
  },
  {
    name: 'Vis Arts',
    url: '//groupme.com/join_group/39667605/VFOrLI',
    description: '',
    color: '#ce288e',
  },
  {
    name: 'Aggies',
    url: '//groupme.com/join_group/39667620/BD8vrJ',
    description: '',
    color: '#ce283b',
  },
  {
    name: 'Engineering',
    url: '//groupme.com/join_group/39667703/VXRFC9',
    description: '',
    color: '#93a1aa',
  },
  {
    name: 'Music',
    url: '//groupme.com/join_group/39667649/zdrgNp',
    description: '',
    color: '#e4732d',
  },
  {
    name: 'SocStuds',
    url: '//web.groupme.com/join_group/39629651/uixOZZ ',
    description: '',
    color: '#28cebb',
  },
  {
    name: 'World Languages',
    url: 'https://groupme.com/join_group/39668004/WlYfl4',
    description: '',
    color: '#28ce68',
  },
  {
    name: 'Voice',
    url: 'https://groupme.com/join_group/39667515/ObXxEY',
    description: '',
    color: '#9ee42d',
  },
]

const sections = [['Groups', 'work', groups]]

const backgroundImage =
  'https://images.unsplash.com/photo-1456735190827-d1262f71b8a3' // const bg = 'https://images.unsplash.com/photo-1416339684178-3a239570f315'
const Masthead = Banner.extend.attrs({ bg: '#2d9ce4', mb: 3 })`
  min-height: 32vh;
`
export default () => (
  <div>
    <Masthead>
      <Flex justify="center">
        <Icon name="school" />
        <Icon name="code" mx={2} />
        <Icon name="sentiment_very_satisfied" />
      </Flex>
      <Heading
        my={2}
        f={[5, 6]}
        color={colors.white}
        style={{ fontWeight: 300 }}
      >
        <strong style={{ fontWeight: 800 }}>GHP GroupMe Links</strong>
      </Heading>
    </Masthead>
    {sections.map(section => (
      <Box id={kebabCase(section[0])} key={kebabCase(section[0])} py={2}>
        <SectionHeading icon={section[1]} children={section[0]} />
        <ResumeGrid>
          {section[2].map(item => (
            <ResumeProject
              name={item.name}
              url={item.url}
              description={item.description}
              color={item.color}
            />
          ))}
        </ResumeGrid>
      </Box>
    ))}

    <Footer file="edu" />
  </div>
)

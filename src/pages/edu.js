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
import { employment, education, community } from '../resume-data'

const sections = [
  ['Employment History', 'work', employment],
  ['Education', 'school', education],
  ['Volunteer Work', 'access_time', community],
]

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
        @nhuebecker/<strong style={{ fontWeight: 800 }}>resume</strong>
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
              date={item.date}
              description={item.description}
              color={item.color}
              key={item.url}
            />
          ))}
        </ResumeGrid>
      </Box>
    ))}

    <Footer file="edu" />
  </div>
)

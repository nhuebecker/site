import React from 'react'
import { Flex, Box, Banner, Heading, Text, Group } from 'rebass'
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
  Footer
} from '../components'

const eleventh = [
  {
    name: 'Whales for Three',
    url: 'lachlanjc.me/edu/moby-dick',
    description: 'Essay: Moby Dick',
    color: '#0069ff'
  },
  {
    name: 'Their Eyes Were Watching God',
    url: 'lachlanjc.me/edu/watching-god',
    description: 'Essay: Zora Neale Hurston’s novel',
    color: '#ffa235'
  }
]
const tenth = [
  {
    name: 'Greenhouse',
    url: 'greenhouse.now.sh',
    description: 'Website: the cause of climate change',
    color: '#05df73'
  },
  {
    name: 'Consumerism',
    url: 'twenties.now.sh',
    description: 'Presentation: 1920s consumerism',
    color: '#1FB6FF'
  },
  {
    name: 'Astrocolony',
    url: 'astrocolony.now.sh',
    description: 'Brochure: a Titan space colony',
    color: '#3c4858'
  },
  {
    name: 'L’Éducation Suisse 🇫🇷',
    url: 'swiss-edu.now.sh',
    description: 'Presentation: Swiss education',
    color: '#f30804'
  },
  {
    name: 'Sommeil 🇫🇷',
    url: 'sommeil.now.sh',
    description: 'Brochure: sleep at various ages',
    color: '#283593'
  },
  {
    name: 'Petit Prince 14 🇫🇷',
    url: 'petit-prince-14.now.sh',
    description: 'Presentation: Le Petit Prince ch. 14',
    color: '#f0a'
  }
]
const groups = [
  {
    name: 'SCHacks',
    url: 'schacks.tech',
    description: 'My coding club at my high school',
    color: '#ff4949'
  },
  {
    name: 'LGBTQA+ Alliance',
    url: 'scasdpride.github.io',
    description: 'Pride group at my high school',
    color: '#F48D3A'
  }
]
const sections = [
  ['Eleventh grade', 'today', eleventh],
  ['Tenth grade', 'access_time', tenth],
  ['Groups', 'group_work', groups]
]
const backgroundImage =
  'https://images.unsplash.com/photo-1456735190827-d1262f71b8a3' // const bg = 'https://images.unsplash.com/photo-1416339684178-3a239570f315'
const Masthead = Banner.extend.attrs({ bg: colors.accent, mb: 3 })`
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
        @lachlanjc/<strong style={{ fontWeight: 800 }}>edu</strong>
      </Heading>
    </Masthead>
    {sections.map(section => (
      <Box id={kebabCase(section[0])} key={kebabCase(section[0])} py={2}>
        <SectionHeading icon={section[1]} children={section[0]} />
        <ProjectGrid>
          {section[2].map(item => (
            <Project
              name={item.name}
              url={item.url}
              description={item.description}
              color={item.color}
              key={item.url}
            />
          ))}
        </ProjectGrid>
      </Box>
    ))}
    <Footer file="edu" />
  </div>
)

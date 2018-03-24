import React from 'react'
import { colors } from './style'
import { Flex, Box, Heading, Subhead, Text, Link, Image } from 'rebass'
import { isEmpty, kebabCase, deburr, replace } from 'lodash'

export const mono = {
  fontFamily: 'SFMono-Regular, Consolas, Menlo, Courier, monospace'
}

export const Header = props => (
  <Box
    is="header"
    bg={colors.base}
    color={colors.white}
    px={2}
    py={4}
    mb={[3, 4]}
    center
    {...props}
  />
)

const Subheader = Flex.extend.attrs({
  align: 'center',
  justify: 'center',
  color: colors.steel
})`
  text-align: center;
  text-transform: uppercase;
  letter-spacing: .1em;
`

export const SectionHeading = ({ icon, children, ...props }) => (
  <Subheader {...props}>
    <Icon name={icon} fill={colors.grey} size={32} mr={1} />
    <Subhead my={0} f={3}>
      {children}
    </Subhead>
  </Subheader>
)

export const Float = Box.extend`
  box-sizing: border-box;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.25);
`
export const FloatLink = Float.withComponent(Link).extend`
  color: ${colors.white};
  text-decoration: none;
  transition: .2s all ease-out;
  &:hover {
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.25);
    transform: scale(1.05);
  }
`

export const ProjectGrid = Flex.extend.attrs({
  px: [2, 3],
  py: 1,
  direction: ['column', 'row'],
  justify: 'center',
  wrap: true
})`
`
const ProjectName = Subhead.extend`
  color: inherit;
`
const ProjectDescription = Text.extend`
  color: inherit;
  opacity: 0.8;
`

export const Project = ({ name, url, description, color = 'white' }) => (
  <FloatLink
    href={isEmpty(url) ? '#' : `https://${url}`}
    target="_blank"
    id={kebabCase(deburr(name))}
    bg={color}
    color="white"
    w={[1, 2 / 5, 1 / 3]}
    m={[0, 2]}
    mt={2}
    p={3}
  >
    <ProjectName f={4} m={0}>
      {name}
    </ProjectName>
    <ProjectDescription f={[2, 3]} mt={1} mb={0}>
      {description}
    </ProjectDescription>
  </FloatLink>
)

export const Icon = ({
  name = 'x',
  fill = colors.white,
  size = 32,
  ...props
}) => (
  <Image
    alt={`${name} icon`}
    src={`https://icon.now.sh/${name}/${size}/${replace(fill, '#', '')}`}
    style={{ width: size, height: size }}
    {...props}
  />
)

export const Service = ({ href, icon, ...props }) => (
  <Link target="_blank" href={href} mx={2} {...props}>
    <Icon name={icon} fill={colors.blue} />
  </Link>
)

export const Footer = ({ file = 'index', ...props }) => (
  <Text center py={3}>
    <Link
      href={`https://github.com/lachlanjc/site/blob/glitch/src/pages/${file}.js`}
      f={5}
    >
      ⌨️
    </Link>
  </Text>
)

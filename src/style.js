import { map } from 'lodash'

export const mx = map(
  ['(min-width:40em)', '(min-width:52em)', '(min-width:64em)'],
  w => `@media screen and ${w}`
)

const blue = '#009EEB'
export const colors = {
  accent: '#13CE66',
  base: blue,
  blue,

  black: '#1f2d3d',
  steel: '#273444',
  slate: '#3c4858',
  grey: '#8492a6',
  grey2: '#5f6e76',
  // smoke3: '#c0ccda',
  // smoke2: '#d3dce6',
  smoke: '#e0e6ed',
  // snow3: '#e5e9f2',
  // snow2: '#eff2f7',
  snow: '#f9fafc',
  white: '#ffffff',
}

export const borderRadius = 2
export const borderRadiusXl = borderRadius * 2
export const bold = 600

const theme = {
  colors,
}
export default theme

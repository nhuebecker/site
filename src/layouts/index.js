import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { injectGlobal } from 'styled-components'
import { Provider } from 'rebass'
import theme, { colors } from '../style'

injectGlobal`
  * { box-sizing: border-box; }
  body {
    font-family: -apple-system, BlinkMacSystemFont, SegoeUI, Roboto, sans-serif;
    line-height: 1.5;
    margin: 0;
    color: ${colors.black}
  }
  a { text-decoration: none; }
`

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet>
        <meta charSet="UTF-8" />
        <title>Lachlan Campbell – @lachlanjc</title>
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <link rel="shortcut icon" href="/static/favicon.ico" />
        <meta name="theme-color" content={colors.base} />
    </Helmet>
    <link rel="shortcut icon" href="/static/favicon.ico" />
    <Provider theme={theme}>
      {children()}
    </Provider>
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper

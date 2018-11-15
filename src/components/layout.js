import React from 'react'
import PropTypes from 'prop-types'

import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

import './layout.scss'

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            { name: 'Alejandro Matamala', content: 'Alejandro Matamala' },
            { name: 'Alejandro Matamala Ortiz', content: 'Alejandro Matamala Ortiz' },
          ]}
        >
          <html lang="en" />
          
        </Helmet>
        <div>

        </div>
        <div>
          {children}
        </div>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}
// 
export default Layout

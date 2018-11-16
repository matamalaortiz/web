import React from 'react'
import PropTypes from 'prop-types'

import image from '../images/og.jpg'

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
        <Helmet>
         <html lang="en" />
        <meta name="og:type" content="image/jpeg" />
        <meta name="og:url" content='https://www.matamala.info' />
        <meta name="og:site_name" content='Alejandro Matamala Ortiz' />
        <meta name="og:title" content='Alejandro Matamala Ortiz' />
        <meta name="og:image" content={image}/>
        <meta name="og:description" content='Alejandro Matamala Ortiz' />
        
        <title>Alejandro Matamala Ortiz</title>
        <meta name="description" content='Alejandro Matamala Ortiz' />
        <meta name="image" content={image} />
        <meta name="keywords" content='Alejandro Matamala Ortiz' />


        <meta name="og:type" content="image/jpeg" />
        <meta name="og:url" content='https://www.matamala.info' />
        <meta name="og:site_name" content='Alejandro Matamala Ortiz' />
        <meta name="og:title" content='Alejandro Matamala Ortiz' />
        <meta name="og:image" content={image}/>
        <meta name="og:description" content='Alejandro Matamala Ortiz' />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:creator" content="@matamalaortiz" />
        <meta name="twitter:site" content='https://www.matamala.info' />
        <meta name="twitter:title" content='Alejandro Matamala Ortiz' />
        <meta name="twitter:description" content='Alejandro Matamala Ortiz' />
        <meta name="twitter:image" content={image} />
          
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

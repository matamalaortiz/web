import React from 'react'
// import { Link } from 'gatsby'

import LeftBar from '../components/LeftBar'
import Main from '../components/Main'
import Box from '../components/Box'
import Project from '../components/Project'
import Helmet from 'react-helmet'
import image from '../images/og.jpg'



const IndexPage = () => (
<div>
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
  <Project />
  </div>

    <main className="ff">

      <LeftBar/>
      <Main/>
      <Box/>
    </main>
</div>
)

export default IndexPage

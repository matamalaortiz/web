import React from 'react'
// import { Link } from 'gatsby'

import LeftBar from '../components/LeftBar'
import Main from '../components/Main'
import Box from '../components/Box'
import Project from '../components/Project'


const IndexPage = () => (
<div>
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

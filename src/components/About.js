import React from 'react'

import AboutAnimation from './AboutAnimation'
import { connect } from "react-redux"

const About = ({ count, increment }) => (
	<div className="CO--About" id="CO-About">
	<AboutAnimation />
	<p className="CO--About-Text"> Designer and programmer working at the intersection of design, technology, and creative tools. Currently Co-founder of <a href="https://www.runwayml.com"><span className="CO--About--Highlight">@RunwayML</span>, a machine learning platform for creators.</a> Previously research resident at the <span className="CO--About--Highlight">New York University.</span> </p>
	<p className="CO--About-Text">In the past, Alejandro has contributed with a variety of commercial and cultural institutions, cofounded <a href="http://www.material.cl"><span className="CO--About--Highlight">Material</span></a> a graphic design studio, and 
	an independent art book publishing house highlighting visual artists from South America,	<a href="http://www.edicionesdaga.com"><span className="CO--About--Highlight">Ediciones DAGA</span></a>.  
	</p>

	{/* <p className="CO--About-Text">Feel free to say hi or contact me.</p> */}

	</div>    
	
)

const mapStateToProps = ({ count }) => {
return { count }
}
  
const mapDispatchToProps = dispatch => {
return { }
}
  
export default connect(
mapStateToProps,
mapDispatchToProps
)(About)
  
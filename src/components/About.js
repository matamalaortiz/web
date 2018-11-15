import React from 'react'

import AboutAnimation from './AboutAnimation'
import { connect } from "react-redux"

const About = ({ count, increment }) => (
	<div className="CO--About" id="CO-About">
	<AboutAnimation />
	<p className="CO--About-Text">Chilean programmer/designer based in New York City. Currently part of the founder team behind <a href="https://www.runwayapp.ai"><span className="CO--About--Highlight">@RunwayML</span> </a>and researcher at the <span className="CO--About--Highlight">New York University </span> 
	exploring the intersection between artificial intelligence and production tools for creators.  
	</p>
	<p className="CO--About-Text">In the past, I've built a design studio <a href="http://www.material.cl"><span className="CO--About--Highlight">Material</span></a>, an independent art book publishing house <a href="http://www.edicionesdaga.com"><span className="CO--About--Highlight">E.DAGA</span></a>, focused
	on visual artists from South America and contributed with a variety of commercial and cultural institutions. 
	</p>
	<p className="CO--About-Text">Feel free to say hi or contact me.
	</p>

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
  
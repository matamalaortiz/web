
import React, { Component } from 'react'
import { PROJECTS, HEADER } from '../projects';
import WorkAnimation from './WorkAnimation'
import About from './About';
import Social from './Social';
// import PropTypes from 'prop-types'
import { connect } from "react-redux"
import Arrow from '../images/thumbs/arrow.svg'


const mapStateToProps = ({ state }) => {
	return { state }
}
  
const mapDispatchToProps = dispatch => {
	return { 
    changeThumb: (img, desc) => dispatch({ type: `CHANGETHUMB`, image: img, description: desc}),
    addProject: (project) => dispatch({ type: `ADDPROJECT`, project: project})
  }
}

class Main extends Component {	

updateThumb = (img, desc) => {
	  this.props.changeThumb(img, desc)
  }

  onClick = (project) => {
    this.props.addProject(project)
  }


	render() {

	return (
	<div className="Content f5 ff">
		<div className="CO--Container f5">
			<div className="CO--Status">
				<div className="CO--Intro">
					<p className="CO--Intro--Title">Alejandro Matamala Ortiz.</p>
					<p className="CO--Intro--Menu">
						<span><a href="#CO-About">About</a> </span>
						<span><a href="#CO-Work" >Works</a> </span>
						<span><a href="http://www.twitter.com/matamalaortiz" id="blog">Twitter</a></span>
					</p>
				</div>
				<p>Developer. Designer.</p> 
				<p 
				>Currently building @  
					<a href={HEADER[0].link} 
					target="_blank" 
					className="CO--Highlight" 				
					onMouseOver={()=> this.updateThumb(HEADER[0].thumb, HEADER[0].data)}
					onMouseLeave={()=> this.updateThumb(false, false)}
					>
					  {HEADER[0].text}.
					</a>
					</p>
					<p>Prev. Research Resident at ITP, NYU.</p>

				<p></p>
			</div>
			<div className="CO--Project" id="CO-Work">
				<WorkAnimation />
				<div className="CO--List">
					<ul>
						{PROJECTS.map(p => (
							<li 
								className="CO--List--Project" 
								key={p.name} 
								thumb={p.thumb} 
								data={p.data} 
								onMouseOver={()=> this.updateThumb(p.thumb, p.data)}
								onMouseLeave={()=> this.updateThumb(false, false)}
                onClick={() => this.onClick(p)}
							>
							<a href={"#"}><span className="CO--Year">•</span>{p.name} – <span className="CO--Description"> {p.short_description}</span> <span className="CO--Arrow"><img src={Arrow} style={{width:'0.7em'}}/></span></a></li> 
						))}
					</ul>

				</div>
				<About/>

				<div className="CO--Social">
					<p><a href="https://www.twitter.com/matamalaortiz" target="_blank">@matamalaortiz</a></p>
					<p>matamala[at]material.cl</p>
					<p className="CO--Social--Year"></p>
				</div>
			</div>
		</div>


		<Social/>
	
	</div>
	)}
} 

export default connect(
	mapStateToProps,
	mapDispatchToProps
	)(Main)
	  
// export default Main
  

import React, {Component} from 'react';
import PropTypes from 'prop-types'
import { connect } from "react-redux"

// import * as ml5 from "ml5";
import { INITIAL } from '../projects';

const mapStateToProps = ({ initialThumb, boxDescription }) => {
	return { initialThumb, boxDescription }
}
  
const mapDispatchToProps = dispatch => {
	return { changeThumb: (img, desc) => dispatch({ type: `CHANGETHUMB`, image: img, description: desc}) }
}

class Box extends Component {
	constructor(props) {
		super(props);
		this.state = {
			thumb: this.props.initialThumb,
			description: this.props.boxDescription
		}
	}	

static getDerivedStateFromProps(nextProps, prevState) {
    if (prevState.initialThumb !== nextProps.initialThumb) {
      return {
		thumb: nextProps.initialThumb,
		description: nextProps.boxDescription
		};
    } 
    return null;
}
componentDidMount(){
	this.props.changeThumb(INITIAL[0].thumb, INITIAL[0].description)
}

render() {

	return (

<div className="IM">
	<div className="IM--Container">
		<img src={this.state.thumb ? this.state.thumb : INITIAL[0].thumb } image={INITIAL[0].thumb} alt="news" className="IM--Image"   />
		<p className="IM--Text" data={INITIAL[0].description}>{ this.state.description ? this.state.description : INITIAL[0].description}</p>
		
		{/* <div id="ML--Wrapper" className="hide">
						<span id="modelStatus">Loading base model...</span> | <span id="videoStatus">Loading video...</span>

				<div id="videoContainer">
						<div className="Indicator ff">
								<div className="a1" id="a1-left">1</div>
								<div className="a1" id="a1-center">2</div>
								<div className="a1" id="a1-right">3</div>
						</div>
				</div>

				<div className="IM--ML--Control"> 
						<div className="buttons ff">
								<div className="f1 btn-training ff"> 
										<button id="LeftButton">L</button>
								</div>
								<div className="f1 btn-training ff">
										<button id="CenterButton">C</button>
								</div>
								<div className="f1 btn-training ff">
										<button id="RightButton">R</button>
								</div>
						</div> 
						<div className="buttons ff">
								<div className="f1 btn-training ff"> 
										<span id="amountOfLeftImages">0</span>                
								</div>
								<div className="f1 btn-training ff">
										<span id="amountOfCenterImages">0</span>                
								</div>
								<div className="f1 btn-training ff">
										<span id="amountOfRightImages">0</span>                
								</div>
						</div>
						<div className="buttons ff">
								<div className="f1 btn-train ff">
										<button id="train">Train</button><span id="loss"></span>
								</div>
						</div>
						<div className="buttons ff blackBG">
								<div className="f1 btn-train ff">
										<button id="buttonPredict">Start guessing!</button> 
								</div>
						</div>
				</div>
				<p>
						preducting at <span id="result">...</span>
				</p>
		</div> */}
		{/* <button id='ML'>ML Thing</button> */}
	</div>
</div>
	)}
} 

Box.propTypes = {
	changeThumb: PropTypes.func.isRequired,
}
  

  
export default connect(
mapStateToProps,
mapDispatchToProps
)(Box)
  
  // export default Box
  
import { connect } from 'react-redux';
import React, { Component } from 'react'
// import * as Actions from '../actions';
import classNames from 'classnames/bind'
import styles from './layout.scss';


const mapStateToProps = ({ projectIsActive, project, showMoreProject, imgProject }) => {
	return { projectIsActive, project, showMoreProject, imgProject }
}
	
// const mapDispatchToProps = dispatch => {
// return { 
//   closeProject: () => dispatch({ type: `CLOSEPROJECT` }),
// }
// }

const mapDispatchToProps = dispatch => {
	return { 
    closeProject: () => dispatch({ type: `CLOSEPROJECT`}),
    showMoreProjectProp: (stateProject) => dispatch({ type: `SHOWMOREPROJECT`, stateProject: stateProject}),
    resetImg: () => dispatch({type: 'RESETIMG', resetImg: 1})
  }
}


let cx = classNames.bind(styles);

class Project extends Component {	
	constructor(props) {
		super(props);
		this.state = {
      imgs: this.props.project.name,
      current: 1, 
      initIMG : false,
      thisIMG: this.props.imgProject
    }
	}	

  onClick = () => {
    this.setState({ thisIMG: 1})
    console.log('closing');

    this.props.closeProject()
    // this.props.resetImg()
  }

  showMoreProject = (stateProject) => {
    this.props.showMoreProjectProp(stateProject)
    // console.log(stateProject);
    this.Description.style.top = '45vh';
    this.Description.style.transform = 'translate-y(45vh)';
    this.Description.style.transition = "ease-in 0.5s";
    this.Description.style.overflowY = "scroll";

    if(this.props.showMoreProject){
      this.Description.style.top = '94vh';
      this.Description.style.fontSize = '1em';

    } else{
      this.Description.style.top = '45vh';
   
    }
    // console.log(this.Description);
  }

  loadImgs = (imgs) =>{

    if(imgs.length === 1 && this.state.current === 1){
      this.setState({ 
        imgs: imgs,
        amountImgs: imgs.length,
        current: 0,
      }
        )
    } else{
      this.setState({
        imgs: imgs,
        amountImgs: imgs.length,

      })
    }
  }

  changeIMG = (now) => {

    if(now + 1 > this.state.amountImgs-1){
      this.setState({ 
        current: 0,
        thisIMG: now + 1
      })
    }
    else{
      this.setState({
        current: now+1,
        thisIMG: this.state.current + 1
      })
    }
    this.Img.src = this.state.imgs[this.state.current]
    this.Description.style.top = '94vh';
    // this.Description.style.fontWeight = '600';
    // this.Description.style.fontSize = '1em';

    this.props.showMoreProjectProp(true)
  }

  componentWillReceiveProps(nextProps){
    this.setState({ current: nextProps.imgProject})
  }

  render() {
    const classNameMouse = cx({
      mouseCursor: this.props.projectIsActive === true
    });

    const p = this.props.project;
    const descriptionShort = p.description
    const imgs = this.props.project.imgs;
    const video = this.props.project.video;


    let projects = (
      
      <div className="Projects" onLoad={()=>this.loadImgs(p.imgs)} onClick={()=> this.changeIMG(this.state.current)}>
        <div className="Project--Title Bold" onClick={()=> this.onClick()}>
          <p> Alejandro </p>
          <p> Matamala Ortiz.</p>          
        </div>
        
        {video && this.state.current === 0 ? 
          <div style={{padding: '56.25% 0 0 0'}}>
          <iframe 
            title={p.name}
            key={video}
            src={p.imgs[p.imgs.length-1]}
            style={{
              position: 'absolute', 
              top: '20%', 
              left: '12%', 
              width: '75%', 
              height: '60%'
            }}
            frameBorder="0" 
            allowFullScreen>
          </iframe>
          </div>
        : 
        <img 
        src={this.props.projectIsActive ?  Object.values(imgs)[0] : null} 
        alt={p.name} 
        onClick={()=> this.changeIMG(this.state.current)}           
        ref={ref => { this.Img = ref }}
        />
      }
    
      </div>
    )
    
    return (
	<div className={classNameMouse}>
   
    {this.props.projectIsActive ? 
      <div> 
        <div className="Project--Close Bold" onClick={()=> this.onClick()}>
          <p onClick={()=> this.onClick()}>Close</p>
        </div>
        {projects} 

        <div className="Project--Description Bold" ref={ref => { this.Description = ref }} onClick={()=> this.showMoreProject(this.props.showMoreProject)} >
          {this.props.showMoreProject ? 
              <div> 
                <span style={{float:'left', paddingLeft: '3em', fontSize: '1em', paddingTop: '0.3em' }} className='Desktop'>{p.name} </span>
              <div style={{ fontSize: '3em', fontWeight: '400', textAlign: 'left'}} >
                <p style={{width: '50%', textAlign: 'left', marginLeft: '6em'}} className='whenMedium'>{descriptionShort}</p>
                <span style={{ position: 'absolute', top: '0.8em', right: '3em', fontSize: '0.5em', fontWeight: '600'}} className='Desktop'> 
                <span style={{color: '#a59d9d', fontSize: '0.8em' }}>Img: </span> 
                {this.state.thisIMG} /{p.imgs.length}</span>
              </div>
              </div>
            : 
            <div>
              <p> <span style={{float:'left', paddingLeft: '3em', }} className='Desktop'>{p.name}</span><span style={{width:'50%', textAlign: 'left',  marginLeft: '0em'}}  className='whenMediumClose' >{descriptionShort.substring(0,50)}... <span style={{color: '#a59d9d'}}>(read more)</span></span> <span style={{float: 'right', paddingRight: '4.5em'}} className='Desktop'> <span style={{color: '#a59d9d', fontSize: '0.8em' }} >Img:</span> {this.state.thisIMG} /{p.imgs.length}</span> </p>
            </div>
          }
        </div>
      </div>
      : 
      null
    }
        <script src="https://player.vimeo.com/api/player.js"></script>

	</div>    
	
  ) 
}

}

export default connect(
mapStateToProps,
mapDispatchToProps
)(Project)
  
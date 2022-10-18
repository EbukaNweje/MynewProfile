import React from 'react'
import "../css/Style.css"
import { CircularProgressbarWithChildren } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import {FiLinkedin, FiGlobe} from 'react-icons/fi'
import {AiFillGithub, AiOutlineTwitter} from 'react-icons/ai'
// import mycv from '../document/My Cv.pdf'
import myprofille from "../asset/52475096.png"

const RightMenu = () => {
  // const [close, setClose] = useState(true)
  // const {close} = props
  // console.log("this is it",props.close)

  const downloadFile = () => {
    window.location.href = "https://docs.google.com/document/d/1pdgBVxPf6QQxf47cyiOu8cIQfBo0iRY2TWSFXKqoHNU/edit?usp=sharing"
  }
  const Linkedin = () => {
    window.location.href = "https://www.linkedin.com/in/ebuka-nweje-b5993317a/"
  }
  // const MyWeb = () => {
  //   window.location.href = "https://docs.google.com/document/d/1pdgBVxPf6QQxf47cyiOu8cIQfBo0iRY2TWSFXKqoHNU/edit?usp=sharing"
  // }
  const Git = () => {
    window.location.href = "https://github.com/EbukaNweje"
  }
  const Twitter = () => {
    window.location.href = "https://twitter.com/NwejeEbuka"
  }
  return (
    <div className='RightContainerMain'>
    <div className='RightContainerCard'>
        {/* <div className='MyBobileMenu'><AiOutlineMenuFold className='MoblieTopIcon'/></div> */}
        <div className='Myprofile'>
            <div className='ProfilePix'>
              <img src={myprofille} alt="myprofile"/>
            </div>
            <h4>Ebuka Nweje F.</h4>
            <span>Full Stack Deweloper Ui/UX Designer,</span>
        </div>

    </div>

    <div className='AboutMeContainer'>
          <div className='AboutMeInfo'>
              <div className='AboutMeInfoWrapper'>
                <h6>Residence:</h6>
                <span>Nigeria</span>
              </div>
              <div className='AboutMeInfoWrapper'>
                <h6>City:</h6>
                <span>Lagos</span>
              </div>
              <div className='AboutMeInfoWrapper'>
                <h6>Age:</h6>
                <span>25</span>
              </div>
          </div>
          <div className='AboutMeInfo_Progress'>
              <div className='AboutMeInfoWrapper progressme'>
              <CircularProgressbarWithChildren value={45} 
              styles={{
                root: {},
                path: {
                  stroke: 'orange',
                },
                trail: {
                  stroke: '#d6d6d6',
                  strokeLinecap: 'butt',
                  transform: 'rotate(0.25turn)',
                  transformOrigin: 'center center',
                },
                text: {
                  fill: '#f88',
                  fontSize: '16px',
                },
                background: {
                  fill: '#3e98c7',
                },
              }}
              >
                  <div style={{ fontSize: 12, marginBottom: 1,   color: 'white'}}>
                   <strong>French</strong>
                 </div>
                  <div style={{ fontSize: 12, marginBottom: 1,   color: 'white'}}>
                   <strong>45%</strong>
                 </div>
              </CircularProgressbarWithChildren>;
              <CircularProgressbarWithChildren value={100} 
              styles={{
                root: {},
                path: {
                  stroke: 'orange',
                },
                trail: {
                  stroke: '#d6d6d6',
                  strokeLinecap: 'butt',
                  transform: 'rotate(0.25turn)',
                  transformOrigin: 'center center',
                },
                text: {
                  fill: '#f88',
                  fontSize: '16px',
                },
                background: {
                  fill: '#3e98c7',
                },
              }}
              >
                  <div style={{ fontSize: 12, marginBottom: 1,   color: 'white'}}>
                   <strong>English</strong>
                 </div>
                  <div style={{ fontSize: 12, marginBottom: 1,   color: 'white'}}>
                   <strong>100%</strong>
                 </div>
              </CircularProgressbarWithChildren>;
              <CircularProgressbarWithChildren value={50  } 
              styles={{
                root: {},
                path: {
                  stroke: 'orange',
                },
                trail: {
                  stroke: '#d6d6d6',
                  strokeLinecap: 'butt',
                  transform: 'rotate(0.25turn)',
                  transformOrigin: 'center center',
                },
                text: {
                  fill: '#f88',
                  fontSize: '16px',
                },
                background: {
                  fill: '#3e98c7',
                },
              }}
              >
                  <div style={{ fontSize: 12, marginBottom: 1,   color: 'white'}}>
                   <strong>Spanish</strong>
                 </div>
                  <div style={{ fontSize: 12, marginBottom: 1,   color: 'white'}}>
                   <strong>50%</strong>
                 </div>
              </CircularProgressbarWithChildren>;
              </div>
          </div>
          <div className='AboutMeInfo'>
              <div className='AboutMeInfoWrapper'>
                <h6>html:</h6>
                <span>100%</span>
              </div>
              <div className='AboutMeInfoWrapper'>
                <h6>css:</h6>
                <span>100%</span>
              </div>
              <div className='AboutMeInfoWrapper'>
                <h6>javascript:</h6>
                <span>95%</span>
              </div>
              <div className='AboutMeInfoWrapper'>
                <h6>reactJs:</h6>
                <span>95%</span>
              </div>
              <div className='AboutMeInfoWrapper'>
                <h6>redux:</h6>
                <span>95%</span>
              </div>
              <div className='AboutMeInfoWrapper'>
                <h6>react native:</h6>
                <span>95%</span>
              </div>
              <div className='AboutMeInfoWrapper'>
                <h6>node:</h6>
                <span>80%</span>
              </div>
              <div className='AboutMeInfoWrapper'>
                <h6>Git:</h6>
                <span>90%</span>
              </div>
              <div className='AboutMeInfoWrapper'>
                <h6>adobe xd:</h6>
                <span>70%</span>
              </div>
              <div className='AboutMeInfoWrapper'>
                <h6>figma:</h6>
                <span>70%</span>
              </div>
              <div className='AboutMeInfoWrapper'>
                <h6>photoshop:</h6>
                <span>90%</span>
              </div>
          </div>
          <div className='AboutMeInfo'>
              <div className='AboutMeInfoWrapper'>
                <button onClick={downloadFile}>View Cv</button>
              </div>
          </div>
    </div>

    

        <div className='IconFooter'>
            <FiLinkedin className='Icons' onClick={Linkedin}/>
            <FiGlobe className='Icons' onClick={Linkedin}/>
            <AiFillGithub className='Icons' onClick={Git}/>
            <AiOutlineTwitter className='Icons' onClick={Twitter}/>
        </div>
    </div>
  )
}

export default RightMenu
import React, { useState } from 'react'
import RightMenu from '../components/RightMenu'
import "../css/Style.css"
import "../css/Mobile.css"
import {AiOutlineMenuFold} from 'react-icons/ai'
import MobileMenu from '../components/MobileMenu'
import MyServices from '../components/MyServices'
// import Recommendations from '../components/Recommendations'
import MyPortfolio from '../components/MyPortfolio'

const Index = () => {
  const [toggle, setToggle] = useState(false)
  const closemenu = () =>{
    setToggle(!toggle)
    return toggle
  }

  const [exp, setExp] = useState([
    {
      id: 1,
      Years: "10+",
      expp: "Years Experience"
    },
    {
      id: 2,
      Years: "120",
      expp: "Completed Projects"
    },
    {
      id: 3,
      Years: "100+",
      expp: "Happy Customers"
    },
    {
      id: 4,
      Years: "20+",
      expp: "Honors and Awards"
    }
  ])

  console.log(setExp)
  const downloadFile = () => {
    window.location.href = "https://docs.google.com/document/d/1pdgBVxPf6QQxf47cyiOu8cIQfBo0iRY2TWSFXKqoHNU/edit?usp=sharing"
  }

  return (
    <div className='ContainerMain'>
        <div className='Wrapper'>
            <div className='RightContainer'>
                <RightMenu/>
            </div>
            <div className='LeftContainer'>
               <div className='LeftContainerTop'>
                <div className='MobileTop'><AiOutlineMenuFold className='MoblieTopIcon' onClick={closemenu}/></div>
                  {
                    toggle? <div className='MobileTop'><AiOutlineMenuFold className='MoblieTopIcon Close' onClick={closemenu}/></div>: null
                  }
                  
                {
                  toggle? <MobileMenu/> : null
                }
               </div>

               <div className='MyprofileBox'>
                  <div className='MyProfileBoxText'>
                    <h1>Hi, I'm Ebuka</h1>
                      <span>&lt;<i>code</i>&gt; &nbsp; <p> I'm a full Stack Developer. </p> &nbsp; &lt; <i>/code</i>&gt;</span>
                      <div row="button" className='BtnHir' onClick={downloadFile}>HIRE ME</div>
                  </div>
                  <div className='MyProfilePix'></div>
               </div>
              <div className="NumberWorkDone">
                 {
                  exp.map((props)=>(
                    <div className='Numberworkdonediv' key={props.id}>
                    <h1>{props.Years}</h1>
                    <span>{props.expp}</span>
                  </div>
                  ))
                 }
              </div>

              <div className='MyServices'>
                 <h3>My Services</h3>
                 <MyServices/>
              </div>

              {/* <div className='Recommendations'>
                 <h3>Recommendations</h3>
                 <Recommendations/>
              </div> */}

                <div className='MyPortfolio'>
                  <h3>My Portfolio</h3>
                  <MyPortfolio/>
                </div>
                <div className='Contactinformation'>
                  <h3>My Contact information</h3>
                    <div className='ContactinformationBody'>
                          <div className='ContactinformationBodyCard'>
                            <div className='ContactinformationBodyCardText'>
                              <span>Country:</span>
                              <p>Nigeria</p>
                            </div>
                            <div className='ContactinformationBodyCardText'>
                              <span>City:</span>
                              <p>Lagos</p>
                            </div>
                            <div className='ContactinformationBodyCardText'>
                              <span>Street:</span>
                              <p>2, Ojokus Street</p>
                            </div>
                          </div>
                          <div className='ContactinformationBodyCard'>
                          <div className='ContactinformationBodyCardText'>
                              <span>Email:</span>
                              <p>nwejeebuka@gmail.com</p>
                            </div>
                          <div className='ContactinformationBodyCardText'>
                              <span>Phone Number:</span>
                              <p>07087907340</p>
                            </div>
                          <div className='ContactinformationBodyCardText'>
                              <span>Linkedin:</span>
                              <p>Ebuka Nweje</p>
                            </div>
                          </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Index
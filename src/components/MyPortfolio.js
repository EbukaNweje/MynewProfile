import React,  { useState } from 'react'
import profile from "../asset/Saphillpalace.png"
import profile2 from "../asset/Get Verified on Instagram.png"
import profile3 from "../asset/hotel.png"
import profile4 from "../asset/Dictionary.png"
import profile5 from "../asset/Space Travelers' Hub.png"
import profile6 from "../asset/INVOICE.png"
import profile7 from "../asset/jumia.png"
import profile8 from "../asset/calculator.png"

const MyPortfolio = () => {
const [data, setData] = useState([
    {
        id : 1,
        projectName: "Saphillpalace",
        link: "https://saphillpalace.netlify.app/",
        dec: "Site build with ReactJs, Rudex and NodeJs",
        img: profile,
    },
    {
        id : 2,
        projectName: "Get Verified on Instagram",
        link: "https://instagambadgeapprovedfrom.netlify.app/",
        dec: "Site build with ReactJs, Rudex and NodeJs",
        img: profile2,
    },
    {
        id : 3,
        projectName: "micro-hotel-reservation",
        link: "https://micro-hotel-reservation.netlify.app/",
        dec: "Site build with ReactJs, Rudex and NodeJs",
        img: profile3,
    },
    {
        id : 4,
        projectName: "Dictionary",
        link: "https://incandescent-puffpuff-380218.netlify.app/",
        dec: "Site build with ReactJs, Rudex and NodeJs",
        img: profile4,
    },
    {
        id : 5,
        projectName: "Space Travelers' Hub",
        link: "https://gorgeous-melba-746edd.netlify.app/",
        dec: "Site build with ReactJs, Rudex and Api",
        img: profile5,
    },
    {
        id : 6,
        projectName: "INVOICE",
        link: "https://quiet-gumption-03c9ae.netlify.app",
        dec: "Site build with ReactJs, Rudex and Api",
        img: profile6,
    },
    {
        id : 7,
        projectName: "JumiaSite Clone",
        link: "https://ebukanweje.github.io/JumiaSite/",
        dec: "Site build with Html and Css",
        img: profile7,
    },
    {
        id : 8,
        projectName: "calculator",
        link: "https://ebukanweje.github.io/A-Simple-calculator/",
        dec: "Site build with Html and Css",
        img: profile8,
    },
])

console.log(setData)

  return (
    <div className='PortfoiloBody'>
       {
        data.map((props)=>(
            <div class="containerPro" key={props.id}>
            <div class="Procard">
                <div class="slide slide1">
                    <div class="content">
                        <div class="icon">
                            <img src={props.img} alt='PorfoiloImg'/>
                            {/* <i class="fa fa-user-circle" aria-hidden="true"></i> */}
                        </div>
                    </div>
                </div>
                <div class="slide slide2">
                    <div class="content">
                        <h3>
                           {props.projectName}
                        </h3>
                        <p>{props.dec}</p>
                        <div className='MyProBtn'>
                                <button onClick={()=>{window.location.href =props.link}}>View Live</button>
                                {/* <button>View Code</button> */}
                        </div>
                    </div>
                </div>
            </div>
            </div>
        ))
       }
    </div>
  )
}

export default MyPortfolio
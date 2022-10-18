import React, {useState} from 'react'

const MyServices = () => {
    const [service, setService] = useState([
        {
          id: 1,
          serviceHeader: "Web Development",
          serviceDic: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus esse commodi deserunt vitae, vero quasi! Veniam quaerat tenetur pariatur doloribus."
        },
        {
          id: 2,
          serviceHeader: "UI/UX Design",
          serviceDic: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus esse commodi deserunt vitae, vero quasi! Veniam quaerat tenetur pariatur doloribus."
        },
        {
          id: 3,
          serviceHeader: "Mobile App Development",
          serviceDic: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus esse commodi deserunt vitae, vero quasi! Veniam quaerat tenetur pariatur doloribus."
        },
        {
          id: 4,
          serviceHeader: "Graphic Design",
          serviceDic: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus esse commodi deserunt vitae, vero quasi! Veniam quaerat tenetur pariatur doloribus."
        },
        {
          id: 5,
          serviceHeader: "Advertising",
          serviceDic: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus esse commodi deserunt vitae, vero quasi! Veniam quaerat tenetur pariatur doloribus."
        },
      ])

      console.log(setService)
      const downloadFile = () => {
        window.location.href = "https://docs.google.com/document/d/1pdgBVxPf6QQxf47cyiOu8cIQfBo0iRY2TWSFXKqoHNU/edit?usp=sharing"
      }

  return (
    <div className='MyServicesBody'>
        {
            service.map((props)=>(
                <div className='MyServicesBodyCard' key={props.id}>
            <h3>{props.serviceHeader}</h3>
            <p>{props.serviceDic}</p>
            <span role={button} onClick={downloadFile}>HIRE ME</span>
        </div>
            ))
        }
    </div>
  )
}

export default MyServices
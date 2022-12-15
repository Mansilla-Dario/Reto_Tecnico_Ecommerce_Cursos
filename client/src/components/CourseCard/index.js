import React from 'react'
import AddIcon from '../AddIcon'
import './coursecard.css'
import { MdAddCircle } from "react-icons/md";
import { MdOutlineCheckCircleOutline } from "react-icons/md";
import Rating from '../Rating';
import axios from 'axios';

function CourseCard(props) {
  const [authors,setAuthors] = React.useState(null);
  const [authorsName,setAuthorName] = React.useState("");

  const getAuthors=async ()=>{
    try {
      const response = await axios.get('http://localhost:4000/api/authors');
      
      const auxAuthorsArray=  response.data;
      console.log(response.data)
      setAuthors(auxAuthorsArray)
    } catch (error) {
      console.error(error);
    }
  }
  const getAuthorName=()=>{
    authors.map(obj=>{
      if(obj.id===props.autor){
        setAuthorName(obj.firstName + " "+ obj.lastName )
        console.log(obj.firstName)
      }
    })
  }
  React.useEffect(()=>{
    getAuthors();
    },[])
  React.useEffect(()=>{
    if(!!authors){
      getAuthorName();
    }
    },[authors])
  return (
    <>
      <div className="card cardW">
        <img src={props.img} className="card-img-top" alt="Chicago Skyscrapers"/>
        <div className="card-body">
          <small className="card-title text-primary"><strong>{props.title}</strong></small>
          
          <p className="card-text">{props.desciption}</p>
        </div>
        <ul className="list-group list-group-light list-group-small">
          <li className="list-group-item px-4"><strong>Autor:</strong> {authorsName}</li>
          
        </ul>

        {/* A partir de la siguiente linea se podria crear un evento onChange con una funcion para que el usuario cuya sesion se encuentra Activa pueda matricularse a un curso si aun no esta matriculado (followed=false) */}

        {props.followed?(<div className="card-body">
          <i className="iconAddCourse d-flex justify-content-center align-items-center"><MdOutlineCheckCircleOutline /></i>
        </div>):(<div className="card-body d-flex justify-content-center align-items-center">
          <i className="iconAddCourse"><MdAddCircle /></i>
        </div>)}
        <Rating
          rating={props.rating}
        />
      </div>
    </>
  )
}

export default CourseCard
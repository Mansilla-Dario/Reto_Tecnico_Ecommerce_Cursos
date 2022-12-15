import React from 'react'
import AddIcon from '../AddIcon'
import './coursecard.css'
import { MdAddCircle } from "react-icons/md";
import { MdOutlineCheckCircleOutline } from "react-icons/md";
import Rating from '../Rating';

function CourseCard(props) {
  return (
    <>
      <div className="card cardW">
        <img src={props.img} className="card-img-top" alt="Chicago Skyscrapers"/>
        <div className="card-body">
          <small className="card-title text-primary"><strong>{props.title}</strong></small>
          
          <p className="card-text">{props.desciption}</p>
        </div>
        <ul className="list-group list-group-light list-group-small">
          <li className="list-group-item px-4"><strong>Autor:</strong> {props.autor}</li>
          
        </ul>
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
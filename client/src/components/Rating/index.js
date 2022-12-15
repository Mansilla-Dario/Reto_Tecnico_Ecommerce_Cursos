import React from 'react';
import './rating.css'
import { MdOutlineStarBorder } from "react-icons/md";
import { MdOutlineStarHalf } from "react-icons/md";
import { MdOutlineStarPurple500 } from "react-icons/md";


function Rating({rating}) {
  const entero= Math.trunc(rating);
  let fraccion=0;
  if(rating!== entero){
      if(rating >= (entero+0.5)){
        fraccion=1
      }
  }
  const diferencia = 5-Math.round(rating)
  return (
    <>
    <div className="container">
      <div className="row">
      <div className="col d-flex justify-content-center align-items-center">
        <small>Calificación Promedio</small>
      </div>
      </div>
      <div className="row ">
        <div className="col d-flex justify-content-center align-items-center">
          

          {[...Array(entero)].map((star,i)=>{
            return (
              <i className="iconStar" key={i}><MdOutlineStarPurple500 /></i>
            )
          })}
          {[...Array(fraccion)].map((star,i)=>{
            return (
              <i className="iconStar" key={i}><MdOutlineStarHalf /></i>
            )
          })}
          {diferencia>0&&[...Array(diferencia)].map((star,i)=>{
            return (
              <i className="iconStar" key={i}><MdOutlineStarBorder /></i>
            )
          })}
        </div>
      </div>
    </div>
    </>
  )
}

export default Rating
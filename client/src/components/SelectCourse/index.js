import React from 'react'
import { useNavigate } from "react-router-dom";
import axios from 'axios';


function SelectCourse(props) {
  const navigate = useNavigate();
  const [courses,setCourses] = React.useState(null)
  const [courseSelected,setCourseSelected] = React.useState(null)

  const deleteCourse=async ()=>{
    try {
      const response = await axios.delete(`http://localhost:4000/api/courses/${courseSelected}`);
      
    } catch (error) {
      console.error(error);
    }
  }
  const getCourses=async ()=>{
    try {
      const response = await axios.get('http://localhost:4000/api/courses');
      console.log(response.data)
      const auxCourseArray=  response.data;
      setCourses(auxCourseArray);
    } catch (error) {
      console.error(error);
    }
  }
  const onHandleChange=(e)=>{
    const aux=e.target.value;
    setCourseSelected(aux);
  }
  const onHandleNavigate=()=>{
    switch(props.motivo){
      case "remover":
        deleteCourse();
        navigate(`/`)
        break;
      case "editar":
        navigate(`/add-course/${courseSelected}`)
        break;
      default:
        break
    }
  }

  React.useEffect(()=>{
    getCourses();
   },[])
  return (
    <>
      <div className="container col-sm-12">
      <div className="row d-flex justify-content-center align-items-center">
        <div className="col-md-6 mt-5 ">
          <button className="btn btn-primary px-5 mx-0  mb-5"  onClick={()=>navigate("/")}>Volver a Inicio</button>
        </div>
      </div>


      <div className="row d-flex justify-content-center align-items-center">
        <div className="col-md-6 mt-5">
          <div className="form-floating">
            <select className="form-select" id="floatingSelect" onChange={onHandleChange}>
              <option  defaultValue> ...</option>
            {!!courses&&courses.map((obj,i)=>(<option value={obj.id} key={obj.id}>{obj.courseName}</option>))}
              
            </select>
            <label>Seleccione el Curso que desea {props.motivo}</label>
          </div>
        </div> 
      </div>
      <div className="row d-flex justify-content-center align-items-center">
        <div className="col-md-6 mt-5 d-flex justify-content-center align-items-center">
          <button className="btn btn-primary px-5 mx-0"  onClick={onHandleNavigate}>Siguiente</button>
        </div>
      </div>
      </div>
    </>
  )
}

export default SelectCourse
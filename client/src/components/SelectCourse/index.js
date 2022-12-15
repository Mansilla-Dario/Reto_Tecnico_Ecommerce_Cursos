import React from 'react'
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import swal from 'sweetalert';


function SelectCourse(props) {
  const navigate = useNavigate();
  const [courses,setCourses] = React.useState(null)
  const [btnName,setBtnName] = React.useState("")
  const [courseSelected,setCourseSelected] = React.useState(null)
  const deleteCourseAction = async (id) => {
    const response = await axios.delete(`http://localhost:4000/api/courses/${courseSelected}`);
    }
  const deleteCourse=async ()=>{
    try {
      swal({
        title: "Deseas Eliminar este curso?",
        text: "Una vez lo elimines de la base de datos, no podrás recuperarlo nuevamente",
        icon: "warning",
        buttons: true,
        dangerMode: true,
      })
      .then((willDelete) => {
        if (willDelete) {
          deleteCourseAction();
          swal("Poof! El Curso ha sido eliminado de la base de datos!", {
            icon: "success",
          });
         
        } else {
          swal("EL curso aún sigue a salvo!");
          return;
        }
      });
     
      
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
  const onHandleNavigate=async ()=>{
    switch(props.motivo){
      case "remover":
        deleteCourse();
        
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
    switch(props.motivo){
      case "remover":
        setBtnName("Eliminar")
        break;
      case "editar":
        setBtnName("Editar")
        break;
      default:
        break
    }
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
          <button className="btn btn-primary px-5 mx-0"  onClick={onHandleNavigate}>{btnName}</button>
        </div>
      </div>
      </div>
    </>
  )
}

export default SelectCourse
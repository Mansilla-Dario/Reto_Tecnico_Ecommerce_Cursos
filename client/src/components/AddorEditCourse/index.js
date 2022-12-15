import React from 'react';
import { useNavigate, useParams } from "react-router-dom";
import './editarCurso.css';
import axios from 'axios';
import swal from 'sweetalert';

function AddorEditCourse() {
  const navigate = useNavigate();
  const [newCourse, setNewCourse] = React.useState({})
  const params = useParams();

  const createNewCourses=async ()=>{
    try {

      const response = await axios.post('http://localhost:4000/api/courses',{
        courseName:newCourse.courseName,
        authors_id:newCourse.authors_id,
        summary:newCourse.summary
      })
      .then(function (response) {
        console.log(response.data)
      });
      
    } catch (error) {
      console.error(error);
    }
  }
  const updateCourse=async (id)=>{
    try {
        const response = await axios.put(`http://localhost:4000/api/courses/${id}`,{
          courseName:newCourse.courseName,
          authors_id:newCourse.authors_id,
          summary:newCourse.summary,
        })
    } catch (error) {
      console.error(error);
    }
  }
  const getCourseById=async (id)=>{
    try {
        const response = await axios.get(`http://localhost:4000/api/courses/${id}`)
        console.log("response--",response.data)
      
        const auxCourse={
          authors_id:response.data.authors_id,
          courseName:response.data.courseName,
          id:response.data.id,
          summary:response.data.summary,
        }
        setNewCourse(auxCourse)
      
      
    } catch (error) {
      console.error(error);
    }
  }
  const onHandleChange=(e)=>{
    const aux={
      ...newCourse,
      [e.target.name]:e.target.value
    }
    setNewCourse(aux);
  }
  
  const onHandleSubmit=async(e)=>{
    e.preventDefault();
    if(!!params.id){
      await updateCourse(params.id)
      swal("El curso ha sido actualizado!").then(navigate("/"))
        
      
    }else{
      await createNewCourses();
      swal("El curso ha sido creado!").then(navigate("/"))
    }
    }
  
    React.useEffect(()=>{
     if (!!params.id){
      getCourseById(params.id)
     }
      
    },[])
  console.log("newCourse:",newCourse)
  
  return (
    <>
      <div className="container col-sm-12">
        <div className="row col-sm-12 mb-5" >
          <button className="btn btn-primary px-5 mx-0"  onClick={()=>navigate("/")}>Volver a Inicio</button>
        </div>
        <div className="row col-sm-12 mb-5" >
          <form className="row g-3 needs-validation" onSubmit={onHandleSubmit}>
            <div className="row d-flex justify-content-center align-items-center">
              <div className="col-md-6">
              <div className="form-floating">
                <textarea className="form-control descriptionInput mb-3" value={newCourse.courseName} id="floatingTextarea2" name="courseName" onChange={onHandleChange}></textarea>
                <label >Nombre del Curso</label>
              </div>
             </div>
            </div>

            <div className="row d-flex justify-content-center align-items-center">
              <div className="col-md-6">
                <div className="form-floating">
                  <textarea className="form-control descriptionInput mb-3" id="floatingTextarea2" value={newCourse.summary} name="summary" onChange={onHandleChange}></textarea>
                  <label >Descripción</label>
                </div>
              </div> 
            </div>
            <div className="row d-flex justify-content-center align-items-center">
              <div className="col-md-6">
                <div className="form-floating">
                  <select className="form-select" id="floatingSelect" value={newCourse.authors_id} name="authors_id" onChange={onHandleChange}>
                    <option  defaultValue> ...</option>
                    <option value="1">author 1</option>
                    <option value="2">author 2</option>
                    <option value="3">author 3</option>
                  </select>
                  <label>Seleccione el Autor para este curso</label>
                </div>
              </div> 
            </div>
            
            
            <div className="col-12 d-flex justify-content-center align-items-center">
              <button className="btn btn-primary" type="submit">Guardar</button>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default AddorEditCourse
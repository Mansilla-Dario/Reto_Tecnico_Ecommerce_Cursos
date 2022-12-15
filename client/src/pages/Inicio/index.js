import React from 'react'
import CourseCard from '../../components/CourseCard'
import Header from '../../components/Header';
import BackOffice from '../../components/BackOffice';
import axios from 'axios';

function Inicio() {
  const [courses,setCourses] = React.useState(null)
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
  const getAuthors=async ()=>{
    try {
      const response = await axios.get('http://localhost:4000/api/authors');
      console.log("Autores ",response.data)
      const auxAuthorsArray=  response.data;
      
    } catch (error) {
      console.error(error);
    }
  }
  const getRatingCourse=async (courseID)=>{
   // console.log("courseID: ", courseID)
    try {
      const response = await axios.post("http://localhost:4000/api/courses-rating",{  courseID:courseID } );
      console.log("res esperada: ",response.data)
     return response.data
    } catch (error) {
      console.error(error);
    }
  }
 const addRatingToArrayCourses=()=>{
   if(!!courses){
     const auxCourses=courses;
     const arrayID=[];
     auxCourses.map((obj,i)=>{
       arrayID.push(getRatingCourse(obj.id))
     })
     console.log("arrayID", arrayID)
     auxCourses.map((obj,i)=>{
       auxCourses[i]={
         ...auxCourses[i],
         rating:4.5
       }
     })
     setCourses(auxCourses)
   }
 }

React.useEffect(()=>{
 getCourses();
 getAuthors();
},[])
React.useEffect(()=>{
  if(!!courses){
    courses.map(obj=>{
     getRatingCourse(obj.id)
    })

  }
// getRatingCourse("4")
 },[courses])
  return (
    <>
    <div className="container col-sm-12">
      <div className="row col-sm-12 mb-5" >
        <BackOffice/>
        <Header/>
      </div>
      <div className="row col-sm-12  " >
        
          {!!courses&&courses.map((obj,i)=>(
             <div className="col-sm-3 mb-3" key={i}>
                <CourseCard
                  img={"https://mdbcdn.b-cdn.net/img/new/standard/city/062.webp"}
                  title={obj.courseName}
                  desciption={obj.summary}
                  autor={"Germancito"}
                  followed={false}
                  rating={2.5}
                />
            </div>
          ))}


         
        
        
        
        
      </div>
    </div>
      
    </>
  )
}

export default Inicio
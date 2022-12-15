import React from 'react';
import { useNavigate } from "react-router-dom";

function BackOffice() {
  const navigate = useNavigate();

  return (
    <>
    {/* <!-- Navbar --> */}
      <nav className="navbar navbar-expand-lg navbar-light bg-white">
        <div className="container-fluid">
          <div className="collapse navbar-collapse" id="navbarExample01">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item active">
                <button className="btn btn-primary px-5 mx-0"  onClick={()=>navigate("/add-course")}>Agregar Nuevo Curso</button>
              </li>
              <li className="nav-item active">
                <button className="btn btn-primary mx-2 px-5 mx-0"  onClick={()=>navigate("/edit-course")}>Editar Nuevo Curso</button>
              </li>
              <li className="nav-item active">
                <button className="btn btn-primary mx-2 px-5 mx-0"  onClick={()=>navigate("/remove-course")}>Eliminar Nuevo Curso</button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      {/* <!-- Navbar --> */}
    </>
  )
}

export default BackOffice
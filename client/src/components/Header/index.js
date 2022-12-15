import React from 'react'
import './header.css'
function Header() {
  return (
    <>
      <header>
        

        {/* <!-- Background image --> */}
        <div className=" text-center bg-image bgImage ">
          <div className="mask colorRGBA-1" >
            <div className="d-flex justify-content-center align-items-center h-100">
              <div className="text-white">
                <h1 className="mb-3">Ecommerce Cursos Online</h1>
                <h4 className="mb-3">Nunca pares de aprender!</h4>
               
              </div>
            </div>
          </div>
        </div>
        {/* <!-- Background image --> */}
      </header>
    </>
  )
}

export default Header
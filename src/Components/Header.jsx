import React from "react";
import { useNavigate } from "react-router-dom";

function Header() {
    const navigate=useNavigate()
    const navigateStaus=()=>{
        navigate('/status')
    }
    const navigateDraft=()=>{
        navigate('/draft')
    }
  return (
    <>
      <div className="flex justify-between px-20 py-10 ">
        <h1 className="text-3xl font-bold">Ombrulla</h1>

        <div className="flex items-center">
          
          <div className="flex ms-2">
            <div className="">
              <button onClick={()=>navigateStaus()}>Published</button>
            </div >
            <div className="ms-2">
            <button onClick={()=>navigateDraft()}>Draft</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;

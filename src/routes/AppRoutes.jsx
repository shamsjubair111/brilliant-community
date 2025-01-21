// routes/AppRoutes.jsx
import React from "react";
import LeftDrawer from "../components/layout/LeftDrawer";
import NavBar from "../components/layout/NavBar";
import RightLayout from "../components/layout/RightLayout";

const AppRoutes = () => {
  return (

     <div>

        <NavBar/>

     <div className="grid grid-cols-12">
       
       <div className="col-span-2" >
         <LeftDrawer/>
       </div>
    
       <div className="col-span-10">

       <RightLayout/>

       </div>
     </div>
    
     </div>
  );
};

export default AppRoutes;

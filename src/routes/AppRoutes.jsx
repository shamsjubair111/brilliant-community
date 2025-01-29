// routes/AppRoutes.jsx
import React, { useState } from "react";
import LeftDrawer from "../components/layout/LeftDrawer";
import NavBar from "../components/layout/NavBar";
import RightLayout from "../components/layout/RightLayout";

const AppRoutes = () => {

      const [isDrawerOpen, setIsDrawerOpen] = useState(true);
  
      const openDrawer = () => setIsDrawerOpen(true);
      const closeDrawer = () => setIsDrawerOpen(false);

      const toggleDrawer = () => {
        setIsDrawerOpen(!isDrawerOpen);
      }

  return (

     <div>

        <NavBar isDrawerOpen={isDrawerOpen} setIsDrawerOpen={setIsDrawerOpen} toggleDrawer={toggleDrawer}/>

     {
      isDrawerOpen ? 
      <div className="grid grid-cols-12">
       
       <div className="col-span-2" >
         <LeftDrawer isDrawerOpen={isDrawerOpen} setIsDrawerOpen={setIsDrawerOpen} toggleDrawer={toggleDrawer}/>
       </div>
    
       <div className="col-span-10">

       <RightLayout/>

       </div>
     </div>
     :
     <div className="grid grid-cols-12">
       
       <div className="col-span-0 " >
         <LeftDrawer isDrawerOpen={isDrawerOpen} setIsDrawerOpen={setIsDrawerOpen} toggleDrawer={toggleDrawer}/>
       </div>
    
       <div className="col-span-12">

       <RightLayout/>

       </div>
     </div>

     }
    
     </div>
  );
};

export default AppRoutes;

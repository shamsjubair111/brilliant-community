import React from 'react';
import { Routes, Route } from "react-router-dom";
import HomePage from "../../pages/HomePage";
import KnowledgeBaseOne from "../../pages/KnowledgeBaseOne";
import KnowledgeBaseTwo from "../../pages/KnowledgeBaseTwo";
import Activity from "../../pages/Activity";
import Messages from "../../pages/Messages";
import Members from "../../pages/Members";
import Groups from "../../pages/Groups";
import Forums from "../../pages/Forums";
import Courses from "../../pages/Courses";
import Shop from "../../pages/Shop";
import Membership from "../../pages/Membership";
import Events from "../../pages/Events";
import News from "../../pages/News";
import Jobs from "../../pages/Jobs";
import ErrorPage from "../../pages/ErrorPage";

const RightLayout = () => {

    return (
        <div style={{backgroundColor:"#e9eaf0"}}>

       <Routes>
       <Route path="/" element={<HomePage />} />
       <Route path="/home-page" element={<HomePage />} />
       <Route path="/knowledge-base-1" element={<KnowledgeBaseOne />} />
       <Route path="/knowledge-base-2" element={<KnowledgeBaseTwo />} />
       <Route path="/activity" element={<Activity />} />
       <Route path="/messages" element={<Messages />} />
       <Route path="/members" element={<Members />} />
       <Route path="/groups" element={<Groups />} />
       <Route path="/forums" element={<Forums />} />
       <Route path="/courses" element={<Courses />} />
       <Route path="/shop" element={<Shop />} />
       <Route path="/membership" element={<Membership />} />
       <Route path="/events" element={<Events />} />
       <Route path="/news" element={<News />} />
       <Route path="/jobs" element={<Jobs />} />
       <Route path="*" element={<ErrorPage />} /> 
       </Routes>
            
        </div>
    );
};

export default RightLayout;
import React from 'react';
import { Routes, Route } from "react-router-dom";
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
import HomePageOne from '../../pages/HomePageOne';
import HomePageTwo from '../../pages/HomePageTwo';
import HomepageThree from '../../pages/HomepageThree';
import MemberActivity from '../../pages/MemberActivity';
import MemberProfile from '../../pages/MemberProfile';
import MemberProfileSettings from '../../pages/MemberProfileSettings';
import MemberAccountSettings from '../../pages/MemberAccountSettings';
import MemberPrivacyAndSecurity from '../../pages/MemberPrivacyAndSecurity';
import MemberNotification from '../../pages/MemberNotification';
import MemberGeneral from '../../pages/MemberGeneral';
import MemberNotificationCount from '../../pages/MemberNotificationCount';
import MemberForums from '../../pages/MemberForums';
import ForumsGeneralDiscussion from '../../pages/ForumsGeneralDiscussion';
import ForumsDigitalEntertainment from '../../pages/ForumsDigitalEntertainment';
import GroupList from '../../pages/GroupList';
import BadgeList from '../../pages/BadgeList';
import RankList from '../../pages/RankList';
import BusinessPageGroup from '../../pages/BusinessPageGroup';
import BusinessTopics from '../../pages/BusinessTopics';
import BusinessMembers from '../../pages/BusinessMembers';
import BusinessFriendsSelect from '../../pages/BusinessFriendsSelect';
import BusinessMediaGallery from '../../pages/BusinessMediaGallery';
import BusinessMessages from '../../pages/BusinessMessages';
import BusinessDocs from '../../pages/BusinessDocs';
import BusinessCourse from '../../pages/BusinessCourse';

const RightLayout = () => {

    return (
        <div style={{backgroundColor:"#e9eaf0"}}>

       <Routes>
       <Route path="/" element={<HomePageOne />} />
       <Route path="/home-page-1" element={<HomePageOne />} />
       <Route path="/home-page-2" element={<HomePageTwo />} />
       <Route path="/home-page-3" element={<HomepageThree />} />
       <Route path="/knowledge-base-1" element={<KnowledgeBaseOne />} />
       <Route path="/knowledge-base-2" element={<KnowledgeBaseTwo />} />
       <Route path="/activity" element={<Activity />} />
       <Route path="/messages" element={<Messages />} />
       <Route path="/members" element={<Members />} />
       <Route path="/member-forums" element={<MemberForums />} />
       <Route path="/forums-general-discussion" element={<ForumsGeneralDiscussion />} />
       <Route path="/member-activity" element={<MemberActivity />} />
       <Route path="/member-notification-count" element={<MemberNotificationCount />} />
       <Route path="/forums-digital-entertainment" element={<ForumsDigitalEntertainment />} />
       <Route path="/member-profile" element={<MemberProfile />} />
       <Route path="/member-notification" element={<MemberNotification />} />
       <Route path="/member-general" element={<MemberGeneral />} />
       <Route path="/member-profile-settings" element={<MemberProfileSettings />} />
       <Route path="/member-account-settings" element={<MemberAccountSettings />} />
       <Route path="/member-privacy-and-security" element={<MemberPrivacyAndSecurity />} />
       <Route path="/groups" element={<Groups />} />
       <Route path="/forums" element={<Forums />} />
       <Route path="/courses" element={<Courses />} />
       <Route path="/shop" element={<Shop />} />
       <Route path="/membership" element={<Membership />} />
       <Route path="/events" element={<Events />} />
       <Route path="/news" element={<News />} />
       <Route path="/jobs" element={<Jobs />} />
       <Route path="/groupList" element={<GroupList />} />
       <Route path="/badgeList" element={<BadgeList />} />
       <Route path="/rankList" element={<RankList />} />
       <Route path="/businessPage" element={<BusinessPageGroup />} />
       <Route path="/businessTopics" element={<BusinessTopics />} />
       <Route path="/businessMembers" element={<BusinessMembers />} />
       <Route path="/businessFriendsSelect" element={<BusinessFriendsSelect />} />
       <Route path="/businessMediaGallery" element={<BusinessMediaGallery />} />
       <Route path="/businessMessages" element={<BusinessMessages />} />
       <Route path="/businessDocs" element={<BusinessDocs />} />
       <Route path="/businessCourse" element={<BusinessCourse />} />
       <Route path="*" element={<ErrorPage />} /> 
       </Routes>
            
        </div>
    );
};

export default RightLayout;
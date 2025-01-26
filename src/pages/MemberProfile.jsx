import React from 'react';
import MemberActivityHeader from '../components/common/MemberActivityHeader';
import ActiveMembers from '../components/common/ActiveMembers';
import LatestActivities from '../components/common/LatestActivities';
import Members from '../components/common/Members';

const MemberProfile = () => {

    const personalInfo = [
        { label: "Name", value: "Jessica CJ" },
        { label: "Gender", value: "Female" },
        { label: "Birthday", value: "12/30/1995" },
        { label: "Employment", value: "UI/UX Designer" },
        { label: "Location", value: "10 Mills Street, Albion dc, Queensland 4010, Australia" },
        { label: "Email", value: "info@example.com" },
        { label: "Phone", value: "(555) 555-5555" },
        { label: "Website", value: "https://example.com", isLink: true },
      ]
    
      const socialNetworks = [
        { name: "Facebook", url: "https://facebook.com/" },
        { name: "X (Twitter)", url: "https://x.com/" },
        { name: "YouTube", url: "https://youtube.com/" },
        { name: "Instagram", url: "https://instagram.com/" },
        { name: "Behance", url: "https://behance.com/" },
      ]
    
      const hobbies = [
        { label: "My Hobbies", value: "Yoga, Piano, dance, surf, express flexibility" },
        { label: "Favorite Music Bands/Artists", value: "Lady Gaga" },
        { label: "Favorite TV Shows", value: "Game of Thrones, Sherlock" },
        { label: "Favorite Books", value: "Lord of the Rings" },
        { label: "Favorite Movies", value: "The Scariest Movie! and Fun Film Green" },
        { label: "Other Activities", value: "Swimming, Surfing, Anime, Photography" },
      ]

    return (

     

        <div>

        <div className='shadow-lg'><MemberActivityHeader/></div>

        <div class="grid grid-cols-12">

        <div class="col-span-9">

        <div className="max-w-3xl m-8">
      {/* Personal Information Section */}
            <section className="rounded-xl p-6 mb-8">
                <div className="flex items-center justify-between mb-6">
                <h2 className="text-lg font-semibold text-gray-900">Personal Information</h2>
                <button className="text-blue-600 hover:text-blue-700">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                    />
                    </svg>
                </button>
                </div>
                <dl className="space-y-4">
                {personalInfo.map((item) => (
                    <div key={item.label} className="grid grid-cols-3 gap-4">
                    <dt className="text-sm font-medium text-gray-500">{item.label}</dt>
                    <dd className="text-sm text-gray-900 col-span-2">
                        {item.isLink ? (
                        <a href={item.value} className="text-blue-600 hover:underline">
                            {item.value}
                        </a>
                        ) : (
                        item.value
                        )}
                    </dd>
                    </div>
                ))}
                </dl>
            </section>

            {/* Social Networks Section */}
            <section className="rounded-xl p-6">
                <div className="flex items-center justify-between mb-6">
                <h2 className="text-lg font-semibold text-gray-900">Social Networks</h2>
                <button className="text-blue-600 hover:text-blue-700">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                    />
                    </svg>
                </button>
                </div>
                <div className="space-y-4">
                {socialNetworks.map((network) => (
                    <div key={network.name} className="grid grid-cols-3 gap-4">
                    <dt className="text-sm font-medium text-gray-500">{network.name}</dt>
                    <dd className="text-sm col-span-2">
                        <a href={network.url} className="text-blue-600 hover:underline">
                        {network.url}
                        </a>
                    </dd>
                    </div>
                ))}
                </div>
            </section>

            {/* Hobbies And Interest Section */}
            <section className="rounded-xl p-6">
                <div className="flex items-center justify-between mb-6">
                <h2 className="text-lg font-semibold text-gray-900">Hobbies And Interest</h2>
                <button className="text-blue-600 hover:text-blue-700">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                    />
                    </svg>
                </button>
                </div>
                <dl className="space-y-4">
                {hobbies.map((hobby) => (
                    <div key={hobby.label} className="grid grid-cols-3 gap-4">
                    <dt className="text-sm font-medium text-gray-500">{hobby.label}</dt>
                    <dd className="text-sm text-gray-900 col-span-2">{hobby.value}</dd>
                    </div>
                ))}
                </dl>
            </section>
            </div>

            
        </div>


        <div class="col-span-3 p-4 rounded">
            
        <div className='mt-4'><ActiveMembers/></div>

        <div className='mt-8'><LatestActivities/></div>

        <div className='mt-8'><Members/></div>

        </div>
        </div>

        </div>

    );
};

export default MemberProfile;
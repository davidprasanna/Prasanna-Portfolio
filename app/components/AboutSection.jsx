"use client";
import React, { useTransition, useState } from "react";
import './AboutSection.css'
import TabButton from "./TabButton";


const mySkills = [
  'React',
  'Angular',
  'Laravel',
  'Flask',
  'Python',
  'JavaScript',
  'PHP',
  'SQL',
  'Docker',
  'AWS Services'
]

const education = [
  {
    'year': '2014 - 2018',
    'collage': 'Chennai institute of Technology',
    'studied': 'Mechatronics Engg',
    'percentage': '74.00%'
  },
  {
    'year': '2013 - 2014',
    'collage': 'The Wesley’s Matric Hr Sec School',
    'studied': 'Higher Secondary (HSC)',
    'percentage': '71.17%'
  },
  {
    'year': '2011 - 2012',
    'collage': 'The Wesley’s Matric Hr Sec School',
    'studied': 'Secondary School Leaving Certificate (SSLC)',
    'percentage': '76.40%'
  }
]

const experience = [
  {
    'years': 'SEPT 2021 - Present',
    'Company': 'Whirldata Inc',
    'Role': 'Solution Associate'
  },
  {
    'years': 'APR 2019 - APR 2021',
    'Company': 'Wheels India',
    'Role': 'Quality/Testing Engineer'
  },
  {
    'years': 'OCT 2018 - JAN 2019',
    'Company': 'Flectronics',
    'Role': 'Electronic Technician'
  }
] 

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <>
        {/* <div className="text-center text-4xl font-bold text-white mb-4">
          My Skills
        </div> */}
        <div className="about-container mt-4 grid md:grid-cols-auto-fit-100 sm:w-full overflow-x-hidden w-full sm:grid-cols-2 grid-cols-2 overflow-y-auto h-72 gap-4">
          {mySkills.map((item,index)=>{
            return(
              <div key={index} className="flex items-center justify-center w-28 h-16 p-2 text-center border border-solid border-gray-300 rounded-md hover:text-custompurple cursor-pointer">{item}</div>
            )
          })}
        </div>
      </>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <>
        {/* <div className="text-4xl font-bold text-white mb-4">
          My Education
        </div> */}
        <div className="about-container mt-4 grid md:grid-cols-auto-fit-160 sm:grid-cols-1 sm:w-auto w-full overflow-y-auto h-72	gap-4">
          {education.map((item,index)=>{
            return (
              <div key={index} className="p-4 items-center justify-center w-fit border border-solid border-gray-300 rounded-md">
                <div className="text-transparent font-bold bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-600">
                  {item.year}
                </div>
                <div className="font-semibold">{item.collage}</div>
                <div className="text-transparent font-bold bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-600">{item.studied}</div>
                <div>Percentage - <span className="text-transparent font-bold bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-600">{item.percentage}</span></div>
              </div>
            )
          })}
        </div>
      </>
    ),
  },
  {
    title: "Experience",
    id: "experience",
    content: (
      <>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  
        {/* <div className="text-4xl font-bold text-white mb-4">My Experience</div> */}
        <div className="about-container mt-4 grid md:grid-cols-auto-fit-160  sm:grid-cols-1 sm:w-auto w-full overflow-y-auto h-72	gap-4">
          {experience.map((item,index)=>{
            return (
            <div key={index} className="p-4 items-center justify-center h-32 border border-solid border-gray-300 rounded-md">
              <div className="text-transparent font-bold bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-600">
                {item.years}
              </div>
              <div className="font-semibold">{item.Company}</div>
              <div className="text-transparent font-bold bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-600">{item.Role}</div>
            </div>
            )
          })}
          
        </div>
      </>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 sm:py-16 xl:px-16">
        <div className="w-fit text-justify h-full">
          <h2 className="text-4xl font-bold text-white mb-4">Why Hire me?</h2>
          <div className=" w-fit text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-600 font-semibold mb-2">I bring proven expertise and innovative solutions to every project, consistently delivering high-quality results. My skills and commitment to excellence ensure effective collaboration and client satisfaction. With a focus on continuous learning, I drive success and add value to your business.</div>
        </div>
        <div className="mt-4 w-full md:mt-0 text-left flex flex-col overflow-y-auto h-full">
          <div>
            <div className="flex items-center justify-between md:justify-center md:gap-4">
              <TabButton
                selectTab={() => handleTabChange("skills")}
                active={tab === "skills"}
              >
                {" "}
                Skills{" "}
              </TabButton>
              <TabButton
                selectTab={() => handleTabChange("education")}
                active={tab === "education"}
              >
                {" "}
                Education{" "}
              </TabButton>
              <TabButton
                selectTab={() => handleTabChange("experience")}
                active={tab === "experience"}
              >
                {" "}
                Experience{" "}
              </TabButton>
            </div>
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

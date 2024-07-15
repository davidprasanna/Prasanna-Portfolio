import React from "react";
import { CodeBracketIcon, EyeIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

const ProjectCard = ({ imgUrl, title, description, technologies, gitUrl, previewUrl }) => {
  return (
    <div>
      <div
        className="h-52 md:h-72 rounded-t-xl relative group"
        style={{ background: `url(${imgUrl})`, backgroundSize: "contain",
        backgroundRepeat:'no-repeat',
        backgroundPosition: 'center' }}
      >
        {(gitUrl.length != 0 || previewUrl.length != 0) && 
          <div className="overlay items-end justify-around absolute top-0 left-0 w-full h-full bg-[#181818] bg-opacity-0 flex transition-all duration-500 ">
            {gitUrl.length != 0 &&
              <Link
                href={gitUrl}
                target="_blank"
                className="h-8 w-8 mr-2 border-2 relative rounded-full border-[#ADB7BE] hover:border-[#A966F7] group/link"
              >
                <CodeBracketIcon className="h-6 w-6 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  cursor-pointer group-hover/link:text-[#A966F7]" />
              </Link>
            }
            {previewUrl.length !=0 &&
              <a
                href={previewUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="h-8 w-8 border-2 relative rounded-full border-[#ADB7BE] hover:border-[#A966F7] group/link"
              >
                <EyeIcon className="h-6 w-6 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  cursor-pointer group-hover/link:text-[#A966F7]" />
              </a>
            }
          </div>
        }
      </div>
      <div className="text-white rounded-b-xl mt-3 bg-[#181818]py-6 px-4">
        <h5 className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-600">{title}</h5>
        <p className="text-[#ADB7BE]">{description}</p>
        <div className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-600 font-semibold mb-2">Technologies Used:</div>
        {technologies.map((item,index)=>{
          return (
            <div key={index}>
              -{item}
            </div>
          )
        })}
      </div>
    </div>
  );
};

export default ProjectCard;

import React from "react";
//Node modules

import propTypes from 'prop-types';
import PropTypes from "prop-types";
const ProjectCard = ({
    imgSrc,
    title,
    tags,
    projectLink,
    classes
}) => {




    return (

        <>
            <div className={"relative p-4 rounded-2xl bg-zinc-800 hover:bg-zinc-700/50 active:bg-zinc-700/60 " + classes}>

                <figure className="img-box">

                    <img src={imgSrc}
                        className="img-cover"
                        alt={title}
                        loading="lazy" />
                </figure>

                <div className="">

                    <h3 className="title-1">
                        {title}
                    </h3>
                </div>
                <div className="">
                    {tags.map((label,key) =>
                        <span 
                        key={key} 
                        className={`label ${classes}`}>{label}</span>
                    )}
                </div>
                <div>
                    <span
                    className="material-symbols-rounded"
                    aria-hidden>
                            arrow_outward
                    </span>
                </div>
                <a 
                href={projectLink}
                target="_blank"
                className=""

                ></a>

            </div>

        </>);
};

ProjectCard.propTypes = {
    imgSrc: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    tags: PropTypes.array.isRequired,
    projectLink: PropTypes.string,
    classes: PropTypes.string
}

export default ProjectCard
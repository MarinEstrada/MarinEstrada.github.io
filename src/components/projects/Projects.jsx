import DATA from "../../constant/realData";
import Title from "../common/Title";
import PropTypes from "prop-types";
import { DiamondLgBlue, DiamondLgGreen, DiamondLgOrange, DiamondLgPink, DiamondLgYellow } from "../../assets/image";
import { Link } from "react-router-dom";
import {FaLink } from "react-icons/fa6";

const Projects = () => {
    return (
        <div className="projects-sc resume-block" >
            <div className="container" >
                <div className="projects-content dotted-border-left" >
                    <Title titleText={"Projects"} />
                    <div className="projects-list grid" >
                        {DATA.projects.map((item) => (
                            <ProjectItem key={item.id} item={item} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Projects;

const ProjectItem = ({ item }) => {

    const showDimondImage = (color) => {
        if (color === "Blue") {return DiamondLgBlue;}
        else if (color === "Green") {return DiamondLgGreen;}
        else if (color === "Orange") {return DiamondLgOrange;}
        else if (color === "Pink") {return DiamondLgPink;}
        else if (color === "Yellow") {return DiamondLgYellow;}
    };


    return (
        <div className="project-item" key={item.id} >
            <ProjectDateInfo item={item} />
            <div className="project-header flex items-center flex-wrap" >
                <p className="project-title">{item.title}</p>
                <div className="diamond-shapes-group">
                    {item.diamondColors?.map((color, index) => (
                        <img key={index} src={showDimondImage(color)} alt="" />
                    ))}
                </div>
            </div>
            <div className="project-subheader flex items-center flex-wrap" >
                <div className="project-logo" >
                    <img src={item.icon} alt="" />
                </div>
                <p className="project-subtitle" >{item.subTitle}</p>
                {/* <div className="link-details">
                    <FaLink size={15} />
                    <Link to={item.url} className="project-link flex-wrap" >{item.url}</Link>
                </div> */}
            </div>
            {/* <div className="link-details">
                <FaLink size={15} />
                <Link to={item.url} className="project-link flex-wrap" >{item.url}</Link>
            </div> */}
            <ProjectLinkInfo item={item} />
            <ul className="project-description" >
                {item.description?.map((desc, index) => (
                    <li key={index} >{desc}</li>
                ))}
            </ul>

        </div>
    );
};

const ProjectLinkInfo = ({item}) => {
    if (item.url) {
        return(
            <div className="link-details">
                <Link to={item.url} className="project-link flex-wrap" >
                    <FaLink size={15} />
                    <span className="link-spacing">{item.url}</span>
                </Link>
            </div>
        );
    }
}

const ProjectDateInfo = ({item}) => {
    if(item.startDate === item.endDate){
        return(
            <div className="project-time flex items-center">
                <span className="start-time">{item.startDate}</span>
            </div>
        );
    }
    //else return...
    return(
        <div className="project-time flex items-center">
            <span className="start-time">{item.startDate}</span>
            <span>-</span>
            <span className="end-time">{item.endDate || "Present"}</span>
        </div>
    );
};

ProjectItem.PropTypes = {
    item: PropTypes.shape({
        id: PropTypes.string.isRequired,
        startDate: PropTypes.string.isRequired,
        endDate: PropTypes.string,
        icon: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        subTitle: PropTypes.string,
        url: PropTypes.string,
        diamondColors: PropTypes.array,
        description: PropTypes.array.isRequired,
    })
};
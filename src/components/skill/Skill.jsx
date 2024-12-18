// import DATA from "../../constant/mockData";
import DATA from "../../constant/realData";
import Title from "../common/Title";
import PropTypes from "prop-types";

const Skill = () => {
    return(
        <div className="skill-sc resume-block">
            <div className="container">
                <div className="skill-content dotted-border-left">
                    <Title titleText={"Skills"} />
                    <div className="skill-list grid" >
                        {DATA.skills?.map((item) => (
                            <SkillItem key={item.id} item={item} />
                        ))}
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Skill;

const SkillItem = ({item}) => {
    let extra_description;
    if (item.description2) 
        extra_description = <p className="skill-description text">{item.description2}</p>;
    return(
        <div className="skill-item text-center" key={item.id} >
            <div className="skill-icon" >
                <img src={item.icon} alt="" />
            </div>
            <div className="skill-info">
                <h3 className="skill-name">{item.name}</h3>
                <p className="skill-description text" >{item.description}</p>
                {extra_description}
            </div>
        </div>
    );
};

SkillItem.propTypes = {
    item: PropTypes.shape({
        id: PropTypes.string.isRequired, 
        icon: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        description2: PropTypes.string,
    }),
};
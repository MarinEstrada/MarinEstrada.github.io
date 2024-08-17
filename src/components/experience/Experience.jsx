import DATA from "../../constant/mockData";
import Title from "../common/Title";
import PropTypes from "prop-types";

const Experience = () => {
    return(
        <div className='experience-sc resume-block'>
            <div className='container'>
                <div className="experience-content dotted-border-left" >
                    <Title titleText={"Professional Experience"} />
                    <div className='experience-list grid' >
                        {DATA.professionalExperiences.map((item) => (
                            <ExperienceItem key={item.id} item={item} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Experience;

const ExperienceItem = ({item}) => {
    return(
        <div className="experience-item" key={item.id}>
            <div className="exp-time flex items-center">
                <span className="start-time">{item.startDate}</span>
            </div>
        </div>
    );
};

ExperienceItem.PropTypes = {
    item: PropTypes.shape({
        id: PropTypes.string.isRequired,
        startDate: PropTypes.string.isRequired,
        endDate: PropTypes.string,
        position: PropTypes.string.isRequired,
        diamondColors: PropTypes.array,
        company: PropTypes.shape({
            logo: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            info: PropTypes.string.isRequired,
        }),
        description: PropTypes.string.isRequired,
        links: PropTypes.arrayOf(
            PropTypes.shape({
                label: PropTypes.string.isRequired,
                url: PropTypes.string,
            }),
        ),
    }),
};
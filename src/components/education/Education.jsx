// import DATA from '../../constant/mockData';
import DATA from '../../constant/realData';
import Title from '../common/Title';
import PropTypes from 'prop-types';

const Education = () => {
    return (
        <div className='education-sc resume-block'>
            <div className='container'>
                <div className='education-content dotted-border-left'>
                    <Title titleText={"Education"} />
                    <div className='edu-list grid'>
                        {
                            DATA.educationalExperiences?.map((item) => (
                                <EducationItem key={item.id} item={item} />

                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Education;

const EducationItem = ({item}) => {
    let degree_type;
    switch (item.degree) {
        case "Bachelor of Arts":
            degree_type = "BA";
            break;
        case "Bachelor of Science":
            degree_type = "BSc";
            break;
    }

    return(
        // <div className='education-item' key={item.id}>
        <div className='edu-item' key={item.id}>
            <div className='edu-title flex items-center'>
                <img src={item.icon} className='edu-icon' alt={item.course} />
                <h3 className='edu-course'>{degree_type} in {item.course}</h3>
            </div>
            <p className='edu-info text'>{item.institution}</p>
            <EduDateInfo item={item} />
        </div>
    );
};

const EduDateInfo = ({item}) => {

    let date_info =  <p className="edu-info text">
            {item.startDate} - {item.endDate ||
            "Present"}{" "}
            ({item.degree && `${item.degree}`})
        </p>;

    let convo_date;
    if (item.convocationDate) {
        convo_date = <p className="edu-convocation-date text">
                Convocation: {item.convocationDate}
            </p>;
    }

    return(
        <div>
            {date_info}
            {convo_date}
        </div>
    );
};

EducationItem.PropTypes = {
    item: PropTypes.shape({
        id: PropTypes.string.isRequired,
        icon: PropTypes.string.isRequired,
        course: PropTypes.string.isRequired,
        institution: PropTypes.string,
        startDate: PropTypes.string.isRequired,
        endDate: PropTypes.string,
        convocationDate: PropTypes.string,
        degree: PropTypes.string,
    })
};


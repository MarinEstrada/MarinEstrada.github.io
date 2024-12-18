// import DATA from '../../constant/mockData';
import DATA from '../../constant/realData';
import Title from '../common/Title';
import PropTypes from 'prop-types';

const Courses = () => {
    return (
        <div className='course-sc resume-block'>
            <div className='container'>
                <div className='course-content dotted-border-left'>
                    <Title titleText={"Relevant Courses"} />
                    <div className='course-list grid'>
                        {
                            DATA.courseExperiences?.map((item) => (
                                <CourseItem key={item.id} item={item} />

                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Courses;

const CourseItem = ({item}) => {
    return(
        <div className='course-item' key={item.id}>
            <div className='course-title flex items-center'>
                <img src={item.icon} className='course-icon' alt={item.course} />
                <h3 className='course-course'>{item.course}</h3>
            </div>
            <p className='course-info text'>{item.institution}</p>
            <CourseDateInfo item={item} />
        </div>
    );
};

const CourseDateInfo = ({item}) => {
    if (item.startDate === item.endDate){
        return(
            <p className="course-date-info text" >
                {item.startDate}{" "}
                ({item.courseType && `${item.courseType}`})
            </p>
        );
    }

    return(
        <p className="course-date-info text">
            {item.startDate} - {item.endDate ||
            "Present"}{" "}
            ({item.courseType && `${item.courseType}`})
        </p>
    );
};

CourseItem.PropTypes = {
    item: PropTypes.shape({
        id: PropTypes.string.isRequired,
        icon: PropTypes.string.isRequired,
        course: PropTypes.string.isRequired,
        institution: PropTypes.string,
        startDate: PropTypes.string.isRequired,
        endDate: PropTypes.string,
        courseType: PropTypes.string,
    })
};


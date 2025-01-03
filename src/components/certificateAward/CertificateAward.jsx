// import DATA from "../../constant/mockData";
import DATA from "../../constant/realData";
import Title from "../common/Title";
import PropTypes from "prop-types";

const CertificateAward = () => {
    return(
        <div className="cert-award-sc resume-block">
            <div className="container" >
                <div className="cert-award-content dotted-border-left" >
                    <Title titleText={"Certificates & Awards"} />
                    <div className="cert-award-list grid" >
                        {DATA.certificatesAndAwards?.map((item) => (
                            <CertificateAwardItem key={item.id} item={item} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CertificateAward;

const CertificateAwardItem = ({item}) => {
    return(
        <div className="cert-item grid text-center" key={item.id} >
            <div className="cert-icon" >
                <img src={item.icon} alt="" />
            </div>
            {/* <div className="cert-info grid" > */}
            <div className="cert-info" >
                <div className="cert-info-l" >
                    <p className="cert-provider">{item.provider}</p>
                    <h3 className="cert-course">{item.course}</h3>
                    <CertDateInfo item={item} />
                </div>
                {/* <CertDateInfo item={item} /> */}
            </div>
        </div>
    )
}

const CertDateInfo = ({item}) => {
    if(item.startDate === item.endDate){
        return(
            <div className="cert-info-r flex
            items-center justify-center" >
                {item.startDate}
            </div>
        );
    }
    //else
    return(
        <div className="cert-info-r flex
        items-center justify-center" >
            {item.startDate} - {item.endDate || "Present"}
        </div>
    )
};

CertificateAwardItem.propTypes = {
    item: PropTypes.shape({
        id: PropTypes.string.isRequired,
        icon: PropTypes.string.isRequired,
        provider: PropTypes.string.isRequired,
        course: PropTypes.string.isRequired,
        startDate: PropTypes.string.isRequired,
        endDate: PropTypes.string,
    }).isRequired,
};
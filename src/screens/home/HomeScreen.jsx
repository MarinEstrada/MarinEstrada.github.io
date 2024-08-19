import Cursor from "../../components/cursor/Cursor";
import Education from "../../components/education/Education";
import Header from "../../components/header/Header";
import Experience from "../../components/experience/Experience"
import Skill from "../../components/skill/Skill";
import CertificateAward from "../../components/certificateAward/CertificateAward";

const HomeScreen = () => {
    return (
        <div className="page-container">
            <Header />
            <Experience />
            <Education />
            <Skill />
            <CertificateAward />
            <Cursor />
        </div>
    )
}

export default HomeScreen
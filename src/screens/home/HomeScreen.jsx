import Cursor from "../../components/cursor/Cursor";
import Education from "../../components/education/Education";
import Header from "../../components/header/Header";
import Experience from "../../components/experience/Experience"
import Skill from "../../components/skill/Skill";
import CertificateAward from "../../components/certificateAward/CertificateAward";
import Hobbies from "../../components/hobbies/Hobbies";
import BackgroundEffect from "../../components/background_effect/BackgroundEffect";
import Citations from "../../components/citations/Citations";
import Projects from "../../components/projects/Projects";
import Courses from "../../components/courses/Courses";

const HomeScreen = () => {
    return (
        <div className="page-container">
            <Header />
            <Experience />
            <Projects />
            <Skill />
            <Education />
            <CertificateAward />
            <Courses />
            <Hobbies />
            <Citations />
            <Cursor />
            <BackgroundEffect />
        </div>
    )
}

export default HomeScreen
import Cursor from "../../components/cursor/Cursor";
import Education from "../../components/education/Education";
import Header from "../../components/header/Header";
import Experience from "../../components/experience/Experience"
import Skill from "../../components/skill/Skill";

const HomeScreen = () => {
    return (
        <div className="page-container">
            <Header />
            <Experience />
            <Education />
            <Skill />
            <Cursor />
        </div>
    )
}

export default HomeScreen
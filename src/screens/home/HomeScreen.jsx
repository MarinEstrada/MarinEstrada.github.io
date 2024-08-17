import Cursor from "../../components/cursor/Cursor";
import Education from "../../components/education/Education";
import Header from "../../components/header/Header";
import Experience from "../../components/experience/Experience"

const HomeScreen = () => {
    return (
        <div className="page-container">
            <Header />
            <Experience />
            <Education />
            <Cursor />
        </div>
    )
}

export default HomeScreen
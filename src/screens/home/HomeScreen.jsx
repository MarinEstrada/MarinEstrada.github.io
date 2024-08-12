import Cursor from "../../components/cursor/Cursor";
import Education from "../../components/education/Education";
import Header from "../../components/header/Header";

const HomeScreen = () => {
    return (
        <div className="page-container">
            <Header />
            <Education />
            <Cursor />
        </div>
    )
}

export default HomeScreen
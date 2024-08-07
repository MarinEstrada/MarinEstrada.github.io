import { AvatarSVG } from '../../assets/image'; // the js file defining image names and location

const Header = () => {
    return (
        <header className="header">
            <div className="container">
                <div className="header-content grid items-center">
                    <div className="header-intro">
                        <div className="flex items-end header-intro-wrapper">
                            <img
                                src={AvatarSVG}
                                alt="avatar"
                                className="avatar" />
                            <h1 className="header-name text-white"> 
                                Adrian Marin Estrada, <br />
                                CS student at Simon Fraser University
                            </h1>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header
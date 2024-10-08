import { Link } from 'react-router-dom';
import { AvatarSVG, Email, Linkedin, Question_mark, Headshot } from '../../assets/image'; // the js file defining image names and location
import { FaEnvelope, FaLink, FaLocationDot, FaPhone } from 'react-icons/fa6';

const Header = () => {
    return (
        <header className="header">
            <div className="container">
                <div className="header-content grid items-center">
                    <div className="header-intro">
                        <div className="flex items-end header-intro-wrapper">
                            {/* <img
                                // src={AvatarSVG}
                                src={Question_mark}
                                alt="avatar"
                                className="avatar" /> */}
                            <img
                                src={Headshot}
                                alt="headshot"
                                className="headshot"
                            />
                            <h1 className="header-name text-white">
                                {/* {'{'}WORK IN PROGRESS{'}'} <br /> */}
                                Adrian Marin Estrada, <br />
                                CS student at Simon Fraser University
                            </h1>
                        </div>
                        <p className='header-text text text-white'>
                            I am a Computer Science student at Simon Fraser University
                            set to graduate in June of 2025. <br />
                            I am passionate about software development, scalability, and
                            workflow efficiency. I am always looking for opportunities to
                            learn and grow, and am currently searching for a co-op position
                            starting January 2025. <br />
                            Don't hesitate to reach out if you have
                            any questions or opportunities!
                        </p>
                    </div>
                    <div className='header-contact'>
                        <ul className='contact-info-list grid text-white'>
                            <li className='grid items-start info-item'>
                                <span className='info-item-icon'>
                                    <a href="mailto:ama269@sfu.ca">
                                        <FaEnvelope size={13} />
                                    </a>
                                </span>
                                <span className='info-item-text'>
                                    Email: <span className='text'>ama269@sfu.ca</span>
                                </span>
                            </li>
                            <li className='grid items-start info-item'>
                                <span className='info-item-icon'>
                                    <FaPhone size={13} />
                                </span>
                                <span className='info-item-text'>
                                    Phone: <span className='text'>+1-306-203-1560</span>
                                </span>
                            </li>
                            <li className='grid items-start info-item'>
                                <span className='info-item-icon'>
                                    <FaLocationDot size={14} />
                                </span>
                                <span className='info-item-text'>
                                    Address: <span className='text'>Burnaby, BC, Canada</span>
                                </span>
                            </li>
                            <li className='grid items-start info-item'>
                                <span className='info-item-icon'>
                                    <Link to="https://github.com/MarinEstrada/">
                                        <FaLink size={15} />
                                    </Link>
                                </span>
                                <span className='info-item-text'>
                                    {/* Github: <span className='text'>https://github.com/MarinEstrada/</span> */}
                                    <Link to="https://github.com/MarinEstrada/" className='text'>
                                        https://github.com/MarinEstrada/
                                    </Link>
                                </span>
                            </li>
                        </ul>
                        <ul className='contact-social-list flex items-center'>
                            <li className='social-item'>
                                <Link to="https://www.linkedin.com/in/adrian-marin-estrada/">
                                    <img src={Linkedin} />
                                    {/* <span className='tooltip text'>LinkedIn</span> */}
                                </Link>
                            </li>
                            <li className='social-item'>
                                <a href="mailto:ama269@sfu.ca">
                                    <img src={Email} />
                                    {/* <span className='tooltip text'>Email</span> */}
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header
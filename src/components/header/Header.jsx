import { Link } from 'react-router-dom';
import { AvatarSVG, Email, Linkedin, Question_mark } from '../../assets/image'; // the js file defining image names and location
import { FaEnvelope, FaLink, FaLocationDot, FaPhone } from 'react-icons/fa6';

const Header = () => {
    return (
        <header className="header">
            <div className="container">
                <div className="header-content grid items-center">
                    <div className="header-intro">
                        <div className="flex items-end header-intro-wrapper">
                            <img
                                // src={AvatarSVG}
                                src={Question_mark}
                                alt="avatar"
                                className="avatar" />
                            <h1 className="header-name text-white">
                                {'{'}WORK IN PROGRESS{'}'} <br />
                                Adrian Marin Estrada, <br />
                                CS student at Simon Fraser University
                            </h1>
                        </div>
                        <p className='header-text text text-white'>
                            I am a Computer Science student at Simon Fraser University.
                            I am passionate about software development and I am always
                            looking for opportunities to learn and grow. I am currently
                            looking for a co-op position for the Fall 2024 term.
                        </p>
                    </div>
                    <div className='header-contact'>
                        <ul className='contact-info-list grid text-white'>
                            <li className='grid items-start info-item'>
                                <span className='info-item-icon'>
                                    <FaEnvelope size={13} />
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
                                    <FaLink size={15} />
                                </span>
                                <span className='info-item-text'>
                                    Github: <span className='text'>https://github.com/MarinEstrada/</span>
                                </span>
                            </li>
                        </ul>
                        <ul className='contact-social-list flex items-center'>
                            <li className='social-item'>
                                <Link to="/">
                                    <img src={Linkedin} />
                                    <span className='tooltip text'>LinkedIn</span>
                                </Link>
                            </li>
                            <li className='social-item'>
                                <Link to="/">
                                    <img src={Email} />
                                    <span className='tooltip text'>Email</span>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header
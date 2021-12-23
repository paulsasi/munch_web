import React, {useState} from "react";
import { BiMenu } from 'react-icons/bi';
import { AiOutlineClose} from 'react-icons/ai';
import './Sidebar.css';
import {Transition} from 'react-transition-group';
function Sidebar() {

    const SidebarData = [
        {
            title: 'INICIO',
            path: '/'
        },
        {
            title: 'SOBRE NOSOTROS',
            path: '/about-us'
        }
    ];

    const [navbar, setNavbar] = useState(false);

    const showNavbar = () => setNavbar(!navbar);


    const duration = 200;

    const defaultStyle = {
        transition: `width ${duration}ms ease-in-out`,
    }
    
    const transitionStyles = {
        entering: { width: '100vh' },
        entered: { width: '100vh' },
        exiting: { width: '100vh' },
        exited: { width: 0 }
    };


    return (
            <Transition in={navbar} timeout={500}>
                {state => (
                    <div style={{...defaultStyle,...transitionStyles[state]}}>
                        <div className='wrapper'>
                            <div className="sidebar">
                                <BiMenu onClick={showNavbar} size={30} color={'white'}></BiMenu>
                            </div>

                            { navbar &&
                                <div className='nav-menu'>
                                    <div className='navmap-wrapper'>
                                        <div className='navmap-close'>
                                            <AiOutlineClose className='close-icon' onClick={showNavbar}></AiOutlineClose>
                                        </div>
                                        <div className='navmap-menu-items'>
                                            <ul className='content-list'>
                                                {SidebarData.map((item, index) => {
                                                    return (
                                                        <li key={index} className='nav-text'>
                                                            {item.title}
                                                        </li>
                                                    )
                                                })}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            }
                        </div>
                    </div>
                )}
            </Transition>
        
    )
}

export default Sidebar

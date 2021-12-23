import React, {useState} from "react";
import { BiMenu } from 'react-icons/bi';
import { AiOutlineClose} from 'react-icons/ai';
import { SidebarData} from './SidebarDada';

function Sidebar() {

    const [navbar, setNavbar] = useState(false)

    const showNavbar = () => setNavbar(!navbar)
    return (
        <div>
            <div className="sidebar">
                <div className='menu-bars'>
                    <BiMenu onClick={showNavbar}></BiMenu>
                </div>
            </div>

            <nav className={ navbar ? 'nav-menu active' : 'nav-menu'}>
                <ul className='nav-menu-items'>
                    <li className='navbar-toggle'>
                        <AiOutlineClose></AiOutlineClose>
                    </li>
                    {SidebarData.map((item, index) => {
                        return (
                            <li key={index} className={item.cname}>
                                {item.title}
                            </li>
                        )
                    })}
                </ul>

            </nav>
        </div>
    )
}

export default Sidebar

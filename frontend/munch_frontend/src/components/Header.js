import './Header.css';
import React, {useState} from 'react';
import {Link} from 'react-router-dom';

function Header() {

    /* Item1  state */
    const [item1Style, setItem1Style] = useState({display: 'none'});
    const invItem1Style = () => setItem1Style({display: 'none'});
    const blockItem1Style = () => setItem1Style({display: 'block'});
    const blockItem1StyleExlucive = () => {
        blockItem1Style();
        invItem2Style();
        invItem3Style();
    }

    /* Item2  state */
    const [item2Style, setItem2Style] = useState({display: 'none'});
    const invItem2Style = () => setItem2Style({display: 'none'});
    const blockItem2Style = () => setItem2Style({display: 'block'});
    const blockItem2StyleExclusive = () => {
        blockItem2Style();
        invItem1Style();
        invItem3Style();
    }

    /* Item3 state */
    const [item3Style, setItem3Style] = useState({display: 'none'});
    const invItem3Style = () => setItem3Style({display: 'none'});
    const blockItem3Style = () => setItem3Style({display: 'block'});
    const blockItem3StyleExclusive = () => {
        blockItem3Style();
        invItem1Style();
        invItem2Style();
    }

    const invItemAll = () => {
        invItem1Style();
        invItem2Style();
        invItem3Style();
    }

    return (
        <div>
            <div className='header-wrapper'>
            
                <div className='logo-box'>
                    <Link to='/'>
                        <div className='logo'/>
                    </Link>
                </div>
                <div className='header-item-menu'>

                    <div className='item1' onMouseEnter={blockItem1StyleExlucive}>
                        <Link to='/novelties' className='header-link' style={{ textDecoration: 'none' }}>NOVEDADES</Link>
                    </div>

                    <div className='item2' onMouseEnter={blockItem2StyleExclusive}>
                        <Link to='/beach' className='header-link' style={{ textDecoration: 'none' }}>PLAYA</Link>
                    </div>

                    <div className='item3' onMouseEnter={blockItem3StyleExclusive}>
                        <Link to='/lingerie' className='header-link' style={{ textDecoration: 'none' }}>LENCERÍA</Link>
                    </div>
                    <div className='item4' onMouseEnter={invItemAll}>
                        <Link to='/accessories' className='header-link' style={{ textDecoration: 'none' }}>ACCESORIOS</Link>
                    </div>
                    <div className='item5' onMouseEnter={invItemAll}>
                        <Link to='/about-us' className='header-link' style={{ textDecoration: 'none' }}>CONTACTO</Link>
                    </div>
                </div>
            </div>

            <div style={item1Style} onMouseLeave={() => {invItem1Style();}}>
                <div className='item-container'>
                    <div className='item-box'>
                        <div className='item1-image'/>
                        <div className='item1-field1'>&nbsp; Novedades</div>
                        <div className='item1-field2'>&nbsp; aaaaaa</div>
                        <div className='item1-field3'>&nbsp; bbbbb</div>
                    </div>
                </div>
            </div>

            <div style={item2Style} onMouseLeave={() => {invItem2Style();}}>
                <div className='item-container'>
                    <div className='item-box'>
                        <div className='item2-image'/>
                        <div className='item2-field1'>&nbsp; Bañadores</div>
                        <div className='item2-field2'>&nbsp; Bikinis</div>
                        <div className='item2-field3'>&nbsp; Bragas</div>
                        <div className='item2-field4'>&nbsp; Conjuntos</div>
                    </div>
                </div>
            </div>

            <div style={item3Style} onMouseLeave={() => {invItem3Style();}}>
                <div className='item-container'>
                    <div className='item-box'>
                        <div className='item3-image'/>
                        <div className='item3-field1'>&nbsp; Sujetadores</div>
                        <div className='item3-field2'>&nbsp; Bragas</div>
                        <div className='item3-field3'>&nbsp; Bodys</div>
                        <div className='item3-field4'>&nbsp; Homewear</div>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Header;

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
    }

    /* Item2  state */
    const [item2Style, setItem2Style] = useState({display: 'none'});
    const invItem2Style = () => setItem2Style({display: 'none'});
    const blockItem2Style = () => setItem2Style({display: 'block'});
    const blockItem2StyleExclusive = () => {
        blockItem2Style();
        invItem1Style();
    }

    const f = () => {this.style.textDecoration='underline';}

    return (
        <div>
            <div className='header-wrapper'>
                <div className='logo'></div>
                <div className='header-item-menu' onMouseLeave={() => {invItem1Style(); invItem2Style();}}>

                    <div className='item1' onMouseEnter={() => {blockItem1StyleExlucive(); f();}}>
                        <Link to='/novelties' className='link' style={{ textDecoration: 'none' }}>NOVEDADES</Link>
                    </div>

                    <div className='item2' onMouseEnter={blockItem2StyleExclusive}>
                        <Link to='/beach' className='link' style={{ textDecoration: 'none' }}>PLAYA</Link>
                    </div>

                    <div className='item2-field1' style={item2Style} >Novedades</div>
                    <div className='item2-field2' style={item2Style}>Bañadores</div>
                    <div className='item2-field3' style={item2Style}>Bikinis</div>
                    <div className='item2-field4' style={item2Style}>Tops de bikini</div>
                    <div className='item2-field5' style={item2Style}>Bragas de bikini</div>
                    <div className='item2-field6' style={item2Style}>Todos los modelos</div>

                    <div className='item3'>
                        <Link to='/lingerie' className='link' style={{ textDecoration: 'none' }}>LENCERÍA</Link>
                    </div>
                    <div className='item4'>
                        <Link to='/accessories' className='link' style={{ textDecoration: 'none' }}>ACCESORIOS</Link>
                    </div>
                    <div className='item5'>
                        <Link to='/about-us' className='link' style={{ textDecoration: 'none' }}>CONTACTO</Link>
                    </div>
                </div>
            </div>

            <div style={item1Style}>
                <div className='item-container'>
                    <div className='item-box'>
                    <div className='item2-field1'>Novedades</div>
                    <div className='item2-field2'>aaaaaa</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;

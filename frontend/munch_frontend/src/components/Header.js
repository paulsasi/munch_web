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

    return (
        <div>
            <div className='header-wrapper'>
                <div className='logo'></div>
                <div className='header-item-menu'>

                    <div className='item1' onMouseEnter={blockItem1StyleExlucive}>
                        <Link to='/novelties' className='link' style={{ textDecoration: 'none' }}>NOVEDADES</Link>
                    </div>

                    <div className='item2' onMouseEnter={blockItem2StyleExclusive}>
                        <Link to='/beach' className='link' style={{ textDecoration: 'none' }}>PLAYA</Link>
                    </div>

                    <div className='item3' onMouseEnter={blockItem3StyleExclusive}>
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

            <div style={item1Style} onMouseLeave={() => {invItem1Style();}}>
                <div className='item-container'>
                    <div className='item-box'>
                    <div className='item1-field1'>Novedades</div>
                    <div className='item1-field2'>aaaaaa</div>
                    <div className='item1-field3'>bbbbb</div>
                    </div>
                </div>
            </div>

            <div style={item2Style} onMouseLeave={() => {invItem2Style();}}>
                <div className='item-container'>
                    <div className='item-box'>
                    <div className='item2-field1'>Bañadores</div>
                    <div className='item2-field2'>aaaaaa</div>
                    <div className='item2-field3'>cccc</div>
                    </div>
                </div>
            </div>

            <div style={item3Style} onMouseLeave={() => {invItem3Style();}}>
                <div className='item-container'>
                    <div className='item-box'>
                    <div className='item3-field1'>aaa</div>
                    <div className='item3-field2'>sdasdsa</div>
                    <div className='item3-field3'>dsadasdsa</div>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Header;

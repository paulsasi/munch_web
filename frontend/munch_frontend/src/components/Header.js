import './Header.css';
import React, {useState} from 'react';


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
        <div className='header-wrapper'>
            <div className='logo'></div>
            <div className='header-item-menu' onMouseLeave={() => {invItem1Style(); invItem2Style();}}>

                    <div className='item1' onMouseEnter={() => {blockItem1StyleExlucive(); f();}}>NOVEDADES</div>

                    <div className='item1-field1' style={item1Style} >Randomw</div>
                    <div className='item1-field2' style={item1Style}>Randomos</div>
                    <div className='item1-field3' style={item1Style}>Raiondows</div>
                    <div className='item1-field4' style={item1Style}>Tops de rasasa</div>
                    <div className='item1-field5' style={item1Style}>Bragas de sasdx</div>
                    <div className='item1-field6' style={item1Style}>Todos los asas de dasad</div>

                    <div className='item2' onMouseEnter={blockItem2StyleExclusive}>PLAYA</div>

                    <div className='item2-field1' style={item2Style} >Novedades</div>
                    <div className='item2-field2' style={item2Style}>Bañadores</div>
                    <div className='item2-field3' style={item2Style}>Bikinis</div>
                    <div className='item2-field4' style={item2Style}>Tops de bikini</div>
                    <div className='item2-field5' style={item2Style}>Bragas de bikini</div>
                    <div className='item2-field6' style={item2Style}>Todos los modelos</div>

                    <div className='item3'>LENCERÍA</div>
                    <div className='item4'>ACCESORIOS</div>
                    <div className='item5'>CONTACTO</div>
            </div>
        </div>
    );
}

export default Header;

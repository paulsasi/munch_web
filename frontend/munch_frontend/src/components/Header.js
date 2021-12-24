import './Header.css';

function Header() {
    return (
        <div className='header-wrapper'>
            <div className='logo'></div>
            <div className='header-item-menu'>
                    <div className='item1'>NOVEDADES</div>
                    <div className='item2'>PLAYA</div>
                    <div className='item3'>LENCERÍA</div>
                    <div className='item4'>ACCESORIOS</div>
                    <div className='item5'>CONTACTO</div>
            </div>
        </div>
    );
}

export default Header;

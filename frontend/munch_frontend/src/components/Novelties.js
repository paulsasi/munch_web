import Header from "./Header";
import './Novelties.css';

function Novelties() {
    return (
        <div>
            <Header />
            <div className='novelties-wrapper'>
                <div className='novelties-currentsite'> &lt; Novedades </div>
                <h1 className='novelties-header'> Novedades </h1>
            </div>
        </div>
    );
}

export default Novelties;

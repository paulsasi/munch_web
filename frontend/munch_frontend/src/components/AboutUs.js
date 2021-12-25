import Header from "./Header";
import './AboutUs.css';

function AboutUs() {
    return (
        <div>
            <Header/>
            <div className='wrapper'>
                <div className='currentsite'> &lt; Contacto </div>
                <h1 className='header'> Contacto </h1>
                <div className='shop-image-text'>
                    <h3>Munch </h3>
                    This handout will help you understand how paragraphs are formed, how to
                    develop stronger paragraphs, and how to completely and clearly express
                    your ideas.
                </div>
                <div className='shop-image-container'></div>
                <div className='location-container'></div>
                <div className='timetable'></div>
            </div>
        </div>
    );
}

export default AboutUs;

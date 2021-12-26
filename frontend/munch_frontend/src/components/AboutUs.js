import Header from "./Header";
import './AboutUs.css';
import Footer from "./Footer";
import { AiOutlineMail, AiOutlineWhatsApp, AiFillPhone} from 'react-icons/ai';


function AboutUs() {
    return (
        <div>
            <Header/>
            <div className='wrapper'>
                <div className='currentsite'> &lt; Contacto </div>
                <h1 className='header'> Contacto </h1>
                <div className='shop-image-text'>
                    <h3 className='title'>Munch</h3>
                    <p className='text'>This handout will help you understand how paragraphs are formed, how to
                    develop stronger paragraphs, and how to completely and clearly express
                    your ideas. </p>
                </div>
                <div className='shop-image-container'></div>
                <div className='image2-container'></div>
                <ul className='timetable'>
                    <h3 className='title'> Horario de apertura </h3>
                    <li className='text'> lun:	10:00–20:00 </li>
                    <li className='text'> mar:	10:00–20:00 </li>
                    <li className='text'> mié:	10:00–20:00 </li>
                    <li className='text'> jue:	10:00–20:00 </li>
                    <li className='text'> vie:	10:00–20:00 </li>
                    <li className='text'> sáb:	10:00–20:00 </li>
                    <li className='text'> dom:	Cerrado </li>
                </ul>
                <div className='image3-container'></div>
                <div className='contact-method'>
                    <h3 className='title'>Métodos de contacto</h3>
                    <li className='text'> <AiOutlineMail size={10} /> ejemplo.ejemplo@gmail.com</li>
                    <li className='text'> <AiOutlineWhatsApp size={10} /> 620 666 666</li>
                    <li className='text'> <AiFillPhone size={10} /> 943 273 829</li>
                </div>
                <div className='location-container'>
                    <iframe className='map' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2902.827179393135!2d-1.9834213841699833!3d43.31787708206623!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd51a5fdfd56ecd1%3A0xebd1eae11be9f1ca!2sMUNCH%20LENCER%C3%8DA!5e0!3m2!1ses!2ses!4v1640439226025!5m2!1ses!2ses" allowFullScreen="" loading="lazy"></iframe>
                </div>
                <div className='footer-container'>
                    
                    <Footer/>
                </div>
            </div>
            
        </div>
    );
}

export default AboutUs;

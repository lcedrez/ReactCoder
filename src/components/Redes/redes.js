import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCoffee } from '@fortawesome/free-solid-svg-icons';
import {faTwitter,faYoutube,faInstagram,faSpotify,faFacebook } from '@fortawesome/free-brands-svg-icons';    
import './redes.css';

const Redes = ()=>{
    return(
        <div className='contenedorRedes'>
        <FontAwesomeIcon icon={faTwitter}/>
        <FontAwesomeIcon icon={faYoutube}/>
        <FontAwesomeIcon icon={faInstagram}/>
        <FontAwesomeIcon icon={faSpotify}/>
        <FontAwesomeIcon icon={faFacebook} />
        </div>
    )
}

export default Redes;
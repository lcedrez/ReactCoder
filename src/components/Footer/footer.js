import './Footer.css';
import LogoFooter from '../../assets/img/Whitelogo.jpg';
import Redes from '../Redes/redes';

const Footer=()=>{
    return(
        <div className='contenedorFooter'>
            <div className='logoFooter'>
                <img src={LogoFooter} alt="LogoFooter" />
            </div>
            <div className='quienesSomos'>
                 <h2>SOBRE NOSOTROS</h2>
                    <div className='parrafoQuienesSomos'>
                        <p>Somos un grupo de personas que decidimos dedicar esta Web como tributo a The Beatles por su innegable aporte musical y cultural que hicieron al mundo.</p>
                    </div>
            </div>
                    <div className='siguenos'>
                    <h5>SIGUENOS</h5>
                        <Redes/>
                    </div>
        </div>
    
      


    )


}

export default Footer;
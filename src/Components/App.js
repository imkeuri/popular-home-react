import { Container } from 'react-bootstrap';
import Podcast from './Home/Podcast/Podcast';
import Slider from './Home/Slider/Slider';
import NavBar from './Navbar/NavBar';
import './App.css'
import NavbarFooter from './Navbar footer/NavbarFooter';
import LograTusMetas from './Home/Logra tus metas/LograTusMetas';
import Slidertab from './Home/SliderTab/Slidertab';
import SalaPrensa from './Home/Sala de prensa/SalaPrensa';
import ComunicateConNosotros from './Home/Comunicate/ComunicateConNosotros';
import ServiciosUsuario from './Home/Servicios al usuario/ServiciosUsuario';
import Footer from './Footer/Footer';



function ChatBubble() {
  return (
    <div id='contBtn-chat'>
      <button className='btn-chat'>chat</button>
    </div>

  );
}


function App() {
  return (
    <div id="app">
      <Container fluid={true} className="p-0">
        <NavBar />
        <ChatBubble />
        <Slider />
        <Podcast />
        <LograTusMetas />
        <Slidertab/>
        <SalaPrensa/>
        <ComunicateConNosotros/>
        <ServiciosUsuario/>
        <Footer/>
        <NavbarFooter />
      </Container>
    </div>

  );
}

export default App;

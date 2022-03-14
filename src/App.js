import { Container } from 'react-bootstrap';
import Podcast from './Components/Home/Podcast/Podcast';
import Slider from './Components/Home/Slider/Slider';
import NavBar from './Components/Navbar/NavBar';
import './App.css'
import NavbarFooter from './Components/Navbar footer/NavbarFooter';
import LograTusMetas from './Components/Home/Logra tus metas/LograTusMetas';
import Slidertab from './Components/Home/SliderTab/Slidertab';
import SalaPrensa from './Components/Home/Sala de prensa/SalaPrensa';
import ComunicateConNosotros from './Components/Home/Comunicate/ComunicateConNosotros';
import ServiciosUsuario from './Components/Home/Servicios al usuario/ServiciosUsuario';
import Footer from './Components/Footer/Footer';



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

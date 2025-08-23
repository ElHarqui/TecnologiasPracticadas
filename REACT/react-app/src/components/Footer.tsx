import FBLogo from "../assets/facebook.svg";
import GitHubLogo from "../assets/github-mark.svg";
import GmailLogo from "../assets/gmail.svg";
import Linker from "./Linker";
import "./Footer.css";
function FooterBody() {
  return (
    <footer className="footer">
      <div className="footer-links">
        <Linker
          Logo={FBLogo}
          Pagina="https://www.facebook.com/Elharqui/"
          Mensaje="Visita mi Facebook"
        />
        <Linker
          Logo={GitHubLogo}
          Pagina="https://github.com/ElHarqui"
          Mensaje="Visita mi GitHub"
        />
        <Linker
          Logo={GmailLogo}
          Pagina="https://mail.google.com/mail/?view=cm&fs=1&to=sebastianlps1421@gmail.com&su=Consulta%20sobre%20el%20curso%20de%20React"
          Mensaje="Enviame un correo"
        />
      </div>
      <div className="footer-content">
        <p>© 2023 Harqui's page</p>
        <p>All rights reserved.</p>
      </div>
    </footer>
  );
}
export default FooterBody;

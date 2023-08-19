import { FaFacebookSquare } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import  "../css/FooterComponent.css";

function FooterComponent(props) {
    return (
        <div
            className = "footer"
                // props.position === "absolute"
                //     ? props.page === "Home"
                //         ? "footer footer-home footer-absolute"
                //         : "footer footer-absolute"
                //     : "footer"
            
        >
            <p className="copyright ">© 2023  BT-BookStore | Follow us on</p>
            <ul className="footer-list">
                <li className="footer-item">
                    <a href="https://github.com/girishsutar229" target="_blank" rel="noreferrer">
                           <FaGithub />
                    </a>
                </li>
                <li className="footer-item">
                    <a href="https://www.facebook.com/Girish1l/" target="_blank" rel="noreferrer">
                        <FaFacebookSquare />
                    </a>
                </li>
                <li className="footer-item">
                    <a href="https://www.linkedin.com/in/girish-suthar-85a7b71ba/" target="_blank" rel="noreferrer">
                        <FaLinkedin />
                    </a>
                </li>
                <li className="footer-item">
                    <a href="https://www.instagram.com/girish1l/" target="_blank" rel="noreferrer">
                        <FaInstagramSquare />
                    </a>
                </li>
            </ul>
        </div>
    );
}

export default FooterComponent;

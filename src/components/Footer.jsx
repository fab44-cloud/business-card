import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitterSquare, faFacebookSquare, faInstagramSquare, faGithubSquare } from '@fortawesome/free-brands-svg-icons'

export default function Footer() {
    return (
        <>
            <footer className="footer-container">
                <FontAwesomeIcon icon={faGithubSquare} className="footer-icon" />
            </footer>
        </>
    )
}
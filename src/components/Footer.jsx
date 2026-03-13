import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithubSquare } from '@fortawesome/free-brands-svg-icons'

export default function Footer() {
    return (
        <>
            <footer className="footer-container">
                <a href="https://github.com/fab44-cloud" target="_blank" rel="noreferrer">
                    <FontAwesomeIcon icon={faGithubSquare} className="footer-icon" />
                </a>
            </footer>
        </>
    )
}
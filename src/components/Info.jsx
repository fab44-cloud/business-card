import profilePic from "../assets/career-picture.jpg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'

export default function Info() {
    return (
        <>
            <div className="info-container">
                <img src={profilePic} className="info-image" alt="Profile picture"/>
                <h1 className="info-name">Ford Berry</h1>
                <h3 className="info-title">Frontend Developer</h3>
                <p className="info-website">fordBerry.website</p>

                <div className="info-buttons">
                    <button className="btn-email">
                        <FontAwesomeIcon icon={faEnvelope} /> 
                        <span>Email</span>
                    </button>
                    <button className="btn-linkedin">
                        <a href="https://www.linkedin.com/in/fordaberry/" target="_blank" rel="noreferrer">
                            <FontAwesomeIcon icon={faLinkedin} /> 
                            <span>LinkedIn</span>
                        </a>
                    </button>
                </div>
            </div>
        </>
    )
}
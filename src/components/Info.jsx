import profilePic from "../assets/career-picture.jpg"

export default function Info() {
    return (
        <>
            <div className="info-container">
                <img src={profilePic} className="info-image" alt="Profile picture"/>
                <h1 className="info-name">Ford Berry</h1>
                <h3 className="info-title">Frontend Developer</h3>
                <p className="info-website">fordBerry.website</p>

                <div className="info-buttons">
                    <button className="btn-email">Email</button>
                    <button className="btn-linkedin">LinkedIn</button>
                </div>
            </div>
        </>
    )
}
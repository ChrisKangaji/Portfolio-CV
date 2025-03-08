import HomeText from './homeText.json';

const Social = () => {
  return (
    <div className="home__social">
        <a href={HomeText.linkedInLink} className="home__social-icon" target="_blank">
            <i className="uil uil-linkedin"></i>
        </a>

        <a href={HomeText.gitHubLink} className="home__social-icon" target="_blank">
            <i className="uil uil-github"></i>
        </a>

        <a href={HomeText.gitLabLink} className="home__social-icon" target="_blank">
            <i className="uil uil-gitlab"></i>
        </a>

        <a href={HomeText.dockerLink} className="home__social-icon" target="_blank">
            <i className="uil uil-docker"></i>
        </a>

        <a href={HomeText.instagramLink} className="home__social-icon" target="_blank">
            <i className="uil uil-instagram"></i>
        </a>
    </div>
  )
}

export default Social;
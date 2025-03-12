import HomeJSON from './home.json';

const Social = () => {
  return (
    <div className="home__social">
        <a href={HomeJSON.linkedInLink} className="home__social-icon" target="_blank">
            <i className="uil uil-linkedin"></i>
        </a>

        <a href={HomeJSON.gitHubLink} className="home__social-icon" target="_blank">
            <i className="uil uil-github"></i>
        </a>

        <a href={HomeJSON.gitLabLink} className="home__social-icon" target="_blank">
            <i className="uil uil-gitlab"></i>
        </a>

        <a href={HomeJSON.dockerLink} className="home__social-icon" target="_blank">
            <i className="uil uil-docker"></i>
        </a>

        <a href={HomeJSON.instagramLink} className="home__social-icon" target="_blank">
            <i className="uil uil-instagram"></i>
        </a>
    </div>
  )
}

export default Social;
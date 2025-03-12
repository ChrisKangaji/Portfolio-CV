import AboutJSON from './about.json';

const Info = () => {
  return (
    <div className="about__info grid">
        <div className="about__box">
            <i className='bx bx-award about__icon'></i>
            <h3 className="about__title">
                {AboutJSON.aboutBoxes.box1.title}
            </h3>
            <span className="about__subtitle">
                {AboutJSON.aboutBoxes.box1.description}
            </span>
        </div>

        <div className="about__box">
            <i className='bx bx-briefcase-alt about__icon' ></i>
            <h3 className="about__title">
                {AboutJSON.aboutBoxes.box2.title}
            </h3>
            <span className="about__subtitle">
                {AboutJSON.aboutBoxes.box2.description}
            </span>
        </div>

        <div className="about__box">
            <i className='bx bx-support about__icon' ></i>
            <h3 className="about__title">
                {AboutJSON.aboutBoxes.box3.title}
            </h3>
            <span className="about__subtitle">
                {AboutJSON.aboutBoxes.box3.description}
            </span>
        </div>
    </div>
  )
}

export default Info;
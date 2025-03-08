import SkillsText from './skillsText.json';

const Frontend = () => {
    return (
        <div className="skills__content">

            <div className="skills__title__data">
                <i className='bx bx-desktop' ></i>
                <h3 className="skills__title">{SkillsText.frontEnd.title}</h3>
            </div>

            <div className="skills__box">
                <div className="skills__group">
                    <div className="skills__data">
                        <i className='bx bx-badge-check'></i>

                        <div>
                            <h3 className="skills__name">{SkillsText.frontEnd.skillsName.typeScript}</h3>
                            <span className="skills__level">{SkillsText.skillsLevel.intermediate}</span>
                        </div>
                    </div>

                    <div className="skills__data">
                        <i className='bx bx-badge-check'></i>

                        <div>
                            <h3 className="skills__name">{SkillsText.frontEnd.skillsName.javaScript}</h3>
                            <span className="skills__level">{SkillsText.skillsLevel.intermediate}</span>
                        </div>
                    </div>

                    <div className="skills__data">
                        <i className='bx bx-badge-check'></i>

                        <div>
                            <h3 className="skills__name">{SkillsText.frontEnd.skillsName.react}</h3>
                            <span className="skills__level">{SkillsText.skillsLevel.intermediate}</span>
                        </div>
                    </div>

                    <div className="skills__data">
                        <i className='bx bx-badge-check'></i>

                        <div>
                            <h3 className="skills__name">{SkillsText.frontEnd.skillsName.msPP}</h3>
                            <span className="skills__level">{SkillsText.skillsLevel.intermediate}</span>
                        </div>
                    </div>
                </div>

                <div className="skills__group">
                    <div className="skills__data">
                        <i className='bx bx-badge-check'></i>

                        <div>
                            <h3 className="skills__name">{SkillsText.frontEnd.skillsName.html5}</h3>
                            <span className="skills__level">{SkillsText.skillsLevel.intermediate}</span>
                        </div>
                    </div>

                    <div className="skills__data">
                        <i className='bx bx-badge-check'></i>

                        <div>
                            <h3 className="skills__name">{SkillsText.frontEnd.skillsName.liquid}</h3>
                            <span className="skills__level">Basic</span>
                        </div>
                    </div>

                    <div className="skills__data">
                        <i className='bx bx-badge-check'></i>

                        <div>
                            <h3 className="skills__name">{SkillsText.frontEnd.skillsName.css}</h3>
                            <span className="skills__level">{SkillsText.skillsLevel.intermediate}</span>
                        </div>
                    </div>

                    <div className="skills__data">
                        <i className='bx bx-badge-check'></i>

                        <div>
                            <h3 className="skills__name">{SkillsText.frontEnd.skillsName.bootstrap}</h3>
                            <span className="skills__level">{SkillsText.skillsLevel.intermediate}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Frontend;
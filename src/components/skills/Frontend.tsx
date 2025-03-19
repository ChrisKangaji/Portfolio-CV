import SkillsJSON from './skills.json';

const Frontend = () => {
    return (
        <div className="skills__content">

            <div className="skills__title__data">
                <i className='bx bx-desktop' ></i>
                <h3 className="skills__title">{SkillsJSON.frontEnd.title}</h3>
            </div>

            <div className="skills__box">
                <div className="skills__group">
                    <div className="skills__data">
                        <i className='bx bx-badge-check'></i>

                        <div>
                            <h3 className="skills__name">{SkillsJSON.frontEnd.skillsName.typeScript}</h3>
                            <span className="skills__level">{SkillsJSON.skillsLevel.intermediate}</span>
                        </div>
                    </div>

                    <div className="skills__data">
                        <i className='bx bx-badge-check'></i>

                        <div>
                            <h3 className="skills__name">{SkillsJSON.frontEnd.skillsName.javaScript}</h3>
                            <span className="skills__level">{SkillsJSON.skillsLevel.intermediate}</span>
                        </div>
                    </div>

                    <div className="skills__data">
                        <i className='bx bx-badge-check'></i>

                        <div>
                            <h3 className="skills__name">{SkillsJSON.frontEnd.skillsName.react}</h3>
                            <span className="skills__level">{SkillsJSON.skillsLevel.intermediate}</span>
                        </div>
                    </div>

                    <div className="skills__data">
                        <i className='bx bx-badge-check'></i>

                        <div>
                            <h3 className="skills__name">{SkillsJSON.frontEnd.skillsName.msPP}</h3>
                            <span className="skills__level">{SkillsJSON.skillsLevel.advanced}</span>
                        </div>
                    </div>
                </div>

                <div className="skills__group">
                    <div className="skills__data">
                        <i className='bx bx-badge-check'></i>

                        <div>
                            <h3 className="skills__name">{SkillsJSON.frontEnd.skillsName.html5}</h3>
                            <span className="skills__level">{SkillsJSON.skillsLevel.intermediate}</span>
                        </div>
                    </div>

                    <div className="skills__data">
                        <i className='bx bx-badge-check'></i>

                        <div>
                            <h3 className="skills__name">{SkillsJSON.frontEnd.skillsName.liquid}</h3>
                            <span className="skills__level">{SkillsJSON.skillsLevel.intermediate}</span>
                        </div>
                    </div>

                    <div className="skills__data">
                        <i className='bx bx-badge-check'></i>

                        <div>
                            <h3 className="skills__name">{SkillsJSON.frontEnd.skillsName.css}</h3>
                            <span className="skills__level">{SkillsJSON.skillsLevel.intermediate}</span>
                        </div>
                    </div>

                    <div className="skills__data">
                        <i className='bx bx-badge-check'></i>

                        <div>
                            <h3 className="skills__name">{SkillsJSON.frontEnd.skillsName.bootstrap}</h3>
                            <span className="skills__level">{SkillsJSON.skillsLevel.intermediate}</span>
                        </div>
                    </div>

                    <div className="skills__data">
                        <i className='bx bx-badge-check'></i>

                        <div>
                            <h3 className="skills__name">{SkillsJSON.frontEnd.skillsName.dynamics365}</h3>
                            <span className="skills__level">{SkillsJSON.skillsLevel.advanced}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Frontend;
import SkillsText from './skillsText.json';

const Backend = () => {
    return (
        <div className="skills__content">
            <div className="skills__title__data">
                <i className='bx bx-server' ></i>
                <h3 className="skills__title">{SkillsText.backEnd.title}</h3>
            </div>

            <div className="skills__box">
                <div className="skills__group">
                    <div className="skills__data">
                        <i className='bx bx-badge-check'></i>

                        <div>
                            <h3 className="skills__name">{SkillsText.backEnd.skills.cSharp}</h3>
                            <span className="skills__level">{SkillsText.skillsLevel.advanced}</span>
                        </div>
                    </div>

                    <div className="skills__data">
                        <i className='bx bx-badge-check'></i>

                        <div>
                            <h3 className="skills__name">{SkillsText.backEnd.skills.java}</h3>
                            <span className="skills__level">{SkillsText.skillsLevel.basic}</span>
                        </div>
                    </div>

                    <div className="skills__data">
                        <i className='bx bx-badge-check'></i>

                        <div>
                            <h3 className="skills__name">{SkillsText.backEnd.skills.python}</h3>
                            <span className="skills__level">{SkillsText.skillsLevel.basic}</span>
                        </div>
                    </div>

                    <div className="skills__data">
                        <i className='bx bx-badge-check'></i>

                        <div>
                            <h3 className="skills__name">{SkillsText.backEnd.skills.azure}</h3>
                            <span className="skills__level">{SkillsText.skillsLevel.intermediate}</span>
                        </div>
                    </div>
                </div>

                <div className="skills__group">
                    <div className="skills__data">
                        <i className='bx bx-badge-check'></i>

                        <div>
                            <h3 className="skills__name">{SkillsText.backEnd.skills.dotNet}</h3>
                            <span className="skills__level">{SkillsText.skillsLevel.intermediate}</span>
                        </div>
                    </div>

                    <div className="skills__data">
                        <i className='bx bx-badge-check'></i>

                        <div>
                            <h3 className="skills__name">{SkillsText.backEnd.skills.devOps}</h3>
                            <span className="skills__level">{SkillsText.skillsLevel.intermediate}</span>
                        </div>
                    </div>


                    <div className="skills__data">
                        <i className='bx bx-badge-check'></i>

                        <div>
                            <h3 className="skills__name">{SkillsText.backEnd.skills.sql}</h3>
                            <span className="skills__level">{SkillsText.skillsLevel.intermediate}</span>
                        </div>
                    </div>

                    <div className="skills__data">
                        <i className='bx bx-badge-check'></i>

                        <div>
                            <h3 className="skills__name">{SkillsText.backEnd.skills.firebase}</h3>
                            <span className="skills__level">{SkillsText.skillsLevel.intermediate}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Backend;
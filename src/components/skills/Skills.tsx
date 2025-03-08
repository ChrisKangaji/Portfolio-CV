import './Skills.css';
import Frontend from './Frontend';
import Backend from './Backend';
import SkillsText from './skillsText.json';

const Skills = () => {
    return (
        <section className="section skills" id="skills">
            <h2 className="section__title">{SkillsText.skills.title}</h2>
            <span className="section__subtitle">{SkillsText.skills.subtitle}</span>

            <div className="skills__container container grid">
                <Frontend />
                <Backend />
            </div>
        </section>
    )
}

export default Skills;
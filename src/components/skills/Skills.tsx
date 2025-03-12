import './skills.css';
import Frontend from './Frontend';
import Backend from './Backend';
import SkillsJSON from './skills.json';

const Skills = () => {
    return (
        <section className="section skills" id="skills">
            <h2 className="section__title">{SkillsJSON.skills.title}</h2>
            <span className="section__subtitle">{SkillsJSON.skills.subtitle}</span>

            <div className="skills__container container grid">
                <Frontend />
                <Backend />
            </div>
        </section>
    )
}

export default Skills;
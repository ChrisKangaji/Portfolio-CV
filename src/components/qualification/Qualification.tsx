import { useState } from 'react';
import './qualification.css'
import QualificationJSON from './qualification.json'

const Qualification = () => {
    // Function to open the view more modal
    const [toggleContainerlState, setToggleContainerState] = useState(1);

    const toggleContainer = (index: number) => {
        setToggleContainerState(index);
    }

    return (
        <section className="section qualification">
            <h2 className="section__title">{QualificationJSON.Qualification.title}</h2>
            <span className="section__subtitle">{QualificationJSON.Qualification.subtitle}</span>

            <div className="qualification__container container">
                <div className="qualification__tabs">
                    <div className={toggleContainerlState === 1 ? "qualification__button button--flex qualification__active" : "qualification__button button--flex"} onClick={() => toggleContainer(1)}>
                        <i className="uil uil-graduation-cap qualification__icon"></i> Education
                    </div>

                    <div className={toggleContainerlState === 2 ? "qualification__button button--flex qualification__active" : "qualification__button button--flex"} onClick={() => toggleContainer(2)}>
                        <i className="uil uil-briefcase-alt qualification__icon"></i> Experience
                    </div>
                </div>

                <div className="qualification__sections">
                    <div className={toggleContainerlState === 1 ? "qualification__content qualification__content-active" : "qualification__content"}>
                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">
                                    {QualificationJSON.Education[1].major}
                                </h3>
                                <span className="qualification__subtitle">
                                    {QualificationJSON.Education[1].school}
                                </span>
                                <div className="qualification__calendar">
                                    <i className="uil uil-calendar-alt qualification__calendar-icon"></i>
                                    {QualificationJSON.Education[1].graduation}
                                </div>
                            </div>
                            {/* Rounder and line set last based on number of data */}
                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>


                        <div className="qualification__data">
                            {/* Rounder and line set first based on number of data */}
                            <div></div>
                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>

                            <div>
                                <h3 className="qualification__title">
                                    {QualificationJSON.Education[0].major}
                                </h3>
                                <span className="qualification__subtitle">
                                    {QualificationJSON.Education[0].school}
                                </span>
                                <div className="qualification__calendar">
                                    <i className="uil uil-calendar-alt qualification__calendar-icon"></i>
                                    {QualificationJSON.Education[0].graduation}
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={toggleContainerlState === 2 ? "qualification__content qualification__content-active" : "qualification__content"}>
                        <div className="qualification__data">
                            {/* Rounder and line set last based on number of data */}
                            <div></div>
                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>

                            <div>
                                <h3 className="qualification__title">
                                    {QualificationJSON.work[1].company}
                                </h3>
                                <span className="qualification__subtitle">
                                    {QualificationJSON.work[1].role}
                                </span>
                                <div className="qualification__calendar">
                                    <i className="uil uil-calendar-alt qualification__calendar-icon"></i>
                                    {QualificationJSON.work[1].period}
                                </div>
                            </div>
                        </div>

                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">
                                    {QualificationJSON.work[0].company}
                                </h3>
                                <span className="qualification__subtitle">
                                    {QualificationJSON.work[0].role}
                                </span>
                                <div className="qualification__calendar">
                                    <i className="uil uil-calendar-alt qualification__calendar-icon"></i>
                                    {QualificationJSON.work[0].period}
                                </div>
                            </div>
                            {/* Rounder and line set last based on number of data */}
                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Qualification;
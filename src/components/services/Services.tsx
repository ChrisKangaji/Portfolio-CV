import React, { useState } from 'react';
import './services.css';
import ServicesJSON from './services.json';

const Services = () => {

    // Function to open the view more modal
    const [toggleModalState, setToggleModalState] = useState(0);

    const toggleModal = (index: number) => {
        setToggleModalState(index);
    }

    return (
        <section className="services section" id="services">
            <h2 className="section__title">{ServicesJSON.title}</h2>
            <span className="section__subtitle">{ServicesJSON.subtitle}</span>

            <div className="services__container container grid">
                {/* First Services Content Box */}
                <div className="services__content">
                    <div>
                        <i className="uil uil-brackets-curly services__icon"></i>
                        <h3 className="services__title">{ServicesJSON.servicesBoxes.box1.title.split('\n').map((line, index) => (
                            <React.Fragment key={index}>
                                {line}
                                <br />
                            </React.Fragment>
                        ))}</h3>
                    </div>

                    {/* Button for opening view more modal - function toggleModal is void */}
                    <span className="services__button" onClick={() => toggleModal(1)}>{ServicesJSON.button}<i className="uil uil-arrow-right services__button-icon"></i></span>

                    {/* View more modal */}
                    <div className={toggleModalState === 1 ? "services__modal active-modal" : "services__modal"}>
                        <div className="services__modal-content">

                            <i className="uil uil-times services__modal-close" onClick={() => toggleModal(0)}></i>
                            <h3 className="services__modal-title">{ServicesJSON.servicesBoxes.box1.modalTitle}</h3>
                            <p className="services__modal-description">{ServicesJSON.servicesBoxes.box1.modalDesc}</p>

                            <ul className="services__modal-services grid">
                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p>{ServicesJSON.servicesBoxes.box1.modalService1}</p>
                                </li>
                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p>{ServicesJSON.servicesBoxes.box1.modalService2}</p>
                                </li>
                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p>{ServicesJSON.servicesBoxes.box1.modalService3}</p>
                                </li>
                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p>{ServicesJSON.servicesBoxes.box1.modalService4}</p>
                                </li>
                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p>{ServicesJSON.servicesBoxes.box1.modalService5}</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Second Services Content Box*/}
                <div className="services__content">
                    <div>
                        <i className="uil uil-comments services__icon"></i>
                        <h3 className="services__title">{ServicesJSON.servicesBoxes.box2.title.split('\n').map((line, index) => (
                            <React.Fragment key={index}>
                                {line}
                                <br />
                            </React.Fragment>
                        ))}</h3>
                    </div>

                    {/* Button for opening view more modal */}
                    <span className="services__button" onClick={() => toggleModal(2)}>{ServicesJSON.button}<i className="uil uil-arrow-right services__button-icon"></i></span>

                    {/* View more modal */}
                    <div className={toggleModalState === 2 ? "services__modal active-modal" : "services__modal"}>
                        <div className="services__modal-content">

                            <i className="uil uil-times services__modal-close" onClick={() => toggleModal(0)}></i>
                            <h3 className="services__modal-title">{ServicesJSON.servicesBoxes.box2.modalTitle.split('\n').map((line, index) => (
                                <React.Fragment key={index}>
                                    {line}
                                    <br />
                                </React.Fragment>
                            ))}</h3>
                            <p className="services__modal-description">{ServicesJSON.servicesBoxes.box2.modalDesc}</p>

                            <ul className="services__modal-services grid">
                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p>{ServicesJSON.servicesBoxes.box2.modalService1}</p>
                                </li>
                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p>{ServicesJSON.servicesBoxes.box2.modalService2}</p>
                                </li>
                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p>{ServicesJSON.servicesBoxes.box2.modalService3}</p>
                                </li>
                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p>{ServicesJSON.servicesBoxes.box2.modalService4}</p>
                                </li>
                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p>{ServicesJSON.servicesBoxes.box2.modalService5}</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Third Services Content Box  - Concider what can be added. Modify CSS to include this. */}
                {/* <div className="services__content">
                    <div>
                        <i className="uil uil-edit services__icon"></i>
                        <h3 className="services__title">{ServicesJSON.servicesBoxes.box3.title.split('\n').map((line, index) => (
                            <React.Fragment key={index}>
                                {line}
                                <br />
                            </React.Fragment>
                        ))}</h3>
                    </div>

                    <span className="services__button" onClick={() => toggleModal(3)}>{ServicesJSON.button}<i className="uil uil-arrow-right services__button-icon"></i></span>

                    <div className={toggleModalState === 3 ? "services__modal active-modal" : "services__modal"}>
                        <div className="services__modal-content">

                            <i className="uil uil-times services__modal-close" onClick={() => toggleModal(0)}></i>
                            <h3 className="services__modal-title">{ServicesJSON.servicesBoxes.box3.modalTitle}</h3>
                            <p className="services__modal-description">{ServicesJSON.servicesBoxes.box3.modalDesc}</p>

                            <ul className="services__modal-services grid">
                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p>{ServicesJSON.servicesBoxes.box3.modalService1}</p>
                                </li>
                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p>{ServicesJSON.servicesBoxes.box3.modalService2}</p>
                                </li>
                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p>{ServicesJSON.servicesBoxes.box3.modalService3}</p>
                                </li>
                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p>{ServicesJSON.servicesBoxes.box3.modalService4}</p>
                                </li>
                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p>{ServicesJSON.servicesBoxes.box3.modalService5}</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div> */}
            </div>
        </section>
    )
}

export default Services;
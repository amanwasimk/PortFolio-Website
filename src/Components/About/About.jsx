import React from "react";
import './About.css'


export default function About(){
        return (
            <section id="aboutid" className="about-me" aria-labelledby="about-heading">
                <header className="about-title">
                    <h1 id="about-heading">About Me</h1>
                </header>

                <div className="about-body">
                    <p>
                        Passionate engineering graduate with foundation in
                        software development, web technologies, and Data Structures & Algorithms. Skilled in HTML,
                        CSS, JavaScript, React.js, Java, and Python with the
                        ability to build responsive and functional applications. Experienced in project
                        management, task allocation, and team coordination through academic and
                        extracurricular initiatives.
                    </p>

                    <div className="about-skills">
                        <div className="about-skill">
                            <div className="label">HTML &amp; CSS</div>
                            <div className="status">
                                <div className="bar"><div className="fill" style={{width: '60%'}}/></div>
                            </div>
                        </div>

                        <div className="about-skill">
                            <div className="label">JavaScript</div>
                            <div className="status">
                                <div className="bar"><div className="fill" style={{width: '80%'}}/></div>
                            </div>
                        </div>

                        <div className="about-skill">
                            <div className="label">React JS</div>
                            <div className="status">
                                <div className="bar"><div className="fill" style={{width: '75%'}}/></div>
                            </div>
                        </div>

                        <div className="about-skill">
                            <div className="label">DSA</div>
                            <div className="status">
                                <div className="bar"><div className="fill" style={{width: '60%'}}/></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
}
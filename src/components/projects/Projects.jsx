import "./projects.css"

export const Project = () => {
    return (
        <div className="main-projects">
            <h1>Projects</h1>
            <div className="projects">
                <div className="onbikes">
                    <div className="data">
                        <h2>Onn Bikes Clone</h2>
                        <p>This project is about online website for bike rental system. This online website is for ONN bikes company.</p>
                        <div className="tech-stack">
                            <p>HTML</p>
                            <p>CSS</p>
                            <p>JavaScript</p>
                            <p>MongoDB</p>
                            <p>Node</p>
                        </div>
                        <h3>GITHUB</h3>
                        <h3>LIVE</h3>
                    </div>
                    <div className="img"></div>
                </div>
                <div className="organplus">
                    <div className="data">
                        <h2>Organ +</h2>
                        <p>Organ+ is an organ donation website for hospitals. The main aim of this project is to notify the registered organ seekers via email, as and when the organ of their requirement matching to their blood group is available and much more. Used React, JavaScript, CSS, and MongoDB to build this website.</p>
                        <div className="tech-stack">
                            <p>React</p>
                            <p>CSS</p>
                            <p>JavaScript</p>
                            <p>MongoDB</p>
                            <p>Node</p>
                        </div>
                        <h3>GITHUB</h3>
                        <h3>LIVE</h3>
                    </div>
                    <div className="img"></div>
                </div>
            </div>
        </div>
    )
}
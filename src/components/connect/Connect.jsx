import gmail from "../../assets/gmail-original.svg";
import github from "../../assets/github-original.svg";
import linkedin from "../../assets/linkedin-original.svg";
import twitter from "../../assets/twitter-original.svg";
// import codepen from "../../assets/codepen-plain.svg";
import "./connect.css"


export const Connect = () => {
    const connectData = [   { method: linkedin, link: "https://github.com/harshith128", id: 1 },
                            { method: gmail, link: "mailto: harshith1357@gmail.com", id: 2 },
                            { method: github, link: "https://github.com/harshith128", id: 3 },
                            { method: twitter, link: "https://github.com/harshith128", id: 4 },
                        ]
    return (
        <div className="connect-row">
            {
                connectData.map((ele) => {
                    return (
                        <div key={ele.id} className="connect-each">
                            <a className="connect-content" rel="noopener noreferrer" target="_blank" href={ele.link}>
                                <img className="connect-img" src={ele.method} alt={ele.method} />
                            </a>
                        </div>
                    )
                })
            }
        </div>
    )
}
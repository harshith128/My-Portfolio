import "./contact.css"

export const Contact = () => {
    return (
        <div className="contact">
            <div>
                <h2>
                    Contact me
                </h2>
                <p>harshithcr1357@gmail.com</p>
                <p>+91 7019751386</p>
            </div>
            <form>
                <input type="text" /><br/>
                <input type="text" /><br/>
                <input type="text" /><br/>
                <input type="submit" />
            </form>
        </div>
    )
}
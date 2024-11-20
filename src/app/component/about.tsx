import "../style/about.css"

export default function AboutPage(){
    return(
        <div id="about">
            <section className="about-section">
                <div className="about-first-div">
                    <div className="about-second-div">
                        <h1 className="h1">
                            About Me
                        </h1>
                        <p className="about-para"> Hi, I am SARA ATIF, a passionate web developer with 2 years of experience in IT. My expertise lies in UI/UX design, front-end development.</p>
                        <p className="about-second-para">I believe in blending creativity with functionality to deliver meaningful results. Every project I work on is a chance to push boundaries and explore innovative solutions.</p>
                        <p className="about-third-para">Feel free to explore my portfolio and get in touch if you like to collaborate!
                        </p>
                        <div className="about-button-div">
                            <a href="">
                                <button className="about-button"> View CV</button>
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
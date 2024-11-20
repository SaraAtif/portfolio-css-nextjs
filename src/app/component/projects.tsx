import Image from "next/image";
import Link from "next/link";
import "../style/projects.css"

export default function ProjectsPage() {
    return (
        <div id="projects">
            <section className="project-section">
                <div className="project-first-div">
                    <div className="project-second-div">
                        <h1 className="project-h1">My Projects</h1>
                        <div className="project-maindiv">
                            <div className="project-div1">
                                <div className="project-div2">
                                    <Image className="project-img1" src="/static-resume.PNG" alt="gallery" width={300} height={300} />
                                    <div className="project-div3">
                                        <h3 className="project-h3">Static Resume</h3>
                                        <p className="project-para">This is the Static Resume which i create using html, css and js</p>

                                        <Link target="_blank" href={"https://vercel.com/sara-atifs-projects/milestone1-static-interactive-resume"}>
                                            <p className="project-para2">
                                                View Project..
                                            </p>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="project-div1">
                                <div className="project-div2">
                                    <Image className="project-img1" src="/shareable-resume.PNG" alt="gallery" width={300} height={300} />
                                    <div className="project-div3">
                                        <h3 className="project-h3">Shareable Resume</h3>
                                        <p className="project-para">Now you can easy to generate your resume,save it and share to everyone</p>

                                        <Link target="_blank" href={"https://vercel.com/sara-atifs-projects/milestone5-shareable-resume-builder"}>
                                            <p className="project-para2">
                                                View Project..
                                            </p>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="project-div1">
                                <div className="project-div2">
                                    <Image className="project-img1" src="/form.PNG" alt="gallery" width={300} height={300} />
                                    <div className="project-div3">
                                        <h3 className="project-h3">Registration form</h3>
                                        <p className="project-para">Here it is student registration form. Now you can easily store the data</p>

                                        <Link target="_blank" href={"https://vercel.com/sara-atifs-projects/simple-form"}>
                                            <p className="project-para2">
                                                View Project..
                                            </p>
                                        </Link>
                                    </div>
                                </div>
                            
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </div>
    )
}
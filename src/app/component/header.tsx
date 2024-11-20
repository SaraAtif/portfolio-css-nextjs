import { FaDownload } from "react-icons/fa";
import Link from "next/link";
import "../style/header.css"

export default function Header(){
    return(
        <div className="header-main">
            <header className="header">
                <div className="header-container">
                    <span className="header-span">Sara Atif</span>
                    <nav className="nav">
                        <Link className="header-link" href="/">Home</Link>
                        <Link className="header-link" href="#about">About</Link>
                        <Link className="header-link" href="#skills">Skills</Link>
                        <Link className="header-link" href="#projects">Projects</Link>
                        <Link className="header-link" href="#contact">Contact</Link>
                        </nav>
                        <a href="#" target="blank">
                        <button className="header-button">Download CV
                        <FaDownload className="header-icon" /></button></a>
                </div>
            </header>
        </div>
    )
}
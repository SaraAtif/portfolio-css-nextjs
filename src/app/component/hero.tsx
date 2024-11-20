"use client"
import Image from 'next/image';
import Link from 'next/link';
import Typewriter from 'typewriter-effect';
import picture from "../../../public/images.jpeg"
import "../style/hero.css"



export default function HeroPage(){
    return(
        <section className="hero-section">
            <div className="hero-first-div">
                <div className="hero-second-div">
                    <h1 className="h1">I am <br />
                    <Typewriter
  options={{
    strings: ['Teacher','Web Developer', 'UI/UX Designer'],
    autoStart: true,
    loop: true,
  }}
/>
                    </h1>
                    <p className='hero-para'>I work in the sweet spot for innovation, somewhere between strategy, design and technology. I love the web and the work we do.</p>
                    <div className='hero-button-div'>
                        <Link href={"#contact"}>
                        <button className='hero-contact-button'>Contact </button></Link>
                    </div>
                    <div className='hero-img-div'>
                        <Image className='hero-img' alt='mypic' width={300} height={300} src={picture}></Image>
                    </div>
                </div>
            </div>
        </section>
    )
}
import React from 'react';
import sidImg from "../../assets/sidImg.png";

function Home(){
    return(
        <div className="homePage">
            <div className='LHP'>
                <p className='hi'>Hi, I am</p>
                <p className='homeName'>SIDDHESH BAGDE</p>
                <p className='fullStack'>Full-Stack WebDeveloper</p>
                <p className='quote'>I make websites that (usually) Works.</p>
                <div className="download-cv-btn-wrapper">
                  <a
                    href="/Siddhesh_Resume.pdf"
                    download="Siddhesh_Resume.pdf"
                    className="download-cv-btn"
                  >
                    Download CV
                  </a>
                </div>
            </div>
            <div className='RHP'>
                <img src={sidImg} alt="" />
            </div>
        </div>
    )
}

export default Home;
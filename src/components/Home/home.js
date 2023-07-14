import React from 'react'
import './home.css'

import Sidebar from '../Sidebar/sidebar'
import About from '../About/index'
import TechStack from '../TechStack/TechStack'
import Education  from '../Education/Education'
import Projects from '../Projects/Projects'

import Typewriter from 'typewriter-effect'


const Home = () =>{
    return(
        <React.Fragment>
            <div className="Home-mobile-container">
            <Sidebar />
            <div className="container-fluid home-content">
                <h1 className="home-heading">Hi I'm </h1>
                <h2 className="name-mobile-para">
                <Typewriter
                options={{
                    strings: ['VAISHNAVI MANDALA'],
                    autoStart: true,
                    loop: true,
                    }}
                />
                </h2>
                <h2 className="home-heading">
                <Typewriter
                options={{
                    strings: ['An Aspiring', 'Full-Stack Developer', 'MERN Stack Developer'],
                    autoStart: true,
                    loop: true,
                    }}
                />
                </h2>
                <div className="button-for-action">
                    <button type="button" className="hire-me-button">Hire Me</button>
                    <button type="button" className="get-resume-button">
                        <a href="https://drive.google.com/file/d/1xiNL7BriunzGm9MCnkJ3Z8yuMAEk2zm6/view?usp=sharing"
                        download="vaishnavi_cv">Get Resume</a>
                        </button>

                </div>
                <About/>
                <TechStack/>
                <Education/>
                <Projects/>
            </div>
            </div>
            <div className="Home-Desktop-container">
            <Sidebar/>
            <div className='Home-dekstop-main-container'>
            <div className="home-desktop-content">
            <h2 className='name-desktop-heading'>
            <Typewriter
                options={{
                    strings: ['VAISHNAVI MANDALA'],
                    autoStart: true,
                    loop: true,
                    }}
                />
                </h2>
                <h1 className='home-desktop-heading'>Hi I'm an</h1>
                <h2 className='home-desktop-heading'>
                <Typewriter
                options={{
                    strings: ['Full-Stack Developer', 'MERN Stack Developer'],
                    autoStart: true,
                    loop: true,
                    }}
                />
                </h2>
                <div className="button-for-desktop-action">
                    <button type="button" className="hire-me-dektop-button">Hire Me</button>
                    <button type="button" className="get-resume-desktop-button">
                        <a href="https://drive.google.com/file/d/1xiNL7BriunzGm9MCnkJ3Z8yuMAEk2zm6/view?usp=sharing"
                        download="vaishnavi_cv">Get Resume</a>
                        </button>

                </div>
            </div>
            <About/>
            <TechStack/>
            <Education/>
            <Projects/>
            </div>
            </div>
        </React.Fragment>
    
    )
}

export default Home
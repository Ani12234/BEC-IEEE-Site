import React, { useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './About.css';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const mainRef = useRef(null);

  useLayoutEffect(() => {
    const main = mainRef.current;
    
    const ctx = gsap.context(() => {
      ScrollTrigger.matchMedia({
        // Desktop animations (horizontal scroll)
        "(min-width: 1024px)": function() {
          const horizontalSections = gsap.utils.toArray('.panel');
          gsap.to(horizontalSections, {
            xPercent: -100 * (horizontalSections.length - 1),
            ease: 'none',
            scrollTrigger: {
              trigger: '.horizontal-scroll-section',
              pin: true,
              scrub: 1,
              snap: 1 / (horizontalSections.length - 1),
              end: () => '+=' + main.querySelector('.horizontal-scroll-section').offsetWidth,
            },
          });

          // Vertical animations for the sections that follow
          gsap.from('.advancing-tech-section', { scrollTrigger: { trigger: '.advancing-tech-section', start: 'top 80%', toggleActions: 'play none none reverse' }, opacity: 0, y: 50 });
          gsap.from('.professional-growth-section', { scrollTrigger: { trigger: '.professional-growth-section', start: 'top 80%', toggleActions: 'play none none reverse' }, opacity: 0, y: 50 });
        },

        // Mobile animations (simple vertical scroll)
        "(max-width: 1023px)": function() {
          // No pinning, just simple scroll-in animations for all sections
          gsap.from('.welcome-panel', { scrollTrigger: { trigger: '.welcome-panel', start: 'top 80%', toggleActions: 'play none none reverse' }, opacity: 0, y: 50 });
          gsap.from('.vision-mission-panel', { scrollTrigger: { trigger: '.vision-mission-panel', start: 'top 80%', toggleActions: 'play none none reverse' }, opacity: 0, y: 50 });
          gsap.from('.advancing-tech-section', { scrollTrigger: { trigger: '.advancing-tech-section', start: 'top 80%', toggleActions: 'play none none reverse' }, opacity: 0, y: 50 });
          gsap.from('.professional-growth-section', { scrollTrigger: { trigger: '.professional-growth-section', start: 'top 80%', toggleActions: 'play none none reverse' }, opacity: 0, y: 50 });
        },
      });
    }, main);

    return () => ctx.revert();
  }, []);

  return (
    <div className="about-page" ref={mainRef}>
      <section className="hero-video-section">
        <div className="video-container">
          <video src="/video/VIT University - 1Min Ad Film.mp4" autoPlay loop muted playsInline className="background-video" />
          <div className="overlay-content">
            <h1 className="main-title">IEEE-BEC</h1>
            <p className="subtitle">Advancing Technology for Humanity</p>
          </div>
        </div>
      </section>

      <section className="horizontal-scroll-section">
        <div className="scroll-track">
          <div className="panel welcome-panel">
            <div className="panel-content">
              <h2 className="panel-title">Welcome to IEEE-BEC</h2>
              <p className="panel-text">A dynamic community dedicated to advancing technology for humanity. We provide a platform for students to develop their technical and professional skills.</p>
            </div>
          </div>

          <div className="panel vision-mission-panel">
            <div className="panel-content">
              <h2 className="panel-title">Our Vision & Mission</h2>
              <div className="cards-container">
                <div className="card">
                  <h3 className="card-title">Our Vision</h3>
                  <p className="card-text">To be a leading student branch, fostering innovation and excellence in technology and engineering for the benefit of society.</p>
                </div>
                <div className="card">
                  <h3 className="card-title">Our Mission</h3>
                  <p className="card-text">To provide our members with opportunities for skill development, networking, and collaboration, and to promote the values of IEEE.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="vertical-content-wrapper">
        <section className="content-section advancing-tech-section">
          <div className="split-content">
            <div className="text-content">
              <h2 className="section-title">Advancing Technology for All</h2>
              <p className="section-text">IEEE is the world's largest technical professional organization dedicated to advancing technology for the benefit of humanity. Our members inspire a global community to innovate for a better tomorrow through highly cited publications, conferences, technology standards, and professional and educational activities.</p>
            </div>
            <div className="image-content">
              <img src="/images/tech-abstract.jpg" alt="Abstract Technology" className="panel-image" />
            </div>
          </div>
        </section>

        <section className="content-section professional-growth-section">
          <h2 className="section-title">Fostering Professional Growth</h2>
          <div className="cards-container">
            <div className="card">
                <div className="card-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" /></svg>
                </div>
                <h3 className="card-title">Publications</h3>
                <p className="card-text">Get access to cutting-edge research and knowledge through the IEEE Xplore digital library, the world's leading resource for engineering and technology literature.</p>
            </div>
            <div className="card">
                <div className="card-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m-7.5-2.962a3.75 3.75 0 015.965-2.962M12 6.75a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" /></svg>
                </div>
                <h3 className="card-title">Conferences</h3>
                <p className="card-text">Participate in premier technical conferences, workshops, and events. Present your work, learn from experts, and stay ahead of the latest industry trends.</p>
            </div>
            <div className="card">
                <div className="card-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 21v-7.5A.75.75 0 0114.25 12h.01a.75.75 0 01.75.75v7.5m-4.5 0v-7.5A.75.75 0 009.75 12h-.01a.75.75 0 00-.75.75v7.5m-4.5 0v-7.5A.75.75 0 015.25 12h.01a.75.75 0 01.75.75v7.5m15-7.5A.75.75 0 0019.5 12h-.01a.75.75 0 00-.75.75v7.5m-4.5 0v-7.5a.75.75 0 00-.75-.75h-.01a.75.75 0 00-.75.75v7.5m-4.5 0v-7.5a.75.75 0 01.75-.75h.01a.75.75 0 01.75.75v7.5" /></svg>
                </div>
                <h3 className="card-title">Networking</h3>
                <p className="card-text">Connect with a global community of professionals, academics, and pioneers. Build valuable relationships that will last a lifetime and shape your career.</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;

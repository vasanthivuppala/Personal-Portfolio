import "../pagescss/About.css";
import { useEffect, useRef, useState } from "react";
function About() {
  const aboutRef = useRef(null);
const [showTimeline, setShowTimeline] = useState(false);
useEffect(() => {
  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        setShowTimeline(true);
      }
    },
    { threshold: 0.4 }
  );

  if (aboutRef.current) {
    observer.observe(aboutRef.current);
  }

  return () => observer.disconnect();
}, []);
  return (
    <section
  className={`about ${showTimeline ? "show-timeline" : ""}`}
  ref={aboutRef}
>

      <div className="about-container">

        <div className="about-left">
           <h3 className="section-label">
              WHO AM I?
            </h3>
          <p className="about-intro">
            Driven by curiosity and a passion for technology, I am a B.Tech CSE student focused on creating meaningful software solutions. From developing AI-powered chatbots and full-stack applications to solving challenging DSA problems, I continuously seek opportunities to learn, build, and contribute to the developer community through open-source projects.

          </p>

          <div className="about-highlights">

            <div className="highlight-card">
              🎓 B.Tech CSE Student
            </div>

            <div className="highlight-card">
              💻 MERN Stack Developer
            </div>

            <div className="highlight-card">
              🧩 DSA Enthusiast
            </div>

            <div className="highlight-card">
              🚀 Open Source Contributor
            </div>

          </div>

        </div>

        <div className="about-right">

          <div className="timeline">

            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <h3>2024</h3>
                <p>Started B.Tech CSE</p>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <h3>2024</h3>
                <p>Learned C Programming</p>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <h3>2025</h3>
                <p>Started DSA Journey</p>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <h3>2025</h3>
                <p>Entered Web Development</p>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <h3>2026</h3>
                <p>Started MERN Stack Development,</p>
                <p>Open Source Contribution</p>
              </div>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default About;
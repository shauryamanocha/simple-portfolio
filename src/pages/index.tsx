import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import "../styles/index.scss";
const IndexPage: React.FC<PageProps> = () => {
  const openResume = () => {};

  return (
    <div>
      <main>
        <nav>
          <span id="logo"> </span>
          <a href="https://www.linkedin.com/in/shaurya-m-89985313b/">
            LinkedIn
          </a>
          {/* <a href="https://github.com/shauryamanocha">Github</a>
          <a href="">Contact</a> */}
        </nav>
        <div className="header">
          <h1>Shaurya Manocha</h1>
          <h3 id="monotype">Full Stack Developer</h3>
        </div>
      </main>
      <section className="about">
        <div className="title">
          <h1>About Me</h1>
        </div>
        <div className="content">
          <p>
            Hey, I'm Shaurya, an experienced{" "}
            <span className="bold">Full-Stack Developer</span> specializing in
            web development. I've led diverse projects, including crafting
            insurance apps and developing{" "}
            <span className="bold">ChatGPT-powered applications.</span>{" "}
            Currently pursuing a Degree in{" "}
            <span className="bold">Computer Science</span> at{" "}
            <span className="bold">McMaster University</span>. I'm passionate
            about continuous learning and innovation.
          </p>
        </div>
      </section>
      <section className="experience">
        <div className="content">
          <ul>
            <li>
              <div className="job">
                <div className="job-title">Deloitte, '22, '23</div>
                <div className="job-description">
                  Full Stack Developer, Systems Engineering
                </div>
              </div>
            </li>
            <li>
              <div className="job">
                <div className="job-title">Flow Digital, '23</div>
                <div className="job-description">
                  Full Stack Independent Contractor
                </div>
              </div>
            </li>
            <li>
              <div className="job">
                <div className="job-title">Deloitte, '21</div>
                <div className="job-description">
                  Full Stack Developer, Systems Engineering
                </div>
              </div>
            </li>
          </ul>
        </div>
        <div className="title">
          <h1>Work Experience</h1>
        </div>
      </section>
      <section className="resume">
        <div className="divider"></div>
        <a href="resume_shaurya_manocha.pdf" target="blank">
          My Resume
        </a>
      </section>
    </div>
  );
};

export default IndexPage;

export const Head: HeadFC = () => (
  <title>Shaurya Manocha | Full Stack Developer</title>
);

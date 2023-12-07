import type { HeadFC, PageProps } from "gatsby";
import "../styles/index.scss";
import { Header } from "../components/header";
import { config } from "@react-spring/web";
import { skills } from "../components/skills";
import { WorkExperience } from "../components/work-experience";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLayoutEffect, useRef } from "react";
import React from "react";
import gsapCore from "gsap/gsap-core";
import { start } from "repl";
const IndexPage: React.FC<PageProps> = () => {
  const comp = useRef(null);
  useLayoutEffect(() => {
    gsapCore.registerPlugin(ScrollTrigger);
    let ctx = gsap.context(() => {});

    // gsap.to(".hero-bg", {
    //   y: 0.85 * ScrollTrigger.maxScroll(window),
    //   ease: "none",
    //   scrollTrigger: {
    //     start: 0,
    //     end: "max",
    //     invalidateOnRefresh: true,
    //     scrub: 0,
    //   },
    // });

    gsap.fromTo(
      ".skill-tag",
      { scale: 0.5, opacity: 0 },
      {
        scale: 1,
        opacity: 1,
        duration: 0.2,
        ease: "power1.in",
        stagger: 0.01,
        scrollTrigger: {
          trigger: "#technical-skills",
          start: "top 75%",
        },
      }
    );

    gsap.fromTo(
      "nav",
      {
        y: -100,
      },
      {
        y: 0,
        scrollTrigger: {
          trigger: ".hero-bg",
          start: "bottom top",
          toggleActions: "play none none reverse",
        },
      }
    );

    return ctx.revert();
  }, []);

  return (
    <div ref={comp}>
      <Header />
      <div className="bg-white min-h-screen">
        <nav>
          <span id="logo" />
          <a
            className="resume-nav"
            href="resume_shaurya_manocha_winter2023.pdf"
            target="blank"
          >
            My Resume
          </a>
        </nav>
        <section className="about-me">
          <div className="xl:px-80">
            <h2>About Me</h2>
            <p>
              I'm a software developer specializing in web development. With
              experience in a wide range of stacks, I've worked in consulting
              and as an indepedent contractor across a variety of business
              domains.
            </p>
            <h4 id="technical-skills" className="my-4">
              Technical Skills
            </h4>
            <div className="skill-container">
              {skills.map((skill) => (
                <p className="skill-tag">{skill}</p>
              ))}
              <span className="skill-tag"></span>
            </div>
          </div>
        </section>
        <section className="work-experience flex flex-col items-start">
          <div className="xl:px-80">
            <h2 className="my-10">Work Experience</h2>
            {WorkExperience.map((work) => (
              <div className="mb-8">
                <h5>
                  {work.year + " "}
                  <span className="font-bold">{work.company}</span>
                </h5>
                <h6>{work.title}</h6>
              </div>
            ))}
          </div>
          <a
            className="self-center resume-bottom"
            href="resume_shaurya_manocha_winter2023.pdf"
            target="blank"
          >
            My Resume
          </a>
        </section>
      </div>
    </div>
  );
};

export default IndexPage;

export const Head: HeadFC = () => (
  <title>Shaurya Manocha | Full Stack Developer</title>
);

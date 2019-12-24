import React from 'react';

import Layout from '../components/Layout';
import PageFooter from '../components/PageFooter';
import SideBar from '../components/SideBar';
import PortfolioBlock from '../components/PortfolioBlock';

import pic8 from '../assets/images/pic08.jpg';
import Projects from '../assets/Projects';
import Scroll from '../components/Scroll';

const sections = [
  { id: 'top', name: 'Intro', icon: 'fa-home' },
  { id: 'portfolio', name: 'Portfolio', icon: 'fa-th' },
  { id: 'about', name: 'About Me', icon: 'fa-user' },
  { id: 'contact', name: 'Contact', icon: 'fa-envelope' },
];

const IndexPage = () => (
  <Layout>
    <SideBar sections={sections} />

    <div id="main">
      <section id="top" className="one dark cover">
        <div className="container">
          <header>
            <h2 className="alt">
              Hi! I'm <strong>Antanas Tricou</strong>
              <br />A Web Developer
            </h2>
            <p>
              Located in the greater Chicago Area, I love building tools to
              shape the future, and working with people who want to change the
              world.
            </p>
          </header>

          <footer>
            <Scroll type="id" element={'portfolio'}>
              <a href="#portfolio" className="button">
                Portfolio
              </a>
            </Scroll>
          </footer>
        </div>
      </section>

      <section id="portfolio" className="two">
        <div className="container">
          <header>
            <h2>Portfolio</h2>
          </header>

          <p>
            Here are several of my recent projects. For a full list of my
            projects and contributions, check out my
            <strong>
              <a href="https://github.com/APTricou"> GITHUB.</a>
            </strong>
          </p>

          <div className="row">
            {Projects.map(project => (
              <div className="col-4 col-12-mobile">
                <PortfolioBlock
                  image={require(`../assets/images/${project.image}`)}
                  link={project.link}
                  title={project.title}
                  description={project.description}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="three">
        <div className="container">
          <header>
            <h2>About Me</h2>
          </header>

          <a
            href="https://www.linkedin.com/in/antanastricou/"
            className="image featured"
          >
            <img src={pic8} alt="matrix code" />
          </a>

          <p>
            My name is Antanas Tricou. I am a software developer with a
            mechanical engineering background. Having previously worked in
            industry, I have grown to understand tight deadlines and the need to
            meet production. I worked with several tools that streamlined
            management of maintenance and upgrades of the paper mill I was
            working at previously. Through these tools I saw a means to pursue
            my true calling : improving QOL for people who just want to get
            things done. I joined Fullstack Academy of Code to build my
            knowledge base with experienced individuals with a drive for
            knowledge and tech. I am currently using my skills to build a
            forward facing website for a non-profit, among other side projects.
            My main goal with any project is to make something that people love.
          </p>
          <p style={{ fontWeight: 'bolder' }}>Technical Stack :</p>
          <p>
            Proficient in: Javascript, React, Express, Node, Sequelize, React
            Native, Redux, HTML, CSS, Heroku, Git
          </p>
          <p>Familiar with : Python, Webpack, Firebase, Docker</p>
        </div>
      </section>

      <section id="contact" className="four">
        <div className="container">
          <header>
            <h2>Contact</h2>
          </header>
          <p>
            I am interested in working as a software developer on products that
            people love to use. You can email me below, or find me on
            <a href="https://www.linkedin.com/in/antanastricou/">
              <strong> Linked In</strong>
            </a>
            ,
            <a href="https://github.com/APTricou">
              <strong> Github</strong>
            </a>
            , or at APTricou@gmail.com.
          </p>
          <form
            method="post"
            action="mailto:APTricou@gmail.com"
            encType="text/plain"
          >
            <div className="row">
              <div className="col-6 col-12-mobile">
                <input type="text" name="name" placeholder="Name" />
              </div>
              <div className="col-6 col-12-mobile">
                <input type="text" name="email" placeholder="Email" />
              </div>
              <div className="col-12">
                <textarea name="message" placeholder="Message" />
              </div>
              <div className="col-12">
                <input type="submit" value="Send Message" />
              </div>
            </div>
          </form>
        </div>
      </section>
    </div>

    <PageFooter />
  </Layout>
);

export default IndexPage;

import React from 'react';

import Layout from '../components/Layout';
import PageFooter from '../components/PageFooter';
import SideBar from '../components/SideBar';

import pic2 from '../assets/images/pic02.jpg';
import pic3 from '../assets/images/pic03.jpg';
import pic4 from '../assets/images/pic04.jpg';
import pic5 from '../assets/images/pic05.jpg';
import pic6 from '../assets/images/pic06.jpg';
import pic7 from '../assets/images/pic07.jpg';
import pic8 from '../assets/images/pic08.jpg';
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
              <br />
              A Web Developer
            </h2>
            <p>Located in the greater Chicago Area, I love building tools to shape the future, and people.</p>
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
            Here are several of my recent projects. 
            For a more full list of my projects, 
            and contributions, check out my 
            <strong><a href='https://github.com/APTricou'> GITHUB</a></strong>
          </p>

          <div className="row">
            <div className="col-4 col-12-mobile">
              <article className="item">
                <a href="/#" className="image fit">
                  <img src={pic2} alt="" />
                </a>
                <header>
                  <h3>SVG Board</h3>
                </header>
              </article>
              <article className="item">
                <a href="/#" className="image fit">
                  <img src={pic3} alt="" />
                </a>
                <header>
                  <h3>Read The Room</h3>
                </header>
              </article>
            </div>
            <div className="col-4 col-12-mobile">
              <article className="item">
                <a href="/#" className="image fit">
                  <img src={pic4} alt="" />
                </a>
                <header>
                  <h3>SeaBay Shopper</h3>
                </header>
              </article>
            </div>
            {/* <div className="col-4 col-12-mobile">
              <article className="item">
                <a href="/#" className="image fit">
                  <img src={pic6} alt="" />
                </a>
                <header>
                  <h3>Dolor Penatibus</h3>
                </header>
              </article>
              <article className="item">
                <a href="/#" className="image fit">
                  <img src={pic7} alt="" />
                </a>
                <header>
                  <h3>Orci Convallis</h3>
                </header>
              </article>
            </div> */}
          </div>
        </div>
      </section>

      <section id="about" className="three">
        <div className="container">
          <header>
            <h2>About Me</h2>
          </header>

          <a href="/#" className="image featured">
            <img src={pic8} alt="" />
          </a>

          <p>
          My name is Antanas Tricou. I am a software developer with a mechanical engineering background.
          Previously I was working in an industrial setting, implementing tracking software for maintenance
           intervals. Through working with these technologies I saw the potential of the strength of adding 
           and creating new tools to continuously improve the quality of life of day to day work, which 
           inspired me to start investigating code development. Eventually I decided to join Fullstack Academy 
           of code to cement my understanding of the tech industry. With this knowledge and drive I want to build 
           new tools and work with companies to identify and streamline their bottlenecks to increase efficiency. 
          I primarily would like to involve myself in environmental endeavors and to build something that people love to use.
          Technical Stack
          Proficient in: Javascript, React, Express, Node, Sequelize, React Native, Redux, HTML, CSS, Heroku, Git
          Familiar with : Python, Webpack, Firebase
          </p>
        </div>
      </section>

      <section id="contact" className="four">
        <div className="container">
          <header>
            <h2>Contact</h2>
          </header>
          <p>
            I am interested in working as a software developer on products that people love to use.
             You can email me below, or find me on 
             <a href="https://www.linkedin.com/in/antanastricou/"><strong>Linked In</strong></a>, 
             <a><strong>Github</strong></a>, or carrier pidgeon.
          </p>
          <form method="post" action="#">
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

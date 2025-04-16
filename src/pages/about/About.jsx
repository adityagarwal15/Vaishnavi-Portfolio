import React from "react";
import "./about.css";

import Transition from "../../components/transition/Transition";

import Faq from "react-faq-component";
import Marquee from "react-fast-marquee";
import MagneticButton from "../../components/magneticbutton/MagneticButton";

import PortraitImg from "../../assets/images/home/vaish.jpg";

const About = () => {
  const data = {
    title: "",
    rows: [
      {
        title: "What type of works do you take on?",
        content:
          "I specialize in web interaction and animation design, focusing on creating engaging and dynamic user experiences for websites and web applications. My work encompasses a range of projects, including but not limited to interactive web animations, UI/UX design, motion graphics for online platforms, and custom animations for brand storytelling. I am passionate about bringing brands to life through immersive digital experiences and work with clients across Tech, Education, Entertainment, and eCommerce industries.",
      },
      {
        title: "How do you charge for projects?",
        content:
          "My project pricing is tailored to the specific needs and scope of each project. I typically offer a project-based fee after a thorough discussion about the project's requirements, timelines, and expected deliverables. This approach allows for a clear understanding of the project costs upfront. For larger or more complex projects, I may also work with a phased payment schedule, ensuring transparency and alignment with project milestones.",
      },
      {
        title: "What is your hourly rate?",
        content:
          "While I primarily work with project-based pricing, I understand that some projects may require an hourly or day rate, especially during the initial phases or for ongoing support. My hourly rate is $XXX, reflecting my expertise and the value I bring to each project. For long-term engagements or larger projects, I am open to discussing a customized rate or retainer model that aligns with the client's needs and project goals.",
      },
    ],
  };

  return (
    <div className="about page">
      <div className="container">
        <section className="about-marquee">
          <Marquee>
            <h1>
              Transforming Your actual Presence with Unforgettable Fashion
              Styles.
            </h1>
          </Marquee>
        </section>

        <section className="about-intro">
          <h2>
            Vaishnavi Gupta is an innovative Fashion Designer,
            based in the vibrant city of Kanpur, specializing in bringing
            fashionable experiences to life. With a keen eye for detail and a
            passion for pushing the boundaries of fashion.
          </h2>
        </section>

        <section className="about-intro-copy">
          <div className="about-row">
            <div className="about-col">
              <p>
                <span>Est. 2024</span>
              </p>
            </div>
            <div className="about-col">
              <h3>
              Vaishnavi Gupta collaborates with clients across the Fashion, Lifestyle, Entertainment, and Creative industries—designing captivating collections and visual stories that resonate with modern audiences. With a strong focus on Brand Identity, Textile Innovation, and Fashion Illustration, Vaishnavi brings a seamless blend of artistic vision and technical finesse to every creation.
              </h3>
              <h3 style={{ textIndent: "100px" }}>
              Celebrated for her forward-thinking approach to fashion design, Vaishnavi has been recognized in multiple showcases and has earned nominations for distinguished awards, including honors for innovation in textile and visual presentation.
              </h3>
            </div>
          </div>
        </section>

        <section className="about-portrait">
          <div className="about-row">
            <div className="about-col">
              <p>
                <span>Contact</span>
              </p>
              <br />
              <br />
              <p>
                <span>Email: </span> <span>vaishnaviig03@gmail.com</span>
              </p>
              <p>
                <span>Phone: </span> <span>+91 760771xxxx</span>
              </p>
              <p>
                <span>Address: </span>{" "}
                <span>1x/x8 Civil Lines, Kanpur</span>
              </p>

              <br />
              <br />
              <br />
            </div>
            <div className="about-col">
              <div className="about-portrait-img">
                <img src={PortraitImg} alt="" />
              </div>

              <div className="faqs">
                <Faq data={data} />
              </div>
            </div>
          </div>
        </section>

        <section className="about-awards">
          <div className="about-row">
            <div className="about-col"></div>
            <div className="about-col award-header">
              <p>
                <span>Honors and Awards</span>
              </p>
            </div>
          </div>

          <div className="about-row award-row">
            <div className="about-col">
              <div className="award-year">
                <p>2024</p>
              </div>
              <div className="award-view">
                <p>Best Interactive Design</p>
              </div>
            </div>
            <div className="about-col">
              <div className="award-info">
                <p>Webby Awards</p>
              </div>
              <div className="award-project">
                <p>Dynamic Narratives Platform</p>
              </div>
            </div>
          </div>

          <div className="about-row award-row">
            <div className="about-col">
              <div className="award-year">
                <p>2023</p>
              </div>
              <div className="award-view">
                <p>Innovative UI/UX Design</p>
              </div>
            </div>
            <div className="about-col">
              <div className="award-info">
                <p>UX Design Awards</p>
              </div>
              <div className="award-project">
                <p>Immersive E-commerce Experience</p>
              </div>
            </div>
          </div>

          <div className="about-row award-row">
            <div className="about-col">
              <div className="award-year">
                <p>2022</p>
              </div>
              <div className="award-view">
                <p>Outstanding Animation</p>
              </div>
            </div>
            <div className="about-col">
              <div className="award-info">
                <p>AIGA Design Competition</p>
              </div>
              <div className="award-project">
                <p>Cultural Events Platform</p>
              </div>
            </div>
          </div>

          <div className="about-row award-row">
            <div className="about-col">
              <div className="award-year">
                <p>2021</p>
              </div>
              <div className="award-view">
                <p>Interactive Designer</p>
              </div>
            </div>
            <div className="about-col">
              <div className="award-info">
                <p>Communication Arts</p>
              </div>
              <div className="award-project">
                <p>Visual Storytelling Project</p>
              </div>
            </div>
          </div>

          <div className="about-row award-row">
            <div className="about-col">
              <div className="award-year">
                <p>2020</p>
              </div>
              <div className="award-view">
                <p>Creative Innovator </p>
              </div>
            </div>
            <div className="about-col">
              <div className="award-info">
                <p>Design Intelligence Awards</p>
              </div>
              <div className="award-project">
                <p>Interactive Learning Module</p>
              </div>
            </div>
          </div>
        </section>

      

        <section className="about-contact">
          <div className="about-contact-copy">
            <h2>Powered by Your Creativity</h2>
            <p>
              <span>
                For a CV, portfolio, or inquiries, please reach out to
                vaishnaviig03@gmail.com
              </span>
            </p>

            <br />
            <p>
              <span>+91 760771xxxx</span>
            </p>
            <p>
              <span>Instagram • Twitter</span>
            </p>
          </div>
        </section>

        <MagneticButton />
      </div>
    </div>
  );
};

export default Transition(About);

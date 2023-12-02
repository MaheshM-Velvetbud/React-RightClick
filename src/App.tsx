import React, { useEffect, useRef, useState, ChangeEvent, FormEvent } from 'react';
import axios from 'axios';
import styles from './App.module.scss';
import logo from "./assets/images/right-click logo.png"
import opus from "./assets/images/opusAttachment.png"
import service1 from "./assets/images/Building-management.png"
import service2 from "./assets/images/chiller-cooling.png"
import service3 from "./assets/images/power-distribution.png"
import service4 from "./assets/images/generator.png"
import service5 from "./assets/images/data-cabling.png"
import service6 from "./assets/images/solar-light.png"
import service7 from "./assets/images/automatic-door.png"
import service8 from "./assets/images/lift-maintainance.png"
import service9 from "./assets/images/facade-cleaning.png"
import service10 from "./assets/images/swimmingpool.png"
import service11 from "./assets/images/landscaping.png"
import service12 from "./assets/images/pestcontrol.png"
import service13 from "./assets/images/firefighting.png"
import service14 from "./assets/images/plumbing.png"
import service15 from "./assets/images/wastemanagement.png"
import service16 from "./assets/images/pumproom.png"
import upbutton from "./assets/images/up.png"
import { GiHamburgerMenu } from "react-icons/gi"
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from "react-scroll";



function App() {

  const [scrollHeight, setScrollHeight] = useState(0)
  const [barHide, setBarHide] = useState(false)

  const refToTop = useRef<HTMLInputElement>(null);

  const onScroll = (event: any) => {
    setScrollHeight(window.scrollY)
  }
  const scrollToTop = () => {
    refToTop.current && refToTop.current.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' });
  }

  useEffect(() => {
    window.addEventListener("scroll", onScroll, { capture: true });
    return () => window.removeEventListener("scroll", onScroll, { capture: true });
  }, []);

  const handleHideClick = () => {
    setBarHide(!barHide)
  }

  useEffect(() => {
    AOS.init();
  }, [])

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      await axios.post('http://localhost:3001/send-email', formData);
      alert('Email sent successfully!');
      setFormData({ name: '', email: '', message: '' });
    } catch (error: any) {
      console.error('Error sending email:', error.message);
      alert('Error sending email. Please try again later.');
    }
  };


  return (
    <>

      <div className={styles.home} id='home' ref={refToTop}>
        <div className={styles.sub_section1}>
          <div className={`${styles.navbar_cont} ${scrollHeight > 35 ? styles.navbar_cont1 : ""}`}>
            <div className={styles.navbar_subcont}>
              <div className={styles.logo_cont}>
                <img className={styles.logo} src={logo} alt="logo" />
                <div className={styles.hamburger} onClick={handleHideClick}><GiHamburgerMenu /></div>
              </div>
              <ul className={styles.rt_cont}>
                <li className={styles.navfields}>
                  <Link className={scrollHeight > 35 ? styles.link1 : styles.link2} href="#home" activeClass="navfields"
                    to="home"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={2000}>Home</Link>
                </li>
                <li className={styles.navfields}>
                  <Link activeClass="navfields"
                    to="about"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={2000} className={scrollHeight > 35 ? styles.link1 : styles.link2} href="#about">About</Link>
                </li>
                <li className={styles.navfields}>
                  <Link activeClass="navfields"
                    to="services"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={2500} className={scrollHeight > 35 ? styles.link1 : styles.link2} href="#services">Services</Link>
                </li>
                <li className={styles.navfields}>
                  <Link activeClass="navfields"
                    to="contact"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={3000} className={scrollHeight > 35 ? styles.link1 : styles.link2} href="#contact">Contact</Link>
                </li>
              </ul>
              {barHide ?
                <ul className={styles.rt_cont1}>
                  <li className={styles.navfields} onClick={handleHideClick}>
                    <a className={scrollHeight > 35 ? styles.link1 : styles.link2} href="#home">Home</a>
                  </li>
                  <li className={styles.navfields} onClick={handleHideClick}>
                    <a className={scrollHeight > 35 ? styles.link1 : styles.link2} href="#about">About</a>
                  </li>
                  <li className={styles.navfields} onClick={handleHideClick}>
                    <a className={scrollHeight > 35 ? styles.link1 : styles.link2} href="#services">Services</a>
                  </li>
                  <li className={styles.navfields} onClick={handleHideClick}>
                    <a className={scrollHeight > 35 ? styles.link1 : styles.link2} href="#contact">Contact</a>
                  </li>
                </ul> : ""
              }
            </div>
          </div>
          <div className={styles.first_section}>
            <div className={styles.c_name}><span>RIGHT CLICK</span></div>
            <div className={styles.tagline}>When experience matter</div>
          </div>
        </div>
      </div>
      <div className={styles.about} id='about'>
        <div className={styles.sub_section2}>
          <div className={styles.about}><span data-aos="fade-up"
            data-aos-duration="1000">ABOUT</span><span data-aos="fade-up"
              data-aos-duration="1200">US</span>    <img data-aos="fade-up"
                data-aos-duration="1300" src={opus} alt='opus' className={styles.opus} /></div>
          <p className={styles.text_cont}>
            Welcome to Right Click, where seasoned experts leverage cutting-edge technology to redefine UAE's facilities management, ensuring top-tier credibility through stringent compliance, proactive excellence in HVAC, MEP, and Civil works, and delivering tailored, all-encompassing solutions that consistently satisfy clients.
          </p>
          <div className={styles.link}>
            <a href='#services'>SERVICE</a>
            <span></span>
          </div>
        </div>
      </div>

      <div className={styles.services} id='services'>
        <div className={styles.s_heading}>Our Services</div>

        <div className={styles.sect1}>
          <div className={styles.lt1_cont} data-aos="fade-up-right" data-aos-duration="1000" data-aos-easing="linear">
            <div className={styles.sect1_header}>Building Management System</div>
            <p className={styles.content1}>
              Revolutionize your buildings control and monitoring with our Building Management System (BMS). Centralized control, real-time insights, and remote accessibility
              empower you to optimize energy usage,reduce costs, and enhance overall efficiency. Experience a smarter,sustainable future for your facility.
            </p>
          </div>
          <div data-aos="fade-up-left" data-aos-duration="1000" data-aos-easing="linear" className={styles.sect1_img}>
            <img src={service1} alt="mobile1" className={styles.mobile1} />
          </div>
        </div>

        <div className={styles.sect2}>
          <div className={styles.sect1_img} data-aos="fade-up-right" data-aos-duration="1000" data-aos-easing="linear">
            <img src={service2} alt="aritficial" className={styles.mobile1} />
          </div>
          <div className={styles.lt1_cont} data-aos="fade-up-left" data-aos-duration="1000" data-aos-easing="linear">
            <div className={styles.sect1_header}>Chiller Cooling System</div>
            <p className={styles.content1}>
              Beat the heat with our state-of-the-art Chiller Cooling Systems. Delivering superior cooling efficiency, our systems ensure optimal climate control for your space. Embrace reliability, energy savings,
              and a refreshing atmosphere.
            </p>
          </div>
        </div>

        <div className={styles.sect1}>
          <div className={styles.lt1_cont} data-aos="fade-up-right" data-aos-duration="1000" data-aos-easing="linear">
            <div className={styles.sect1_header}>Power Distribution System</div>
            <p className={styles.content1}>
              Experience the future of efficient power delivery with our advanced Power Distribution Systems. Tailored for reliability and performance optimization, our solutions redefine how you distribute and
              manage electricity.
            </p>
          </div>
          <div className={styles.sect1_img} data-aos="fade-up-left" data-aos-duration="1000" data-aos-easing="linear">
            <img src={service3} alt="analytics" className={styles.mobile1} />
          </div>
        </div>

        <div className={styles.sect2}>
          <div className={styles.sect1_img} data-aos="fade-up-right" data-aos-duration="1000" data-aos-easing="linear">
            <img src={service4} alt="software2" className={styles.mobile1} />
          </div>
          <div className={styles.lt1_cont} data-aos="fade-up-left" data-aos-duration="1000" data-aos-easing="linear">
            <div className={styles.sect1_header}>Generator</div>
            <p className={styles.content1}>
              Unleash a constant source of power with our dependable generators. Engineered for reliability, our solutions ensure seamless operations during any power challenge. Trust in our commitment to
              keeping your business energized and thriving.
            </p>
          </div>
        </div>

        <div className={styles.sect1}>
          <div className={styles.lt1_cont} data-aos="fade-up-right" data-aos-duration="1000" data-aos-easing="linear">
            <div className={styles.sect1_header}>Data Cabling and Networking </div>
            <p className={styles.content1}>
              Empower your business with our top-tier Data Cabling and Networking solutions.Seamlessly link your systems for swift and secure data transfer, ensuring a robust
              foundation for your digital infrastructure.Elevate your connectivity, elevate your success.
            </p>
          </div>
          <div className={`${styles.sect1_img} ${styles.sect1_img1}`} data-aos="fade-up-left" data-aos-duration="1000" data-aos-easing="linear">
            <img src={service5} alt="iot2" className={styles.iot2} />
          </div>
        </div>

        <div className={styles.sect2}>
          <div className={styles.sect1_img} data-aos="fade-up-right" data-aos-duration="1000" data-aos-easing="linear">
            <img src={service6} alt="infras" className={styles.mobile1} />
          </div>
          <div className={styles.lt1_cont} data-aos="fade-up-left" data-aos-duration="1000" data-aos-easing="linear">
            <div className={styles.sect1_header}>Solar Lighting</div>
            <p className={styles.content1}>
              Step into the future of lighting with our Solar Lighting solutions. Harnessing solar power, our systems deliver eco-friendly and cost-effective illumination. Brighten up your surroundings responsibly with our
              cutting-edge solar technology.
            </p>
          </div>
        </div>

        <div className={styles.sect1}>
          <div className={styles.lt1_cont} data-aos="fade-up-right" data-aos-duration="1000" data-aos-easing="linear">
            <div className={styles.sect1_header}>Automatic door and Suttering system</div>
            <p className={styles.content1}>
              Upgrade your space with our cutting-edge Automatic Doors and Shuttering Systems. Offering a blend of convenience and security, our solutions bring smart technology to your doorsteps. Embrace
              seamless access for a modern and secure environment.
            </p>
          </div>
          <div className={styles.sect1_img} data-aos="fade-up-left" data-aos-duration="1000" data-aos-easing="linear">
            <img src={service7} alt="security" className={styles.mobile1} />
          </div>
        </div>

        <div className={styles.sect2}>
          <div className={styles.sect1_img} data-aos="fade-up-right" data-aos-duration="1000" data-aos-easing="linear">
            <img src={service8} alt="cloud" className={styles.mobile1} />
          </div>
          <div className={styles.lt1_cont} data-aos="fade-up-left" data-aos-duration="1000" data-aos-easing="linear">
            <div className={styles.sect1_header}>Lift Maintanance</div>
            <p className={styles.content1}>
              Unlock peak performance and safety with our Lift Maintenance services. Our skilled team is dedicated to ensuring the smooth operation of your elevators, prioritizing efficiency and passenger well-being. Rely
              on us for elevated service and reliability.
            </p>
          </div>
        </div>

        <div className={styles.sect1}>
          <div className={styles.lt1_cont} data-aos="fade-up-right" data-aos-duration="1000" data-aos-easing="linear">
            <div className={styles.sect1_header}>Facade Cleaning</div>
            <p className={styles.content1}>
              Transform your propertys appearance with our Facade Cleaning services. Our expert team specializes in revitalizing building exteriors, ensuring a pristine and welcoming first impression. Elevate your
              property's aesthetics with our professional touch.
            </p>
          </div>
          <div className={`${styles.sect1_img} ${styles.sect1_img1}`} data-aos="fade-up-left" data-aos-duration="1000" data-aos-easing="linear">
            <img src={service9} alt="qa" className={styles.iot2} />
          </div>
        </div>

        <div className={styles.sect2}>
          <div className={styles.sect1_img} data-aos="fade-up-right" data-aos-duration="1000" data-aos-easing="linear">
            <img src={service10} alt="cloud" className={styles.mobile1} />
          </div>
          <div className={styles.lt1_cont} data-aos="fade-up-left" data-aos-duration="1000" data-aos-easing="linear">
            <div className={styles.sect1_header}>Swimming pool</div>
            <p className={styles.content1}>
              Experience crystal-clear waters and
              pristine surroundings with our Swimming
              Pool Maintenance services. Our expert
              team ensures your pool stays in top
              condition, providing a refreshing oasis for
              relaxation and enjoyment. Trust us to
              make a splash with our professional
              maintenance..
            </p>
          </div>
        </div>

        <div className={styles.sect1}>
          <div className={styles.lt1_cont} data-aos="fade-up-right" data-aos-duration="1000" data-aos-easing="linear">
            <div className={styles.sect1_header}>Landscaping Services</div>
            <p className={styles.content1}>
              Bring your outdoor spaces to life with our
              expert Landscaping Services. Our
              dedicated team specializes in creating
              and maintaining stunning landscapes,
              turning your surroundings into a haven of
              natural beauty. Elevate your outdoor
              experience with our professional touch.
            </p>
          </div>
          <div className={`${styles.sect1_img} ${styles.sect1_img1}`} data-aos="fade-up-left" data-aos-duration="1000" data-aos-easing="linear">
            <img src={service11} alt="qa" className={styles.iot2} />
          </div>
        </div>


        <div className={styles.sect2}>
          <div className={styles.sect1_img} data-aos="fade-up-right" data-aos-duration="1000" data-aos-easing="linear">
            <img src={service12} alt="cloud" className={styles.mobile1} />
          </div>
          <div className={styles.lt1_cont} data-aos="fade-up-left" data-aos-duration="1000" data-aos-easing="linear">
            <div className={styles.sect1_header}>Pest Control Services</div>
            <p className={styles.content1}>
              Ensure a pest-free space with our expert
              Pest Control Services. Our dedicated team
              employs effective and environmentally
              friendly solutions, safeguarding your
              property from unwanted intruders. Trust
              us for a healthier, pest-controlled
              environment.
            </p>
          </div>
        </div>

        <div className={styles.sect1}>
          <div className={styles.lt1_cont} data-aos="fade-up-right" data-aos-duration="1000" data-aos-easing="linear">
            <div className={styles.sect1_header}>Fire Fighting Services</div>
            <p className={styles.content1}>
              Protect your property with our
              comprehensive Fire Fighting Services. Our
              skilled team ensures the highest
              standards of safety, offering advanced fire
              prevention, detection, and suppression
              solutions. Trust us to keep your
              environment secure and prepared.
            </p>
          </div>
          <div className={`${styles.sect1_img} ${styles.sect1_img1}`} data-aos="fade-up-left" data-aos-duration="1000" data-aos-easing="linear">
            <img src={service13} alt="qa" className={styles.iot2} />
          </div>
        </div>

        <div className={styles.sect2}>
          <div className={styles.sect1_img} data-aos="fade-up-right" data-aos-duration="1000" data-aos-easing="linear">
            <img src={service14} alt="cloud" className={styles.mobile1} />
          </div>
          <div className={styles.lt1_cont} data-aos="fade-up-left" data-aos-duration="1000" data-aos-easing="linear">
            <div className={styles.sect1_header}>Plumbing Works</div>
            <p className={styles.content1}>
              Experience consistent water flow with our
              expert Plumbing Services. Our skilled team
              ensures reliable solutions, from
              installations to repairs, providing a hassle-
              free plumbing experience. Trust us for
              plumbing excellence and a worry-free
              water system.
            </p>
          </div>
        </div>

        <div className={styles.sect1}>
          <div className={styles.lt1_cont} data-aos="fade-up-right" data-aos-duration="1000" data-aos-easing="linear">
            <div className={styles.sect1_header}>Waste Management</div>
            <p className={styles.content1}>
              Optimize waste management with our
              expert services. From disposal to recycling,
              we offer sustainable solutions to keep your
              surroundings clean. Choose our team for
              effective waste management,
              contributing to a healthier and greener
              environment.
            </p>
          </div>
          <div className={`${styles.sect1_img} ${styles.sect1_img1}`} data-aos="fade-up-left" data-aos-duration="1000" data-aos-easing="linear">
            <img src={service15} alt="qa" className={styles.iot2} />
          </div>
        </div>
        <div className={styles.sect2}>
          <div className={styles.sect1_img} data-aos="fade-up-right" data-aos-duration="1000" data-aos-easing="linear">
            <img src={service16} alt="cloud" className={styles.mobile1} />
          </div>
          <div className={styles.lt1_cont} data-aos="fade-up-left" data-aos-duration="1000" data-aos-easing="linear">
            <div className={styles.sect1_header}>Pump Room</div>
            <p className={styles.content1}>
              Experience peak fluid circulation with our
              Pump Room services. Our adept team
              specializes in crafting and maintaining
              efficient pump systems, ensuring a
              seamless flow. Count on us for expert
              solutions to perfect your fluid dynamics.
            </p>
          </div>
        </div>

      </div>

      <div className={styles.contact_form} id='contact'>
        <h1>Contact Us</h1>
        <form onSubmit={handleSubmit}>
    <label htmlFor="name">Name:</label>
    <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />

    <label htmlFor="email">Email:</label>
    <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />

    <label htmlFor="message">Message:</label>
    <textarea id="message" name="message" rows={4} value={formData.message} onChange={handleChange} required></textarea>

    <button type="submit">Submit</button>
</form>

      </div>

      <div className={styles.footer_sec}>
        <div className={styles.footer_subsec}>
          <div className={styles.address_sec}>
            <div className={styles.ad_header}>Address Details</div>
            <div className={styles.address}>
              <strong>RIGHT CLICK LTD</strong>
              71-75, Shelton Street,<br />
              Covent Garden, London,<br />
              WC2H 9JQ, UNITED KINGDOM
            </div>

            <div className={styles.prop}>
              contact@rightclick.com
            </div>
          </div>
        </div>
      </div>
      <div className={styles.copyrights}>
        © Copyright Right Click 2023
      </div>

      <div className={scrollHeight > 55 ? styles.up_btncont : styles.up_btncontnone} onClick={scrollToTop}>
        <img className={styles.up_btn} src={upbutton} alt='upbutton' />
      </div>
    </>
  );
}

export default App;

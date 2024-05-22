// import { Link } from 'react-router-dom';
import aboutBgImg from '../../../assets/img/bg/about-bg.png';
// import experienceImg from '../../../assets/img/features/experience-years.png';
// import features1 from '../../../assets/img/features/about-home-1.jpg';
// import features2 from '../../../assets/img/features/about-img2.jpg';
// import features3 from '../../../assets/img/features/about-img3.png';
import video_s from '../../../assets/video/arch_games.mp4';
import SectionTitle from '../SectionTitle/SectionTitle';

const About = () => {
  return (
    <section id="about" className="pt-70 pb-140 p-relative" style={{ background: `url(${aboutBgImg}) no-repeat center center / cover` }}>
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-12 col-sm-12">
            <video src={video_s} autoPlay loop muted >
            </video>
          </div>
          <div className="col-lg-6 col-md-12 col-sm-12">
            <div className="about-content s-about-content wow fadeInRight" data-wow-delay=".4s">
              <SectionTitle
                titlefirst={'About'}
                titleSec={'Us'}
              />
              <p>Arch Games is a cutting-edge gaming company that specializes in creating high-quality games for all platforms. We are driven by a passion for innovation and a commitment to using the latest technology to deliver an unforgettable gaming experience. Our team of graphic designers, blockchain developers, and programming experts use agile methodologies to build games that feature stunning visuals, engaging storylines, and seamless integration with blockchain and cryptocurrency economies. With over 30 years of combined experience, Arch Games is at the forefront of the gaming industry and is dedicated to providing the best possible gaming experience to players everywhere.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
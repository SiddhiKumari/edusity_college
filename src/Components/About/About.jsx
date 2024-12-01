import PropTypes from 'prop-types';
import './About.css';
import about_img from '../../assets/about.png';
import play_icon from '../../assets/play-icon.png';

const About = ({ setPlayState }) => {
  const handlePlayClick = () => {
    setPlayState(true);
  };

  return (
    <section className="about">
      <div className="about-left">
        <img src={about_img} alt="About University" className="about-img" />
        <img src={play_icon} alt="Play Video" className="play-icon" onClick={handlePlayClick} />
      </div>
      <div className="about-right">
        <h3>ABOUT UNIVERSITY</h3>
        <h2>Nurturing Tomorrow's Leaders Today</h2>
        <p>
          Embark on a transformative educational journey with our university's comprehensive education programs.
          Our cutting-edge curriculum is designed to empower students with the knowledge, skills, and experiences
          needed to excel in the dynamic field of education.
        </p>
        <p>
          With a focus on innovation, hands-on learning, and personalized mentorship, our programs prepare aspiring
          educators to make a meaningful impact in classrooms, schools, and communities.
        </p>
        <p>
          Whether you aspire to become a teacher, administrator, counselor, or educational leader, our diverse range
          of programs offers the perfect pathway to achieve your goals and unlock your full potential in shaping the
          future of education.
        </p>
      </div>
    </section>
  );
};

About.propTypes = {
  setPlayState: PropTypes.func.isRequired, // Validates that setPlayState is a function and is required
};

export default About;

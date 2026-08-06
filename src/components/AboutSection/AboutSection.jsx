import './AboutSection.css';

function AboutSection() {
  return (
    <section id='about' className='about-section'>
      <div className='about-wrapper container'>
        <div className='about-image'>
          <img src='/Gphoto.jpeg' alt='Guru' />
        </div>
        <div className='about-copy'>
          <h1>About Me</h1>
          <p>Hi! I'm Guru kiran, Engineering student intrested in web development and want to build efficient, scalable digital solutions .</p>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;

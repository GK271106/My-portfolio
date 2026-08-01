import './AboutSection.css';

function AboutSection() {
  return (
    <section id='about' className='about-section'>
      <div className='about-wrapper container'>
        <div className='about-image'>
          <img src='/Photo.jpeg.' alt='Guru' />
        </div>
        <div className='about-copy'>
          <h1>About Me</h1>
          <p>Hi! I'm Guru kiran, an ambitious developer based in India building .</p>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
// fast, accessible web experiences.
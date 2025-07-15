function About() {
  return (
    <section id="about" className="section" data-aos="fade-up">
      <h2>About Me</h2>
     <div
  style={{
    display: 'flex',
    alignItems: 'center',
    flexWrap: 'wrap',
    gap: '30px',
    justifyContent: 'center',
    textAlign: 'center'
  }}
>
  <img
    src="/maham.jpg"
    alt="Maham Afreen"
    data-aos="fade-right"
    style={{
      width: '180px',
      height: '180px',
      objectFit: 'cover',
      borderRadius: '50%',
      border: '3px solid #FFD700',
      boxShadow: '0 0 20px rgba(255, 215, 0, 0.4)'
    }}
  />
  <p
    data-aos="fade-left"
    style={{
      maxWidth: '600px',
      fontSize: '18px',
      lineHeight: '1.6',
      color: '#ddd'
    }}
  >
    I’m Maham Afreen, a Software Engineering undergrad from Pakistan.
    I love building clean, interactive web experiences and exploring creative projects.
    Skilled in HTML, CSS, JS, C++, and Java.
  </p>
</div>


    </section>
  );
}

export default About;

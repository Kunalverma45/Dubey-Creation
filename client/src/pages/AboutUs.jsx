import "./AboutUs.css";
const AboutUs = () => {
  return (
    <section className="about-section">
      <div className="about-container">
        <h2>About Us</h2>
        <p>
          At <strong>Dubey Creation</strong>, we believe in blending creativity
          with technology. Our mission is to deliver innovative and efficient
          digital solutions tailored to your needs.
        </p>
        <p>
          With a dedicated team of developers, designers, and visionaries, we
          aim to create impactful experiences that help businesses grow and
          thrive in the digital era.
        </p>
        <div className="about-features">
          <div className="feature-box">
            <h4>🎯 Mission</h4>
            <p>
              To craft meaningful digital products that inspire and empower.
            </p>
          </div>
          <div className="feature-box">
            <h4>👨‍💻 Team</h4>
            <p>
              Passionate professionals with a drive for excellence and
              innovation.
            </p>
          </div>
          <div className="feature-box">
            <h4>🌍 Vision</h4>
            <p>
              To be a global leader in digital transformation and creativity.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
export default AboutUs;

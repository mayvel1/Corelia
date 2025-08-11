import logo from './logo.svg';
// import './App.css';
import './AppEnhanced.css';

function App() {
  return (
    <>
      <header>
        <div className="header-content">
          <h1>John Doe</h1>
          <p>Frontend Developer | Designer | Problem Solver</p>
          <a href="#contact" className="cta-button">Get in Touch</a>
        </div>
      </header>
      

      <main>
        {/* Bio Section */}
        <section id="bio">
          <h2>About Me</h2>
          <p>
            I am a passionate frontend developer with experience in building
            responsive and accessible websites using HTML, CSS, and JavaScript.
          </p>
        </section>

        {/* Skills Section */}
        <section id="skills">
          <h2>Skills</h2>
          <ul>
            <li>HTML5 &amp; CSS3</li>
            <li>JavaScript &amp; React</li>
            <li>Responsive Design</li>
          </ul>
        </section>

        {/* Contact Section */}
        <section id="contact">
          <h2>Contact Me</h2>
          <p>Email: johndoe@example.com</p>
          <p>LinkedIn: linkedin.com/in/johndoe</p>
        </section>
      </main>

      <footer>
        <p>&copy; 2025 John Doe. All rights reserved.</p>
      </footer>
    </>
  );
}

export default App;

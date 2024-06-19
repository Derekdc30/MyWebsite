import "./CV.css";
export default function CV() {
    const handleDownload = () => {
    window.open(`${process.env.PUBLIC_URL}/cv.pdf`, "_blank");
  };

  return (
    <div className="cv-container">
      <div className="cv-columns">
        <div className="cv-column">
          <section>
            <h2>Education</h2>
            <p>BEng(Hons) in Electronic and Information Engineering<br/>
               The Hong Kong Polytechnic University<br/>
               SEP 2020 – AUG 2024</p>
          </section>
          <section>
            <h2>Key Skills</h2>
            <ul>
              <li>Programming Languages: Python, C, Java</li>
              <li>Embedded System Development (Arduino, STM32)</li>
              <li>Web Application: HTML, CSS, Node.js</li>
            </ul>
          </section>
          <section>
            <h2>Projects</h2>
            <ul>
              <li>Robot Car using STM32, Sensors (Integrated Project Course)</li>
              <li>2D Web-based Metaverse (Final Year Project)</li>
              <li>Robot Car using STM32, Arduino (Multidisciplinary Manufacturing Project course)</li>
            </ul>
          </section>
        </div>
        <div className="cv-column">
          <section>
            <h2>Relevamt Courses</h2>
            <ul>
              <li>Object-Oriented Design And Programming</li>
              <li>Web Systems And Technologies</li>
              <li>Integrated Project</li>
              <li>Distributed System And Cloud Computing</li>
            </ul>
          </section>
          <section>
            <h2>Experience</h2>
            <ul>
              <li>Software Engineering Trainee at Simatelex (June 2023 to August 2023)</li>
              <li>Part-time STEM Teacher at Aloes Trees EdTech Limited (Sept 2023 to May 2024)</li>
              <li>Part-time Electronic and Software Engineer at Aloes Trees EdTech Limited (Sep 2023 to May 2024)</li>
            </ul>
          </section>
        </div>
      </div>
      <button className="download-btn" onClick={handleDownload}>Download CV as PDF</button>
    </div>
  );
}

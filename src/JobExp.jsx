import './JobExp.css';
export default function JobExp() {
  return (
    <>
      <div className="container">
        <div className="left-half">
          <div className="content">
            <img src="/assets/Intern.jpeg" alt="Left Image"></img>
            <p>During my internship at Simatelex, I worked on three key projects that significantly contributed to my growth. 
              The first project involved embedded programming, where I handled tasks like programming buttons, LEDs, and a buzzer, along with creating an IO table for pin allocation. 
              This experience deepened my understanding of embedded C language and emphasized the importance of organized coding practices.
              <br></br>
              <br></br>
              The second project involved developing a  software for real-time data reading, plotting, and saving, tailored to support product testing and debugging. 
              This project led me to dive into Python and its PyQt6 package, learning UI development and leveraging Python's capabilities effectively.
              <br></br>
              <br></br>
              Lastly, I explored Android app development, particularly in update checking functionalities for screenless devices, which enhanced my Java programming skills. 
              These experiences challenged me and improved my problem-solving and critical thinking abilities, preparing me for future opportunities in engineering.</p>
          </div>
        </div>
        <hr></hr>
        <div className="right-half">
          <div className="content">
            <p>As a STEM teacher at Aloes Trees EdTech Limited, the job is to guiding students through hands-on projects focused on Arduino and ESP32 programming, 
              specifically centered around sensor technologies. These projects were designed to introduce students to the exciting world of IoT (Internet of Things) technology, 
              where they learned the power of sensors for real-world applications. 
              <br></br>
              <br></br>
              Additionally, the role as an Electronic and Software Engineer involved contributing to STEM product development, 
              collaborating with a team to create innovative educational tools and resources that leverage IoT principles. These experiences highlighted the importance of effective communication, 
              teamwork, and adaptability in delivering impactful STEM education and developing engaging products that inspire curiosity and creativity in young learners.</p>
            <img src="/assets/SmartCity.jpeg" alt="Right Image"></img>
          </div>
        </div>
      </div>
    </>
  );
}

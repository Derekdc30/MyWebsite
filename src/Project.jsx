import React from "react";
import "./Project.css"; // Import your CSS file for styling

export default function Project() {
  return (
    <>
      <div className="Project-main-content">
        <div className="project-container">
          <div className="project">
            <div className="video-container">
              <video width="320" height="240" controls>
                <source src="/assets/RTT.mp4" type="video/mp4"></source>
                Your browser does not support the video.
              </video>
            </div>
            <div className="text-container">
              <h2>RealTimeTrace Analyzer</h2>
              <p>This project involved the development of a multi-purpose software designed to support real-time data reading, display, plotting, 
                and saving. The software was tailored for use in product testing, where it could read sensor data and other relevant information necessary for debugging. 
                Data is received via Bluetooth and displayed on the user interface, with capabilities for visualization.</p>
            </div>
          </div>
          <div className="project">
            <div className="video-container">
              <video width="320" height="240" controls>
                <source src="/assets/IC.mp4" type="video/mp4"></source>
                Your browser does not support the video.
              </video>
            </div>
            <div className="text-container">
              <h2>Multi-discipline Project</h2>
              <p>In this multi-discipline project, EIE students collaborated with ME students to develop a robot car. 
                I was responsible for designing the sensor layout and the control program for the top module using Arduino. The module use components such as photo interrupters, 
                servo motors, and linear actuators. This project was a valuable experience in teamwork and product design. 
                it taught me the importance of effective communication and integrating diverse expertise to achieve a common goal.</p>
            </div>
          </div>
          <div className="project">
            <div className="video-container">
              <video width="320" height="240" controls>
                <source src="/assets/3105.mp4" type="video/mp4"></source>
                Your browser does not support the video.
              </video>
            </div>
            <div className="text-container">
              <h2>STM32 Robot car</h2>
              <p>For a school project, we developed a robot car using an STM32 board to complete various tasks such as line tracking, 
                relay racing, and feedback control. Each task required specific programming solutions. For instance, in the line tracking task, 
                we programmed the car's motor to adjust its direction based on line sensors, ensuring it stayed on course and made accurate turns.
                This project was a fun and educational experience. I enjoyed the challenge of developing different programs to achieve each task, 
                and it significantly enhanced my skills in embedded systems and control algorithm</p>
            </div>
          </div>
          <div className="project">
            <div className="image-container">
              <img src="/assets/SmartCity2.jpeg" alt="Project 4" />
              <img src="/assets/SmartHome.jpeg" alt="Project 4" />
            </div>
            <div className="text-container">
              <h2>Smart Home & Smart City</h2>
              <p>At Aloes Trees EdTech Limited, I contributed to the Smart Home and Smart City projects, designed to educate students on the power of IoT technology. 
                Utilizing ESP32 and Microbit control boards, these projects integrated multiple sensors, including temperature, air quality, and gas sensors. 
                These hands-on projects provided students with practical insights into IoT applications.Working on these projects was a rewarding experience. 
                It allowed me to deepen my understanding of IoT technology and enhance my skills in integrating various sensors with control boards. 
                Seeing students engage with and learn from these projects was particularly fulfilling, reinforcing my passion for teaching and technology.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

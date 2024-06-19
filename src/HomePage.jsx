/* eslint-disable react/no-unescaped-entities */
import "./HomePage.css";

export default function HomePage() {
  return (
    <>
      <div className="main-content">
        <div className="photo">
          <img src="path_to_your_photo.jpg" alt="My Photo" />
        </div>
        <div className="introduction">
          <h1>Hi, I'm Derek</h1>
          <h2>I am a software engineer</h2>
          <p>
            EIE graduate with passion in programming, web devlopment and application development
          </p>
        </div>
      </div>
    </>
  );
}

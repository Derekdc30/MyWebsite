import "./Footer.css";
import emailLogo from "/assets/email.jpg";
import LinkedinLogo from "/assets/Linkedin.png";

// eslint-disable-next-line react/prop-types
export default function Footer({ pageIndex }) {
  const showScrollDownArrow = pageIndex >= 0 && pageIndex <= 3;
  return (
    <>
      <footer className="footer-container">
        <div className="contact">
          <div className="Left">
            <a href="mailto: derekchoy30@gmail.com">
              <img src={emailLogo} width={45} height={45} alt="Email" />
            </a>
          </div>
          <div className="Middle">
            {showScrollDownArrow && (
            <>
              <div className="scroll-down-container">
                <span className="scroll-down-arrow"></span>
              </div>
              <div className="scroll-down-text">
                <p>Scroll down to know me more!</p>
              </div>
            </>
          )}
          </div>
          <div className="Right">
            <a
              href="https://www.linkedin.com/in/choy-wing-ho-09731b270"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={LinkedinLogo} width={40} height={40} alt="LinkedIn" />
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}

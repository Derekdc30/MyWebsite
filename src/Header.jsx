import "./Header.css";

// eslint-disable-next-line react/prop-types
export default function Header({ pageIndex, handleItemClick }) {
  return (
    <>
      <header className="header">
        <nav>
          <ul>
            <li className={pageIndex === 0 ? "active" : "unactive"}onClick={() => handleItemClick(0)}>
              <a>Home</a>
            </li>
            <li className={pageIndex === 1 ? "active" : "unactive"}onClick={() => handleItemClick(1)}>
              <a>About Me</a>
            </li>
            <li className={pageIndex === 2 ? "active" : "unactive"}onClick={() => handleItemClick(2)}>
              <a>CV</a>
            </li>
            <li className={pageIndex === 3 ? "active" : "unactive"}onClick={() => handleItemClick(3)}>
              <a>Working Experience</a>
            </li>
            <li className={pageIndex === 4 ? "active" : "unactive"}onClick={() => handleItemClick(4)}>
              <a>Previous Projects</a>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
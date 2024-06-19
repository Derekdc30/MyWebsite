import { useState, useEffect } from "react";
import Header from "./Header";
import HomePage from "./HomePage";
import JobExp from "./JobExp";
import AboutMe from "./AboutMe";
import Project from "./Project";
import Footer from "./Footer";
import CV from "./CV";

function App() {
  const [pageIndex, setPageIndex] = useState(0);

  useEffect(() => {
    const handleScroll = (event) => {
      const delta = parseInt(event.deltaY);
      const positiveThreshold = 1;

      if (delta > positiveThreshold && pageIndex < 4) {
        setPageIndex(pageIndex + 1);
      } else if (delta < -positiveThreshold && pageIndex > 0) {
        setPageIndex(pageIndex - 1);
      }
    };

    window.addEventListener("wheel", handleScroll);

    return () => {
      window.removeEventListener("wheel", handleScroll);
    };
  }, [pageIndex]);
  const renderPage = () => {
    switch (pageIndex) {
      case 0:
        return <HomePage />;
      case 1:
        return <AboutMe />;
      case 2:
         return <CV/>;
      case 3:
        return <JobExp />;
      case 4:
        return <Project />;
      default:
        return null;
    }
  };
  const handleItemClick = (index) => {
    setPageIndex(index);
  };
  return (
    <>
      <Header pageIndex={pageIndex} handleItemClick={handleItemClick} />
      <div>{renderPage()}</div>
      <Footer pageIndex={pageIndex}/>
    </>
  );
}

export default App;

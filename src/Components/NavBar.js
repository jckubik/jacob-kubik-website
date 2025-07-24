import "../CSS/NavBar.css";
import { BsFillBrightnessHighFill } from "react-icons/bs";
import { BsFillMoonStarsFill } from "react-icons/bs";

const NavBar = () => {

  function handleDarkLightMode() {
  const body = document.querySelector(`body`);
  // const header = document.querySelector(`#header`);
  const lightButton = document.querySelector(`#lightButton`);
  const darkButton = document.querySelector(`#darkButton`);

  if (!body.getAttribute(`data-theme`)) {
    body.setAttribute(`data-theme`, `dark`);
    darkButton.classList.add(`hide-button`);
    lightButton.classList.remove(`hide-button`);
  } else {
    body.removeAttribute(`data-theme`);
    lightButton.classList.add(`hide-button`);
    darkButton.classList.remove(`hide-button`);
  }
}

  return (
    <nav id="main">
      <a href="#projects">Projects</a>
      <a href="#about">About</a>
      <a href="https://www.linkedin.com/in/jckubik/">LinkedIn</a>
      <div 
        id="lightButton"
        class="darkLightButton hide-button"
        width="40"
        height="40"
        onClick={handleDarkLightMode}
        role="button"
      >
        <BsFillBrightnessHighFill className="light-button" size={"1.5em"} />
      </div>
      <div
        id="darkButton"
        class="darkLightButton"
        width="30"
        height="30"
        onClick={handleDarkLightMode}
        role="button"
      >
        <BsFillMoonStarsFill className="dark-button" size={"1.5em"} />
      </div>
    </nav>
  );
};

export default NavBar;
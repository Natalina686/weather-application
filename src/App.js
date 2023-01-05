import "./App.css";
import Weather from "./Weather";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Kyiv" />
        <span className="Sign">
          <p>
            This project was coded by{" "}
            <a
              className="contact"
              href="https://app.netlify.com/teams/natalina686/overview"
              target="_blank"
              rel="noreferrer"
            >
              Nataliia Tkach
            </a>{" "}
            and is{" "}
            <a
              className="contact"
              href="https://github.com/Natalina686/weather-application"
              target="_blank"
              rel="noreferrer"
            >
              open-sourced on GitHub
            </a>
          </p>
        </span>
      </div>
    </div>
  );
}

export default App;

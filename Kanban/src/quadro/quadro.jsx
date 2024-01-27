import "../style/global.css";
import { useState, useEffect } from "react";
import SplashScreen from "../splash";

const savedTheme = localStorage.getItem("theme") || "dark";

function Quadro() {
  const [isChecked, setIsChecked] = useState(savedTheme);

  useEffect(() => {
    if (savedTheme === "dark") {
      setIsChecked(false);
    } else {
      setIsChecked(true);
    }
  }, []);

  const themeStyles = isChecked
    ? {
        "--main-bg-color": "#fff",
        "--main-text-color": "#000",
        "--main-secun-color": "#f4f7ff",
      }
    : {
        "--main-bg-color": "#2c2c38",
        "--main-text-color": "#fff",
        "--main-secun-color": "#21212d",
      };

  console.log("testeeees", savedTheme);

  return (
    <>
      <SplashScreen />
      <main className="App" style={themeStyles}>
        <section className="quadro-status">
          <section className="quadro-posts">
            <span className="titulo-Quadros">há Fazer</span>
            <div className="card-post">
              <span className="titulo-post">Trabaio</span>
              <p className="status-post">2 de 4</p>
            </div>
            <div className="card-post" id="novo-card-post">
            <lord-icon
              src="https://cdn.lordicon.com/zrkkrrpl.json"
              trigger="hover"
              state="hover-swirl"
              colors="primary:#21212D,secondary:#645fc6"
              style={{ width: "50px", height: "50px", cursor: "pointer" }}
            ></lord-icon>
            <span className="titulo-Quadros">+ Novo Card</span>
            </div>
          </section>
          <section className="quadro-posts" id="add-quadro-post">
            <lord-icon
              src="https://cdn.lordicon.com/zrkkrrpl.json"
              trigger="hover"
              state="hover-swirl"
              colors="primary:#21212D,secondary:#645fc6"
              style={{ width: "200px", height: "200px", cursor: "pointer" }}
            ></lord-icon>
            <span className="titulo-Quadros">+ Novo Status</span>
          </section>
        </section>
      </main>
    </>
  );
}

export default Quadro;

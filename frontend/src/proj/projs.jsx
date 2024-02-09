import { useState, useEffect } from "react";
import Quadro from "../quadro/quadro";
import ThemeToggle from "../componets/ThemeToggle";
import sol from "../assets/sun-regular.svg";
import lua from "../assets/moon-regular.svg";

import { fetchData } from "../controller/apiBD";

const savedTheme = localStorage.getItem("theme") || "dark";

function Projs() {
  const [isChecked, setIsChecked] = useState(true);
  const [mostrarMenu, setMostrarMenu] = useState(true);
  const [data, setData] = useState(null);
  const [QuadroId,setQuadroId] = useState(null);

  

  useEffect(() => {
    if (savedTheme === "dark") {
      setIsChecked(false);
    } else {
      setIsChecked(true);
    }

    const fetchDataAndSetData = async () => {
      try {
        const responseData = await fetchData();
        setData(responseData); // Atualiza o estado com os dados recebidos
        setQuadroId(responseData ? responseData[0].projectName : null);
      } catch (error) {
        console.error("Erro ao obter dados:", error);
      }
    };
    fetchDataAndSetData();
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

  const toggleMostrarMenu = () => {
    setMostrarMenu(!mostrarMenu);
  };

  console.log("o banco", data);

  const quadroSelecao = (projectName) => {
    setQuadroId(projectName);

  };


  return (
    <>
      <main className="App" style={themeStyles}>
        <nav
          className="menu-lateral-projects"
          style={mostrarMenu ? { width: "300px" } : { width: "50px" }}
        >
          <header className="icon-titulo">
            <lord-icon
              src="https://cdn.lordicon.com/pcllgpqm.json"
              trigger="loop"
              delay="2000"
              colors="primary:#121331,secondary:#21212d,tertiary:#645fc6"
              style={{ width: "50px", height: "50px" }}
            ></lord-icon>
            <h1
              className="titulo-kanban"
              style={mostrarMenu ? { width: "150px" } : { width: "0px" }}
            >
              Kanban
            </h1>
          </header>

          <div className="titulo-coleçoes">
            <span
              className="titulo-Quadros"
              style={
                mostrarMenu ? { paddingLeft: "20px" } : { paddingLeft: "5px" }
              }
            >
              Todos Quadros (2)
            </span>
            <section className="coleções-projects">
              {data && Array.isArray(data) ? (
                data.map(({ projectName }) => (
                  <button
                    className="quadro-selecionado"
                    key={projectName}
                    onClick={() => {
                      quadroSelecao(projectName);
                    }}
                  >
                    <lord-icon
                      src="https://cdn.lordicon.com/pcllgpqm.json"
                      trigger="hover"
                      state="hover-squeeze"
                      colors="primary:#121331,secondary:#21212d,tertiary:#645fc6"
                      style={{
                        width: "20px",
                        height: "20px",
                        paddingRight: "10px",
                      }}
                    ></lord-icon>
                    <span> {projectName} </span>
                  </button>
                ))
              ) : (
                <span>Nenhum dado disponível</span>
              )}

              <button className="quadro-selecionado" id="criar-quadro">
                <lord-icon
                  src="https://cdn.lordicon.com/pcllgpqm.json"
                  trigger="hover"
                  state="hover-squeeze"
                  colors="primary:#121331,secondary:#645fc6,tertiary:#ffffff"
                  style={{
                    width: "20px",
                    height: "20px",
                    paddingRight: "10px",
                  }}
                ></lord-icon>
                <span> + Novo Quadro</span>
              </button>
            </section>
          </div>
          <div className="tema">
            <img src={lua} alt="luz" className="luz-sol" />
            <ThemeToggle />
            <img src={sol} alt="luz" className="luz-sol" />
          </div>
          <button
            type="button"
            className="button-olhos"
            onClick={toggleMostrarMenu}
          >
            {mostrarMenu ? (
              <lord-icon
                src="https://cdn.lordicon.com/vfczflna.json"
                trigger="loop"
                delay="2000"
                state="hover-look-around"
                colors="primary:#21212d,secondary:#645fc6"
                style={{ width: "50px", height: "50px", cursor: "pointer" }}
              />
            ) : (
              <lord-icon
                src="https://cdn.lordicon.com/vfczflna.json"
                trigger="loop"
                delay="2000"
                state="hover-lashes"
                colors="primary:#21212d,secondary:#645fc6"
                style={{ width: "50px", height: "50px", cursor: "pointer" }}
              />
            )}
          </button>
        </nav>
        <Quadro quadroId={data ? QuadroId : null} />
      </main>
    </>
  );
}

export default Projs;

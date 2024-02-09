import "../style/global.css";
import PropTypes from "prop-types";
import { useState, useEffect } from "react";
import SplashScreen from "../splash";
import { VisualPost } from "../componets/VisualPost";
import { Bolinha } from "../componets/Bolinha";

import { fetchData } from "../controller/apiBD";

const savedTheme = localStorage.getItem("theme") || "dark";

export function Quadro({ quadroId }) {
  const [isChecked, setIsChecked] = useState(savedTheme);
  const [isModalOpen, setModalOpen] = useState(false);
  const [data, setData] = useState([null]);

  const [taks, setTaks] = useState("");
  const [taskKey, settTaskKey] = useState("");

  Quadro.propTypes = {
    quadroId: PropTypes.string.isRequired,
  };

  useEffect(() => {
    if (savedTheme === "dark") {
      setIsChecked(false);
    } else {
      setIsChecked(true);
    }
    const fetchDataAndSetData = async () => {
      try {
        const responseData = await fetchData();
        responseData.forEach((element) => {
          if (element.projectName === quadroId) {
            setData(element);
            console.log("o element desejado", element.status);
          }
        });
      } catch (error) {
        console.error("Erro ao obter dados:", error);
      }
    };

    fetchDataAndSetData();
  }, [quadroId]);

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

  console.log("quadro selecionado", quadroId);
  console.log("o element da data", data);

  function callVisualPost(tasks, taskKey) {
    setTaks(tasks);
    settTaskKey(taskKey);
    setModalOpen(true);
  }

  function renderTasks(tasks) {
    if (typeof tasks === "object") {
      return Object.keys(tasks).map((taskKey, index) => (
        <div
          className="card-post"
          key={index + taskKey}
          onClick={() => {
            callVisualPost(tasks[taskKey], taskKey);
          }}
        >
          <span className="titulo-post">{`${taskKey}`}</span>
          <p className="status-post">2 de 4 {`${tasks[taskKey]}`}</p>
        </div>
      ));
    }
  }

  return (
    <>
      <SplashScreen />
      <main className="App" style={themeStyles}>
        {isModalOpen && (
          <div className="card-post" id="card-visual-post">
            <lord-icon
              src="https://cdn.lordicon.com/urmrbzpi.json"
              trigger="hover"
              colors="primary:#21212d,secondary:#645fc6"
              style={{ width: "40px", height: "40px", cursor: "pointer", margin: "0px"}}
              onClick={() => {setModalOpen(false)}}
            ></lord-icon>
            {VisualPost(taks, taskKey)}
          </div>
        )}
        <section className="quadro-status">
          {data && Array.isArray(data.status) ? (
            data.status.map(({ projectName, titulo, tasks }) => (
              <section className="quadro-posts" key={projectName}>
                {Bolinha(titulo)}

                {renderTasks(tasks)}

                <div className="card-post" id="novo-card-post">
                  <lord-icon
                    src="https://cdn.lordicon.com/zrkkrrpl.json"
                    trigger="hover"
                    state="hover-swirl"
                    colors="primary:#21212D,secondary:#645fc6"
                    style={{
                      width: "50px",
                      height: "50px",
                      cursor: "pointer",
                    }}
                  ></lord-icon>
                  <span className="titulo-Quadros">+ Novo Card</span>
                </div>
              </section>
            ))
          ) : (
            <span>Nenhum dado disponível</span>
          )}

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

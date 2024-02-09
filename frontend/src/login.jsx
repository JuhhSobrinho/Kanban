import "./App.css";
import { useState, useEffect } from "react";
import SplashScreen from "./splash";
import { Link, useNavigate } from "react-router-dom";
import ThemeToggle from "./componets/ThemeToggle";

const savedTheme = localStorage.getItem("theme") || "dark";

function Login() {
  const [isChecked, setIsChecked] = useState(true);
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/proj/Projs");
  };

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

  return (
    <>
      <SplashScreen />
      <main className="App" style={themeStyles}>
        <section className="form-login">
          <div>
            <lord-icon
              src="https://cdn.lordicon.com/pcllgpqm.json"
              trigger="loop"
              delay="2000"
              colors="primary:#121331,secondary:#21212d,tertiary:#645fc6"
              style={{ width: "250px", height: "200px" }}
            ></lord-icon>
          </div>
          <h1 className="titulo-login">Login</h1>
          <section className="dados">
            <input
              className="input-dados"
              type="text"
              placeholder="Email: Ex adm@gmail.com"
            />
            <input
              className="input-dados"
              type="text"
              placeholder="Senha: Ex *******"
            />
          </section>
          <span>
            <Link to="/SingUp" className="btn-mudar-tela">
              Não tem login ? Cadastre-se !!
            </Link>
          </span>
          <div className="card">
            <ThemeToggle />
            <button className="btn-logar" onClick={handleClick}>
              Login
            </button>
          </div>
        </section>
      </main>
    </>
  );
}

export default Login;

import { useState } from "react";
import { BrowserRouter, Route, Routes, Link, Navigate } from "react-router-dom";
import { Sun, Moon, Home, Info, LogOut, User } from "lucide-react";
import "./App.css";
import HomeComp from "./components/Home.jsx";
import About from "./components/About.jsx";
import Login from "./components/Login.jsx";
import Perfil from "./components/Perfil.jsx";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [isAuth, setIsAuth] = useState(false); // Estado para saber si entró

  const toggleTheme = () => setDarkMode(!darkMode);

  return (
    <div className={darkMode ? "dark-theme" : "light-theme"}>
      <BrowserRouter>
        {/* Solo mostramos el Nav si el usuario ya está logueado */}
        {isAuth && (
          <nav>
            <Link to="/" className="nav-link">
              <Home size={18} /> Inicio
            </Link>
            <Link to="/about" className="nav-link">
              <Info size={18} /> Nosotros
            </Link>
            <Link to="/perfil" className="nav-link">
              <User size={18} /> Perfil
            </Link>

            <div className="nav-actions">
              <button onClick={toggleTheme} className="theme-btn">
                {darkMode ? <Sun size={20} /> : <Moon size={20} />}
              </button>
              <button
                onClick={() => setIsAuth(false)}
                className="logout-btn"
                title="Cerrar Sesión"
              >
                <LogOut size={20} />
              </button>
            </div>
          </nav>
        )}

        <div className="app-content">
          <Routes>
            {/* Si no está logueado, la raíz es el Login. Si lo está, va al Home */}
            <Route
              path="/login"
              element={
                !isAuth ? (
                  <Login onLogin={() => setIsAuth(true)} />
                ) : (
                  <Navigate to="/" />
                )
              }
            />

            {/* Rutas protegidas: si intenta entrar sin login, lo manda al login */}
            <Route
              path="/"
              element={isAuth ? <HomeComp /> : <Navigate to="/login" />}
            />
            <Route
              path="/about"
              element={isAuth ? <About /> : <Navigate to="/login" />}
            />

            <Route
              path="/perfil"
              element={isAuth ? <Perfil /> : <Navigate to="/login" />}
            />

            {/* Redirección por defecto */}
            <Route
              path="*"
              element={<Navigate to={isAuth ? "/" : "/login"} />}
            />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;

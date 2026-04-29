import { useState } from "react";
import { Lock, User, ShieldCheck } from "lucide-react";

function Login({ onLogin }) {
  const [usuario, setUsuario] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  function manejarSubmit(e) {
    e.preventDefault();
    setError("");
    if (usuario.trim() === "" || password.trim() === "") {
      setError("Credenciales incompletas.");
      return;
    }
    onLogin();
  }

  return (
    <div className="split-screen">
      {/* Lado Izquierdo: Visual/Branding */}
      <div className="left-panel">
        <div className="branding-content">
          <ShieldCheck size={60} color="white" />
          <h1>OSITA SOLSOL</h1>
          <p>Sistema de Gestión Centralizado</p>
        </div>
      </div>

      {/* Lado Derecho: Formulario */}
      <div className="right-panel">
        <div className="login-box">
          <div className="login-header">
            <h2>Bienvenido de nuevo</h2>
            <p>Por favor, ingresa tus datos para acceder.</p>
          </div>

          <form onSubmit={manejarSubmit}>
            {error && <div className="error-text">{error}</div>}

            <div className="form-group">
              <label>
                <User size={14} /> Usuario
              </label>
              <input
                type="text"
                placeholder="nombre@ejemplo.com"
                value={usuario}
                onChange={(e) => setUsuario(e.target.value)}
              />
            </div>

            <div className="form-group">
              <label>
                <Lock size={14} /> Contraseña
              </label>
              <input
                type="password"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <button type="submit" className="btn-main full-width">
              Iniciar Sesión
            </button>
          </form>

          <footer className="login-footer">
            © 2026 Luis Rodriguez · Software Engineer
          </footer>
        </div>
      </div>
    </div>
  );
}

export default Login;

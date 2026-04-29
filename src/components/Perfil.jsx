import { User, Code, School } from "lucide-react";

function Perfil() {
  return (
    <div className="container">
      <div className="card" style={{ textAlign: "left" }}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "15px",
            marginBottom: "20px",
          }}
        >
          <div
            style={{
              background: "var(--accent)",
              padding: "10px",
              borderRadius: "50%",
              color: "white",
            }}
          >
            <User size={32} />
          </div>
          <div>
            <h2 style={{ margin: 0 }}>Luis Rodriguez</h2>
            <p style={{ margin: 0, fontSize: "0.9rem" }}>
              Estudiante de Ing. de Software
            </p>
          </div>
        </div>

        <div className="form-group">
          <label style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <Code size={16} /> Especialidad
          </label>
          <p>Full-stack Web Development (Node.js, React, PostgreSQL)</p>
        </div>

        <div className="form-group">
          <label style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <School size={16} /> Institución
          </label>
          <p>SENATI - Lima, Perú</p>
        </div>
      </div>
    </div>
  );
}

export default Perfil;

function About() {
  return (
    <div className="container">
      <div className="card">
        <h1>Acerca de la Osa</h1>
        <p>
          Esta plataforma ha sido diseñada para gestionar la información de la
          osita más malcriada del sistema.
        </p>
        {/* Usamos variables para que el fondo y el texto se adapten */}
        <div
          style={{
            padding: "15px",
            backgroundColor: "rgba(37, 99, 235, 0.1)", // Un azul muy suave con transparencia
            color: "var(--text-main)",
            borderRadius: "8px",
            fontSize: "0.9rem",
            borderLeft: "4px solid var(--accent)",
            marginTop: "20px",
          }}
        >
          <strong>Nota del sistema:</strong> Es una osita malcriada :v
        </div>
      </div>
    </div>
  );
}

export default About;

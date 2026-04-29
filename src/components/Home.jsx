function Home() {
  function mostrarMensaje() {
    alert("¡Bienvenida a la Osa la SolSol!");
  }

  return (
    <div className="container">
      <div className="card" style={{ textAlign: "center" }}>
        <h2>Bienvenido</h2>
        <p style={{ color: "var(--text-muted)" }}>
          Estás en la portada oficial de la osa SolSol. Explora las secciones
          utilizando el menú superior.
        </p>
        <button className="btn-main" onClick={mostrarMensaje}>
          Mostrar mensaje
        </button>
      </div>
    </div>
  );
}

export default Home;

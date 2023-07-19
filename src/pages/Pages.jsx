import { Link } from "react-router-dom";

const Pages = () => {
  return (
    <>
      <section className="container mt-3">
        <p>
          Este site está em desenvolvimento e tem o proprósito de servir para o
          treino do ouvido musical, para se desenvolver (ou ao menos tentar)
          essa incrível e necessária habilidade no dia a dia de um músico que é
          conseguir descobrir as notas e acordes de uma música de ouvido.
        </p>
        <main>
          <button className="btn-pages btn btn-light text-success">
            <Link to="/Notas">Notas</Link>
          </button>
          <button className="btn-pages btn btn-light text-primary">
            Acordes
          </button>
          <button className="btn-pages btn btn-light text-warning">
            Intervalos
          </button>
          <button className="btn-pages btn btn-light text-info">
            Progressões
          </button>
        </main>
      </section>
    </>
  );
};

export default Pages;

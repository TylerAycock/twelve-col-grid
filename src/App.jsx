import "./App.css";

function App() {
  return (
    <>
      <header className="grid">
        <h1>My 12 Col Grid</h1>
        <nav>
          <a href="">Home</a>
          <a href="">About</a>
          <a href="">Contact</a>
        </nav>
      </header>
      <main className="grid">
        <img src="https://source.unsplash.com/random" alt="random img" className="img"/>
        <div className="welcome">
          <h2>Welcome</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio,
            inventore? Unde quos est, odio, corrupti voluptatibus nesciunt et
            incidunt sed alias sunt necessitatibus laudantium pariatur libero
            maiores, veritatis minima sapiente? Lorem ipsum dolor sit amet,
            consectetur adipisicing elit. Beatae ut cupiditate nam sint quia
            nobis nulla maxime amet inventore praesentium voluptatibus maiores
            officia repellendus, rem id nesciunt sequi iste sit.
          </p>
        </div>
        <h2 className="services">Services</h2>
        <div className="container">
          <h3>Hello</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum,
            magni. Exercitationem dolor distinctio reprehenderit labore, quas
            est impedit alias laborum nemo, placeat, tempora officia architecto
            facere accusamus ut vero repellendus.
          </p>
        </div>
        <div className="container">
          <h3>Hello</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum,
            magni. Exercitationem dolor distinctio reprehenderit labore, quas
            est impedit alias laborum nemo, placeat, tempora officia architecto
            facere accusamus ut vero repellendus.
          </p>
        </div>
        <div className="container">
          <h3>Hello</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum,
            magni. Exercitationem dolor distinctio reprehenderit labore, quas
            est impedit alias laborum nemo, placeat, tempora officia architecto
            facere accusamus ut vero repellendus.
          </p>
        </div>
      </main>
    </>
  );
}

export default App;

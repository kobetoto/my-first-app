import "../Nav.css";

function Nav() {
  return (
    <nav className="nav">
      <img
        src="https://e7.pngegg.com/pngimages/93/186/png-clipart-pokemon-go-pokemon-trading-card-game-poke-ball-pikachu-trade-center-logo-sign.png"
        alt="tradingcard"
      />

      <div className="NavLinks">
        <a href="/profil">Mon profil</a>
        <a href="/pokedex">Pokedex</a>
        <a href="/collections">Collections</a>
      </div>
    </nav>
  );
}

export default Nav;

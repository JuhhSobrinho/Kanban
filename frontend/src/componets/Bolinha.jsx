export function Bolinha(titulo) {
  const corAleatoria = () => {
    const letrasHex = "0123456789ABCDEF";
    let cor = "#";
    for (let i = 0; i < 6; i++) {
      cor += letrasHex[Math.floor(Math.random() * 16)];
    }
    return cor;
  };

  return (
    <div className="main-bolinha" key={titulo + "bolinha"}>
      <div className="bolinha" style={{ background: corAleatoria() }}></div>
      <span className="titulo-Quadros">{titulo}</span>
    </div>
  );
}

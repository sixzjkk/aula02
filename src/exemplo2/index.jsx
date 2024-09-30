import { useEffect, useState } from "react";

export default function App() {
  
  const [fotos,setFotos] = useState([]);

  useEffect(() => { 

    const buscarUsuario  = async () => {
        const resposta = await fetch('https://jsonplaceholder.typicode.com/photos');
        const dados = await resposta.json();
        setFotos(dados);
    }
    buscarUsuario();
  }, []);


  return (
    <>
      <h1>Galeria de Fotos</h1>
      <ul>
        {fotos.map(produto => (
          <li key={produto.id}>
            <h2>{produto.title}</h2>
            <p>{produto.albumId}</p>
            <img src={produto.url} alt={produto.title} width={100} />
          </li>
        ))}
      </ul>
    </>
  );
}

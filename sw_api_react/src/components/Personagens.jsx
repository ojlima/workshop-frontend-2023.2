import './personagens.css'
import React, {useState, useEffect} from 'react';
export default function Personagens() {
    const [dados, setDados] = useState([0]);
  const urlAPI = "https://swapi.dev/api/people/";

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(urlAPI);
        const data = await response.json();
        const charactersWithImageIndex = data.results.map((personagem, index) => ({
          ...personagem,
          imageIndex: index + 1 // Adiciona 1 para evitar o índice 0
        }));
        setDados(charactersWithImageIndex);
        console.log(charactersWithImageIndex);
      } catch (error) {
        console.error(error);
      }
    }

    fetchData();
  }, []);

  return (
    <div className='row mt-5'>
      {dados.map((personagem) => (
        <div key={personagem.imageIndex} className='col-md-4'>
          <div className='card'>
            <img src={`/img/personagens/${personagem.imageIndex}.png`} alt={`Imagem de ${personagem.name}`} />
            <h4>{personagem.name}</h4>
                    <div className="info">
                      <p><strong>Massa:</strong> {personagem.mass}</p>
                      <p><strong>Cor de Cabelo:</strong> {personagem.hair_color}</p>
                      <p><strong>Pele:</strong> {personagem.skin_color}</p>
                      <p><strong>Ano:</strong> {personagem.birth_year}</p>
                      <p><strong>Sexo:</strong> {personagem.gender}</p>
                    </div>
                  </div>
                </div>
                
            ))}
            
        </div>
    )
}
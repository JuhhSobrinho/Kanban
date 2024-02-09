import axios from "axios";

export const fetchData = async () => {
  try {
    const response = await axios.get('http://localhost:3000/api/data');
    const data = response.data;

    console.log('Dados recebidos:', data);

    return data;
  } catch (error) {
    console.error('Erro na requisição:', error);
    throw error; // Lança o erro para ser tratado no ponto de chamada
  }
};

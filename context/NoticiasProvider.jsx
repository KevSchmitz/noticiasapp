import axios from "axios";
import { useEffect, useState, createContext } from "react";

export const NoticiasContext = createContext();

// eslint-disable-next-line react/prop-types
export const NoticiasProvider = ({ children }) => {
  const [categoria, setCategoria] = useState("general");
  const [noticias, setNoticias] = useState([]);
  const [pagina, setPagina] = useState(1);
  const [totalNoticias, setTotalNoticias] = useState(0);

  const handleChangeCategoria = (e) => {
    setCategoria(e.target.value);
  };
  const handleChangePagina = (e, valor) => {
    setPagina(valor);
  };

  useEffect(() => {
    const consultarAPI = async () => {
      const url = `http://newsapi.org/v2/top-headlines?country=ar&category=${categoria}&apikey=${
        import.meta.env.VITE_API_KEY
      }`;
      const { data } = await axios(url);
      setNoticias(data.articles);
      setTotalNoticias(data.totalResults);
      setPagina(1);
    };

    consultarAPI();
  }, [categoria]);

  useEffect(() => {
    const consultarAPI = async () => {
      const url = `http://newsapi.org/v2/top-headlines?country=ar&page=${pagina}&category=${categoria}&apikey=${
        import.meta.env.VITE_API_KEY
      }`;
      const { data } = await axios(url);
      setNoticias(data.articles);
      setTotalNoticias(data.totalResults);
    };

    consultarAPI();
  }, [pagina]);

  return (
    <NoticiasContext.Provider
      value={{
        categoria,
        handleChangeCategoria,
        handleChangePagina,
        noticias,
        pagina,
        totalNoticias,
      }}
    >
      {children}
    </NoticiasContext.Provider>
  );
};

import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";

const CharStates = createContext();

//Obtenemos la lista de favoritos antes de acceder a Context
const lsFavs = JSON.parse(localStorage.getItem("favs")) || []; //Si no hay favs en localstorage se va a guardar en la variable un []

const Context = ({ children }) => {
  const [favs, setFavs] = useState(lsFavs); //Inicializamos el estado con los favoritos que hay en localStorage
  const [theme, setTheme] = useState(false);
  const [list, setList] = useState([]);
  const url = "https://rickandmortyapi.com/api/character";

  useEffect(() => {
    axios(url).then((res) => {
      setList(res.data.results);
    });
  }, []);

  //Se va a ejecutar cada vez que se modifique favs (cuando agreguemos un favorito)
  useEffect(() => {
    localStorage.setItem("favs", JSON.stringify(favs));
  }, [favs]);

  return (
    <CharStates.Provider value={{ theme, setTheme, favs, setFavs, list }}>
      {children}
    </CharStates.Provider>
  );
};

export default Context;

export const useCharStates = () => {
  return useContext(CharStates);
};

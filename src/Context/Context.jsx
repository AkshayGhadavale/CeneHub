import React, { useContext, useEffect, useState } from "react";



//Context (warehouse)
//Provider(delivery)
//Consumer/(usecontext)

const apiKey = import.meta.env.VITE_API_KEY


export const API_URL = `http://www.omdbapi.com/?apikey=${apiKey}`;

const Appcontext = React.createContext();



//we need to Craete a provider fun

const AppProvider = ({ children }) => {
  const [isloading, setloading] = useState(true);
  const [ismovie, setmovie] = useState([]);
  const [iserror, seterror] = useState({ sow: "false", msg: "" });
  const [isQuery,setQuery]=useState("Avatar")

  const getmovies = async (url) => {
    setloading(true);
    try {
      const response = await fetch(url);
      const data = await response.json();
      console.log(data);

      if (data.Response  === "True") {
        setloading(false);
        seterror({
          show: false,
          msg: data.Error,
        });
        setmovie(data.Search || data);
        console.log(ismovie);
      } else {
        seterror({
          show: true,
          msg: data.Error,
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {

let  timer = setTimeout(() => {
  getmovies(`${API_URL}&s=${isQuery}`);
}, 500);

return()=> clearTimeout(timer)
   
  }, [isQuery]);

  return (
    <Appcontext.Provider value={{ isloading, iserror, ismovie,isQuery,setQuery }}>
      {children}
    </Appcontext.Provider>
  );
};

const useGlobalContext = () => {
  return useContext(Appcontext);
};

export { Appcontext, AppProvider, useGlobalContext };

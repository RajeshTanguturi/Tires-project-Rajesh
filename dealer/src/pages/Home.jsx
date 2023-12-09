import React, { useEffect, useState} from 'react'
import axios from "axios";
import TireTable from '../home/TiresTable';

const Home = () => {
    const [tires, setTires] = useState([]);
  
    useEffect(() => {
      axios
        .get('http://localhost:8000/tires')
        .then((response) => {
          setTires(response.data.data);
        
        })
        .catch((error) => {
          console.log(error);
        });
    }, []);
  return (
    <div>
        <TireTable tires={tires} />
      </div>
  )
}

export default Home
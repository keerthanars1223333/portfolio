import { useEffect, useState } from "react";
import axios from "axios";
import Showdata from "./Showdata";

function Data() {
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(true);

  async function fetchPhotos() {
    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/photos"
      );
      
      
      const rawData = response.data.slice(0, 24);
      
     
      const fixedPhotos = rawData.map((item, index) => ({
        ...item,
        thumbnailUrl: `https://picsum.photos/id/${index + 12}/150/150`, 
        url: `https://picsum.photos/id/${index + 12}/600/600`
      }));

      setPhotos(fixedPhotos);
      setLoading(false);
    } catch (error) {
      console.log("Error Fetching Photos:", error);
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchPhotos();
  }, []);

  if (loading) {
    return (
      <div style={{
        color: "#00f2fe", 
        display: "flex", 
        justifyContent: "center", 
        alignItems: "center", 
        height: "100vh", 
        backgroundColor: "#03050c",
        fontFamily: "sans-serif",
        fontSize: "1.5rem"
      }}>
        Loading Quantum Gallery...
      </div>
    );
  }

  return <Showdata photos={photos} />;
}

export default Data;
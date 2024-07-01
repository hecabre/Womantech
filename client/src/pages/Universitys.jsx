import { useState, useEffect } from "react";
import Sidebar from "../components/Sidebar";
import { Input, Button, ButtonGroup } from "@material-tailwind/react";
import { UniversityCard } from "../components/UniversityCard";
import { useUniversity } from "../context/UniversityContext";
import { motion } from "framer-motion";
import { Footer } from "../components/Footer";
import { Typography } from "@material-tailwind/react";

function Universitys() {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);
  const [activeTab, setActiveTab] = useState("all");
  const [searchValue, setSearchValue] = useState("");
<<<<<<< HEAD
  const { listUniversitys, listUniversitysUAM } = useUniversity();
=======
  const { listUniversitys } = useUniversity();
>>>>>>> 554a9d862430e50c897d93df8ada1ed63b446b2f
  const [originalData, setOriginalData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
<<<<<<< HEAD
        let res = await listUniversitys();
        const res2 = await listUniversitysUAM();

        setData(res.data.universitys.concat(res2.data.faculty));
        console.log(data);
=======
        const res = await listUniversitys();
        console.log(res.data.universitys);
        setData(res.data.universitys);
>>>>>>> 554a9d862430e50c897d93df8ada1ed63b446b2f
        setOriginalData(res.data.universitys);
      } catch (e) {
        console.error("Algo salió mal", e);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

<<<<<<< HEAD
=======
  // Función para filtrar los datos según la pestaña activa y el valor de búsqueda
>>>>>>> 554a9d862430e50c897d93df8ada1ed63b446b2f
  const filterDataByTabAndSearch = () => {
    let filteredData = data;

    switch (activeTab) {
      case "unam":
        filteredData = filteredData.filter(
          (uni) => uni.universidad_nombre === "UNAM"
        );
        break;
      case "uam":
        filteredData = filteredData.filter(
          (uni) => uni.universidad_nombre === "UAM"
        );
        break;
      case "ipn":
        filteredData = filteredData.filter(
          (uni) => uni.universidad_nombre === "IPN"
        );
        break;
      case "aciertos":
        filteredData = filteredData.sort((a, b) => b.aciertos - a.aciertos);
        break;
      default:
        break;
    }

    if (searchValue) {
      filteredData = filteredData.filter(
        (uni) =>
          uni.facultad_nombre
            .toLowerCase()
            .includes(searchValue.toLowerCase()) ||
          uni.carrera_nombre.toLowerCase().includes(searchValue.toLowerCase())
      );
    }

    return filteredData;
  };

  const clearFilters = () => {
    setSearchValue("");
    setActiveTab("all");
  };

  return (
    <>
      <Sidebar />
      <div className="flex items-center justify-between w-full px-10 mt-16 flex-col">
        <Typography
          variant="h2"
          className="!text-shocking-500 text-center border border-b-shocking-500 flex justify-center items-center w-1/2 m-auto mt-10"
        >
          Universidades
        </Typography>
        <div className="flex gap-2  items-center  justify-center mt-5 flex-wrap">
<<<<<<< HEAD
          <ButtonGroup className="!flex !flex-wrap !bg-shocking-500 rounded-xl !items-center !justify-center">
=======
          <ButtonGroup
            
            className="!flex !flex-wrap !bg-shocking-500 rounded-xl !items-center !justify-center"
          >
>>>>>>> 554a9d862430e50c897d93df8ada1ed63b446b2f
            <Button
              color="lightBlue"
              onClick={() => setActiveTab("unam")}
              ripple="light"
              className="!text-shocking-50 !bg-transparent border-none rounded-2xl"
            >
              UNAM
            </Button>
            <Button
              color="lightBlue"
              onClick={() => setActiveTab("uam")}
              ripple="light"
              className="!text-shocking-50 !bg-transparent border-none rounded-2xl"
            >
              UAM
            </Button>
            <Button
              color="lightBlue"
              onClick={() => setActiveTab("ipn")}
              ripple="light"
              className="!text-shocking-50 !bg-transparent border-none rounded-2xl"
            >
              IPN
            </Button>
            <Button
              color="lightBlue"
              onClick={() => setActiveTab("aciertos")}
              ripple="light"
              className="!text-shocking-50 !bg-transparent border-none rounded-2xl"
            >
              Aciertos
            </Button>
            <Button
              color="lightBlue"
              onClick={clearFilters}
              ripple="light"
              className="!text-shocking-50 !bg-transparent border-none rounded-2xl"
            >
              Limpiar
            </Button>
          </ButtonGroup>
          <input
            className="px-4 py-2 w-full border border-gray-300 rounded-lg focus:outline-none focus:border-shocking-500"
            placeholder="Buscar..."
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            onBlur={"Escribe el nombre de una universidad o carrera"}
          />
        </div>

        <div className="flex flex-wrap items-center justify-center gap-10">
          {filterDataByTabAndSearch()?.map((uni) => (
            <motion.div
              key={uni.carrera_id}
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <UniversityCard
                id={uni.carrera_id}
                img={uni.facultad_img}
                nameDegre={uni.carrera_nombre}
                universityName={uni.universidad_nombre}
                name={uni.facultad_nombre}
              />
            </motion.div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Universitys;

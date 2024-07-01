import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import { Typography } from "@material-tailwind/react";
import CareerLayout from "../components/CareerLayout";
import { Spinner } from "@material-tailwind/react";
import { UniversityCard } from "../components/UniversityCard";
import { useUniversity } from "../context/UniversityContext";
import { motion, AnimatePresence } from "framer-motion";
import { Footer } from "../components/Footer";

function Uam() {
  const { id } = useParams();
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const { listCarrerById, facultyByIdUAM, allUAM } = useUniversity();

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const res = await listCarrerById(id);
        setData(res.data);
      } catch (e) {
        console.error("Algo salió mal", e);
      } finally {
        setLoading(false);
      }
    };

    if (id && listCarrerById) {
      fetchData();
    }
  }, [id]);

  useEffect(() => {
    const fetchFacultyData = async () => {
      if (data && data.university && data.university.length > 0) {
        try {
          const facultyId = data.university[0].id_facultad;
          await facultyByIdUAM(facultyId);
          console.log(allUAM);
        } catch (error) {
          console.error("Error en la segunda llamada:", error);
        }
      }
    };

    fetchFacultyData();
  }, [data]);
<<<<<<< HEAD
  useEffect(() => {
    // Scroll hacia arriba al cargar la página
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [data]);
=======
>>>>>>> 554a9d862430e50c897d93df8ada1ed63b446b2f
  return (
    <div>
      <Sidebar />
      <motion.div className="relative top-32 w-full mx-auto">
        {data ? <CareerLayout data={data} /> : <Spinner />}

        <Typography
          variant="h2"
          className="!text-shocking-500 text-center border border-b-shocking-500 flex justify-center items-center w-1/2 m-auto mt-10 mb-5"
        >
          {data?.university[0].nombre_facultad}
        </Typography>

        <AnimatePresence exitBeforeEnter={false}>
          <motion.div
            className="flex items-center flex-wrap justify-center gap-4"
            key={id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          >
            {allUAM ? (
              allUAM.map((e) => (
                <UniversityCard
                  key={e.id}
                  id={e.id}
                  img={e.imagen}
                  nameDegre={e.nombre_carrera}
                  universityName={e.nombre_universidad}
                  name={e.nombre_facultad}
                />
              ))
            ) : (
              <Spinner />
<<<<<<< HEAD
            )}
=======
            )}{" "}
>>>>>>> 554a9d862430e50c897d93df8ada1ed63b446b2f
            <Footer />
          </motion.div>
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
export default Uam;

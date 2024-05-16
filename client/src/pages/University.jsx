import { useEffect, useState } from "react";
import { useUniversity } from "../context/UniversityContext";
import { useParams } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import { Spinner, Typography } from "@material-tailwind/react";
import { UniversityCard } from "../components/UniversityCard";
function University() {
  const { getUniversitysId, universitys } = useUniversity();
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);
  const { id } = useParams();
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const res = await getUniversitysId(id);
        setData(res);
        console.log(universitys);
      } catch (e) {
        console.error("Algo salió mal", e);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);
  return (
    <div>
      <Sidebar />
      <Typography
        variant="h2"
        className="!text-shocking-500 text-center border border-b-shocking-500 flex justify-center items-center w-1/2 m-auto mt-16"
      >
        Planteles {universitys?.data.carrer[0].nombre_universidad}
      </Typography>
      <section className="flex flex-wrap w-full justify-center gap-3 items-center">
        {universitys ? (
          universitys?.data.carrer.map((university) => {
            return (
              <UniversityCard
                key={university.carrera_id}
                id={university.carrera_id}
                nameDegre={university.nombre_facultad}
                img={university.imagen}
                name={university.nombre_universidad}
                universityName={university.nombre_universidad}
              />
            );
          })
        ) : (
          <Spinner />
        )}
      </section>
    </div>
  );
}

export default University;

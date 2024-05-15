import { Spinner, Typography } from "@material-tailwind/react";
import { Dificult } from "./Dificulty";
import { Link } from "react-router-dom";
function CareerLayout({ data }) {
  console.log(data);
  return (
    <>
      {data ? (
        <div className="grid px-10 py-5 md:grid-cols-2 md:grid-rows-1 grid-cols-1 gap-4 justify-center items-center w-full shadow-lg rounded-2xl ">
          <div>
            <img
              src={data?.carrer[0].imagen}
              className="rounded-2xl"
              alt={data?.carrer[0].nombre_facultad}
            />
          </div>
          <div className="flex items-center justify-center flex-col gap-1 px-2">
            <Typography variant="h4" className="!text-shocking-500 font-bold ">
              {data?.carrer[0].nombre_carrera}
            </Typography>
            <Typography className="text-center">
              El objetivo de la carrera es: {data?.carrer[0].objetivo}
            </Typography>
            <Typography className="text-center">
              <a target="_blank" href={data?.carrer[0].programa_academico}>
                Quieres ver el Programa Academico?
                <br />
                <span className=" font-bold text-base  text-shocking-500">
                  ¡Haz click Aqui!
                </span>
              </a>
            </Typography>
            <Typography className="flex items-center justify-center gap-3">
              La cantidad de aciertos necesaria es:
              <Dificult range={data?.carrer[0].aciertos} />
            </Typography>
            <Typography className="text-center">
              Es impartida en el {data?.carrer[0].nombre_universidad} en la
              unidad{" "}
              <Link
                className="hover:cursor-pointer text-shocking-500 font-bold"
                to={`/facultad/${data?.carrer[0].id_facultad}`}
              >
                {data?.carrer[0].nombre_facultad}
              </Link>
            </Typography>{" "}
            <Typography className="text-center">
              Direccion: {data?.carrer[0].direccion}
            </Typography>
          </div>
        </div>
      ) : (
        <Spinner />
      )}
    </>
  );
}

export default CareerLayout;

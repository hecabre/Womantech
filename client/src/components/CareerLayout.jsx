import { Button, Spinner, Typography } from "@material-tailwind/react";
import { Dificult } from "./Dificulty";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
function CareerLayout({ data }) {
  const { isAuthenticated } = useAuth();
  return (
    <>
      {data ? (
        <div className="grid px-10 py-5 md:grid-cols-2 md:grid-rows-1 grid-cols-1 gap-4 justify-center items-center w-full shadow-lg rounded-2xl ">
          <div>
            <img
              src={data?.university[0].imagen}
              className="rounded-2xl"
              alt={data?.university[0].nombre_facultad}
            />
          </div>
          <div className="flex items-center justify-center flex-col gap-1 px-2">
            <Typography
              variant="h4"
              className="!text-shocking-500 font-bold text-center "
            >
              {data?.university[0].nombre_carrera}
            </Typography>
            <Typography className="text-center">
              El objetivo de la carrera es: {data?.university[0].objetivo}
            </Typography>
            <Typography className="text-center">
              <a target="_blank" href={data?.university[0].programa_academico}>
                Quieres ver el Programa Academico?
                <br />
                <span className=" font-bold text-base  text-shocking-500">
                  ¡Haz click Aqui!
                </span>
              </a>
            </Typography>
            <Typography className="flex items-center justify-center gap-3">
              {data?.university[0].aciertos === 0 && (
                <span className="text-center">
                  La UAM no califica con aciertos, califica usando tus aciertos
                  y tu promedio de preparatoria
                </span>
              )}
              {data?.university[0].aciertos === 1 && (
                <span className="text-shocking-500">
                  La carrera es de acceso indirecto
                </span>
              )}
              {data?.university[0].aciertos !== 0 &&
                data?.university[0].aciertos !== 1 && (
                  <>
                    La cantidad de aciertos necesaria es:
                    <Dificult range={data?.university[0].aciertos} />
                  </>
                )}
            </Typography>
            <Typography className="text-center">
              Es impartida en el {data?.university[0].nombre_universidad} en la
              unidad{" "}
              <Link className="hover:cursor-pointer text-shocking-500 font-bold">
                {data?.university[0].nombre_facultad}
              </Link>
            </Typography>{" "}
            <Typography className="text-center">
              Direccion: {data?.university[0].direccion}
            </Typography>
            {isAuthenticated && (
              <Button className="bg-shocking-500">Suscribirse</Button>
            )}
          </div>
        </div>
      ) : (
        <Spinner />
      )}
    </>
  );
}

export default CareerLayout;

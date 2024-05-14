import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import { useState } from "react";
import { ListDefault } from "./ListDefault";
import { Typography } from "@material-tailwind/react";
function Icon({ id, open }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      className={`${
        id === open ? "rotate-180" : ""
      } h-5 w-5 transition-transform`}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M19.5 8.25l-7.5 7.5-7.5-7.5"
      />
    </svg>
  );
}

export function Requirements() {
  const [open, setOpen] = useState(0);

  const handleOpen = (value) => setOpen(open === value ? 0 : value);

  return (
    <>
      <Typography
        variant="h2"
        className="!text-shocking-500 text-center border border-b-shocking-500 flex justify-center items-center w-1/2 m-auto mt-10"
      >
        Requisitos de admision
      </Typography>
      <div className="w-[90vw] mx-auto mt-14">
        <Accordion open={open === 1} icon={<Icon id={1} open={open} />}>
          <AccordionHeader onClick={() => handleOpen(1)}>
            Requisitos para entrar a la UNAM
          </AccordionHeader>
          <AccordionBody>
            El ingreso a la UNAM a nivel licenciatura es por medio del Concurso
            de Selección o pase reglamentado (alumnos de la ENP o CCH). El
            Concurso de Selección se realiza 2 veces al año. Convocatoria Enero
            (Concurso Mayo), ingreso a los Sistemas Escolarizado y Universidad
            Abierta y Educación a Distancia (SUAyED), modalidades Abierta y a
            Distancia. Convocatoria Septiembre (Concurso Noviembre), ingreso al
            Sistema Universidad Abierta y Educación a Distancia (SUAyED),
            modalidades Abierta y a Distancia.
            <ListDefault
              data={[
                "Haber concluido el bachillerato con promedio mínimo de 7.0.",
                "Obtener el número de aciertos suficientes en el Examen de Selección.",
                "Para el ingreso a la modalidad a Distancia del SUAyED, además deberás cursar y aprobar el Programa de Apoyo al Ingreso(PAI).",
              ]}
              L
            />
          </AccordionBody>
        </Accordion>
        <Accordion open={open === 2} icon={<Icon id={2} open={open} />}>
          <AccordionHeader onClick={() => handleOpen(2)}>
            Requisitos para entrar al IPN
          </AccordionHeader>
          <AccordionBody>
            La mayor parte del proceso de la convocatoria al IPN se realiza en
            línea, por lo tanto, es importante que leas detenidamente todas las
            instrucciones de la convocatoria en cuanto se publique.
            <ListDefault
              data={[
                "Contar con el certificado de preparatoria que avale que acreditaste el bachillerato con un promedio mínimo de 7.0.",
                "Registrarte en la página web www.ipn.mx, en la sección del nivel superior: ya sea modalidad escolarizada o no escolarizada en la primera semana de marzo.",
                "Pagar el derecho a examen de selección.",
                "Es súper importante que si ya tienes 18 años o más, presentes tu identificación oficial (INE, pasaporte) al momento de la entrega de comprobantes y la expedición de la ficha de examen para el ingreso IPN.",
                "El último paso y más crucial: que cumplas con el mínimo de aciertos necesarios según la licenciatura por la que estés concursando.",
              ]}
            />
          </AccordionBody>
        </Accordion>
        <Accordion open={open === 3} icon={<Icon id={3} open={open} />}>
          <AccordionHeader onClick={() => handleOpen(3)}>
            Requisitos para entrar a la UAM
          </AccordionHeader>
          <AccordionBody>
            <ListDefault
              data={
                ["Haber concluido, sin adeudo de materias, el nivel bachillerato o equivalente en el Sistema Educativo Nacional, con un promedio mínimo de 7.0. Si no se cursó en el Sistema Educativo Nacional (de México) se deberá tener la revalidación de estudios que emite la Secretaría de Educación Pública de México (SEP). En caso de revalidación, el promedio mínimo se calculará empleando el certificado de origen, haciendo las equivalencias necesarias.",
                "La fecha de conclusión de estudios del nivel bachillerato o equivalente se considera con base en la fecha en que se aprobó la última materia. Esta fecha de conclusión deberá ser anterior al primer día de clases del trimestre solicitado. Las fechas de inicio de clases se establecen en el calendario escolar.",
                "Presentar el examen de selección y resultar seleccionado en los términos establecidos en la Convocatoria correspondiente."]
              }
            />
          </AccordionBody>
        </Accordion>
      </div>
    </>
  );
}

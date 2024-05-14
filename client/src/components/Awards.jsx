import {
  Timeline,
  TimelineItem,
  TimelineConnector,
  TimelineHeader,
  TimelineIcon,
  TimelineBody,
  Typography,
} from "@material-tailwind/react";
import { FaAward } from "react-icons/fa6";
import { TiWorld } from "react-icons/ti";
import { MdScience } from "react-icons/md";

export function Awards() {
  return (
    <div className="w-[95%] my-20 m-auto">
      <Timeline>
        <TimelineItem>
          <TimelineConnector />
          <TimelineHeader className="">
            <TimelineIcon className="p-2 bg-shocking-500">
              <FaAward className="h-4 w-4 " />
            </TimelineIcon>
            <Typography variant="h5" color="blue-gray">
              Universidad Autónoma Metropolitana
            </Typography>
          </TimelineHeader>
          <TimelineBody className="pb-8">
            <Typography
              color="gray"
              className="font-normal text-gray-600 flex lg:flex-row flex-col justify-between items-center w-[90%] gap-10 lg:gap-32"
            >
              • Premios Nacionales e Internacionales de Investigación: La UAM ha
              sido galardonada con prestigiosos premios nacionales e
              internacionales en reconocimiento a la calidad y relevancia de su
              investigación en diversas áreas del conocimiento. Contribuciones
              <br />
              • Significativas al Desarrollo Tecnológico y Social: La
              universidad ha realizado importantes contribuciones al desarrollo
              tecnológico y social de México a través de la transferencia de
              tecnología, la generación de patentes y la implementación de
              proyectos que tienen un impacto positivo en la sociedad.
              <img
                src="https://www.jornada.com.mx/ndjsimg/images/jornada/jornadaimg/la-uam-regresa-a-clases-presenciales-6871/2-28-la-uam-regresa-a-clases-presenciales-6871html--2022-02-28t151638-473jpg-8667html-image_large71b84e24-8dcf-4d6b-bc7c-208e07b14b79.jpgrawimage=true"
                className="rounded-lg ml-4  h-[18rem] w-[32rem]"
              />
            </Typography>
          </TimelineBody>
        </TimelineItem>
        <TimelineItem>
          <TimelineConnector />
          <TimelineHeader>
            <TimelineIcon className="p-2 bg-shocking-500">
              <TiWorld className="h-4 w-4" />
            </TimelineIcon>
            <Typography variant="h5" color="blue-gray">
              Universidad Nacional Autónoma de México
            </Typography>
          </TimelineHeader>
          <TimelineBody className="pb-8 ">
            <Typography
              color="gray"
              className="font-normal text-gray-600 flex lg:flex-row flex-col justify-between items-center w-[90%] gap-10 lg:gap-32"
            >
              • Liderazgo en Producción Científica: La UNAM ha mantenido
              consistentemente su liderazgo en la producción científica en
              América Latina y ha sido reconocida como una de las universidades
              más destacadas en investigación a nivel mundial en diversas
              disciplinas. <br />
              • Patrimonio Cultural y Arquitectónico de la Humanidad: El campus
              universitario de la UNAM, declarado Patrimonio Cultural de la
              Humanidad por la UNESCO, es un testimonio de su rica historia,
              arquitectura y contribuciones a la cultura mexicana y mundial.
              <img
                src="https://www.gaceta.unam.mx/wp-content/uploads/2021/06/14cudes.jpg"
                className="rounded-lg ml-4  h-[18rem] w-[32rem]"
              />
            </Typography>
          </TimelineBody>
        </TimelineItem>
        <TimelineItem>
          <TimelineHeader>
            <TimelineIcon className="p-2 bg-shocking-500">
              <MdScience className="h-4 w-4" />
            </TimelineIcon>
            <Typography variant="h5" color="blue-gray">
              Instituto Politécnico Nacional
            </Typography>
          </TimelineHeader>
          <TimelineBody className="pb-8 ">
            <Typography
              color="gray"
              className="font-normal text-gray-600 flex lg:flex-row flex-col justify-between items-center w-[90%] gap-10 lg:gap-32"
            >
              • Innovación Tecnológica y Desarrollo Industrial: El IPN ha sido
              pionero en la innovación tecnológica y el desarrollo industrial en
              México, con numerosas patentes, proyectos de investigación
              aplicada y colaboraciones con la industria que han tenido un
              impacto significativo en la economía y la sociedad. <br />
              • Formación de Profesionales Reconocidos a Nivel Nacional e
              Internacional: El IPN ha formado a profesionales altamente
              reconocidos a nivel nacional e internacional en áreas como la
              ingeniería, la ciencia, la tecnología y la administración,
              contribuyendo al desarrollo y la competitividad del país en el
              ámbito global.
              <img
                src="https://www.topuniversities.com/sites/default/files/profiles-slideshow/293370/20210713-1666023158.DIR%20GRAL%20IPN-3"
                className="rounded-lg ml-4  h-[18rem] w-[32rem]"
              />
            </Typography>
          </TimelineBody>
        </TimelineItem>
      </Timeline>
    </div>
  );
}

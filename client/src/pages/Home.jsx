import Sidebar from "../components/Sidebar";
import { Carousel, Typography, Button } from "@material-tailwind/react";
import { Awards } from "../components/Awards";
import { RecomendationCard } from "../components/RecomendationCard";
import { Requirements } from "../components/Requirements";
import { UniversityCard } from "../components/UniversityCard";
import { useEffect, useState } from "react";
import { useUniversity } from "../context/UniversityContext";
import { Spinner } from "@material-tailwind/react";
import { Footer } from "../components/Footer";
import { Link } from "react-router-dom";

function Home() {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);
  const { listUniversitys } = useUniversity();

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const res = await listUniversitys();
        setData(res.data.universitys);
      } catch (e) {
        console.error("Algo salió mal", e);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    console.log(data);
  }, [data]);

  return (
    <div>
      <Sidebar />
      <Carousel className=" my-16">
        <div className="relative h-full w-full">
          <img
            src="https://sseis.upiicsa.ipn.mx/induccion/images/upiicsa-2.jpg"
            alt="image 2"
            className="lg:h-[54rem] h-full md:-[32rem] w-full object-cover"
          />
          <div className="absolute inset-0 grid h-full w-full items-center bg-black/70">
            <div className="w-full px-4 lg:w-3/4 lg:pl-12 xl:w-2/4 xl:pl-20">
              <Typography
                variant="h1"
                color="white"
                className="mb-4 text-base lg:text-2xl xl:text-2xl"
              >
                Instituto Politécnico Nacional
              </Typography>
              <Typography
                variant="lead"
                color="white"
                className="mb-4 opacity-80 text-xs lg:text-sm xl:text-lg"
              >
                Querida futura ingeniera, en cada desafío y en cada
                descubrimiento, yace tu potencial para transformar el mundo. En
                el IPN, encontrarás un hogar donde tus sueños se convertirán en
                realidad. ¡Únete a nosotros y juntas construiremos un futuro
                brillante para todos!
              </Typography>
              <div className="flex gap-2">
                <Link to={"/universidades"}>
                  <Button size="md" className="!bg-shocking-600">
                    Ver Escuelas
                  </Button>
                </Link>
                <a href="https://www.ipn.mx" target="_blank">
                  <Button size="md" color="white" variant="text">
                    Sitio oficial
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="relative h-full w-full">
          <img
            src="https://gaceta.cch.unam.mx/sites/default/files/styles/imagen_articulos_1920x1080/public/2022-09/pag_18a.jpg?h=7de7463f&itok=UV3B0iAM"
            alt="image 3"
            className="w-full object-cover lg:h-[54rem] h-full md:-[32rem]"
          />
          <div className="absolute inset-0 grid h-full w-full items-center bg-black/70">
            <div className="w-full px-4 lg:w-3/4 lg:pl-12 xl:w-2/4 xl:pl-20">
              <Typography
                variant="h1"
                color="white"
                className="mb-4 text-base lg:text-2xl xl:text-2xl"
              >
                Universidad Nacional Autónoma de México
              </Typography>
              <Typography
                variant="lead"
                color="white"
                className="mb-4 opacity-80 text-xs lg:text-sm xl:text-lg"
              >
                En la UNAM, encontrarás un espacio donde tu potencial es
                ilimitado. Únete a una comunidad vibrante de mujeres líderes que
                desafían los límites y construyen un futuro brillante y
                equitativo para todas. Juntas, podemos hacer historia.
              </Typography>
              <div className="flex gap-2">
                <Link to={"/universidades"}>
                  <Button size="md" className="!bg-shocking-600">
                    Ver Escuelas
                  </Button>
                </Link>
                <a href="https://www.unam.mx" target="_blank">
                  <Button size="md" color="white" variant="text">
                    Sitio oficial
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="relative h-full w-full">
          <img
            src="https://www.mexicodesconocido.com.mx/wp-content/uploads/2020/02/uam-situam-huelga.jpeg"
            alt="image 3"
            className=" w-full object-cover lg:h-[54rem] h-full md:-[32rem]"
          />
          <div className="absolute inset-0 grid h-full w-full items-center bg-black/70">
            <div className="w-full px-4 lg:w-3/4 lg:pl-12 xl:w-2/4 xl:pl-20">
              <Typography
                variant="h1"
                color="white"
                className="mb-4 text-base lg:text-2xl xl:text-2xl"
              >
                Universidad Autónoma Metropolitana
              </Typography>
              <Typography
                variant="lead"
                color="white"
                className="mb-4 opacity-80 text-xs lg:text-sm xl:text-lg"
              >
                En la UAM, tu creatividad y pasión son bienvenidas. Únete a una
                comunidad diversa de mujeres que desafían el status quo y
                trabajan juntas para cambiar el mundo. Juntas, podemos alcanzar
                nuevas alturas y dejar una huella duradera en la sociedad.
              </Typography>
              <div className="flex gap-2">
                <Link to={"/universidades"}>
                  <Button size="md" className="!bg-shocking-600">
                    Ver Escuelas
                  </Button>
                </Link>
                <a href="https://www.uam.mx" target="_blank">
                  <Button size="md" color="white" variant="text">
                    Sitio oficial
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </Carousel>
      <Typography
        variant="h2"
        className="!text-shocking-500 text-center border border-b-shocking-500 flex justify-center items-center w-1/2 m-auto mt-10"
      >
        Testimonios
      </Typography>
      <section className="flex justify-center items-center gap-10 flex-wrap mt-10">
        <RecomendationCard
          className=""
          title={"Facultad de Estudios Superiores Zaragoza"}
          description={
            "Excelente institución, alto nivel académico."
          }
          rating={5}
          img={
            "https://scontent.fmex28-1.fna.fbcdn.net/v/t39.30808-6/316541474_5498308116931594_6283538092019993897_n.jpg?stp=cp6_dst-jpg&_nc_cat=107&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeFD-WeaL_uXDMiYgva5lcIej92rSUlXzMiP3atJSVfMyFalCbuM8ZsBjcNuZpeaHLd_jatyqD4mN3kXPzxTm1Oj&_nc_ohc=NCab10HAQc0Q7kNvgHAWoEW&_nc_ht=scontent.fmex28-1.fna&oh=00_AYCDmx9r7LebMR0nY2PgM6denIMhrATYdhvaM5irAFoA9w&oe=664B393B"
          }
          name={"Isabel Galindo"}
        />
        <RecomendationCard
          title={"UPIICSA"}
          description={
            "Estoy agradecida con los maravillosos momentos que me ha hecho vivir está perfecta universidad"
          }
          rating={5}
          img={
            "https://scontent.fmex5-1.fna.fbcdn.net/v/t39.30808-6/315072734_123470557215411_5130215177383904192_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeFv-NrouzdNppsljoalwgFmLVR8o7NPW0AtVHyjs09bQA5SIzAu-NVkS2uH4a42-VncSMX-aFY-9iK5IjIHbPvl&_nc_ohc=pinVt882P0AQ7kNvgFCmTDD&_nc_ht=scontent.fmex5-1.fna&oh=00_AfBkB5TQSknymX63HaEf0fVmBgKR9KA5t5x6YV2CiaJv0g&oe=66420748"
          }
          name={"Ximena Fajardo"}
        />
        <RecomendationCard
          title={"Facultad de Ciencias Políticas y Sociales"}
          description={
            "Un lugar excelente para estudiar y dar clases, el mejor ambiente estudiantil"
          }
          rating={5}
          img={
            "https://scontent.fmex27-1.fna.fbcdn.net/v/t39.30808-6/429673458_1140857987076306_214207921142858195_n.jpg?stp=cp6_dst-jpg&_nc_cat=111&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeEllCSiAItUfn68-CRBujV9QB7y-AHxxixAHvL4AfHGLI7GpcSeqyQ7wbcZ4xlXsybGGS8sboUy_xe5-3iinJmM&_nc_ohc=uD1RHTBD8r4Q7kNvgE2Q2_Z&_nc_ht=scontent.fmex27-1.fna&oh=00_AfAAHghPmyd7roFE4rCi9moMuqpZsQxJrlUyYroTRnhmCw&oe=66421ACF"
          }
          name={"Andrea Mendoza"}
        />
        <RecomendationCard
          title={"UAM Xochimilco"}
          description={
            "El ambiente es de lo mejor y ante todo supera expectativas de nivel académico."
          }
          rating={5}
          img={
            "https://scontent.fmex28-1.fna.fbcdn.net/v/t39.30808-6/339033166_594905665888991_7598706536803790346_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeGZ6JNrImHLfAFotoqLXzufaL6TCWiEA81ovpMJaIQDzeel2N3i5Kec8vbro3NE86xzV78_bjhcMMod__obEXhS&_nc_ohc=lS34ejPHLRcQ7kNvgEGdptx&_nc_ht=scontent.fmex28-1.fna&oh=00_AfBlFaMfYM81w4xhJ6Q0naCWwMTqpLOpSs8B3QSXcU7Fvw&oe=66421AD2"
          }
          name={"Jashia Hernandez"}
        />
      </section>
      <Requirements />
      <Awards />
      <Typography
        variant="h2"
        className="!text-shocking-500 text-center border border-b-shocking-500 flex justify-center items-center w-1/2 m-auto mt-10"
      >
        Universidades
      </Typography>
      <div className="flex items-center flex-wrap justify-center gap-4">
        {data ? (
          Array.from({ length: 3 }).map((_, index) => {
            const randomIndex = Math.floor(Math.random() * data.length);
            const university = data[randomIndex];
            return (
              <UniversityCard
                key={university.carrera_id}
                id={university.carrera_id}
                nameDegre={university.carrera_nombre}
                img={university.facultad_img}
                name={university.facultad_nombre}
                universityName={university.universidad_nombre}
              />
            );
          })
        ) : (
          <Spinner />
        )}
      </div>
      <Footer />
    </div>
  );
}

export default Home;

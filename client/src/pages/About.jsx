import Sidebar from "../components/Sidebar";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
function About() {
  return (
    <>
      <Sidebar />
      <div className="min-h-screen my-10">
        <div className="container mx-auto py-12">
          <div className="max-w-3xl mx-auto bg-schoking-500 p-8 rounded-lg shadow-lg">
            <motion.h1
              className="text-3xl font-semibold text-gray-800 mb-4"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Sobre Nosotros
            </motion.h1>
            <motion.p
              className="text-lg text-gray-700 leading-relaxed"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Soy un estudiante de la carrera de Ingenería Informática del
              Insituto Politecnico nacional, actualmente curso el 4 semestre de
              la carrera. Me he puesto como proposito en este proyecto el
              resumir la mayor cantidad de información posible para ayudar a las
              mujeres a descubrir y explorar que requesitos para las carreras de
              ingeneria y medico ciencias biologicas existen en las principales
              universidades del pais. Mi proposito con este proyecto es ayudar a
              todas las mujeres posibles a encontrar una pasion por las
              ciencias, además de buscar brindarte la orientcias y la
              informacion de una manera agradable para tomar desiciones
              informadas sobre tu futuro académico y profeisonal.Creo firmemente
              que cada individuo tiene un potencial único y quiero ayudarte a
              descubrir y aprovechar el tuyo.
            </motion.p>
            <motion.div
              className="mt-8 overflow-hidden rounded-lg shadow-lg"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <motion.img
                src="https://live.staticflickr.com/4016/4533682406_36c07f363d_c.jpg"
                alt="Equipo"
                className="w-full"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;

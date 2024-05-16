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
              Somos un equipo de estudiantes apasionados de la Licenciatura en
              Ciencias de la Informática del Instituto Politécnico Nacional,
              actualmente cursando nuestro tercer semestre de carrera. Nos hemos
              unido con un propósito en común: ayudarte a descubrir y explorar
              tu camino profesional en el vasto mundo de las carreras STEM. Con
              nuestra profunda pasión por la tecnología y el aprendizaje, hemos
              desarrollado una aplicación de orientación vocacional diseñada
              específicamente para brindarte la orientación y la información
              necesarias para tomar decisiones informadas sobre tu futuro
              académico y profesional. Estamos comprometidos no solo con tu
              éxito académico, sino también con tu satisfacción personal y
              profesional. Creemos firmemente que cada individuo tiene un
              potencial único y queremos ayudarte a descubrir y aprovechar el
              tuyo.
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

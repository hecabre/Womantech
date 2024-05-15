import { Typography } from "@material-tailwind/react";

export function Footer() {
  return (
    <footer className="flex w-full flex-row flex-wrap items-center justify-center gap-y-6 gap-x-12 border-t border-blue-gray-50 py-6 text-center md:justify-between bg-gradient-to-l from-shocking-300 to-shocking-500 text-shocking-50 px-10">
      <Typography
        color="blue-gray"
        className="font-normal text-shocking-50 flex items-center justify-center"
      >
        <img src="../../public/logo.png" className="w-14 h-14 flex" />
        2023 FemTech
      </Typography>
      <ul className="flex flex-wrap items-center gap-y-2 gap-x-8 text-shocking-50">
        <li>
          <Typography
            as="a"
            href="#"
            color="blue-gray"
            className="font-normal transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-300  text-shocking-50"
          >
            Unam
          </Typography>
        </li>
        <li>
          <Typography
            as="a"
            href="#"
            color="blue-gray"
            className="font-normal transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-300  text-shocking-50"
          >
            IPN
          </Typography>
        </li>
        <li>
          <Typography
            as="a"
            href="#"
            color="blue-gray"
            className="font-normal transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-300  text-shocking-50"
          >
            UAM
          </Typography>
        </li>
        <li>
          <Typography
            as="a"
            href="#"
            color="blue-gray"
            className="font-normal transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-300  text-shocking-50"
          >
            Nosotros
          </Typography>
        </li>
      </ul>
    </footer>
  );
}

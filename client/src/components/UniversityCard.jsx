import { useState } from "react";
import {
  Card,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import { Link } from "react-router-dom";
import Toast from "./Toast";


export function UniversityCard({ img, nameDegre, name, universityName, id }) {
  const [showToast, setShowToast] = useState(false);



  return (
    <>
      <Link to={`/${universityName}/${id}`} >
        <Card className="mt-6 w-96 transition-transform hover:-translate-y-5 cursor-pointer">
          <img
            src={img}
            alt="card-image"
            className="relative h-56 rounded-lg"
          />
          <CardBody>
            <Typography variant="h5" color="blue-gray" className="mb-2">
              {nameDegre} - {universityName}
            </Typography>
            <Typography>{name}</Typography>
          </CardBody>
          <CardFooter className="pt-0">
            <Button className="!bg-shocking-500">Ver mas</Button>
          </CardFooter>
        </Card>
      </Link>
      {showToast && <Toast message="¡Página cambiada con éxito!" />}
    </>
  );
}

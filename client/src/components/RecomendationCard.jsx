import { Typography, Avatar, Rating } from "@material-tailwind/react";

export function RecomendationCard({ title, description, rating, name, img }) {
  return (
    <div className="px-8 text-center flex items-center justify-center flex-col flex-wrap w-2/3 sm:w-1/8 md:w-1/2 lg:w-[300px]  h-[300px]  rounded-tl-[50px] rounded-br-[50px] rounded-bl-md rounded-tr-md shadow-2xl shadow-shocking-200/2 hover:-translate-y-2 transition-transform ">
      <Avatar src={img} alt="image" size="lg" />
      <Typography variant="h6" className=" ">
        {name}
      </Typography>
      <Typography color="gray" className="font-normal ">
        {title}
      </Typography>
      <Rating value={rating} readonly />
      <Typography variant="h8" color="blue-gray" className="mb-6 font-medium ">
        {description}
      </Typography>
    </div>
  );
}

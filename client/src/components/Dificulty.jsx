export const Dificult = ({ range }) => {
  let colorClass;

  if (range >= 40 && range < 60) {
    colorClass = "border-green-500";
  } else if (range >= 60 && range < 80) {
    colorClass = "border-yellow-500";
  } else if (range >= 80) {
    colorClass = "border-red-500";
  } else {
    colorClass = "border-gray-500";
  }

  const circleSizeClass = "w-12 h-12";

  return (
    <div>
      <div
        className={`rounded-full ${circleSizeClass} ${colorClass} border-4 flex items-center justify-center bg-shocking-50`}
      >
        {range}
      </div>
    </div>
  );
};

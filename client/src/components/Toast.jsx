import { useEffect, useState } from "react";

function Toast({ message, onClose }) {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      
      onClose();
    }, 1000);

    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div
      className={`fixed top-10 right-50 bg-gray-800 text-white p-4 rounded-md transition-opacity duration-300 z-30  ${
        show ? "opacity-100" : "opacity-0"
      }`}
    >
      {message}
    </div>
  );
}

export default Toast;

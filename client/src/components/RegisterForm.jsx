import { useState, useEffect } from "react";
import {
  Card,
  CardHeader,
  CardBody,
  Input,
  Button,
  Typography,
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";
import { useAuth } from "../context/AuthContext";
import { MdLogin, MdVisibility, MdVisibilityOff } from "react-icons/md";
import { FaUserPlus } from "react-icons/fa";
import { useForm } from "react-hook-form";

export default function AuthForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const { register: registerFunction, login } = useAuth();
  const [type, setType] = useState("login");
  const [showPassword, setShowPassword] = useState(false);
  const [successfully, setSuccessfully] = useState("");
  const [errorsForm, setErrorsForm] = useState("");

  useEffect(() => {
    setShowPassword(false);
    setSuccessfully("");
    setErrorsForm("");
    reset(); // Reinicia el formulario cuando cambia el tipo (login o register)
  }, [type, reset]);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const onSubmit = async (data) => {
    try {
      if (type === "login") {
        const res = await login(data.username, data.password);
        if (res.data.message) {
          setSuccessfully("Inicio de sesión exitoso!");
          setTimeout(() => {
            setSuccessfully("");
          }, 3000);
        }
        if (res.data.error) {
          setErrorsForm(res.data.error);
          setTimeout(() => {
            setErrorsForm("");
          }, 3000);
        }
        console.log("Iniciar sesión con:", data.username, data.password);
        console.log(res);
      } else {
        const res = await registerFunction(data.username, data.password);
        if (res.data.message) {
          setSuccessfully("Registrado con éxito!");
          setTimeout(() => {
            setSuccessfully("");
          }, 3000);
        }
        if (res.data.error) {
          setErrorsForm(res.data.error);
          setTimeout(() => {
            setErrorsForm("");
          }, 3000);
        }
        console.log("Registrarse con:", data.username, data.password);
        console.log(res);

        reset(); // Reinicia el formulario después de un registro exitoso
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <Card className="w-full max-w-[24rem] my-20">
      <CardHeader
        floated={false}
        shadow={false}
        className="m-0 grid place-items-center px-4 py-8 text-center !bg-shocking-500/90"
      >
        <div className="mb-4 h-20 p-6 text-white">
          {type === "login" ? (
            <MdLogin className="h-10 w-10 text-white" />
          ) : (
            <FaUserPlus className="h-10 w-10 text-white" />
          )}
        </div>
        <Typography variant="h5" color="white">
          Womantech
        </Typography>
      </CardHeader>
      <CardBody>
        <Tabs value={type} className="overflow-visible">
          <TabsHeader className="relative z-0">
            <Tab value="login" onClick={() => setType("login")}>
              Inicia sesión
            </Tab>
            <Tab value="register" onClick={() => setType("register")}>
              Regístrate
            </Tab>
          </TabsHeader>
          <TabsBody
            className="!overflow-x-hidden !overflow-y-visible"
            animate={{
              initial: {
                x: type === "login" ? 0 : 0,
              },
              mount: {
                x: 0,
              },
              unmount: {
                x: type === "login" ? 0 : 0,
              },
            }}
          >
            <TabPanel value="login" className="p-0">
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="mt-12 flex flex-col gap-4"
              >
                <div>
                  <Typography variant="caption" color="red">
                    {errorsForm}
                  </Typography>
                  <Typography variant="caption" color="green">
                    {successfully}
                  </Typography>
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="mb-2 font-medium"
                  >
                    Nombre de usuario
                  </Typography>
                  <Input
                    type="text"
                    placeholder="usuariodeEjemplo"
                    {...register("username", { required: true })}
                    className="!border-t-blue-gray-200 focus:!border-t-gray-900"
                    labelProps={{
                      className: "before:content-none after:content-none",
                    }}
                  />
                  {errors.username && (
                    <Typography variant="caption" color="red">
                      Este campo es requerido.
                    </Typography>
                  )}
                </div>

                <div className="my-3 relative">
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="mb-2 font-medium"
                  >
                    Contraseña
                  </Typography>
                  <div className="relative">
                    <Input
                      type={showPassword ? "text" : "password"}
                      placeholder="********"
                      {...register("password", { required: true })}
                      className="!border-t-blue-gray-200 focus:!border-t-gray-900 pr-10 text-black"
                      labelProps={{
                        className:
                          "before:content-none after:content-none !text-black",
                      }}
                    />
                    <button
                      type="button"
                      onClick={togglePasswordVisibility}
                      className="absolute right-4 top-1/2 -translate-y-1/2 !text-[20px] text-black !bg-transparent"
                    >
                      {showPassword ? (
                        <MdVisibilityOff className="text-shocking-500" />
                      ) : (
                        <MdVisibility className="text-shocking-500" />
                      )}
                    </button>
                  </div>
                  {errors.password && (
                    <Typography variant="caption" color="red">
                      Este campo es requerido.
                    </Typography>
                  )}
                </div>
                <Button type="submit" size="lg" className="!bg-shocking-500">
                  Iniciar sesión
                </Button>
              </form>
            </TabPanel>
            <TabPanel value="register" className="p-0">
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="mt-12 flex flex-col gap-4"
              >
                <div>
                  <Typography variant="caption" color="red">
                    {errorsForm}
                  </Typography>
                  <Typography variant="caption" color="green">
                    {successfully}
                  </Typography>
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="mb-2 font-medium"
                  >
                    Nombre de usuario
                  </Typography>
                  <Input
                    type="text"
                    placeholder="usuariodeEjemplo"
                    {...register("username", { required: true })}
                    className="!border-t-blue-gray-200 focus:!border-t-gray-900"
                    labelProps={{
                      className: "before:content-none after:content-none",
                    }}
                  />
                  {errors.username && (
                    <Typography variant="caption" color="red">
                      Este campo es requerido.
                    </Typography>
                  )}
                </div>

                <div className="my-3 relative">
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="mb-2 font-medium"
                  >
                    Contraseña
                  </Typography>
                  <div className="relative">
                    <Input
                      type={showPassword ? "text" : "password"}
                      placeholder="********"
                      {...register("password", { required: true })}
                      className="!border-t-blue-gray-200 focus:!border-t-gray-900 pr-10 text-black"
                      labelProps={{
                        className:
                          "before:content-none after:content-none !text-black",
                      }}
                    />
                    <button
                      type="button"
                      onClick={togglePasswordVisibility}
                      className="absolute right-4 top-1/2 -translate-y-1/2 !text-[20px] text-black !bg-transparent"
                    >
                      {showPassword ? (
                        <MdVisibilityOff className="text-shocking-500" />
                      ) : (
                        <MdVisibility className="text-shocking-500" />
                      )}
                    </button>
                  </div>
                  {errors.password && (
                    <Typography variant="caption" color="red">
                      Este campo es requerido.
                    </Typography>
                  )}
                </div>
                <Button type="submit" size="lg" className="!bg-shocking-500">
                  Registrarse
                </Button>
              </form>
            </TabPanel>
          </TabsBody>
        </Tabs>
      </CardBody>
    </Card>
  );
}

import RegisterForm from "../components/RegisterForm";
import Sidebar from "../components/Sidebar";
export function RegisterPage() {
  return (
    <div>
      <Sidebar />
      <div className="mx-auto flex items-center  justify-center">
        <RegisterForm />
      </div>
    </div>
  );
}

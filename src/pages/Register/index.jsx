import useInput from "../../hooks/useInput";
import { useEffect } from "react";
import { useAppContext } from "../../context/app-context";
import { Button, Layout, Input } from "../../components";
import { useNavigate, Link } from "react-router-dom";

export const Register = () => {
  const navigate = useNavigate();
  const { accessToken, register, language } = useAppContext();
  const [name, onNameChange] = useInput("");
  const [email, onEmailChange] = useInput("");
  const [password, onPasswordChange] = useInput("");

  useEffect(() => {
    if (accessToken) {
      navigate("/notes");
    }
  }, [accessToken]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const registered = await register({ name, email, password });
    if (!registered?.error) {
      alert("berhasil buat akun");
      navigate("/");
    }
  };
  return (
    <Layout>
      <div className="flex flex-col justify-center items-center space-y-5">
        <form
          className="flex flex-col space-y-3 w-6/12"
          onSubmit={handleSubmit}
        >
          <h4 className="text-center text-3xl">
            {language === "id"
              ? "Isi form untuk mendaftar akun."
              : "Login to use app, please."}
          </h4>
          <Input
            type="text"
            placeholder="name..."
            value={name}
            onChange={onNameChange}
          />
          <Input
            type="email"
            placeholder="email..."
            value={email}
            onChange={onEmailChange}
          />
          <Input
            type="password"
            placeholder="password..."
            value={password}
            onChange={onPasswordChange}
          />
          <Button myClass="bg-yellow-500 w-full">
            {language === "id" ? "Daftar" : "Register"}
          </Button>
        </form>
        <p>
          {language === "id"
            ? "Sudah punya akun? "
            : "Already have an account? "}
          <Link className="underline" to="/">
            {language === "id" ? "Masuk di sini" : "Login Here"}
          </Link>
        </p>
      </div>
    </Layout>
  );
};

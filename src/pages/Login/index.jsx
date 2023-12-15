import { useEffect } from "react";
import { FiCoffee } from "react-icons/fi";
import useInput from "../../hooks/useInput";
import { Button, Layout, Input } from "../../components";
import { useNavigate, Link } from "react-router-dom";
import { useAppContext } from "../../context/app-context";

export const Login = () => {
  const navigate = useNavigate();
  const { login, putLocalStorage, accessToken, setAccessToken, language } =
    useAppContext();
  const [email, onEmailChange] = useInput("");
  const [password, onPasswordChange] = useInput("");

  useEffect(() => {
    if (accessToken) {
      navigate("/notes");
    }
  }, [accessToken]);

  const handleClick = async (e) => {
    e.preventDefault();

    const auth = await login({ email, password });
    if (!auth?.error) {
      setAccessToken(auth?.data?.accessToken);
      putLocalStorage("accessToken", auth?.data?.accessToken);
      navigate("/notes");
    }
  };

  return (
    <Layout>
      <div className="flex flex-col justify-center items-center space-y-5">
        <form className="flex flex-col space-y-3 w-6/12" onSubmit={handleClick}>
          <h4 className="text-center text-3xl">
            {language === "id" ? "hayuukk login" : "Login to use app, please."}
          </h4>
          <Input
            type="email"
            placeholder="email"
            value={email}
            onChange={onEmailChange}
          />
          <Input
            type="password"
            placeholder="password"
            value={password}
            onChange={onPasswordChange}
          />
          <Button myClass="bg-yellow-500 w-full">
            {language === "id" ? "Masuk" : "Login"}
          </Button>
        </form>
        <p>
          {language === "id" ? "Belum punya akun? " : "Don't have an account? "}
          <Link className="underline" to="/register">
            {language === "id" ? "Daftar di sini" : "Register Here"}
          </Link>
        </p>
      </div>
    </Layout>
  );
};

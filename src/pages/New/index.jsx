import useInput from "../../hooks/useInput";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FiCheckCircle } from "react-icons/fi";
import { Input, Button, Layout } from "../../components";
import { useAppContext } from "../../context/app-context";

export const New = () => {
  const navigate = useNavigate();
  const { accessToken, addNote } = useAppContext();

  const [title, onTitleChange] = useInput("");
  const [body, setBody] = useState("");

  useEffect(() => {
    if (!accessToken) navigate("/");
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const note = await addNote({ title, body });
    if (!note?.error) {
      alert("berhasil buat note");
      navigate("/");
    }
  };

  return (
    <Layout>
      <section className="mt-10">
        <form onSubmit={handleSubmit}>
          <Input
            type="text"
            placeholder="Catatan Saya..."
            onChange={onTitleChange}
            value={title}
            className="bg-transparent border-none text-5xl"
          />
          <div
            className="bodyEditable"
            data-placeholder="Catatan saya adalah ...."
            contentEditable
            value={body}
            onInput={(e) => setBody(e.target.innerHTML)}
          />
          <Button myClass="absolute bottom-10 right-10">
            <FiCheckCircle size={40} />
          </Button>
        </form>
      </section>
    </Layout>
  );
};

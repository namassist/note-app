import { useState } from "react";
import { FiCheckCircle } from "react-icons/fi";
import { Header, Input, Button } from "../../../components";
import { addNote } from "../../../utils/local-data";
import { useNavigate } from "react-router-dom";

export const New = () => {
  const navigate = useNavigate();
  const [input, setInput] = useState({
    id: null,
    title: "",
    body: "",
    archived: false,
    createdAt: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    const currentDate = new Date().toLocaleString("en-US", {
      timeZone: "Asia/Jakarta",
    });

    const getID = Date.now();

    const newNote = {
      id: getID.toString(),
      title: input.title,
      body: input.body,
      archived: false,
      createdAt: currentDate,
    };
    console.log(newNote);
    addNote(newNote);

    setInput({
      id: null,
      title: "",
      body: "",
      archived: false,
      createdAt: "",
    });
    navigate("/");
  };

  return (
    <>
      <Header title="Notes App" />
      <main className="py-5 space-y-3">
        <section className="mt-10">
          <div className="container mx-auto">
            <form onSubmit={handleSubmit}>
              <Input
                type="text"
                placeholder="Catatan Saya..."
                onChange={(e) =>
                  setInput({
                    ...input,
                    title: e.target.value,
                  })
                }
                value={input.title}
              />
              <div
                className="bodyEditable"
                data-placeholder="Catatan saya adalah ...."
                contentEditable
                onInput={(e) =>
                  setInput({
                    ...input,
                    body: e.target.innerHTML,
                  })
                }
              ></div>
              <Button myClass="absolute bottom-10 right-10">
                <FiCheckCircle size={40} />
              </Button>
            </form>
          </div>
        </section>
      </main>
    </>
  );
};

import { useState } from "react";
import parse from "html-react-parser";
import { useParams, useNavigate } from "react-router-dom";
import { getNote, deleteNote, archivedNote, formatDate } from "../../../utils";
import { Header, Button } from "../../../components";

import {
  HiOutlineTrash,
  HiOutlineArchiveBox,
  HiOutlineArrowUturnUp,
} from "react-icons/hi2";

export const Detail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [note, setNote] = useState(getNote(id));

  const onDelete = (id) => {
    deleteNote(id);
    note?.archived ? navigate("/archieved") : navigate("/");
  };

  const onArchive = (id) => {
    archivedNote(id);
    note?.archived ? navigate("/archieved") : navigate("/");
  };

  return (
    <div>
      <>
        <Header title="Notes App" />
        <main className="py-5 space-y-3">
          <section className="mt-10">
            <div className="container mx-auto space-y-3">
              <h4 className="font-bold text-5xl text-gray-900">
                {note?.title}
              </h4>
              <p className="text-gray-500 text-sm">
                {formatDate(note?.createdAt)}
              </p>
              <div className="text-lg">{parse(note?.body)}</div>
            </div>
          </section>
        </main>
        <div className="absolute bottom-10 right-10">
          <Button
            onClick={() => onArchive(note.id)}
            myClass="border-2 border-gray-500 mr-2"
          >
            {!note?.archived ? (
              <HiOutlineArchiveBox size={"1.2rem"} />
            ) : (
              <HiOutlineArrowUturnUp size={"1.2rem"} />
            )}
          </Button>
          <button
            className="px-2 py-1 border-2 border-red-500 rounded-md capitalize"
            onClick={() => onDelete(note?.id)}
          >
            <HiOutlineTrash size={"1.2rem"} />
          </button>
        </div>
      </>
    </div>
  );
};

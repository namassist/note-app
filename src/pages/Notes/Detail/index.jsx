import { useNotes } from "../../../hooks/useNote";
import { useParams } from "react-router-dom";

export const Detail = () => {
  const { id } = useParams();
  const { filteredNotes, handleDelete } = useNotes();
  const noted = filteredNotes.filter((note) => note.id == id);

  return (
    <div>
      {noted.map((note) => (
        <div key={note.id}>
          <li>
            {note?.title}: {note?.body}
          </li>
          <div className="space-x-2 flex justify-end">
            <button className="bg-yellow-200 p-2 cursor-pointer rounded-md">
              Arsip
            </button>
            <button
              onClick={() => handleDelete(note.id)}
              className="bg-red-200 p-2 cursor-pointer rounded-md"
            >
              Hapus
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

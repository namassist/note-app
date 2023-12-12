import { Link } from "react-router-dom";

export const NoteCard = ({ note, getDate, type }) => {
  return (
    <Link
      to={`/notes/detail/${note.id}`}
      className={`card ${
        type === "active" ? "border-yellow-400" : "border-sky-700"
      }`}
    >
      <div className="card-content h-full">
        <h2 className="text-xl text-gray-800 font-semibold overflow-hidden whitespace-nowrap text-ellipsis">
          {note.title}
        </h2>
        <h6 className="text-sm text-gray-500">{getDate(note.createdAt)}</h6>
        <p className="text-gray-700 leading-relaxed">{note.body}</p>
      </div>
    </Link>
  );
};

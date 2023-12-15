import { Link } from "react-router-dom";
import { PropTypes } from "prop-types";
import { formatDate } from "../../../utils";

export const NoteCard = ({ note }) => {
  return (
    <div className="card border-yellow-500">
      <div className="card-content h-full">
        <Link to={`/notes/detail/${note.id}`}>
          <h2 className="text-xl underline font-semibold overflow-hidden whitespace-nowrap text-ellipsis">
            {note.title}
          </h2>
        </Link>
        <h6 className="text-sm text-gray-500">{formatDate(note.createdAt)}</h6>
        <p className="leading-relaxed">{note.body}</p>
      </div>
    </div>
  );
};

NoteCard.propType = {
  note: PropTypes.arrayOf(PropTypes.object).isRequired,
};

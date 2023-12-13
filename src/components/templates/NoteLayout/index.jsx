import { NoteCard } from "../../organisms";
import { PropTypes } from "prop-types";

export const NoteLayout = ({ data }) => {
  return (
    <div className="wrapper-card">
      {data?.length === 0 ? (
        <p className="text-center">tidak ada data</p>
      ) : (
        data?.map((note, index) => <NoteCard key={index} note={note} />)
      )}
    </div>
  );
};

NoteLayout.propType = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
};

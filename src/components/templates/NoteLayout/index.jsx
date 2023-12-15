import { useAppContext } from "../../../context/app-context";
import { NoteCard } from "../../organisms";
import { PropTypes } from "prop-types";

export const NoteLayout = ({ data }) => {
  const { language } = useAppContext();
  return (
    <div className="wrapper-card">
      {data?.length === 0 ? (
        <p className="text-center">
          {language === "id" ? "tidak ada data" : "No data available"}
        </p>
      ) : (
        data?.map((note, index) => <NoteCard key={index} note={note} />)
      )}
    </div>
  );
};

NoteLayout.propType = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
};

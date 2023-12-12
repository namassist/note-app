import { NoteCard } from "../../organisms";

export const NoteLayout = ({
  notes,
  onDelete,
  onArchive,
  getDate,
  filter,
  type,
}) => {
  return (
    <div className="wrapper-card">
      {filter(notes).length === 0 ? (
        <p className="text-center">tidak ada data</p>
      ) : (
        filter(notes).map((note, index) => (
          <NoteCard
            key={index}
            note={note}
            onDelete={onDelete}
            onArchive={onArchive}
            getDate={getDate}
            type={type}
          />
        ))
      )}
    </div>
  );
};

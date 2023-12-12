import { useNotes } from "../../hooks/useNote";
import { NoteLayout, Header, Input } from "../../components";

export const Archieve = () => {
  const { filteredNotes, searchValue, setSearchParams, handleDelete, getDate } =
    useNotes();

  return (
    <>
      <Header title="Notes App" />
      <main className="py-5 bg-gray-50 space-y-3">
        <section className="mt-10">
          <div className="container mx-auto">
            <h1 className="text-2xl mb-3 text-center">Catatan Arsip</h1>
            <div className="w-full mb-5">
              <Input
                type="text"
                name="search"
                id="search"
                placeholder="Cari catatan..."
                value={searchValue}
                onChange={(e) =>
                  setSearchParams({ keyword: e.target.value }, "replace")
                }
              />
            </div>
            <NoteLayout
              type="active"
              notes={filteredNotes}
              onDelete={handleDelete}
              getDate={getDate}
              filter={(notes) => notes.filter((note) => note.archived)}
            />
          </div>
        </section>
      </main>
    </>
  );
};

import { Link } from "react-router-dom";
import { FiPlusCircle } from "react-icons/fi";
import { NoteLayout, Header, Input } from "../../components";
import { filteredNote, getActiveNotes } from "../../utils";
import { useSearchParams } from "react-router-dom";

export const Home = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const searchValue = searchParams.get("keyword") || "";

  return (
    <>
      <Header title="Notes App" />
      <main className="py-5 bg-gray-50 space-y-3">
        <section className="mt-10">
          <div className="container mx-auto">
            <h1 className="text-3xl mb-3 text-center text-gray-900 font-medium">
              Catatan Aktif
            </h1>
            <div className="w-full mb-5">
              <Input
                type="text"
                placeholder="Cari catatan..."
                value={searchValue}
                onChange={(e) =>
                  setSearchParams({ keyword: e.target.value }, "replace")
                }
              />
            </div>
            <NoteLayout data={filteredNote(searchValue, getActiveNotes())} />
          </div>
        </section>
      </main>
      <Link to="/notes/new" className="absolute bottom-10 right-10">
        <FiPlusCircle size={40} />
      </Link>
    </>
  );
};

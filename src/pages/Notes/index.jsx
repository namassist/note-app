import { useEffect } from "react";
import { useAppContext } from "../../context/app-context";
import { useNavigate, Link } from "react-router-dom";
import { useSearchParams } from "react-router-dom";
import { NoteLayout, Input, Layout } from "../../components";
import { FiPlusCircle } from "react-icons/fi";
import { Loader } from "../../components/molecules/Loader";

export const Notes = () => {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const searchValue = searchParams.get("keyword") || "";
  const {
    accessToken,
    notes,
    setNotes,
    theme,
    language,
    getActiveNotes,
    filteredNote,
    isLoading,
  } = useAppContext();

  useEffect(() => {
    if (!accessToken) {
      navigate("/");
    }

    if (accessToken) {
      getNotes();
    }
  }, []);

  async function getNotes() {
    const result = await getActiveNotes();
    setNotes(result?.data);
  }

  return (
    <>
      <Layout>
        <section className="mt-10">
          <h1
            className={`text-3xl mb-3 text-center font-medium ${
              theme === "dark" ? "text-gray-50" : "text-black"
            }`}
          >
            {language === "id" ? "Catatan Aktif" : "Active Notes"}
          </h1>
          <div className="w-full mb-5">
            <Input
              type="text"
              placeholder={
                language === "id"
                  ? "Cari berdasarkan judul..."
                  : "Search by title..."
              }
              value={searchValue}
              onChange={(e) =>
                setSearchParams({ keyword: e.target.value }, "replace")
              }
            />
          </div>
          {isLoading ? (
            <Loader />
          ) : (
            <NoteLayout data={filteredNote(searchValue, notes)} />
          )}
        </section>
      </Layout>
      <Link
        to="/notes/new"
        className={`absolute bottom-10 right-10 ${
          theme === "dark" ? "text-gray-50" : "text-black"
        }`}
      >
        <FiPlusCircle size={40} />
      </Link>
    </>
  );
};

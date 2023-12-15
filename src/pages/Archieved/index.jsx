import { useEffect } from "react";
import { useAppContext } from "../../context/app-context";
import { useNavigate, useSearchParams } from "react-router-dom";
import { NoteLayout, Input, Layout, Loader } from "../../components";

export const Archieved = () => {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const searchValue = searchParams.get("keyword") || "";
  const {
    accessToken,
    notes,
    setNotes,
    theme,
    language,
    getArchivedNotes,
    filteredNote,
    isLoading,
  } = useAppContext();

  useEffect(() => {
    if (!accessToken) {
      navigate("/");
    }

    if (accessToken) {
      getArchived();
    }
  }, []);

  async function getArchived() {
    const result = await getArchivedNotes();
    setNotes(result?.data);
  }

  return (
    <Layout>
      <section className="mt-10">
        <h1
          className={`text-3xl mb-3 text-center font-medium ${
            theme === "dark" ? "text-gray-50" : "text-black"
          }`}
        >
          {language === "id" ? "Catatan Arsip" : "Archive Notes"}
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
  );
};

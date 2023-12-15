import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Button, Layout, Loader } from "../../components";
import { useAppContext } from "../../context/app-context";
import { formatDate } from "../../utils";

import {
  HiOutlineTrash,
  HiOutlineArchiveBox,
  HiOutlineArrowUturnUp,
} from "react-icons/hi2";

export const Detail = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [note, setNote] = useState();
  const {
    accessToken,
    getNote,
    unarchiveNote,
    archiveNote,
    deletedNote,
    isLoading,
  } = useAppContext();

  useEffect(() => {
    if (!accessToken) {
      navigate("/");
    }

    if (accessToken) {
      getDetailNote();
    }
  }, []);

  const getDetailNote = async () => {
    const item = await getNote(id);
    setNote(item?.data);
  };

  const onDelete = async (id) => {
    const deleted = await deletedNote(id);
    if (deleted?.responseJson?.status === "success") {
      navigate("/");
    }
  };

  const onArchive = async (id) => {
    if (note.archived) {
      const unarchived = await unarchiveNote(id);
      navigate("/archieved");
    } else {
      const archived = await archiveNote(id);
      navigate("/notes");
    }
  };

  return (
    <Layout>
      {isLoading ? (
        <Loader />
      ) : (
        <section className="mt-10 space-y-3">
          <h4 className="font-bold text-5xl">{note?.title}</h4>
          <p className="text-sm">{formatDate(note?.createdAt)}</p>
          <div className="text-lg">{note?.body}</div>
        </section>
      )}
      <div className="absolute bottom-10 right-10">
        <Button
          onClick={() => onArchive(note?.id)}
          myClass="border-2 border-gray-500 mr-2"
        >
          {!note?.archived ? (
            <HiOutlineArchiveBox size={"1.2rem"} />
          ) : (
            <HiOutlineArrowUturnUp size={"1.2rem"} />
          )}
        </Button>
        <button
          className="px-2 py-1 border-2 border-red-500 rounded-md capitalize"
          onClick={() => onDelete(note?.id)}
        >
          <HiOutlineTrash size={"1.2rem"} />
        </button>
      </div>
    </Layout>
  );
};

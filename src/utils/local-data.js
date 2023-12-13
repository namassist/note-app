let data = [
  {
    id: "1",
    title: "Judul 1",
    body: "Ini adalah entri pertama.Ini adalah entri pertama.Ini adalah entri pertama.Ini adalah entri pertama.Ini adalah entri pertama.Ini adalah entri pertama.Ini adalah entri pertama.",
    archived: false,
    createdAt: "2023-09-17T08:00:00Z",
  },
  {
    id: "2",
    title: "Judul 2",
    body: "Ini adalah entri kedua.",
    archived: true,
    createdAt: "2023-09-16T14:30:00Z",
  },
  {
    id: "3",
    title: "Judul 3",
    body: "Ini adalah entri ketiga.",
    archived: false,
    createdAt: "2023-09-15T10:15:00Z",
  },
  {
    id: "4",
    title: "Judul 4",
    body: "Ini adalah entri keempat.",
    archived: true,
    createdAt: "2023-09-14T16:45:00Z",
  },
  {
    id: "5",
    title: "Judul 5",
    body: "Ini adalah entri kelima.",
    archived: false,
    createdAt: "2023-09-13T09:20:00Z",
  },
  {
    id: "6",
    title: "Judul 6",
    body: "Ini adalah entri keenam.",
    archived: false,
    createdAt: "2023-09-12T12:10:00Z",
  },
  {
    id: "7",
    title: "Judul 7",
    body: "Ini adalah entri ketujuh.",
    archived: true,
    createdAt: "2023-09-11T18:55:00Z",
  },
  {
    id: "8",
    title: "Judul 8",
    body: "Ini adalah entri kedelapan.",
    archived: false,
    createdAt: "2023-09-10T07:40:00Z",
  },
  {
    id: "9",
    title: "Judul 9",
    body: "Ini adalah entri kesembilan.",
    archived: true,
    createdAt: "2023-09-09T13:25:00Z",
  },
  {
    id: "10",
    title: "Judul 10",
    body: "Ini adalah entri kesepuluh.",
    archived: false,
    createdAt: "2023-09-08T20:05:00Z",
  },
];

const getAllNotes = () => {
  return data;
};

const getNote = (id) => {
  const note = data?.filter((note) => note.id === id);
  return note[0];
};

const getActiveNotes = () => {
  const active = data?.filter((note) => !note.archived);
  return active;
};

const getArchievedNotes = () => {
  const archived = data?.filter((note) => note.archived);
  return archived;
};

const addNote = (newNote) => {
  data = [...data, newNote];
};

const deleteNote = (id) => {
  data = data?.filter((note) => note.id !== id);
};

const archivedNote = (id) => {
  data = data?.map((note) => {
    if (note.id === id) {
      return { ...note, archived: !note.archived };
    }
    return note;
  });
};

const filteredNote = (keyword, data) => {
  return data?.filter((note) =>
    note?.title.toLowerCase().includes(keyword.toLowerCase())
  );
};

export {
  getAllNotes,
  getNote,
  getActiveNotes,
  getArchievedNotes,
  addNote,
  deleteNote,
  archivedNote,
  filteredNote,
};

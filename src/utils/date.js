export const formatDate = (createdAt) => {
  const date = new Date(createdAt);
  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };

  return date.toLocaleString("id-ID", options);
};

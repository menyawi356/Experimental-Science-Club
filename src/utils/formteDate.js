const formatDateTime = (date) => {
  return new Date(date).toLocaleString("en-US", {
    day: "2-digit",
    month: "short",
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
  });
};
export default formatDateTime;

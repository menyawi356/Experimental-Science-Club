import client from "./client";
const contactUs = async (data) => {
  const response = await client("contactUs", {
    method: "POST",
    body: JSON.stringify(data),
  });
  return await response;
};
export default contactUs;

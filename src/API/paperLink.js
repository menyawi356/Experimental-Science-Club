import client from "./client";

export default async function getPaperLink(id) {
  const response = await client(`link/${id}`);
  return response;
}

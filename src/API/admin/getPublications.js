import client from "../client";

export default async function getPublications() {
  const response = await client("admin/papers");
  return response;
}

import client from "../client";
export default async function updatePaperState(id, state) {
  const data = JSON.stringify({ state });
  const response = await client(`admin/papers/${id}`, {
    method: "PATCH",
    body: data,
  });
  return response;
}

import client from "./client";

export default async function getPublishedPapers() {
  const receivedData = await client("publish", {
    method: "GET",
  });
  const { ok, status, ...data } = receivedData;
  const list = Object.keys(data || {}).map((i) => data[i]);
  return { ok, status, list };
}

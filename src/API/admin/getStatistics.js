import client from "../client.js";
export default async function getStatistics() {
  const response = client("admin/statistcs");
  return response;
}

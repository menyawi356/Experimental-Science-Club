import client from "./client";

export default async function joinUs(data = {}) {
  const stringfiedData = JSON.stringify(data);
  const recivedData = await client("signingUp", {
    method: "POST",
    body: stringfiedData,
  });
  return recivedData;
}

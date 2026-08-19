import client from "./client";

export default async function signOut() {
  const recivedData = await client("signingOut", {
    method: "POST",
  });
  return recivedData;
}

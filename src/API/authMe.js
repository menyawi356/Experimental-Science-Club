import client from "./client";

export default async function authMe() {
  const response = await client("auth/me", {
    method: "GET",
  });
  return response;
}

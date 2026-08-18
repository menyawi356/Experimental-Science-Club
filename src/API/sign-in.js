import client from "./client";

export default async function signIn(email, password) {
  const data = JSON.stringify({
    email,
    password,
  });

  const recivedData = await client("signingIn", {
    method: "POST",
    body: data,
  });

  return recivedData;
}
import client from "./client";

export default async function publish(formData) {
  const receivedData = client("publish", {
    body: formData,
    method: "POST",
  });
  return receivedData;
}

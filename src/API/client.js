import { API_URL } from "../config/env";
export default async function client(endpoint, options = {}) {
  console.log(API_URL);
  const isFormData = options.body instanceof FormData;
  const response = await fetch(`${API_URL}/${endpoint}`, {
    ...options,
    credentials: "include",
    headers: {
      ...(isFormData ? {} : { "Content-Type": "application/json" }),
      ...options.headers,
    },
  });
  const data = await response.json();
  return {
    ...data,
    status: response.status,
    ok: response.ok,
  };
}

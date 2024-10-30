export default async function register(body) {
  try {
    const response = await fetch("http://localhost:9090/api/registration", {
      method: "POST",
      body,
      mode: "cors",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    });
    if (!response.ok) {
      const data = await response.json();
      console.log(data);
      throw new Error(response.status);
    }
    const data = await response.json();

    return data;
  } catch (err) {
    console.error(err);
  }
}

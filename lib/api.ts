export const sendContactForm = async (data: any) => {
  console.log("in the api.ts");

  try {
    const response = await fetch("/api/", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });

    const responseData = await response.json();

    return responseData;
  } catch (error: any) {
    throw new Error(error.message);
  }
};

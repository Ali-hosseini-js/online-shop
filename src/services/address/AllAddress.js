export async function getAddress() {
  try {
    const res = await fetch("http://localhost:3100/panel/address", {
      credentials: "include",
    });
    return res.json();
  } catch (error) {
    throw new Error("Failed to load user");
  }
}

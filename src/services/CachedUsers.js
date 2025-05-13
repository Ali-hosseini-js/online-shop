export async function getCachedUsers() {
  try {
    const res = await fetch("http://localhost:3100/user", {
      credentials: "include",
    });
    return res.json();
  } catch (error) {
    throw new Error("Failed to load user");
  }
}

export async function getCachedInventory() {
  try {
    const res = await fetch("http://localhost:3100/auth/whoami", {
      credentials: "include",
    });
    return res.json();
  } catch (error) {
    return false;
  }
}

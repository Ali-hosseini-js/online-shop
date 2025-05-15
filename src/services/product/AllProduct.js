export async function getProducts() {
  try {
    const res = await fetch("http://localhost:3100/product", {
      credentials: "include",
    });
    return res.json();
  } catch (error) {
    throw new Error("Failed to load user");
  }
}

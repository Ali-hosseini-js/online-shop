export async function DeleteProduct(id) {
  try {
    const res = await fetch(`http://localhost:3100/product/${id}`, {
      method: "DELETE",
      credentials: "include",
    });
    return res.json();
  } catch (error) {
    throw new Error("Failed to delete user");
  }
}

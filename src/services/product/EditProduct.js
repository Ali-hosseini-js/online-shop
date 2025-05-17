export async function EditProduct({ id, formData }) {
  try {
    const res = await fetch(`http://localhost:3100/product/${id}`, {
      method: "PATCH",
      credentials: "include",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });
    return res.json();
  } catch (error) {
    throw new Error("Failed to update user");
  }
}

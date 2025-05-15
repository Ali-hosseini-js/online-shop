export async function EditCategories(id, formData) {
  try {
    const res = await fetch(`http://localhost:3100/product-category/${id}`, {
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

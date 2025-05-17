export async function EditShipping({ id, formData }) {
  try {
    console.log(id);
    console.log(formData);
    const res = await fetch(`http://localhost:3100/shipping/${id}`, {
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

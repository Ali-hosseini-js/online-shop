export async function EditUsers({ id, formData }) {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/user/${id}`, {
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

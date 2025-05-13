export async function DeleteUsers(id) {
  try {
    const res = await fetch(`http://localhost:3100/user/${id}`, {
      method: "DELETE",
      credentials: "include",
    });
    return res.json();
  } catch (error) {
    throw new Error("Failed to delete user");
  }
}

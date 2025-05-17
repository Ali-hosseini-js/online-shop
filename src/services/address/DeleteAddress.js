export async function DeleteAddress(id) {
  try {
    const res = await fetch(`http://localhost:3100/panel/address/${id}`, {
      method: "DELETE",
      credentials: "include",
    });
    return res.json();
  } catch (error) {
    throw new Error("Failed to delete user");
  }
}

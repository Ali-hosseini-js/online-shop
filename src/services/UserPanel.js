export async function UserPanel(id) {
  try {
    const res = await fetch(`http://localhost:3100/panel/user/${id}`, {
      credentials: "include",
    });
    return res.json();
  } catch (error) {
    throw new Error("Failed to load user");
  }
}

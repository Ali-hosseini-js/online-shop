export async function getProfile() {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/panel/user`, {
      credentials: "include",
    });
    return res.json();
  } catch (error) {
    throw new Error("Failed to load user");
  }
}

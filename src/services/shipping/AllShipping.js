export async function getShipping() {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/shipping`, {
      credentials: "include",
    });
    return res.json();
  } catch (error) {
    throw new Error("Failed to load user");
  }
}

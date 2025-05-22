export async function DeleteShipping(id) {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/shipping/${id}`,
      {
        method: "DELETE",
        credentials: "include",
      }
    );
    return res.json();
  } catch (error) {
    throw new Error("Failed to delete shipping");
  }
}

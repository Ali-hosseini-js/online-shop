export async function ProductCart(id) {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/cart/${id}`, {
      credentials: "include",
    });
    return res.json();
  } catch (error) {
    throw new Error("Failed to load product");
  }
}

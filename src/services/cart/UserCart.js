export async function UserCart() {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/cart/byUser`, {
      credentials: "include",
    });
    return res.json();
  } catch (error) {
    throw new Error("Failed to load product");
  }
}

export async function DiscountProducts() {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/site/product/discount`,
      {
        credentials: "include",
      }
    );
    return res.json();
  } catch (error) {
    throw new Error("Failed to load user");
  }
}

export async function DiscountProducts() {
  try {
    const res = await fetch("http://localhost:3100/site/product/discount", {
      credentials: "include",
    });
    return res.json();
  } catch (error) {
    throw new Error("Failed to load user");
  }
}

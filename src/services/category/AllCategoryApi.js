export async function getCategories() {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/product-category`,
      {
        credentials: "include",
      }
    );
    return res.json();
  } catch (error) {
    throw new Error("Failed to load user");
  }
}

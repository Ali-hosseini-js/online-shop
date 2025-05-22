export async function DeleteCategories(id) {
  // const resCategory = await fetch(
  //   `http://localhost:3100/product-category/${id}`,
  //   {
  //     credentials: "include",
  //   }
  // );
  // const data = await resCategory.json();
  // console.log("category-id:", data);

  // const imageAddress = data.image;
  // console.log("imageAddress", imageAddress);

  // const resDeleteFile = await fetch(`http://localhost:3100/delete-file`, {
  //   method: "DELETE",
  //   body: {
  //     fileName: imageAddress,
  //     folder: "",
  //   },
  //   credentials: "include",
  // });

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/product-category/${id}`,
    {
      method: "DELETE",
      credentials: "include",
    }
  );
  return res.json();
}

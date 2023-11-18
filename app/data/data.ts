function assertIsDefined(
  value: any
): asserts value is Record<string, any> & { products: Record<string, any>[] } {
  if (value === undefined || value === null) {
    throw new Error("data.products is null or undefinedd");
  }
}

export async function fetchProducts() {
  try {
    const data = await fetch("https://dummyjson.com/products");
    const response = await data.json();
    assertIsDefined(response);
    return response;
  } catch (error) {
    throw new Error("Failed to fetch products.");
  }
}

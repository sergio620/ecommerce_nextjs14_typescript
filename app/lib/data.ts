import "dotenv/config";
import { State } from "./definitions";

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

function assertIsArray(value: any): asserts value is Record<string, any>[] {
  if (typeof value !== "object") {
    throw new Error("Response isn't a object");
  }
}
export async function fetchShoes(state: State) {
  const { category, price, color, company } = state;
  try {
    const response = await fetch(
      `http://localhost:3000/api/products?category=${category}&price=${price}&color=${color}&company=${company}`,
      {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      }
    );
    const data = await response.json();
    assertIsArray(data);
    return data;
  } catch (error) {
    throw new Error("Failed to fetch products.");
  }
}

export async function fetchSingleProduct(productID: string) {
  try {
    const response = await fetch(
      `http://localhost:3000/api/products/${productID}`,
      {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      }
    );
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error("Failed to fetch product.");
  }
}

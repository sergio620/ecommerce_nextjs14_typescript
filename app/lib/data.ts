import "dotenv/config";
import { Params, SelectedFilter, State } from "./definitions";

function assertIsDefined(
  value: any
): asserts value is Record<string, any> & { products: Record<string, any>[] } {
  if (value === undefined || value === null) {
    throw new Error("data.products is null or undefined");
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
/**
 * This function asserts that the input value is an array of objects with string keys.
 * If the input value is not an object, an error is thrown.
 */
function assertIsArray(value: any): asserts value is Record<string, any>[] {
  if (typeof value !== "object") {
    throw new Error("Response isn't a object");
  }
}
export async function fetchShoes(state?: State) {
  //if para verificar si "state" se paso como argumento a esta funcion, de lo contrario hara un fetch normal
  if (state) {
    const { selectedFilter, inputSearchBox } = state;

    //https://bobbyhadz.com/blog/typescript-element-implicitly-has-any-type-expression#solve-the-error-using-a-type-assertion
    let keyFilter: keyof SelectedFilter;
    //https://blog.logrocket.com/how-to-dynamically-assign-properties-object-typescript/#solution-2-use-object-index-signature
    const params: Params = {};
    for (keyFilter in selectedFilter) {
      if (selectedFilter[keyFilter] !== "all") {
        //https://stackoverflow.com/questions/44832316/variable-test-is-used-before-being-assigned-typescript
        //https://www.typescriptlang.org/docs/handbook/release-notes/typescript-2-7.html#definite-assignment-assertions
        params[keyFilter] = selectedFilter[keyFilter];
      }
    }

    if (inputSearchBox !== "") {
      console.log(`params["title"] !== ""`);
      params["title"] = inputSearchBox;
    }
    console.log("params: ", params);

    //https://stackoverflow.com/questions/35038857/setting-query-string-using-fetch-get-request
    const url = new URL(
      (process.env.NEXTAUTH_URL as string) +
        "/api/products?" +
        new URLSearchParams(params).toString()
    );
    console.log("url: ", url);

    try {
      const response = await fetch(url, {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      });
      const data = await response.json();
      assertIsArray(data);
      return data;
    } catch (error) {
      throw new Error("Failed to fetch products.");
    }
  } else {
    //https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
    try {
      const response = await fetch(
        (process.env.NEXTAUTH_URL as string) + "/api/products",
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const data = await response.json();
      return data;
    } catch (error) {
      throw new Error("Failed to fetch products");
    }
  }
}

export async function fetchSingleProduct(productID: string) {
  try {
    const response = await fetch(
      (process.env.NEXTAUTH_URL as string) + `/api/products/${productID}`,
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
export async function fetchSingleProductDummy(productID: string) {
  try {
    const response = await fetch(
      `https://dummyjson.com/products/${productID}`,
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

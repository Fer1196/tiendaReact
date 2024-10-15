import { useContext } from "react";
import { FilterContext } from "../context/filtersContext";
import { Product } from "../utils/interfaces/Product";

export function useFilters() {
  const { filters, setFilters, products } = useContext(FilterContext);

  const filterProducts = () => {
    return products.filter((product: Product) => {
      return (
        product.price >= filters.price &&
        (filters.category === "all" || product.category === filters.category) &&
        (filters.searchWord !== ""
          ? product.title
              .toLowerCase()
              .includes(filters.searchWord.toLowerCase())
          : true)
      );
    });
  };

  return { filters, setFilters, filterProducts };
}

import { createContext, useState } from "react";
import { Filter } from "../utils/interfaces/Filter.interface";
import { products as initialProducts } from "../mocks/products.json";
import { Product } from "../utils/interfaces/Product";

interface FiltersContext {
  filters: Filter;
  setFilters: (prevState: React.SetStateAction<Filter>) => void;
  products: Product[];
}

export const FilterContext = createContext<FiltersContext>({
  filters: {
    category: "all",
    price: 0,
    searchWord: "",
  },
  setFilters: () => {},
  products: initialProducts,
});

export function FiltersProvider({
  children,
}: {
  children: JSX.Element[] | JSX.Element;
}) {
  const [filters, setFilters] = useState<Filter>({
    category: "all" as string,
    price: 0,
    searchWord: "",
  });
  return (
    <FilterContext.Provider
      value={{
        filters,
        setFilters,
        products: initialProducts,
      }}
    >
      {children}
    </FilterContext.Provider>
  );
}

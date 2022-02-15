import { createContext } from "react";

const DataContext = createContext({
  data: [],
  setData: () => {},
  number: Number,
  setNumber: () => {},
});

export default DataContext;

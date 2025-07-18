
import { Box } from '@mui/material'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import SearchResults from './components/SearchResults/SearchResults'
import Sidebar from './components/Sidebar/Sidebar'
import { products, formatFacets, topicFacets } from "./data/products"
import { useState } from "react";
import { type Facet } from './types'

const typedFormatFacet: Facet[] = formatFacets;

function useProducts() {
  const [perPage, setPerPage] = useState(10);
  const [page, setPage] = useState(1);
  const [selectedFormat, setSelectedFormat] = useState<undefined | string[]>();
  const startIndex = (page - 1) * perPage;
  const renderedProducts = filterProducts();
  console.log(formatFacets);
  console.log(topicFacets);
  return { perPage, renderedProducts, formatFacets: typedFormatFacet, topicFacets, selectFormat, selectedFormat }

  function selectFormat(value: string) {
    const isNew = !selectedFormat?.includes(value);

    debugger
    if (isNew) {
      const newValue = selectedFormat ? [...selectedFormat, value] : [value]
      setSelectedFormat(newValue)
    } else {
      const existingIndex = (selectedFormat ?? []).findIndex(val => val == value);
      if (existingIndex > -1) {
        selectedFormat?.splice(existingIndex, 1)
        setSelectedFormat(selectedFormat)
      }
    }
  }

  function filterProducts() {
    const filteredProducts = selectedFormat ? products.filter(product => selectedFormat.includes(product.type)) : products;
    const paginatedProducts = filteredProducts.slice(startIndex, perPage * page);
    return paginatedProducts;
  }
}

function App() {
  const { perPage, renderedProducts, formatFacets, topicFacets, selectFormat, selectedFormat } = useProducts();

  return (
    <div>
      <Navbar />
      <Box display={"flex"} flexDirection={"row"}>
        <Sidebar formatFacets={formatFacets} selectFormat={selectFormat} selectedFormats={selectedFormat} />
        <SearchResults perPage={perPage} renderedProducts={renderedProducts} />
      </Box>

    </div>
  )
}

export default App


import { Box } from '@mui/material'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import SearchResults from './components/SearchResults/SearchResults'
import Sidebar from './components/Sidebar/Sidebar'

function App() {


  return (
    <div>
      <Navbar />
      <Box display={"flex"} flexDirection={"row"}>
        <Sidebar />
        <SearchResults />
      </Box>

    </div>
  )
}

export default App

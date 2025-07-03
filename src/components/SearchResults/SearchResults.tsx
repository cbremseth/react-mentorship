import { Button, Stack, Typography } from "@mui/material";
import ResultCard from "./ResultCard";


function SearchResults() {
    return (
        <div>
            <Stack direction={"row"}>
                <Typography variant="body1">100,263 results</Typography>
                <Button variant="text">Sort by: Relevance</Button>
                <Button variant="text">Results per page (100)</Button>
            </Stack>
            <Stack direction={"column"}>
                <ResultCard />
            </Stack>
        </div>
    );
}

export default SearchResults;
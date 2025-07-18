import { Button, Stack, Typography } from "@mui/material";
import ResultCard from "./ResultCard";
import type { Product } from "../../types";



function SearchResults({ perPage, renderedProducts }: { perPage: number, renderedProducts: Product[] }) {

    return (
        <div>
            <Stack direction={"row"}>
                <Typography variant="body1">100,263 results</Typography>
                <Button variant="text">Sort by: Relevance</Button>
                <Button variant="text">Results per page ({perPage})</Button>
            </Stack>
            <Stack direction={"column"}>
                {renderedProducts.map(data => <ResultCard data={data} />)}

            </Stack>
        </div>
    );
}

export default SearchResults;
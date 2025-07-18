import { CardContent, Typography } from "@mui/material";
import Card from "@mui/material/Card";
import type { Product } from "../../types";

function ResultCard(props: { data?: Product }) {
    if (!props.data) return null;
    const data = props.data;
    // const data = {
    //     title: "this is my title",
    //     author: "this the the author",
    //     desc: "this is my super awesome description"
    // }
    return (
        <Card>
            <CardContent>
                <Typography variant="h5">{data.title}</Typography>
                <Typography variant="subtitle1">{data.authors.join(", ")}</Typography>
                <Typography variant="subtitle1">{data.type}</Typography>
                {/* <Typography variant="body1">{data.description}</Typography> */}
                <Typography dangerouslySetInnerHTML={{ __html: data.html }} />
            </CardContent>
        </Card>
    );
}

export default ResultCard;
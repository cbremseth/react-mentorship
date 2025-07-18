
export type Product = {
    title: string;
    authors: string[];
    html: string;
    description: string;
    type: string;
};

export type Facet = [
    string,
    number
]
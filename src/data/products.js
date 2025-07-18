import data from "./response.json"

export const products = data.data.products;
export const facetFields = data.data.facet_counts.facet_fields;
export const formatFacets = facetFields.format;
export const topicFacets = facetFields["custom_attributes.topic__topic_hierarchy.name"].map(mapFacetLabel);



function mapFacetLabel([label]) {
    return label;
}
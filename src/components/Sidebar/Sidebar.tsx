import MuiAccordionDetails from '@mui/material/AccordionDetails';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import type { Facet } from '../../types';


type SidebarProps = {
    formatFacets: Facet[];
    selectFormat: (val: string) => void;
    selectedFormats?: string[]
}

function Sidebar(props: SidebarProps) {
    console.log(props)
    return (
        <div>
            <MuiAccordion>
                <MuiAccordionSummary
                    expandIcon={<ArrowDownwardIcon />}
                    aria-controls="panel1-content"
                    id="panel1-header"
                >
                    Your Role
                </MuiAccordionSummary>
                <MuiAccordionDetails>
                    Add a role to get more personalized search results.
                </MuiAccordionDetails>
            </MuiAccordion>
            <MuiAccordion>
                <MuiAccordionSummary
                    expandIcon={<ArrowDownwardIcon />}
                    aria-controls="panel1-content"
                    id="panel1-header"
                >
                    Formats
                </MuiAccordionSummary>
                <MuiAccordionDetails>
                    <ul>
                        {props.formatFacets.map(facet => <li style={{ fontWeight: (props.selectedFormats ?? []).includes(facet[0]) ? 700 : 500 }} onClick={() => props.selectFormat(facet[0])}>{facet[0]} - {facet[1]}</li>)}
                    </ul>
                </MuiAccordionDetails>
            </MuiAccordion>
            <MuiAccordion>
                <MuiAccordionSummary
                    expandIcon={<ArrowDownwardIcon />}
                    aria-controls="panel1-content"
                    id="panel1-header"
                >
                    Skills
                </MuiAccordionSummary>
                <MuiAccordionDetails>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada
                    lacus ex, sit amet blandit leo lobortis eget.
                </MuiAccordionDetails>
            </MuiAccordion>
            <MuiAccordion>
                <MuiAccordionSummary
                    expandIcon={<ArrowDownwardIcon />}
                    aria-controls="panel1-content"
                    id="panel1-header"
                >
                    Publication Date
                </MuiAccordionSummary>
                <MuiAccordionDetails>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada
                    lacus ex, sit amet blandit leo lobortis eget.
                </MuiAccordionDetails>
            </MuiAccordion>
        </div>
    );
}

export default Sidebar;
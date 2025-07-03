import MuiAccordionDetails from '@mui/material/AccordionDetails';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';



function Sidebar() {
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
                    Formats
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
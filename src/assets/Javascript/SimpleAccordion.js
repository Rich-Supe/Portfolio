import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
}));

export default function SimpleAccordion() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}>Past</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            I graduated from college in Chicago and continued to work in the restaurant industry as an operations manager. While I loved the job, my heart was in tech so I joined App Academy's 1400 hour immersive boot-camp to sharpen my coding skills.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={classes.heading}>Present</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            I am currently living in Cincinnati looking for new opportunities. With my free time I enjoy working on my side projects and meeting new people!
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3a-content"
          id="panel3a-header"
        >
          <Typography className={classes.heading}>Future</Typography>
        </AccordionSummary>
        <Typography>
            I'm hoping to meet some amazing people and learn new skills! If you'd like to connect, please don't hesitate to reach out below!
        </Typography>
      </Accordion>
    </div>
  );
}

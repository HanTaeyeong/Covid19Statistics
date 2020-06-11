import React from "react";
import {
  Card,
  CardContent,
  Typography,
  Grid,
  StylesProvider,
} from "@material-ui/core";
import styled from "styled-components";
import CountUp from "react-countup";



const GridForm = ({value, title, text, lastUpdate, styled }) => {
  return (
    <Grid container spacing={3} justify="center" style={{display:'inline-block', margin:'2%',width:'15rem',}}>
      <Grid item component={Card} style={{borderBottom:styled}}  >
        <CardContent>
          <Typography color="textSecondary" gutterBottom>
            {title}
          </Typography>
          <Typography variant="h5">
            <CountUp
              start={0}
              end={value}
              duration={2.5}
              seperator=","
            ></CountUp>
          </Typography>
          <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
          <Typography variant="body2">{text}</Typography>
        </CardContent>
      </Grid>
    </Grid>
  );
};

const GridContainer = styled.div`

  align-items:center;
  justify-content:center;
  width: 80%;
  margin :5%;
`;

const Cards = ({data:{confirmed, recovered, deaths,lastUpdate}}) => {


  if(!confirmed){
    return 'loading...'
}
  
    return (
    <GridContainer>
      <GridForm title="Infected" text="Number of Infected of COVID-19" value={confirmed.value} lastUpdate={lastUpdate} styled="10px solid rgba(0,0,255,0.5)" />
      <GridForm title="Recovered" text="Number of Recovered from COVID-19" value={recovered.value} lastUpdate={lastUpdate} styled="10px solid rgba(0,255,0,0.5)"/>
      <GridForm title="Deaths" text="Number of Deaths caused by COVID-19" value={deaths.value} lastUpdate={lastUpdate} styled="10px solid rgba(255,0,0,0.5)"/>
    </GridContainer>
  );
};

export default Cards;

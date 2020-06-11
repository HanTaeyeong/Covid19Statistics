import React, { useEffect } from "react";
import styles from "./App.css";
import { Cards, Chart, CountryPicker } from "./components";
import { fetchData } from "./api";
import styled from 'styled-components';

const Header=styled.div`

font-size:3rem;
margin:3%;
margin-left:20% auto;
margin-right:auto;
font-family: fantasy;
`;
const About=styled.div`
margin: 3%;
padding:2%;
width:100%;
height:20%;
border-radius:5px;
background:linear-gradient(45deg,rgba(200,200,200,0.5),rgba(200,200,200,0.3));
font-size:1.1rem;

`;

class App extends React.Component {
  state = {
    data: {},
    country: "",
  };
  async componentDidMount() {
    const fetchedData = await fetchData();
    this.setState({ data: fetchedData });
  }

  handleState = async (country) => {
    const da=await fetchData(country);
    this.setState({ data:da , country: country });
  };

  render() {
    const { data, country } = this.state;

    return (
      <div className={styles.container}>
      <Header>COVID-19 Statistics</Header>
        <Cards data={data} />
        <CountryPicker handleState={this.handleState} />
        <Chart data={data} country={country} />
        <About>Dev : Taeyeong
        <br></br>
        E-mail : gksxodud2721@gmail.com
        <br></br>
        From : https://www.youtube.com/watch?v=khJlrj3Y6Ls&list=LLJlNl9ci7dAx2U0iPG8wl8g&index=3&t=2621s
        <br></br>
        API : https://covid19.mathdro.id/api

        </About>
      </div>
    );
  }
}

export default App;

import React from "react";
import data from "../data.json";
import People from "./People";

class Tags extends React.Component {
  constructor(props) {
    super();
    this.state = {
      activeHouse: ""
    };
  }
  handleClick = (houseName) => {
    this.setState({
      activeHouse: houseName
    });
  };
  render() {
    console.log(data);
    let housesNameList = data.houses.map((house) => house.name);
    console.log(housesNameList);
    let people = data.houses.reduce((acc, cv) => {
      return this.state.activeHouse === ""
        ? acc.concat(cv.people)
        : this.state.activeHouse === cv.name
        ? acc.concat(cv.people)
        : acc;
      // return acc;
    }, []);
    console.log(people);
    return (
      <>
        <ul className="tags">
          {housesNameList.map((houseName, index) => {
            return (
              <li
                className={houseName === this.state.activeHouse ? "active" : ""}
                onClick={() => this.handleClick(houseName)}
                key={index}
              >
                {houseName}
              </li>
            );
          })}
        </ul>
        <People people={people} />
      </>
    );
  }
}

export default Tags;

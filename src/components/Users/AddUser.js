import React from "react";
// import styled, {css} from "styled-components";
import Card from "./UI/Card";
import Button from "./UI/Button";
import classes from "./AddUser.module.css"

// const Button = styled.button`
// background: transparent;
// border-radius: 3px;
// border: 2px solid palevioletred;
// color: palevioletred;
// margin: 0.5em 1 em;
// padding: 0.25em 1 em;

// ${props => props.primary && css `
// background: palevioletred;
// color: white;
// `}
// `;

const AddUser = (props) => {

  const addUserHandler = event => {
    event.preventDefault();
  };

  return (
    <Card className={classes.input}>
    <form onSubmit={addUserHandler}>
      <label htmlFor="username">Username</label>
      <input id="username" type="text"></input>
      <label htmlFor="age">Age (Years)</label>
      <input id="age" type="number"></input>
      <Button type="submit">Add User</Button>
    </form>
    </Card>
  );
};

export default AddUser;

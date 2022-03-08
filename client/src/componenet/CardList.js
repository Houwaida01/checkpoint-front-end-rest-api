import React from "react";
import { Card, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { deletePerson, editPerson } from "../redux/actions/Person";
function CardList({ card }) {
  const navigate=useNavigate()
  const dispatch=useDispatch()
  return (
    <div>
      <Card style={{ width: "18rem" }}>
        <Card.Body>
          <Card.Title> NAME: {card.name}</Card.Title>
          <Card.Text>PHONE: {card.phone}</Card.Text>
          <Card.Text>FAVOURITE FOODS: {card.favoriteFoods}</Card.Text>
          <Card.Text>AGE: {card.age}</Card.Text>
          <Card.Text>EMAIL: {card.email}</Card.Text>
          <Button variant="primary" onClick={()=>dispatch(deletePerson(card._id))}>DELETE</Button> 
          <Button onClick={()=>navigate(`/edit/${card._id}`)} variant="primary" >EDIT</Button> 
        </Card.Body>
      </Card>
    </div>
  );
}

export default CardList;

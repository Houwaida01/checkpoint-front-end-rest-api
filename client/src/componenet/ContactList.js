import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPerson } from "../redux/actions/Person";
import { Spinner } from "react-bootstrap";
import CardList from "./CardList";
function ContactList() {
  const dispatch = useDispatch();
  const persons = useSelector((state) => state.personReducer.personList);
  const load = useSelector((state) => state.personReducer.load);
  useEffect(() => {
    dispatch(getPerson());
  }, []);

  return (
    <div style={{display:"flex",justifyContent:"space-around",flexWrap:"wrap"}}>
      {load ? (
        <Spinner animation="border" />
      ) : (
        persons?.map((el) => <CardList card={el} key={el._id} />)
      )}
    </div>
  );
}

export default ContactList;

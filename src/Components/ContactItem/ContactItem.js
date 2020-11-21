import React from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { deleteContact } from "../../redux/slice/contactsSlice";

const P = styled.p`
  display: block;
  margin-top: 0;
  margin-bottom: 0;

  font-size: 14px;
  font-weight: 500;
  line-height: 17px;
`;
const Button = styled.button`
  display: block;
  width: 23px;
  height: 23px;
  border: 2px solid transparent;
  border-radius: 50%;

  font-size: 14px;
  font-weight: 500;
  line-height: 17px;

  cursor: pointer;
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1),
    background-image 250ms cubic-bezier(0.4, 0, 0.2, 1),
    background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  background-image: linear-gradient(47.73deg, #6368e5 15.48%, #b884f3 81.25%);
  background-position: center;
  background-size: calc(100% + 4px) calc(100% + 4px);

  color: #ffffff;

  &:hover,
  &:focus {
    border: 2px solid #6368e5;
    color: #6368e5;
    background-image: none;
    background-color: #ffffff;
  }
`;

const ContactItem = ({ id }) => {
  const contact = useSelector((state) =>
    state.contacts.items.find((contact) => contact.id === id)
  );
  const dispatch = useDispatch();

  return (
    <>
      {contact && (
        <P>
          {contact.name}: {contact.number}
        </P>
      )}
      <Button type="button" onClick={() => dispatch(deleteContact(id))}>
        x
      </Button>
    </>
  );
};
export default ContactItem;

import React, { useEffect, useState } from "react";
import { db } from "../config/firebase";
import { getDocs, collection } from "firebase/firestore";
import { Table } from "react-bootstrap";
import "./UserTable.css";

const UserTable = ({}) => {
  const [users, setUsers] = useState();

  const getUsers = async () => {
    const querySnapshot = await getDocs(collection(db, "user"));
    const usersList = querySnapshot.docs.map(doc => ({id: doc.id, ...doc.data()}));
    setUsers(usersList);
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <Table striped bordered hover size="sm">
      <thead>
        <tr>
          <th>Username</th>
          <th>Primeiro Nome</th>
          <th>Ultimo Nome</th>
          <th>Data Criação</th>
          <th>Estado</th>
        </tr>
      </thead>
      <tbody>
      { users?.map((user) => (
        <tr key={user.id}>
          <td>{user.username}</td>
          <td>{user.primeiroNome}</td>
          <td>{user.ultimoNome}</td>
          <td>{user.dataCriacao}</td>
          <td>{user.estado}</td>
        </tr>
      ))}
      </tbody>
    </Table>
  );
};

export default UserTable;

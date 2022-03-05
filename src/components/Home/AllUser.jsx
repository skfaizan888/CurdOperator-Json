import React, { useEffect, useState } from "react";
import { delteuserFData, getUsers } from "../../service/api";
import { Table, Row, Col, Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";

export const AllUser = () => {
  const [users, setUsers] = useState([]);
  let history = useNavigate();

  const EidteUser = (users) => {
    history(`/edite/${users.id}`);
  };

  useEffect(() => {
    getAllUser();
  }, []);

  const getAllUser = async () => {
    const response = await getUsers();

    console.log(response);
    setUsers(response.data);
  };

  const delteuser = async (id) => {
    await delteuserFData(id);
    getAllUser();
  };

  return (
    <div>
      <h1>Dashboard</h1>
      <Link to="/" id="logtlink">
        LogOut
      </Link>
      <Link to="/add" id="addlink">
        Add
      </Link>
      <Row style={{ padding: 50 }}>
        <Col lg={12}>
          <Table striped bordered hover variant="outline-success">
            <thead>
              <tr>
                <th>id</th>
                <th>Name</th>
                <th>UserName</th>
                <th id="name-id">User Edit</th>
                <th>User Delete</th>
              </tr>
            </thead>
            {users.map((users) => (
              <tbody>
                <tr>
                  <td>{users.id} </td>

                  <td id="name-id">{users.Name}</td>
                  <td>{users.userName}</td>

                  <td>
                    {/* <td><Link id="link-edite" to={`/edite/${users.id}`}>Eidte</Link></td> */}
                    <Button variant="warning" onClick={() => EidteUser(users)}>
                      Edit
                    </Button>
                  </td>
                  <td>
                    <Button
                      variant="danger"
                      onClick={() => delteuser(users.id)}
                    >
                      Delete
                    </Button>
                  </td>
                </tr>
              </tbody>
            ))}
          </Table>
        </Col>
        <Col></Col>
      </Row>
    </div>
  );
};

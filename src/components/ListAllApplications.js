import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom'
import { Table, Container, Card, Button, Spinner } from 'react-bootstrap';
import { getAllApplications } from '../redux/actions/applicationActions';

const ListAllApplications = () => {
  const dispatch = useDispatch();
  const applications = useSelector((state) => state.application.applications);
  const isLoading = useSelector((state) => state.application.loading); // Get loading state from Redux store



  useEffect(() => {
    dispatch(getAllApplications());
  }, [dispatch]);

  if (isLoading) {
    return (
      <Spinner animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    )
  }

  return (
    <Container fluid>
      <Card>
        <Card.Body>
          <Card.Title>All Applications</Card.Title>
          <Table striped bordered responsive>
            <thead>
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Sector</th>
                <th>Term Of Agreement</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {applications?.map((app, index) => (
                <tr key={app.id}>
                  <td>{index + 1}</td>
                  <td>{app.name}</td>
                  <td>{app.sectors.name}</td>
                  <td>{app.termsOfService ? 'True' : 'False'}</td>
                  <td>
                    <Button variant="primary" size="sm" className="me-2">
                      <Link style={{color:"white"}} to={`/edit-application/${app._id}`}>
                        Edit
                      </Link>
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default ListAllApplications;

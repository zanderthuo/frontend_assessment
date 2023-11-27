import React from 'react';
import { Table, Container, Card, Button } from 'react-bootstrap';

const ListAllApplications = () => {
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
              <tr>
                <td>1</td>
                <td>John Doe</td>
                <td>Technology</td>
                <td>True</td>
                <td>
                  <Button variant="primary" size="sm" className="me-2">
                    Edit
                  </Button>
                  <Button variant="danger" size="sm">
                    Delete
                  </Button>
                </td>
              </tr>
              <tr>
                <td>2</td>
                <td>Jane Doe</td>
                <td>Finance</td>
                <td>True</td>
                <td>
                  <Button variant="primary" size="sm" className="me-2">
                    Edit
                  </Button>
                  <Button variant="danger" size="sm">
                    Delete
                  </Button>
                </td>
              </tr>
              {/* Add more rows as needed */}
            </tbody>
          </Table>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default ListAllApplications;

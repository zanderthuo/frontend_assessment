import React, { useState, useEffect } from 'react';
import { Form, Button, Container, Row, Col, Card } from 'react-bootstrap';
import { ToastContainer, toast } from "react-toastify";
import { useDispatch, useSelector } from 'react-redux';
import { getAllSectors } from '../redux/actions/sectorsActions';
import { createApplication } from '../redux/actions/applicationActions';

const AddApplicationForm = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [sector, setSector] = useState('');
  const [termsOfService, setTermsOfService] = useState(false);

  const sectors = useSelector((state) => state.sectors);


  useEffect(() => {
    dispatch(getAllSectors());
  }, [dispatch]);

  const handleRegister = async (e) => {
    e.preventDefault();

    if (!name || !sector || !termsOfService) {
      toast.error('Please fill out all fields.');
      return
    }

    const applicationData = {
      name,
      sectors: sector,
      termsOfService
    }

    try {
      await dispatch(createApplication(applicationData));
      console.log('App data>>', applicationData)
      setName('');
      setSector('');
      setTermsOfService(false);
      toast.success('Application Created Successfully');
    } catch (error) {
      toast.error('Error creating Application', error)
    }
  };

  return (
    <Container>
      <Row className="justify-content-md-center mt-5">
        <Col xs={12} md={6}>
          <h2 className="text-center">Please enter your Name and pick the sector you are currently involved in:</h2>
          <Card>
            <Card.Body>
              <Card.Title className="text-center">Application</Card.Title>
              <Form onSubmit={handleRegister}>
                <Form.Group controlId="formBasicname">
                  <Form.Label>Username</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                </Form.Group>

                <Form.Group controlId="formBasicSector" className="mb-4">
                  <Form.Label>Select Sector</Form.Label>
                  <select
                    value={sector}
                    onChange={(e) => setSector(e.target.value)}
                    className="form-control"
                  >
                    <option value="">Select...</option>
                    {sectors.sectors &&
                      sectors.sectors.map((sectorGroup) =>
                        sectorGroup.categories.map((category) => (
                          <optgroup key={category._id} label={category.name}>
                            {category.subcategories.map((subcategory) => (
                              <React.Fragment key={subcategory._id}>
                                <option value={subcategory.name}>{subcategory.name}</option>
                                {subcategory.subsubcategories &&
                                  subcategory.subsubcategories.length > 0 &&
                                  subcategory.subsubcategories.map((subsubcategory) => (
                                    <React.Fragment key={subsubcategory._id}>
                                      <option value={subsubcategory.name}>
                                        &nbsp;&nbsp;&nbsp;{subsubcategory.name}
                                      </option>
                                      {subsubcategory.subsubsubcategories &&
                                        subsubcategory.subsubsubcategories.length > 0 &&
                                        subsubcategory.subsubsubcategories.map((subsubsubcategory) => (
                                          <option key={subsubsubcategory._id} value={subsubsubcategory.name}>
                                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{subsubsubcategory.name}
                                          </option>
                                        ))}
                                    </React.Fragment>
                                  ))}
                              </React.Fragment>
                            ))}
                          </optgroup>
                        ))
                      )}
                  </select>
                </Form.Group>
                <Form.Group controlId="formBasicCheckbox">
                  <Form.Check
                    type="checkbox"
                    label="I agree to the terms and conditions"
                    checked={termsOfService}
                    onChange={(e) => setTermsOfService(e.target.checked)}
                    required
                  />
                </Form.Group>

                <div className="d-flex justify-content-center mt-3">
                  <Button variant="primary" type="submit">
                    Save
                  </Button>
                  <ToastContainer />
                </div>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default AddApplicationForm;
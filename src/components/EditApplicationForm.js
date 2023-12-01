import React, { useState, useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom'
import { Form, Button, Container, Row, Col, Card } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
import { getOneApplicationById, updateApplication } from '../redux/actions/applicationActions';
import { ToastContainer, toast } from 'react-toastify';
import { getAllSectors } from '../redux/actions/sectorsActions';

const EditApplicationForm = () => {
  const dispatch = useDispatch();
  const history = useHistory()
  const { register, handleSubmit, formState: { errors } } = useForm({ mode: "onTouched" });
  const { applicationId } = useParams();

  const application = useSelector((state) => state.application.application);
  const sectors = useSelector((state) => state.sectors);

  console.log('application id', applicationId)


  const [name, setName] = useState('');
  const [sector, setSector] = useState('');
  const [termsOfService, setTermsOfService] = useState(false); // State for terms agreement


  useEffect(() => {
    dispatch(getOneApplicationById({ applicationId }));
  }, [dispatch, applicationId]);

  useEffect(() => {
    dispatch(getAllSectors());
  }, [dispatch]);

  useEffect(() => {
    if (application) {
      setName(application.name || '');
      setSector(application.sectors && application.sectors.name ? application.sectors.name : '');
      setTermsOfService(!!application.termsOfService); // Replace with the actual field name
    }

    console.log('Application', application.termsOfService)
    console.log('Application sec', application.sectors)
  }, [application]);

  const handleUpdateApplication = (e) => {
    const updatedApplication = {
      name,
      sectors: { name: sector },
      termsOfService
    }

    // Dispatch the updateApplication action with the updated application data
    dispatch(updateApplication({ applicationId, updatedData: updatedApplication }));
    console.log('update', updatedApplication)
    toast.success('Updated successfully');
    setTimeout(() => {
      history.push('/all-application');
    }, 2000);

  };

  return (
    <Container>
      <Row className="justify-content-md-center mt-5">
        <Col xs={12} md={6}>
          <h2 className="text-center">Edit Your Application Here</h2>
          <Card>
            <Card.Body>
              <Card.Title className="text-center">Application</Card.Title>
              <Form onSubmit={handleSubmit(handleUpdateApplication)}>
                <Form.Group controlId="formBasicname">
                  <Form.Label>name</Form.Label>
                  <Form.Control
                    className="form-control"
                    type="text"
                    {...register('name', { required: 'This Field is Required' })}
                    placeholder="Enter name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                  {errors.name && (
                    <Form.Text className="text-danger">
                      {errors.name.message}
                    </Form.Text>
                  )}
                </Form.Group>

                <Form.Group controlId="formBasicSector" className="mb-4">
                  <Form.Label>Select Sector</Form.Label>
                  <select
                    value={sector}
                    name="sector"
                    {...register({ required: 'This Field is Required' })}
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
                  {errors.sectors && (
                    <Form.Text className="text-danger">
                      {errors.sectors.message}
                    </Form.Text>
                  )}
                </Form.Group>

                <Form.Group controlId="formBasicCheckbox">
                  <Form.Check
                    type="checkbox"
                    label="I agree to the terms and conditions"
                    checked={termsOfService}
                    onChange={(e) => setTermsOfService(e.target.checked)}
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

export default EditApplicationForm;

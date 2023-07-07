import React, { useEffect, useState } from 'react';
import Navbar from './Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card } from 'react-bootstrap';
import axios from 'axios';
import { Container, Row, Col } from 'react-bootstrap';

const Home = () => {
    const [movie, setMovie] = useState([]);

    const getData = async () => {
        const getApiData = await axios.get('http://localhost:4400/get');
        setMovie(getApiData.data.movies);
    };

    useEffect(() => {
        getData();
    }, []);

    return (
        <>
            <Container fluid>
                <Row>
                    <Col>
                        <Navbar />
                    </Col>
                </Row>

                <Row>
                    {movie &&
                        movie.map((item, index) => (
                            <Col key={index} className='mx-4 my-4'>
                                <Card style={{ width: '18rem' }}>
                                    <Card.Title
                                        style={{ backgroundColor: 'black' }}
                                        className='text-center text-white py-2'
                                    >
                                        {item.name}
                                    </Card.Title>
                                    <Card.Img
                                        className='mx-4'
                                        style={{ width: '15rem' }}
                                        variant='top'
                                        src={item.image}
                                    />
                                    <Card.Body>
                                        <div>
                                            <h5 className='text-center'>Rating {item.rating}</h5>
                                            <h6 className='text-center'>Date of Release {item.releaseDate}</h6>
                                        </div>
                                    </Card.Body>
                                </Card>
                            </Col>
                        ))}
                </Row>
            </Container>
        </>
    );
};

export default Home;

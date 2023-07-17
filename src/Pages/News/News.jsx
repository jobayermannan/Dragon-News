import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { FaArrowAltCircleLeft, FaArrowLeft } from 'react-icons/fa';
import { Link, useLoaderData } from 'react-router-dom';
import EditorInsights from './EditorInsights';

const News = () => {
    const news=useLoaderData();
    const {image_url,details,title,category_id}=news;
    return (
      <div>
            <Card >
      <Card.Img variant="top" src={image_url} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
        {details}
        </Card.Text>
        <Link to={`/category/${category_id}`}>
        <Button variant="primary" className='bg-danger'> <FaArrowLeft></FaArrowLeft>Go somewhere</Button></Link>
     
      </Card.Body>
    </Card>

    <EditorInsights  lg={3}/>
      </div>
    );
};

export default News;
import React from 'react';
import LoadComments from './LoadComments';
import {
  Card,
  CardBody,
  CardTitle,
  CardImgOverlay,
  CardImg,
  CardText,
  CardSubtitle,
  Button,
} from 'reactstrap';

const DishDetail = (props) => {
  return (
    <div>
      <Card>
        <CardImg top src={props.dish.image} alt={props.dish.name}></CardImg>
        <CardBody style={{ textAlign: 'left' }}>
          <CardTitle tag='h5'>{props.dish.name}</CardTitle>
          <CardSubtitle tag='h6' className='mb-2 text-muted'>
            {props.dish.category}
          </CardSubtitle>
          <CardText>{props.dish.description}</CardText>
          <CardText tag='h6' className='text-muted'>
            {props.dish.label}
          </CardText>
          <Button color='danger'>{props.dish.price}/-</Button>

          <hr />

          <LoadComments comments={props.dish.comments} />
        </CardBody>
      </Card>
    </div>
  );
};

export default DishDetail;

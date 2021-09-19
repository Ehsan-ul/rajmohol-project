import React from 'react';
import { Card, CardImg, CardImgOverlay, CardBody, CardTitle } from 'reactstrap';

const MenuItem = (props) => {
  return (
    <div>
      <Card style={{ margin: '20px' }}>
        <CardBody>
          <CardImg
            width='100%'
            src={props.dish.image}
            alt={props.dish.name}
            style={{ opacity: '.5' }}
          />

          <CardImgOverlay>
            <CardTitle
              onClick={props.SelectedDish}
              style={{ cursor: 'pointer' }}
            >
              {props.dish.name}
            </CardTitle>
          </CardImgOverlay>
        </CardBody>
      </Card>
    </div>
  );
};

export default MenuItem;

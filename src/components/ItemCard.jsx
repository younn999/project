import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Card from "react-bootstrap/Card";

const ItemCard = (props) => {
  const listItems = props.list.items;
  // console.log("222", listItems);
  // .item까지 하면 렌더링 시 자꾸 오류가 난다.
  // 그래서 items까지만 작성하고, item은 아래에서 코드를 작성했다.

  const noImage =
    "https://png.pngtree.com/png-vector/20221109/ourmid/pngtree-no-image-available-icon-flatvector-illustration-graphic-available-coming-vector-png-image_40958834.jpg";

  return (
    <Container>
      <Row>
        {listItems &&
          listItems.item.map((one) => (  // .item은 여기서
            <Col>
              <Card className="item-card">
                <Card.Img
                  variant="top"
                  src={one.firstimage ? one.firstimage : noImage}
                  className="item-img"
                />
                <Card.Body>
                  <Card.Title>{one.title}</Card.Title>
                  <Card.Text>{one.addr1}</Card.Text>
                  <Card.Text>{one.tel ? one.tel : "x"}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
      </Row>
    </Container>
  );
};

export default ItemCard;

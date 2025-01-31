import React from "react";
import Card from "react-bootstrap/Card";
import { useNavigate } from "react-router-dom";

// 메인 화면에 보이는 카드
const CityCard = (props) => {
  // console.log("ppp", props);
  // Home에 있는 cities 배열을 전달받음
  const navigate = useNavigate();
  const goList = () => {
    navigate(`/list/${props.city.id}`); // props를 통해 받은 지역코드를 이용해 ListP로 이동
  };

  return (
    <Card onClick={goList} className="city-card">
      <Card.Img variant="top" className="city-img" src={props.city.img} />
      <Card.Body>
        <Card.Title>{props.city.name}</Card.Title>
      </Card.Body>
    </Card>
  );
};

export default CityCard;

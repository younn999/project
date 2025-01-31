import React from "react";
import CityCard from "../components/CityCard";
import { Container, Row, Col } from "react-bootstrap";

const Home = () => {
  // api 호출에 사용할 지역코드, 메인에 보이는 카드에 사용할 이름, 이미지
  const cities = [
    {
      id: 1,
      name: "서울",
      img: "https://cdn.latimes.kr/news/photo/202308/50706_61447_4126.jpg",
    },
    {
      id: 2,
      name: "인천",
      img: "https://img.hankyung.com/photo/202207/02.30599810.1.jpg",
    },
    {
      id: 3,
      name: "대전",
      img: "https://cdn.iconsumer.or.kr/news/photo/202409/26782_34506_5046.jpeg",
    },
    {
      id: 4,
      name: "대구",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQU_fOVphxHECHnEMQwAiHJNMeJnWWlOsZHoA&s",
    },
    {
      id: 5,
      name: "광주",
      img: "https://lh6.googleusercontent.com/proxy/PPVpgqBCx8eNER-IUIu7zqGPgM9aP6iwYOCzbjSllpr8EgyZdCIT9MdeJCr8_ufeXNGs18a1TyGTywQwaupjSQN1bhs4hPITdsniQMsY3w",
    },
    {
      id: 6,
      name: "부산",
      img: "https://www.theguru.co.kr/data/photos/20220205/art_16438534048123_f51393.jpg",
    },
    {
      id: 7,
      name: "울산",
      img: "https://www.ujeil.com/news/photo/201512/146369_40184_4328.jpg",
    },
    {
      id: 8,
      name: "세종",
      img: "https://www.sjsori.com/news/photo/201706/26296_29200_4123.jpg",
    },
  ];

  // CityCard 컴포넌트에 위에서 작성한 cities 배열을 속성값으로 전달한다.
  return (
    <Container>
      <Row>
        {cities.map((city) => (
          <Col>
            <CityCard city={city} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Home;

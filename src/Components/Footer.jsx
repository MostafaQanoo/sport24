import React from "react";
import Styled from "@emotion/styled";
import GoTop from "../assets/images/footer/gotop.png";
import News from "../assets/images/footer/news.png";
import Facebook from "../assets/images/footer/facebook.png";
import Twitter from "../assets/images/footer/twitter.png";
import Telegram from "../assets/images/footer/telegram.png";
import Instagram from "../assets/images/footer/instagram.png";
import Youtube from "../assets/images/footer/youtube.png";
import Linkedin from "../assets/images/footer/linkedin.png";
import { Container } from "@mui/system";

const MainContainer = Styled.div`
    background-color: rgba(247, 247, 247, 1);
    padding: 1.5rem;
    margin-bottom: 2rem;
`;

const ContainerGoTop = Styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  `;

const GoToTopStyle = Styled.p`
    font-size: 13px;
  `;

const GoTopIcon = Styled.img`
width: 12px ;
height: 12px;
margin-right: 5px;
`;

const ContainerLine = Styled.div`
    display: flex ;
    width: 100%;
    justify-content: space-between ;
    align-items: center;
  `;

const LineStyle = Styled.div`
    border-top: 1px solid rgba(204, 204, 204, 1);
     width: 45%;
  `;

const NewsLine = Styled.img`
  width: 80px ;
  height: 30px;
  `;

const ContainerList = Styled.div`
    display: flex;
    width: 80%;
    margin: 1rem auto;
`;

const ListOrder = Styled.div`
        display: flex;
       justify-Content: space-between;
        width: 100%;
`;

const ListItem = Styled.p`
    font-weight: bold;
    font-size: 14px;
`;

const ContainerSocialContent = Styled.div`
    display: flex;
    width: 40%;
    margin: 2rem auto;
`;

const SocialImg = Styled.img`
  width: 40px ;
  height: 40px;
  `;

const LineEndStyle = Styled.div`
border-top: 1px solid rgba(204, 204, 204, 1);
 width: 100%;
`;

const ListLastItem = Styled.p`
        font-size: 13px;
`;

const CopyRight = Styled.div`
    width:  100%;
    display: flex;
    justify-content: center;
`;

const CopyRightWord = Styled.p`
    font-size: 13px;
`;

function Footer() {
  return (
    <MainContainer>
      <Container maxWidth="xl" className="container">
        <ContainerGoTop>
          <GoToTopStyle>العودة الى الاعلى</GoToTopStyle>
          <GoTopIcon src={GoTop} />
        </ContainerGoTop>

        <ContainerLine>
          <LineStyle />

          <NewsLine src={News} />

          <LineStyle />
        </ContainerLine>

        <ContainerList>
          <ListOrder>
            <ListItem>متابعات</ListItem>
            <ListItem>دوليات</ListItem>
            <ListItem>تجارة واسوق</ListItem>
            <ListItem>منوعات</ListItem>
            <ListItem>مقال</ListItem>
            <ListItem>تقنية</ListItem>
            <ListItem>طب</ListItem>
          </ListOrder>
        </ContainerList>

        <ContainerSocialContent>
          <ListOrder>
            <SocialImg src={Facebook} />
            <SocialImg src={Twitter} />
            <SocialImg src={Instagram} />
            <SocialImg src={Telegram} />
            <SocialImg src={Youtube} />
            <SocialImg src={Linkedin} />
          </ListOrder>
        </ContainerSocialContent>

        <LineEndStyle />

        <ContainerList>
          <ListOrder>
            <ListLastItem>تطبيقات اخبار</ListLastItem>
            <ListLastItem>خدمة Rss</ListLastItem>
            <ListLastItem>سياسة الخصوصية</ListLastItem>
            <ListLastItem>مزودوا الخدمة</ListLastItem>
            <ListLastItem>حول اخبار</ListLastItem>
            <ListLastItem>ترددات اخبار</ListLastItem>
            <ListLastItem>اتصل بنا</ListLastItem>
          </ListOrder>
        </ContainerList>

        <CopyRight>
          <CopyRightWord>© جميع الحقوق محفوظة لشبكة العربية 2022</CopyRightWord>
        </CopyRight>
      </Container>
    </MainContainer>
  );
}

export default Footer;

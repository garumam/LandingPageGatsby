import React from 'react';
import { Row, Col, Typography, Carousel } from 'antd';
import { Section, Background } from '../styles';
import dashone from '../../images/dash-4-img1.png';
import dashtwo from '../../images/dash-3-img2.png';

const { Title, Paragraph } = Typography;

const carouselContent = (title, src, currentImg, imgPosition) => (
    <div style={{ marginTop: '15px' }}>
        <Title level={4} style={{ color: 'white',paddingTop: '50px', textAlign: 'center' }}>
        {title}
        </Title>
        <div
            data-sal="zoom-in"
            data-sal-delay="50"
            data-sal-duration="500"
            data-sal-easing="ease-in-out"
            className={currentImg === imgPosition?'sal-animate':''}
        >
            <img src={src} style={{ borderRadius: '10px', width: '100%' }} alt="Imagem do sistema" />
        </div>
    </div>
);

export default ({ carouselHandle, imagePosition }) => (
    <Section padBot="50px">
        <Background style={{ left: '0' }} mediumHeight="800px" largeHeight="1000px" smallHeight="500px" />
        <Row type="flex" justify="space-between" gutter={16} style={{ paddingTop: '50px' }}>
            <Col 
            xs={{ span: 24, offset: 0 }} 
            sm={{ span: 22, offset: 1 }} 
            md={{ span: 20, offset: 2 }} 
            lg={{ span: 16, offset: 4 }} 
            style={{ textAlign: 'center', marginBottom: '15px' }}
            >
                <Title style={{ color: 'white' }}>
                IMAGENS DO SISTEMA
                </Title>
                <Paragraph style={{ color: 'white' }}>
                Conheça algumas telas do SEVS
                </Paragraph>
            </Col>
            <Col span={24}>
                <Carousel autoplay dotPosition="top" afterChange={carouselHandle}>
                    {carouselContent('Dashboard', dashone, imagePosition, 0)}
                    {carouselContent('Orçamentos', dashtwo, imagePosition, 1)}
                    {carouselContent('Vendas', dashone, imagePosition, 2)}
                    {carouselContent('Ordens de serviço', dashtwo, imagePosition, 3)}
                </Carousel>
            </Col>
        </Row>
    </Section>
);
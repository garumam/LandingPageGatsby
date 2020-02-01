import React from 'react';
import { Row, Col,Typography } from 'antd';
import dashImg from '../../images/home-image.png';
import smartOne from '../../images/sevs-responsivo-1.png';
import smartTwo from '../../images/sevs-responsivo-2.png';
import { Section } from '../styles';

const { Title, Paragraph } = Typography;

export default () => (
    <Section padBot="30px" padTop="30px" style={{ background: 'white',marginBottom: '50px' }}>
        <Row type="flex" align="middle" justify="space-between">
            <Col span={24} md={{ span: 12 }}>
                <div
                    data-sal="slide-right"
                    data-sal-delay="200"
                    data-sal-duration="1300"
                    data-sal-easing="ease"
                >
                    <div style={{ position: 'relative' }}>
                        <img src={dashImg} alt="Dashboard SEVS" style={{ paddingBottom: '35px' }} />
                        <img onMouseOver={(e) => {e.currentTarget.src = smartOne}}
                        onMouseOut={(e) => {e.currentTarget.src = smartTwo}}
                        src={smartTwo} 
                        alt="SEVS responsivo" 
                        style={{ position: 'absolute', top: '12%', left: '70%', width: '20%' }} />
                    </div>
                </div>
            </Col>
            <Col span={24} md={{ span: 10 }}>
                <Title>
                Gerencie sua empresa de qualquer lugar
                </Title>
                <Paragraph type="secondary">
                O SEVS é uma aplicação web totalmente responsiva para que possa ser utilizada em diferentes dispositivos como smartphones, notebooks, tablets, etc..., bastando apenas estar conectado a internet.
                </Paragraph>
            </Col>
        </Row>
    </Section>
);
import React from 'react';
import { Row, Col, Typography, Card } from 'antd';
import { Section, Span } from '../styles';
import message from '../../images/message.svg';
import deployment from '../../images/deployment.svg';
import time from '../../images/time.svg';

const { Title, Paragraph } = Typography;

export default () => (
    <Section padBot="50px">
        <Row type="flex" justify="space-between" gutter={16}>
            <Col 
            xs={{ span: 24, offset: 0 }} 
            sm={{ span: 22, offset: 1 }} 
            md={{ span: 20, offset: 2 }} 
            lg={{ span: 16, offset: 4 }} 
            style={{ textAlign: 'center', marginBottom: '50px' }}
            >
                <Title style={{color: '#1890ff'}}>
                PROCESSO DE AQUISIÇÃO
                </Title>
                <Paragraph>
                Passos para adquirir o SEVS
                </Paragraph>
            </Col>
            <Col span={24} md={{ span: 12 }} lg={{ span: 7 }}>
                <Card style={{ marginBottom: '35px', height: '90%' }}>
                    <Span>1</Span>
                    <img src={message} alt="Baixar" style={{ marginBottom: '35px', maxWidth: "90px" }} />
                    <Title level={3}>
                    Entrar em contato
                    </Title>
                    <Paragraph type="secondary">
                    Nós envie uma mensagem através do formulário de contato, para que possamos encontrar o melhor plano para sua empresa.
                    </Paragraph>
                </Card>
            </Col>
            <Col span={24} md={{ span: 12 }} lg={{ span: 7 }}>
                <Card style={{ marginBottom: '35px', height: '90%' }}>
                    <Span>2</Span>
                    <img src={deployment} alt="Baixar" style={{ marginBottom: '35px', maxWidth: "90px" }} />
                    <Title level={3}>
                    Hospedagem do sistema
                    </Title>
                    <Paragraph type="secondary">
                    Para os planos intermediário e avançado, nossa equipe poderá sugerir serviços de hospedagem para sua empresa contratar e assim realizarmos a implantação.
                    </Paragraph>
                </Card>
            </Col>
            <Col span={24} md={{ span: 12, offset: 6 }} lg={{ span: 7, offset: 0 }}>
                <Card style={{ marginBottom: '35px', height: '90%' }}>
                    <Span>3</Span>
                    <img src={time} alt="Baixar" style={{ marginBottom: '35px', maxWidth: "90px" }} />
                    <Title level={3}>
                    Utilização ilimitada
                    </Title>
                    <Paragraph type="secondary">
                    Aproveite tudo o que o sistema tem a oferecer sem nenhum custo mensal (exceto hospedagem), nos envie sugestões de melhorias.
                    </Paragraph>
                </Card>
            </Col>
        </Row>
    </Section>
);
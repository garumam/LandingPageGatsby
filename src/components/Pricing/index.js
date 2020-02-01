import React from 'react';
import { Row, Col, Typography, Card, Icon, Button,Tag  } from 'antd';
import { Section } from '../styles';

import './Pricing.css';

const { Title, Paragraph } = Typography;

const iconsParameters = {
    colorCheckIcon: '#52c41a',
    colorCloseIcon: '#ff291e',
    checkIcon: 'check-circle',
    closeIcon: 'close-circle'
};

const includes = (text, iconType, color) => (
    <Row type="flex" justify="center">
        <Icon type={iconType} style={{ float: 'left', marginRight: '10px' }} theme="twoTone" twoToneColor={color} /> 
        <Paragraph>
        {text}
        </Paragraph>
    </Row>
);

export default ({ scrollTo }) => (
    <Section id="pricing_section" padBot="50px" padTop="50px" style={{ background: 'white' }}>
        <Row type="flex" justify="center">
            <Col 
            xs={{ span: 24 }} 
            sm={{ span: 22 }} 
            md={{ span: 20 }} 
            lg={{ span: 16 }} 
            style={{ textAlign: 'center', marginBottom: '50px' }}
            >
                <Title style={{color: '#1890ff'}}>
                PREÇOS
                </Title>
                <Paragraph>
                Planos dispiníveis para aquisição
                </Paragraph>
            </Col> 
        </Row>
        <Row type="flex" justify="center" align="middle">
             <Col span={24} xs={24} sm={24} md={24} lg={{ span:6 }}>
                <Card bordered={true} size="small" className="card-pricing" style={{textAlign: 'center',borderRadius:0 }}>
                    <Title level={3} style={{ paddingTop: 16 }}>
                    Plano básico
                    </Title>
                    <Paragraph type="secondary" style={{ marginBottom: 16 }}>
                    Para aqueles que querem apenas os arquivos do sistema
                    </Paragraph>
                    <div style={{display:"flex",flexDirection:"column",alignItems:"center"}}>
                    <span style={{ fontSize: '2rem', color: 'black' }}>R$500.00</span>
                    <Tag  color="red" style={{ marginBottom: 35,marginTop:16 }}>
                     Pagamento único
                    </Tag>
                    </div>
                   
                    
                    {includes('Arquivos do sistema', iconsParameters.checkIcon, iconsParameters.colorCheckIcon)}
                    {includes('Processo de hospedagem', iconsParameters.closeIcon, iconsParameters.colorCloseIcon)}
                    {includes('Atualizações futuras', iconsParameters.closeIcon, iconsParameters.colorCloseIcon)}
                    {includes('Customizações', iconsParameters.closeIcon, iconsParameters.colorCloseIcon)}
                    <Button type="primary" ghost style={{ marginBottom: '35px',fontWeight:600 }}
                    onClick={() => scrollTo('contact_section')}>Contratar</Button>
                </Card>
            </Col>
            <Col span={24} xs={24} sm={24} md={24} lg={{ span: 7 }}>
                <Card bordered={true} size="small" className="card-pricing" style={{ textAlign: 'center',borderRadius:0, zIndex: '1' }}>
                    <Title level={3} style={{ paddingTop: 16 }}>
                    Plano intermediário
                    </Title>
                    <Paragraph type="secondary" style={{ marginBottom: 16 }}>
                    Para aqueles que querem o sistema já hospedado (pagamento da hospedagem não incluso)
                    </Paragraph>
                    <div style={{display:"flex",flexDirection:"column",alignItems:"center"}}>
                    <span style={{ fontSize: '2rem', color: 'black' }}>R$1000.00</span>
                    <Tag  color="red" style={{ marginBottom: 35,marginTop:16 }}>
                    Pagamento único
                    </Tag>
                    </div>
                    {includes('Arquivos do sistema', iconsParameters.checkIcon, iconsParameters.colorCheckIcon)}
                    {includes('Processo de hospedagem', iconsParameters.checkIcon, iconsParameters.colorCheckIcon)}
                    {includes('Atualizações futuras durante 1 ano', iconsParameters.checkIcon, iconsParameters.colorCheckIcon)}
                    {includes('Customizações', iconsParameters.closeIcon, iconsParameters.colorCloseIcon)}

                    <Button type="primary" style={{ marginBottom: '35px',fontWeight:600 }}
                    onClick={() => scrollTo('contact_section')}>Contratar</Button>

                </Card>
            </Col>
            <Col span={24}  xs={24} sm={24} md={24} lg={{ span:6 }}>
                <Card bordered={true} size="small" className="card-pricing" style={{ textAlign: 'center',borderRadius:0 }}>
                     <Title level={3} style={{ paddingTop: 16 }}>
                    Plano customizado
                    </Title>
                    <Paragraph type="secondary" style={{ marginBottom: 16 }}>
                    Para aqueles que precisam de customizações no sistema
                    </Paragraph>
                    <div style={{display:"flex",flexDirection:"column",alignItems:"center"}}>
                    <span style={{ fontSize: '2rem', color: 'black' }}>R$???.??</span>
                    <Tag  color="red" style={{ marginBottom: 35,marginTop:16 }}>
                         A combinar
                    </Tag>
                    </div>
                   
                    {includes('Arquivos do sistema', iconsParameters.checkIcon, iconsParameters.colorCheckIcon)}
                    {includes('Processo de hospedagem', iconsParameters.checkIcon, iconsParameters.colorCheckIcon)}
                    {includes('Atualizações futuras', iconsParameters.checkIcon, iconsParameters.colorCheckIcon)}
                    {includes('Customizações', iconsParameters.checkIcon, iconsParameters.colorCheckIcon)}

                    <Button type="primary" ghost style={{ marginBottom: '35px',fontWeight:600 }}
                    onClick={() => scrollTo('contact_section')}>Contratar</Button>


                </Card>
            </Col>
        </Row>
    </Section>
);
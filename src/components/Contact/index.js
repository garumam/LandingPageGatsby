import React, { useState } from 'react';
import { Row, Col, Typography, Form, Icon, Input, Button } from 'antd';
import { Section } from '../styles';
import axios from 'axios';

import './Contact.css';

const { Title, Paragraph } = Typography;

function Contact (props){
    const [mailstatus, setMailStatus] = useState('');

    const handleSubmit = e => {
        e.preventDefault();
        props.form.validateFields((err, values) => {
          if (!err) {
            console.log('Received values of form: ', values);
            setMailStatus('Aguarde um momento...');
            axios({
                method: 'post',
                url: 'http://localhost:8080/controllers/controllerForm.php',
                headers: { 
                    'content-type': 'application/json'
                },
                data: {
                    nome: values.name,
                    email: values.email,
                    mensagem: values.message
                }
            }).then(result => {
                console.log('SUCESSO: ', result);
                setMailStatus(result.data.status);
            })
            .catch(error => {
                console.log('ERROR: ', error);
                setMailStatus(error.message);
            })

          }
        });
    };
    const { getFieldDecorator } = props.form;

    return(
        <Section id="contact_section" padBot="50px" padTop="50px">
            
            <Row type="flex" justify="center">
                <Col 
                xs={{ span: 24 }} 
                sm={{ span: 22 }} 
                md={{ span: 20 }} 
                lg={{ span: 16 }} 
                style={{ textAlign: 'center', marginBottom: '50px' }}
                >
                    <Title style={{color: 'white'}}>
                    CONTATO
                    </Title>
                    <Paragraph style={{color: 'white'}}>
                    Nós envie uma mensagem através do formulário abaixo
                    </Paragraph>
                </Col>
                <Col span={24} md={{ span: 12 }}>
                    <Form onSubmit={handleSubmit} className="contact-form">
                        <Form.Item>
                        {getFieldDecorator('name', {
                            rules: [{ required: true, message: 'Por favor preencha o seu nome!' }],
                        })(
                            <Input
                            className="input-contact-form"
                            prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                            placeholder="Nome"
                            />,
                        )}
                        </Form.Item>
                        <Form.Item>
                        {getFieldDecorator('email', {
                            rules: [{ required: true, message: 'Por favor preencha o e-mail!' },{type: 'email', message: 'O e-mail ainda não é válido!'}],
                        })(
                            <Input
                            className="input-contact-form"
                            prefix={<Icon type="mail" style={{ color: 'rgba(0,0,0,.25)' }} />}
                            placeholder="E-mail"
                            />,
                        )}
                        </Form.Item>
                        <Form.Item>
                        {getFieldDecorator('message', {
                            rules: [{ required: true, message: 'Por favor digite sua mensagem!' }, { max: 1000, message: 'A mensagem pode ter no máximo 1000 caracteres!' }],
                        })(
                            <Input.TextArea
                            className="textarea-contact-form"
                            placeholder="Mensagem"
                            autoSize={{ minRows: '7', maxRows: '7' }}
                            />,
                        )}
                        </Form.Item>

                        {mailstatus && <Paragraph style={{color: 'white',
                                                                marginBottom: '24px',
                                                                textAlign: 'center' }}>
                                                            {mailstatus}
                                                            </Paragraph>
                        }

                        <Form.Item>
                            <Button htmlType="submit" className="contact-form-button">
                                Enviar
                            </Button>       
                        </Form.Item>
                    </Form>
                </Col>
            </Row>
        </Section>
    );
 
}

const ContactForm = Form.create({ name: 'normal_contact' })(Contact);

export default ContactForm;
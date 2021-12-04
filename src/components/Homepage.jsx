import React from 'react'
import millify from 'millify';
import { Typography, Row, Col, Statistic } from 'antd';
import { Link } from 'react-router-dom';

const { Tittle } = Typography;

const Homepage = () => {
    return (
        <>
        <Tittle level={2} className="heading">Global Crypto Stats</Tittle>
        <Row>
            <Col span={12}><Statistic tittle="Total de Moedas Digitais" value="5" /></Col>
            <Col span={12}><Statistic tittle="Total de Trocas" value="5" /></Col>
            <Col span={12}><Statistic tittle="Total do Valor de 24h" value="5" /></Col>
            <Col span={12}><Statistic tittle="Total de Mercados" value="5" /></Col>
        </Row>
        </>
    )
}

export default Homepage

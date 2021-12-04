import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import { Layout, Typography, Space } from 'antd';

import { Navbar, Trocas, Homepage, MoedasDigitais, News, CryptoDetails } from './components';
import './App.css'

const App = () => {
    return (
        <div className="app">
            <div className="navbar">
                <Navbar />
            </div>
            <div className="main">
                <Layout>
                    <div className="routes">
                        <Switch>
                            <Route exact path="/" element={<Homepage />}/>
                            <Route exact path="/trocas" element={<Trocas />}/>
                                {/* <Trocas /> */}
                            <Route exact path="/moedasdigitais" element={<MoedasDigitais />}/>
                                {/* <MoedasDigitais /> */}
                            <Route exact path="/crypto/:coinID" element={<CryptoDetails />}/>
                                {/* <CryptoDetails /> */}
                            <Route exact path="/news" element={<News />}/>
                                {/* <News /> */}
                        </Switch>
                    </div>
                </Layout>
            <div className="footer">
                <Typography.Title level={5} style={{ color: 'white', textAlign: 'center'}}>
                    Cryptoverso <br />
                    Todos os direitos reservados. 
                </Typography.Title>
                <Space>
                    <Link to="/">Home</Link>
                    <Link to="/trocas">Trocas</Link>
                    <Link to="/news">News</Link>
                </Space>
            </div>
        </div>
    </div>
    );
}

export default App

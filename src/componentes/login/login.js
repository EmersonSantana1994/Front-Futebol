// PROJETO PARA DESAFIO DE TESTE

import React, { useState } from 'react';/*eslint-disable*/
import '../../css/login/login.css';
import { Button, Image, Form, InputGroup, FormControl, Col, Carousel } from 'react-bootstrap';
import { apiC } from "../../conexoes/api";
import BootstrapTable from 'react-bootstrap-table-next';
import { useNavigate } from 'react-router-dom';

export default function TelaLogin() {

    //VARIAVEIS
    const [mostrarRecuperarSenha, setMostrarRecuperarSenha] = useState('padrao');
    const [loginError, setLoginError] = useState(false);
    const [email, setEmail] = useState('');
    const [emailCadastro, setEmailCadastro] = useState('');
    const [password, setPassword] = useState('');
    const [passwordCadastro, setPasswordCadastro] = useState('');
    const [mostrarEsconder, setMostrarEsconder] = useState("password");
    const [mostrarUploadCsv, setMostrarUploadCsv] = useState(false);
    const [carregando, setCarregando] = useState(false);
    const [erroAoCadastrar, setErroAoCadastrar] = useState(false);
    const [nomeArquivo, setNomeArquivo] = useState('');
    const [arquivo, setArquivo] = useState('');
    const [mostrarTabela, setMostrarTabela] = useState(false);
    const [itens, setItens] = useState([]);
    const [contMen, setContMen] = useState([]);
    const [contFem, setContFem] = useState([]);
    const [medIdade, setMedIdade] = useState([]);

    let totalItens = 0
    let contador = 0
    let itensVar = []
    let contadorMale = 0
    let contadorFemale = 0


    const navigate = useNavigate();
    async function paraNavegar() {
        navigate('/home')
    }

    async function salvarToken(response) {
        localStorage.setItem("keyToken", JSON.stringify(response.data.token))
    }

    //FUNÇÃO DE ENFETUAR O LOGIN
    async function efetuarLogin() {
        setLoginError("");
        setCarregando(true)
        if (!email || !password) {
            setLoginError("Preencha e-mail e senha!");
        } else {
            setCarregando(true)
            await apiC.post('usuarios/logar', {
                usuario: email,
                senha: password
            })
                .then(async function (response) {
                    await salvarToken(response)
                        await paraNavegar()
                })
                .catch(function (error) {
                    // MENSAGENS DE ERRO APARECERAM CASO LOGIN DER ALGUM ERRO
                    setCarregando(false)
                    setLoginError(true)
                });
        }
    }





    return (
        <>
            {carregando &&
                <h1>carregando..</h1>
            }
            {erroAoCadastrar &&
                <h4>Erro ao cadastrar</h4>
            }
            {loginError &&
                <h4> E-mail inválido ou senha incorreta </h4>
            }



            {mostrarRecuperarSenha === 'padrao' &&
                <>
                    <div>
                        <div className="email">
                            <label>E-mail</label>
                            <Form.Control

                                type="email"
                                placeholder="E-mail"
                                onChange={e => setEmail(e.target.value)}
                                value={email}
                                name="campoEmail"
                                id="campoEmail"
                            />
                        </div>
                        <div>
                            <div className='senha'>
                                <label>Senha</label>
                                <FormControl

                                    placeholder="Senha"
                                    type={mostrarEsconder}
                                    onChange={e => setPassword(e.target.value)}
                                    value={password}
                                    name="campoSenha"
                                    id="campoSenha"
                                    maxLength="20"
                                />
                            </div>

                        </div>
                    </div>

                    <div className='senha'>
                        <Button onClick={(e) => efetuarLogin()}>Entrar</Button>
                    </div>
                    <div className="espaco" ></div>
                    <div className="campos-texto-login">
                        <div className='cadastrar'>
                            <Button onClick={(e) => navigate('/cadstrousuario')}>Cadastre-se</Button>
                        </div>
                    </div>

                </>

            }
        </>

    )
}

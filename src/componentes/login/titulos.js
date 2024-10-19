// PROJETO PARA DESAFIO DE TESTE

import React, { useState, useEffect } from 'react';/*eslint-disable*/
import '../../css/login/login.css';
import { Button, Image, Form, InputGroup, FormControl, Col, Carousel, Alert } from 'react-bootstrap';
import { apiC } from "../../conexoes/api";
import BootstrapTable from 'react-bootstrap-table-next';
import { useNavigate } from 'react-router-dom';

export default function Titulos() {

    //VARIAVEIS
    const navigate = useNavigate();
    const [mostrarRecuperarSenha, setMostrarRecuperarSenha] = useState('padrao');
    const [loginError, setLoginError] = useState(false);
    const [priLugLiga, setPriLugLiga] = useState('');
    const [valorPriLiga, setValorPriLiga] = useState(0);
    const [valorPriLigaR, setValorPriLigaR] = useState(0);
    const [segLugLiga, setSegLugLiga] = useState('');
    const [valorSegLiga, setValorSegLiga] = useState(0);
    const [valorSegLigaR, setValorSegLigaR] = useState(0);
    const [terLugLiga, seTerLugLiga] = useState('');
    const [valorTerLiga, setValorTerLiga] = useState(0);
    const [valorTerLigaR, setValorTerLigaR] = useState(0);
    const [priLugMund, setPriLugMund] = useState('');
    const [valorPriMund, setValorPriMund] = useState(0);
    const [valorPriMundR, setValorPriMundR] = useState(0);
    const [segLugMund, setSegLugMund] = useState('');
    const [valorSegMund, setValorSegMund] = useState(0);
    const [valorSegMundR, setValorSegMundR] = useState(0);
    const [terLugMund, setTerLugMund] = useState('');
    const [valorTerMund, setValorTerMund] = useState(0);
    const [valorTerMundR, setValorTerMundR] = useState(0);
    const [quarLugMund, setQuarLugMund] = useState('');
    const [valorQuarMund, setValorQuratMund] = useState(0);
    const [valorQuratMundR, setValorQuratMundR] = useState(0);
    const [quinLugMund, setQuinLugMund] = useState('');
    const [valorQuinMund, setValorQuinMund] = useState(0);
    const [valorQuinMundR, setValorQuinMundR] = useState(0);
    const [sextLugMund, setSextLugMund] = useState('');
    const [valorSexMund, setValorSexMund] = useState(0);
    const [valorSexMundR, setValorSexMundR] = useState(0);
    const [setiLugMund, setSetiLugMund] = useState('');
    const [valorSetMund, setValorSetMund] = useState(0);
    const [valorSetMundR, setValorSetMundR] = useState(0);
    const [priLugSub, setPriLugSub] = useState('');
    const [valorPriLugSub, setValorPriLugSub] = useState(0);
    const [valorPriLugSubR, setValorPriLugSubR] = useState(0);
    const [segLugSub, setSegLugSub] = useState('');
    const [valorSegLugSub, setValorSegLugSub] = useState(0);
    const [valorSegLugSubR, setValorSegLugSubR] = useState(0);
    const [terLugSub, setTerLugSub] = useState('');
    const [valorTerLugSub, setValorTerLugSub] = useState(0);
    const [valorTerLugSubR, setValorTerLugSubR] = useState(0);
    const [priLugCopa, setPriLugCopa] = useState('');
    const [valorPriLugCopa, setValorPriLugCopa] = useState(0);
    const [valorPriLugCopaR, setValorPriLugCopaR] = useState(0);
    const [segLugCopa, setSegLugCopa] = useState('');
    const [valorSegLugCopa, setValorSegLugCopa] = useState(0);
    const [valorSegLugCopaR, setValorSegLugCopaR] = useState(0);
    const [tercLugCopa, setTercLugCopa] = useState('');
    const [valorTercLugCopa, setValorTercLugCopa] = useState(0);
    const [valorTercLugCopaR, setValorTercLugCopaR] = useState(0);
    const [priLugSuper, setPriLugSuper] = useState('');
    const [valorPriLugSuper, setValorPriLugSuper] = useState(0);
    const [valorPriLugSuperR, setValorPriLugSuperR] = useState(0);
    const [segLugSuper, setSegLugSuper] = useState('');
    const [valorSegLugSuper, setValorSegLugSuper] = useState(0);
    const [valorSegLugSuperR, setValorSegLugSuperR] = useState(0);
    const [terLugSuper, setTerLugSuper] = useState('');
    const [valorTerLugSuper, setValorTerLugSuper] = useState(0);
    const [valorTerLugSuperR, setValorTerLugSuperR] = useState(0);
    const [quarLugSuper, setQuarLugSuper] = useState('');
    const [valorQuarLugSuper, setValorQuarLugSuper] = useState(0);
    const [valorQuarLugSuperR, setValorQuarLugSuperR] = useState(0);
    const [priLugRecopa, setPriLugRecopa] = useState('');
    const [valorPriLugRecopa, setValorPriLugRecopar] = useState(0);
    const [valorPriLugRecoparR, setValorPriLugRecoparR] = useState(0);
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
    const [podeCarregar, setPodeCarregar] = useState(false);
    const [sucesso, setSucesso] = useState(false);
    const [confirmLimpar, setConfirmLimpar] = useState(false);


    // Estado para os jogadores na competição "liga"
    const [jogador1Liga, setJogador1Liga] = useState('');
    const [jogador2Liga, setJogador2Liga] = useState('');
    const [jogador3Liga, setJogador3Liga] = useState('');
    const [jogador4Liga, setJogador4Liga] = useState('');

    // Estado para os jogadores na competição "subLiga"
    const [jogador1SubLiga, setJogador1SubLiga] = useState('');
    const [jogador2SubLiga, setJogador2SubLiga] = useState('');
    const [jogador3SubLiga, setJogador3SubLiga] = useState('');
    const [jogador4SubLiga, setJogador4SubLiga] = useState('');

    // Estado para os jogadores na competição "mundial"
    const [jogador1Mundial, setJogador1Mundial] = useState('');
    const [jogador2Mundial, setJogador2Mundial] = useState('');
    const [jogador3Mundial, setJogador3Mundial] = useState('');
    const [jogador4Mundial, setJogador4Mundial] = useState('');

    // Estado para os jogadores na competição "recopa"
    const [jogador1Recopa, setJogador1Recopa] = useState('');
    const [jogador2Recopa, setJogador2Recopa] = useState('');
    const [jogador3Recopa, setJogador3Recopa] = useState('');
    const [jogador4Recopa, setJogador4Recopa] = useState('');

    // Estado para os jogadores na competição "copa"
    const [jogador1Copa, setJogador1Copa] = useState('');
    const [jogador2Copa, setJogador2Copa] = useState('');
    const [jogador3Copa, setJogador3Copa] = useState('');
    const [jogador4Copa, setJogador4Copa] = useState('');

    // Estado para os jogadores na competição "superCopa"
    const [jogador1SuperCopa, setJogador1SuperCopa] = useState('');
    const [jogador2SuperCopa, setJogador2SuperCopa] = useState('');
    const [jogador3SuperCopa, setJogador3SuperCopa] = useState('');
    const [jogador4SuperCopa, setJogador4SuperCopa] = useState('');

    let totalItens = 0
    let contador = 0
    let itensVar = []
    let itensVar2 = []
    let contadorMale = 0
    let contadorFemale = 0
    let token = JSON.parse(localStorage.getItem("keyToken"))
    // useEffect(() => {
    //     async function iniciarTabela() {
    //         setCarregando(true)
    //         await apiC.post("ranking/buscar", {
    //             headers: {
    //                 'x-access-token': token,
    //             }
    //         })

    //             .then(response => {
    //                 if (response.status === 200) {
    //                     for (let i = 0; i < response.data.length; i++) {
    //                         if (contador === i) {
    //                             let k = i
    //                             for (let j = 0; j < response.data.length; j++) {
    //                                 itensVar[k] = response.data[j]
    //                                 k++
    //                             }
    //                         }
    //                         setItens(JSON.parse(JSON.stringify(itensVar)))
    //                     }
    //                     setMostrarTabela(true)
    //                 }
    //                 setCarregando(false)
    //             })
    //             .catch((error) => {
    //                 setCarregando(false)
    //                 alert(error.response.data)

    //             });
    //     }
    //     iniciarTabela()
    // }, [])

    useEffect(() => {
        async function buscarPontuacao() {
            await apiC.post("titulo/bucartodos")
                .then(response => {
                    if (response.status === 200) {
                        inserirData(response.data)
                    }
                })
                .catch((error) => {
                });
        }
        buscarPontuacao()
    }, [])

   
        async function atualizar() {
            await apiC.post("titulo/bucartodos")
                .then(response => {
                    if (response.status === 200) {
                        inserirData(response.data)
                    }
                })
                .catch((error) => {
                });
        }
       


    useEffect(() => {
        async function autenticar(e) {
            await apiC.post("autenticacao/autenticar")
                .then(response => {
                    console.log("esta autenticado")
                })
                .catch((error) => {
                    if (error.response.data === 'não autenticado') {
                        navigate('/')
                    }
                });
        }
        setTimeout(autenticar, 5000);
    }, [])







    async function fazerLimpeza(e) {
        setCarregando(true)
        await apiC.post('ranking/deletar')
            .then(async function (response) {
                location.reload()
            })
            .catch(function (error) {
                setCarregando(false)
                setErroAoCadastrar(true)
            });
    }


    // FUNÇÃO ENVIA ARQUIVO CSV AO BACK
    async function handleSalvar(torneio) {
        let liga = []
        let nomeTorneio = ''
        if (torneio == "Liga") {
            liga.push(jogador1Liga, jogador2Liga, jogador3Liga, jogador4Liga)
            nomeTorneio = 'liga'
        }
        if (torneio == "SubLiga") {
            liga.push(jogador1SubLiga, jogador2SubLiga, jogador3SubLiga, jogador4SubLiga)
            nomeTorneio = 'subLiga'
        }
        if (torneio == "Mundial") {
            liga.push(jogador1Mundial, jogador2Mundial, jogador3Mundial, jogador4Mundial)
            nomeTorneio = 'mundial'
        }
        if (torneio == "Recopa") {
            liga.push(jogador1Recopa, jogador2Recopa, jogador3Recopa, jogador4Recopa)
            nomeTorneio = 'recopa'
        }
        if (torneio == "Copa") {
            liga.push(jogador1Copa, jogador2Copa, jogador3Copa, jogador4Copa)
            nomeTorneio = 'copa'
        }
        if (torneio == "SuperCopa") {
            liga.push(jogador1SuperCopa, jogador2SuperCopa, jogador3SuperCopa, jogador4SuperCopa)
            nomeTorneio = 'superCopa'
        }

        await apiC.post("titulo/inserir", {
            "nome": liga,
            "nomeTorneio": nomeTorneio
        })
            .then(response => {
                atualizar()
            })
            .catch((error) => {
                alert(error.response.data)
                setCarregando(false)
            });


    }


    // FUNÇÃO ABAIXO TEM O DEVER DE SALVAR OS DADOS TRAZIDOS DO BANCO PARA SEREM APRESENTADOS NA TABELA

    async function inserirData(response) {
     
            console.log("dgggggg", response)
                    for (let i = 0; i < response.length; i++) {
                        if (contador === i) {
                            let k = i
                            for (let j = 0; j < response.length; j++) {
                                itensVar[k] = response[j]
                                k++
                            }
                        }
                        setItens(JSON.parse(JSON.stringify(itensVar)))

                    }
           
                
             
           
         

    }



    // ABAIXO SÃO AS COLUNAS DE ACORDO COM O ARQUIVO ENVIADO (A TAMBÉM OS ID DE CADA DADO)
    const colunas = [
        {
            dataField: 'nome',
            headerClasses: 'nao-selecionavel',
            sort: true,
            text: <p>
                Nome
            </p>,
            formatter: (cell, row) => {
                return <p>{cell === null ? '-' : cell}</p>;
            },
        },
        {
            dataField: 'liga',
            headerClasses: 'nao-selecionavel',
            sort: true,
            text: <p>
                Liga
            </p>,
            formatter: (cell, row) => {
                return <p>{cell === null ? '-' : cell}</p>;
            },
        },
        {
            dataField: 'subLiga',
            headerClasses: 'nao-selecionavel',
            sort: true,
            text: <p>
                Sub-Liga
            </p>,
            formatter: (cell, row) => {
                return <p>{cell === null ? '-' : cell}</p>;
            },
        },
        {
            dataField: 'mundial',
            headerClasses: 'nao-selecionavel',
            sort: true,
            text: <p>
                Mundial
            </p>,
            formatter: (cell, row) => {
                return <p>{cell === null ? '-' : cell}</p>;
            },
        },
        {
            dataField: 'recopa',
            headerClasses: 'nao-selecionavel',
            sort: true,
            text: <p>
                Recopa
            </p>,
            formatter: (cell, row) => {
                return <p>{cell === null ? '-' : cell}</p>;
            },
        },
        {
            dataField: 'copa',
            headerClasses: 'nao-selecionavel',
            sort: true,
            text: <p>
                Copa
            </p>,
            formatter: (cell, row) => {
                return <p>{cell === null ? '-' : cell}</p>;
            },
        },
        {
            dataField: 'superCopa',
            headerClasses: 'nao-selecionavel',
            sort: true,
            text: <p>
                Super Copa
            </p>,
            formatter: (cell, row) => {
                return <p>{cell === null ? '-' : cell}</p>;
            },
        },

    ]

    // ESTA FUNÇÃO FAZ A LEITURA DO ARQUIVO EM CSV
    function handleLerArquivo(event) {
        let files = event.target.files[0];
        setNomeArquivo(files.name);
        setArquivo(files)
    };

    return (
        <>
            <Button className="btn-filtro-arquivo" onClick={(e) => navigate('/home')}>
                <div>Home</div>
            </Button>
            <Button className="limpar" onClick={(e) => setConfirmLimpar(!confirmLimpar)}>
                <div><h2>Limpar</h2></div>
            </Button>
            <Button className="limpar" onClick={(e) => navigate('/pontosTorneio')}>
                <div><h2>Cadastrar Pontos do Torneio</h2></div>
            </Button>

            {confirmLimpar &&
                <h2>Tem certeza que deseja limpar? Esta a ação irá excluir todos os times da tabela</h2>
            }

            {confirmLimpar &&
                <Button className="btn-filtro-arquivo" onClick={(e) => fazerLimpeza()}>
                    <div><h2>SIM</h2></div>
                </Button>
            }
            {confirmLimpar &&
                <Button className="btn-filtro-arquivo" onClick={(e) => setConfirmLimpar(!confirmLimpar)}>
                    <div><h2>NÃO</h2></div>
                </Button>
            }

            {sucesso &&
                <h1>Pontos inseridos com secusso</h1>
            }
            {carregando &&
                <h1>carregando..</h1>
            }
            {erroAoCadastrar &&
                <h4>Erro ao cadastrar</h4>
            }
            {loginError &&
                <h4> E-mail inválido ou senha incorreta </h4>
            }



            <>
                <div>
                    <div>
                        {/* Liga */}
                        <div>
                            <label>Quem foi o campeao da liga?</label>
                            <Form.Control
                                onChange={e => { setJogador1Liga(e.target.value) }}
                                value={jogador1Liga}
                            />
                        </div>
                        <div>
                            <label>Quem foi o campeao da liga?</label>
                            <Form.Control
                                onChange={e => { setJogador2Liga(e.target.value) }}
                                value={jogador2Liga}
                            />
                        </div>
                        <div>
                            <label>Quem foi o campeao da liga?</label>
                            <Form.Control
                                onChange={e => { setJogador3Liga(e.target.value) }}
                                value={jogador3Liga}
                            />
                        </div>
                        <div>
                            <label>Quem foi o campeao da liga?</label>
                            <Form.Control
                                onChange={e => { setJogador4Liga(e.target.value) }}
                                value={jogador4Liga}
                            />
                        </div>
                        <Button className="btn-filtro-arquivo" onClick={(e) => handleSalvar("Liga")}>
                            <div>Enviar Arquivo</div>
                        </Button>

                        {/* Sub-Liga */}
                        <div>
                            <label>Quem foi o campeao da Sub-Liga?</label>
                            <Form.Control
                                onChange={e => { setJogador1SubLiga(e.target.value) }}
                                value={jogador1SubLiga}
                            />
                        </div>
                        <div>
                            <label>Quem foi o campeao da Sub-Liga?</label>
                            <Form.Control
                                onChange={e => { setJogador2SubLiga(e.target.value) }}
                                value={jogador2SubLiga}
                            />
                        </div>
                        <div>
                            <label>Quem foi o campeao da Sub-Liga?</label>
                            <Form.Control
                                onChange={e => { setJogador3SubLiga(e.target.value) }}
                                value={jogador3SubLiga}
                            />
                        </div>
                        <div>
                            <label>Quem foi o campeao da Sub-Liga?</label>
                            <Form.Control
                                onChange={e => { setJogador4SubLiga(e.target.value) }}
                                value={jogador4SubLiga}
                            />
                        </div>
                        <Button className="btn-filtro-arquivo" onClick={(e) => handleSalvar("SubLiga")}>
                            <div>Enviar Arquivo</div>
                        </Button>

                        {/* Mundial */}
                        <div>
                            <label>Quem foi o campeao do Campeonato Mundial?</label>
                            <Form.Control
                                onChange={e => { setJogador1Mundial(e.target.value) }}
                                value={jogador1Mundial}
                            />
                        </div>
                        <div>
                            <label>Quem foi o campeao do Campeonato Mundial?</label>
                            <Form.Control
                                onChange={e => { setJogador2Mundial(e.target.value) }}
                                value={jogador2Mundial}
                            />
                        </div>
                        <div>
                            <label>Quem foi o campeao do Campeonato Mundial?</label>
                            <Form.Control
                                onChange={e => { setJogador3Mundial(e.target.value) }}
                                value={jogador3Mundial}
                            />
                        </div>
                        <div>
                            <label>Quem foi o campeao do Campeonato Mundial?</label>
                            <Form.Control
                                onChange={e => { setJogador4Mundial(e.target.value) }}
                                value={jogador4Mundial}
                            />
                        </div>
                        <Button className="btn-filtro-arquivo" onClick={(e) => handleSalvar("Mundial")}>
                            <div>Enviar Arquivo</div>
                        </Button>

                        {/* Recopa */}
                        <div>
                            <label>Quem foi o campeao da Recopa?</label>
                            <Form.Control
                                onChange={e => { setJogador1Recopa(e.target.value) }}
                                value={jogador1Recopa}
                            />
                        </div>
                        <div>
                            <label>Quem foi o campeao da Recopa?</label>
                            <Form.Control
                                onChange={e => { setJogador2Recopa(e.target.value) }}
                                value={jogador2Recopa}
                            />
                        </div>
                        <div>
                            <label>Quem foi o campeao da Recopa?</label>
                            <Form.Control
                                onChange={e => { setJogador3Recopa(e.target.value) }}
                                value={jogador3Recopa}
                            />
                        </div>
                        <div>
                            <label>Quem foi o campeao da Recopa?</label>
                            <Form.Control
                                onChange={e => { setJogador4Recopa(e.target.value) }}
                                value={jogador4Recopa}
                            />
                        </div>
                        <Button className="btn-filtro-arquivo" onClick={(e) => handleSalvar("Recopa")}>
                            <div>Enviar Arquivo</div>
                        </Button>

                        {/* Copa */}
                        <div>
                            <label>Quem foi o campeao da Copa?</label>
                            <Form.Control
                                onChange={e => { setJogador1Copa(e.target.value) }}
                                value={jogador1Copa}
                            />
                        </div>
                        <div>
                            <label>Quem foi o campeao da Copa?</label>
                            <Form.Control
                                onChange={e => { setJogador2Copa(e.target.value) }}
                                value={jogador2Copa}
                            />
                        </div>
                        <div>
                            <label>Quem foi o campeao da Copa?</label>
                            <Form.Control
                                onChange={e => { setJogador3Copa(e.target.value) }}
                                value={jogador3Copa}
                            />
                        </div>
                        <div>
                            <label>Quem foi o campeao da Copa?</label>
                            <Form.Control
                                onChange={e => { setJogador4Copa(e.target.value) }}
                                value={jogador4Copa}
                            />
                        </div>
                        <Button className="btn-filtro-arquivo" onClick={(e) => { handleSalvar("Copa") }}>
                            <div>Enviar Arquivo</div>
                        </Button>

                        {/* Super Copa */}
                        <div>
                            <label>Quem foi o campeao da Super Copa?</label>
                            <Form.Control
                                onChange={e => { setJogador1SuperCopa(e.target.value) }}
                                value={jogador1SuperCopa}
                            />
                        </div>
                        <div>
                            <label>Quem foi o campeao da Super Copa?</label>
                            <Form.Control
                                onChange={e => { setJogador2SuperCopa(e.target.value) }}
                                value={jogador2SuperCopa}
                            />
                        </div>
                        <div>
                            <label>Quem foi o campeao da Super Copa?</label>
                            <Form.Control
                                onChange={e => { setJogador3SuperCopa(e.target.value) }}
                                value={jogador3SuperCopa}
                            />
                        </div>
                        <div>
                            <label>Quem foi o campeao da Super Copa?</label>
                            <Form.Control
                                onChange={e => { setJogador4SuperCopa(e.target.value) }}
                                value={jogador4SuperCopa}
                            />
                        </div>
                        <Button className="btn-filtro-arquivo" onClick={(e) => handleSalvar("SuperCopa")}>
                            <div>Enviar Arquivo</div>
                        </Button>
                    </div>

                </div>

                <div className="espaco" ></div>
                <div className="campos-texto-login">

                </div>

                {mostrarUploadCsv &&
                    <input type="file" onChange={(e) => handleLerArquivo(e)} />
                }
                {mostrarUploadCsv &&
                    <Button className="btn-filtro-arquivo" onClick={(e) => handleSalvar(e)}>
                        <div>Enviar Arquivo</div>
                    </Button>
                }


                {mostrarUploadCsv &&
                    <label className="label-quanti-hom">Quantidades de Homens</label>
                }

                {mostrarUploadCsv &&
                    <Form.Control
                        className="lab-quant-home"
                        value={contMen}
                    />
                }
                {mostrarUploadCsv &&
                    <label className="label-quanti-mul">Quantidades de Mulheres </label>
                }

                {mostrarUploadCsv &&
                    <Form.Control
                        className="lab-quant-mul"
                        value={contFem}
                    />
                }
                {mostrarUploadCsv &&
                    <label className="label-media-idad">Media de idade</label>
                }

                {mostrarUploadCsv &&
                    <Form.Control
                        className="lab-media-idade"
                        value={medIdade}
                    />
                }
                
                    <div>
                        <BootstrapTable
                            hover={true}
                            classes="tabela"
                            condensed={true}
                            keyField='id_jog_titulo'
                            data={itens}
                            columns={colunas}
                            bootstrap4={true}
                            bordered={false}
                        />
                    </div>
                

            </>


        </>

    )
}
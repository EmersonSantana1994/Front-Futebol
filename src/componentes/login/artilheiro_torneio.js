import React, { useState, useEffect, useRef } from 'react';/*eslint-disable*/
import '../../css/login/artilheiro.css';
import { Button, Image, Form, InputGroup, FormControl, Col, Carousel, Alert } from 'react-bootstrap';
import { apiC } from "../../conexoes/api";
import BootstrapTable from 'react-bootstrap-table-next';
import { useNavigate } from 'react-router-dom';
import Cronometro from '../login/cronometro';

export default function ArtilheiroTorneio() {
    const [nomeJogadorAssitenica, setNomeJogadorAssitenica] = useState('');
    const [quantidadeAssitencia, setQuantidadeAssitencia] = useState(0);
    const [nomeJogador, setNomeJogador] = useState('');
    const [quantidadeGol, setQuantidadeGol] = useState(0);
    const [nomeJogadorAnterior, setNomeJogadorAnterior] = useState('');
    const [quantidadeGolAnterior, setQuantidadeGolAnterior] = useState(0);
    const [pesquisarTime, setPesquisarTime] = useState('');
    const [carregando, setCarregando] = useState(false);
    const [mensagem, setMensagem] = useState('');
    const [placar1, setPlacar1] = useState(0);
    const [placar2, setPlacar2] = useState(0);
    const [time1, setTime1] = useState('');
    const [time2, setTime2] = useState('');
    const [mensagemTabela, setMensagemTabela] = useState('');
    const [itens, setItens] = useState([]);
    const [itens2, setItens2] = useState([]);
    const [itensAss, setItensAss] = useState([]);
    const [somaGols, setSomaGols] = useState([]);
    const [somaAssitencias, setSomaAssitencias] = useState([]);
    const navigate = useNavigate();
    let token = JSON.parse(localStorage.getItem("keyToken"))
    const [resultado, setResultado] = useState(false);
    const [mostrarTime, setMostrarTime] = useState(false);
    const [buscando, setBuscando] = useState(false);
    const botaoRef = useRef();
    const botaoRef1 = useRef();
    let totalItens = 0
    let contador = 0
    let itensVar = []
    let itensVar2 = []
    let dadosSelecionados = []

    // useEffect(() => {
    //     async function autenticar(e) {
    //         await apiC.post("autenticacao/autenticar")
    //             .then(response => {
    //                 console.log("esta autenticado")
    //             })
    //             .catch((error) => {
    //                 if (error.response.data === 'não autenticado') {
    //                     navigate('/')
    //                 }
    //             });
    //     }
    //     setTimeout(autenticar, 5000);
    // }, [])

    useEffect(() => {
        inserirData()
    }, [])

    useEffect(() => {
        inserirDataAssistencia()
    }, [])


    async function buscarTodos(params) {
        apiC.post("placar/bucartodos")
        .then(response => {
            if (response.data[0].placar != null) {
                setTime1(response.data[0].nome)
                setPlacar1(response.data[0].placar)
            }
            if (response.data[1].placar != null && response.data[1].placar != undefined && response.data[1].placar != 'undefined')
                setTime2(response.data[1].nome)
            setPlacar2(response.data[1].placar)
        })
        .catch((error) => {
            setMensagem('erro ao buscar placar')
            setCarregando(false)
        });
    }

    useEffect(() => {
        apiC.post("placar/bucartodos")
            .then(response => {
                if (response.data[0].placar != null) {
                    setTime1(response.data[0].nome)
                    setPlacar1(response.data[0].placar)
                }
                if (response.data[1].placar != null && response.data[1].placar != undefined && response.data[1].placar != 'undefined')
                    setTime2(response.data[1].nome)
                setPlacar2(response.data[1].placar)
            })
            .catch((error) => {
                setMensagem('erro ao buscar placar')
                setCarregando(false)
            });
    }, [])

    function inserirData2(data) {
        itensVar = []
        setItens2([])
        for (let i = 0; i < data.length; i++) {
            if (contador == i) {
                let k = i
                for (let j = 0; j < data.length; j++) {
                    itensVar[k] = data[j]
                    k++
                }
            }
            setItens2(JSON.parse(JSON.stringify(itensVar)))
        }
    }


    async function inserirData() {
        let somaTotalGols = 0
        setMensagemTabela('Inserindo na tabela..')
        await apiC.post("artilheiro/buscar/torneio", {
        })
            .then(response => {
                if (response.status === 200) {
                    for (let i = 0; i < response.data.length; i++) {
                        if (contador === i) {
                            let k = i
                            for (let j = 0; j < response.data.length; j++) {
                                itensVar[k] = response.data[j]
                                k++
                                somaTotalGols += parseInt(response.data[j].gols, 10)
                            }
                        }
                        setSomaGols(somaTotalGols)
                        setItens(JSON.parse(JSON.stringify(itensVar)))

                    }
                }
                setMensagemTabela('Feito! Tabela Atualizada')
                setCarregando(false)
            })
            .catch((error) => {
                setMensagemTabela('erro ao atualizar tabela', error)
                console.log("erro ao atualizar tabela", error)
                if(error.message == 'Network Error') {
                    inserirData()
                    setCarregando(false)
                }else{
                    alert('erro ao atualizar tabela')
                }
                setCarregando(false)
            });

    }

    async function inserirDataAssistencia() {
        let somaTotalGols = 0
        setMensagemTabela('Inserindo na tabela..')
        await apiC.post("assistencia/buscar/torneio", {
        })
            .then(response => {
                if (response.status === 200) {
                    for (let i = 0; i < response.data.length; i++) {
                        if (contador === i) {
                            let k = i
                            for (let j = 0; j < response.data.length; j++) {
                                itensVar2[k] = response.data[j]
                                k++
                                somaTotalGols += parseInt(response.data[j].gols, 10)
                            }
                        }
                        setSomaAssitencias(somaTotalGols)
                        setItensAss(JSON.parse(JSON.stringify(itensVar2)))

                    }
                }
                setMensagemTabela('Feito! Tabela Atualizada')
                setCarregando(false)
            })
            .catch((error) => {
                setMensagemTabela('erro ao atualizar tabela')
                console.log("erro ao atualizar tabela", error)
                if(error.message == 'Network Error') {
                    inserirDataAssistencia()
                    setCarregando(false)
                }else{
                    alert('erro ao atualizar tabela')
                }
                
                setCarregando(false)
            });

    }

    async function handleSalvarAssitencia() {
        setCarregando(true)
        setMensagem('salvando..')
        await apiC.post("assistencia/inserir", {
            "nome": nomeJogadorAssitenica,
            "assistencia": 1
        })
            .then(response => {
                if (response.status === 200) {
                    setMensagem('Novo nome inserido!')
                    inserirDataAssistencia()
                }
                setCarregando(false)
            })
            .catch((error) => {
                setMensagem('erro ao salvar')
                setCarregando(false)
            });

    }

    const colunasAssi = [
        {
            dataField: 'nome',
            headerClasses: 'nao-selecionavel',
            sort: true,
            text: <p>
                Jogador
            </p>,
            formatter: (cell, row) => {
                return <p>{cell === null ? '-' : cell}</p>;
            },
        },
        {
            headerClasses: 'nao-selecionavel',
            text: <p>
                -           -
            </p>,
            formatter: (cell, row) => {
                return <p>{cell === null ? '-' : cell}</p>;
            },
        },
        {
            dataField: 'assistencias',
            headerClasses: 'nao-selecionavel',
            text: <p>
                Assistências feitas
            </p>,
            formatter: (cell, row) => {
                return <p>{cell === null ? '-' : cell}</p>;
            },
        },

    ]

    async function atualizaNumeroGol(item) {
        let quantidadeGolNum = parseInt(quantidadeGol, 10)
        setMensagem('atualizando..')
        await apiC.post("artilheiro/atualiza", {
            "id": item[0].id,
            "nome": item[0].nome,
            "gols": item[0].gols + 1,
            "gols_torneio": 1,
        })
            .then(response => {
                if (response.status === 200) {
                    setMensagem('atualizado!')
                    setNomeJogadorAnterior(item[0].nome)
                    setQuantidadeGolAnterior(1)
                    inserirData()
                }
                setCarregando(false)
            })
            .catch((error) => {
                setMensagem('erro ao atualizar', error)
                console.log("erro ao atualizar",error )
                alert('erro ao atualizar')
                setCarregando(false)
            });

    }

    async function  inserirNovoJogador() {
        let quantidadeGolNum = parseInt(quantidadeGol, 10)
        // const verificar = verificaString()
        // if(verificar){
        setMensagem('Inserindo novo nome..')
        await apiC.post("artilheiro/inserir", {
            "nome": nomeJogador,
            "gols": 1,
        }).then(response => {
            if (response.status === 200) {
                setMensagem('Novo nome inserido!')
                setNomeJogadorAnterior(nomeJogador)
                setQuantidadeGolAnterior(1)
                inserirData()
            }
            setCarregando(false)
        })
            .catch((error) => {
                setMensagem('erro ao inserir novo nome')
                alert(error.response.data)
                setCarregando(false)
            });
        // }else{
        //     alert('Nome não cadastrado, por favor verifique')
        // }
    }

    async function handleDeletar() {
        setMensagem('Deletando..')

        await apiC.post("artilheiro/delete/torneio")
            .then(response => {
                if (response.status === 200) {
                    location.reload()
                }
            })
            .catch((error) => {
                setMensagem('erro ao deletar jogadores')
                alert('erro ao deletar jogadores')
                setCarregando(false)
            });



    }

    async function limpar() {
        await apiC.post("placar/limpar")
            .then(response => {
                if (response.status === 200) {
                    setMensagem('Placar limpado')
                    location.reload()
                }
            })
            .catch((error) => {
                setMensagem('erro ao limpar placar')
                alert('erro ao limpar placar')
            });


    }

    async function limpandoNomes() {
        itensVar = []
        setItens2([])
        setBuscando(true)
    }

    async function pesquisaTime() {
        limpandoNomes()
        await apiC.post("cadastrar/pesquisar", {
            "time": pesquisarTime,
        })
            .then(response => {
                if (response.status === 200) {
                    setBuscando(false)
                    inserirData2(response.data.result)
                    if (response.data.result.length == 0) {
                        setResultado(true)
                        setMostrarTime(false)
                    } else {
                        setResultado(false)
                        setMostrarTime(true)
                    }

                }
            })
            .catch((error) => {
                setBuscando(false)
                alert(error.response.data)

            });
    }

    async function handleSalvar() {
        setCarregando(true)
        setMensagem('salvando..')
        await apiC.post("artilheiro/atualizarGols", {
            "nome": nomeJogador,
            "gols": 1,
            "gols_torneio": 1
        })
            .then(response => {
                if (response.status === 200) {
                        setMensagem('atualizado!')
                        setNomeJogadorAnterior(nomeJogador)
                        setQuantidadeGolAnterior(1)
                        inserirData()
                }
                setCarregando(false)
            })
            .catch((error) => {
                setMensagem('erro ao atualizar', error)
                console.log("erro ao atualizar emeee",error )
                
                alert(error.response.data)
                setCarregando(false)
            });

    }

    const colunasTimes = [
        {
            dataField: 'nome',
            headerClasses: 'nao-selecionavel',
            sort: true,
            text: <p>
                Jogadores
            </p>,
            formatter: (cell, row) => {
                return <p>{cell === null ? '-' : cell}</p>;
            },
        },
    ]

    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === "Enter") {
                e.preventDefault();
                botaoRef.current?.click();
            }
        };

        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, []);

    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === "+") {
                e.preventDefault();
                botaoRef1.current?.click();
            }
        };

        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, []);


    async function salvarPlacar() {
        setCarregando(true)
        setMensagem('salvando..')

        await apiC.post("placar/inserir", {
            "nome": nomeJogador,
        })
            .then(response => {
                if (response.status === 200) {
                    apiC.post("placar/bucartodos")
                        .then(response => {
                            if (response.data[0].placar != null) {
                                setTime1(response.data[0].nome)
                                setPlacar1(response.data[0].placar)
                            }
                            if (response.data[1].placar != null && response.data[1].placar != undefined && response.data[1].placar != 'undefined')
                                setTime2(response.data[1].nome)
                            setPlacar2(response.data[1].placar)
                        })
                        .catch((error) => {
                            if(error.message == 'Network Error') {
                                buscarTodos()
                                setCarregando(false)
                            }else{
                            setMensagem('erro ao buscar placar')
                            setCarregando(false)
                            }
                        });

                }
                setCarregando(false)
            })
            .catch((error) => {
                setMensagem('erro ao salvar')
                setCarregando(false)
            });


    }

    // const verificaString = () => {
    //     return ['Cris', 'Axe', 'Super Homem', 'Hulk', 'Filipe', 'Wilham', 'Taylor', 'Maçaneta', 'Sundown', 'Theo', 'Buzz', 'Dony', 'Monstro', 'Controle da tv', 'Rivelino', 'Renan', 'Pente Cinza', 'Perna Longa', 'Raul', 'Sensodyni', 'Sabrina', 'Jhonsons', 'Cindy', 'Loriel', 'Ufe', 'Sr Incrivel', 'Lucas', 'Hammer', 'Livia', 'Rafael', 'Tiago', 'Rodrigo', 'Pente Laranja', 'Rildo', 'Pente Rosa', 'Net', 'Cristian', 'Pepe', 'Cif', 'Homem de Ferro', 'Vinicius', 'Lacan', 'Condicionador', 'Telefone', 'Rozinha', 'Coringa', 'Michel', 'Mostarda', 'Thanos', 'Pantene', 'Leonardo', 'Pente Preto', 'Tati', 'Pente Azul', 'Mathias', 'Azeite', 'Varicel', 'Titan', 'Eva', 'Hugo', 'Azuzinho', 'Rita', 'David', 'Azulão', 'Shampo', 'Orlof', 'Branquinho', 'Kevin', 'Crystal', 'Izakson', 'Sky', 'Gradiente', 'Escuro', 'Edson', 'Katchup', 'Luiza'].includes(nomeJogador)
    // }

    const colunas = [
        {
            dataField: 'nome',
            headerClasses: 'nao-selecionavel',
            sort: true,
            text: <p>
                Jogador
            </p>,
            formatter: (cell, row) => {
                return <p>{cell === null ? '-' : cell}</p>;
            },
        },
        {
            headerClasses: 'nao-selecionavel',
            text: <p>
                -           -
            </p>,
            formatter: (cell, row) => {
                return <p>{cell === null ? '-' : cell}</p>;
            },
        },
        {
            dataField: 'gols',
            headerClasses: 'nao-selecionavel',
            text: <p>
                Gols feitos
            </p>,
            formatter: (cell, row) => {
                return <p>{cell === null ? '-' : cell}</p>;
            },
        },

    ]


    function handleSelecionar(nome) {
        setNomeJogador(nome);
    }

    function handleSelecionarAssitencia(nome) {
        setNomeJogadorAssitenica(nome);
    }


    function handleDesselecionarAssistencia() {
        setNomeJogadorAssitenica('');
    }


    function handleDesselecionarTodos() {
    }


    function handleSelecionarTodos() {
        itens.map((item, i) => {
            if (itens[i].id) {
                dadosSelecionados.push(itens[i].id);
            }
        })
    }

    const selecaoLinhas = {
        mode: 'radio',
        onSelect: (row, isSelect, rowIndex, e) => {
            if (isSelect) {
                handleSelecionar(row.nome)
            } else {
                handleDesselecionar()
            }
        },
        onSelectAll: (isSelect, rows, e) => {
            if (isSelect) {
                handleSelecionarTodos()
            } else {
                handleDesselecionarTodos()
            }
        },
        selectionRenderer: ({ mode, ...rest }) => {
            return (
                <>
                    <input type={mode} class="input-checkbox-simcard" {...rest} />
                    <label class="label-checkbox-simcard"></label>
                </>
            )
        },
        selectionHeaderRenderer: ({ mode, ...rest }) => {
            return (
                <>
                    <input type={mode} class="input-checkbox-header-simcard" {...rest} />
                    <label class="label-checkbox-header-simcard"></label>
                </>
            )
        },
        bgColor: 'row-index-bigger-than-2101'
    };
    const selecaoLinhasAssitencia = {
        mode: 'radio',
        onSelect: (row, isSelect, rowIndex, e) => {
            if (isSelect) {
                handleSelecionarAssitencia(row.nome)
            } else {
                handleDesselecionarAssistencia()
            }
        },
        onSelectAll: (isSelect, rows, e) => {
            if (isSelect) {
                handleSelecionarTodos()
            } else {
                handleDesselecionarTodos()
            }
        },
        selectionRenderer: ({ mode, ...rest }) => {
            return (
                <>
                    <input type={mode} class="input-checkbox-simcard" {...rest} />
                    <label class="label-checkbox-simcard"></label>
                </>
            )
        },
        selectionHeaderRenderer: ({ mode, ...rest }) => {
            return (
                <>
                    <input type={mode} class="input-checkbox-header-simcard" {...rest} />
                    <label class="label-checkbox-header-simcard"></label>
                </>
            )
        },
        bgColor: 'row-index-bigger-than-2101'
    };

    return (
        <>
            <Button className="btn-filtro-arquivo" onClick={(e) => navigate('/home')}>
                <div>Home</div>
            </Button>
            ------
            <Button className="btn-filtro-arquivo" onClick={(e) => navigate('/torneio')}>
                <div>Torneio</div>
            </Button>
            ------
            <Button className="btn-filtro-arquivo" onClick={(e) => navigate('/copa')}>
                <div>Copa</div>
            </Button>
            ------
            <Button className="btn-filtro-arquivo" onClick={(e) => navigate('/superCopa')}>
                <div>Super Copa</div>
            </Button>
            {carregando &&
                <h1>carregando..</h1>
            }
            {
                <h4>{mensagem}</h4>
            }
            {
                <h4>{mensagemTabela}</h4>
            }
            {
                <h2>{nomeJogadorAnterior}</h2>
            }
            {
                <h2>{quantidadeGolAnterior}</h2>
            }

            <div>
                <label>Nome do jogador</label>
                <Form.Control className="label-artilheiro"
                    onChange={e => { setNomeJogador(e.target.value) }}
                    value={nomeJogador}
                />
                <label className="label-quatidade">Quantidade total de gols marcados</label>
                <Form.Control className="label-quantgol"
                    value={somaGols}
                />
            </div>
            <Button
                className="btn-filtro-arquivo"
                onClick={(e) => {
                    handleSalvar();
                    salvarPlacar();
                }}
                ref={botaoRef}
            >
                <div>Enviar gols</div>
            </Button>

            <Button className="deletar-jogador" onClick={(e) => handleDeletar()}>
                <div>Deletar jogadores selecionados</div>
            </Button>
            <div>
                <div>
                    <label>Nome do jogador que fez a Assitência</label>
                    <Form.Control className="label-artilheiro"
                        onChange={e => { setNomeJogadorAssitenica(e.target.value) }}
                        value={nomeJogadorAssitenica}
                    />
                </div>
                <Button className="btn-filtro-arquivo" onClick={(e) => handleSalvarAssitencia()} ref={botaoRef1}>
                    <div>Enviar assitencia</div>
                </Button>
            </div>
            <div className="container-flex">
                <div className="tabela-container">
                    <BootstrapTable
                        hover={true}
                        classes="tabela"
                        condensed={true}
                        keyField='id'
                        data={itens}
                        columns={colunas}
                        selectRow={selecaoLinhas}
                        bootstrap4={true}
                        bordered={false}
                    />
                </div>
                <div className="placar-container">
                    <label className="titulo-placar">Placar do jogo</label>
                    <div className="placar-box">
                        <div className="time">
                            <Form.Control
                                className="input-time"
                                value={time1}
                                placeholder="Time 1"
                            />
                            <Form.Control
                                className="input-placar"
                                value={placar1}
                                placeholder="0"
                            />
                        </div>

                        <div className="versus">X</div>

                        <div className="time">

                            <Form.Control
                                className="input-time"
                                value={time2}
                                placeholder="Time 2"
                            />
                            <Form.Control
                                className="input-placar"
                                value={placar2}
                                placeholder="0"
                            />
                        </div>
                        <Button className="limpar-placar" onClick={(e) => limpar()}>
                <div>Limpar</div>
            </Button>
                    </div>
                </div>
            </div>
            ______________________________________
            <div className="container-flex">
                <div className="tabela-container">
                    <BootstrapTable
                        hover={true}
                        classes="tabela"
                        condensed={true}
                        keyField="id"
                        data={itensAss}
                        columns={colunasAssi}
                        selectRow={selecaoLinhasAssitencia}
                        bootstrap4={true}
                        bordered={false}
                    />
                </div>

              
            </div>


          

            <h1 className='pesquisa'>Pesquise aqui o time</h1>
            <Form.Control
                onChange={e => { setPesquisarTime(e.target.value) }}
                value={pesquisarTime}
                className='pesquisa'
            />
            <Button className="" onClick={(e) => pesquisaTime()}>
                <div>Pesquisar</div>
            </Button>
            {resultado &&
                <div className='pesquisa'>
                    <h3>Nenhum resultado encontrado</h3>
                </div>
            }

            {buscando &&
                <div className='pesquisa'>
                    <h3>Buscando, aguarde..</h3>
                </div>
            }

            {mostrarTime &&
                <div className='pesquisa'>
                    <BootstrapTable
                        hover={true}
                        classes="tabela"
                        condensed={true}
                        keyField='id_time'
                        data={itens2}
                        columns={colunasTimes}
                        bootstrap4={true}
                        bordered={false}
                    />
                </div>

            }
            {/* <Cronometro/> */}
        </>
    )
}
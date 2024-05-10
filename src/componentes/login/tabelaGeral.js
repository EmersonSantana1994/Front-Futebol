import React, { useState, useEffect } from 'react';/*eslint-disable*/
import '../../css/login/upload.css';
import { Button, Image, Form, InputGroup, FormControl, Col, Carousel } from 'react-bootstrap';
import { apiC } from "../../conexoes/api";
import BootstrapTable from 'react-bootstrap-table-next';
import { useNavigate } from 'react-router-dom';
import { Buffer } from 'buffer';


export default function TabelaGeral() {
    window.Buffer = Buffer;
    //VARIAVEIS

    const [itens, setItens] = useState([]);
    const navigate = useNavigate();
    const [aviso, setAviso] = useState(false);
    const [tabela, setTabela] = useState(false);
    let contador = 0
    let itensVar = []
    let token = JSON.parse(localStorage.getItem("keyToken"))
    let dadosSelecionados = []



    useEffect(() => {

        async function buscarTodos(e) {
            setAviso(true)
            await apiC.post("listar/todos", {
                headers: {
                    'x-access-token': token,
                }
            })
                .then(response => {
                    if (response.status === 200) {
                        setAviso(false)
                        inserirData(response.data)
                        setTabela(true)
                    }
                })
                .catch((error) => {
                    alert(error.response.data)

                });

        }
        buscarTodos()
    }, [])

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



    // FUNÇÃO ABAIXO TEM O DEVER DE SALVAR OS DADOS TRAZIDOS DO BANCO PARA SEREM APRESENTADOS NA TABELA
    function inserirData(data) {
        for (let i = 0; i < data.length; i++) {


            if (contador == i) {
                let k = i
                for (let j = 0; j < data.length; j++) {
                    itensVar[k] = data[j]
                    k++
                }
            }
            setItens(JSON.parse(JSON.stringify(itensVar)))


        }

    }

    // ABAIXO SÃO AS COLUNAS DE ACORDO COM O ARQUIVO ENVIADO (A TAMBÉM OS ID DE CADA DADO)

    const colunas = [
        {
            dataField: 'Jogador',
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
            sort: true,
            text: <p>
                -     -
            </p>,
            formatter: (cell, row) => {
                return <p>{cell === null ? '-' : cell}</p>;
            },
        },
        {
            dataField: 'Time',
            headerClasses: 'selecionavel',
            sort: true,
            text: <p>
                Time
            </p>,
            formatter: (cell, row) => {
                return <p>{cell === null ? '-' : cell}</p>;
            },
        },
        {
            sort: true,
            text: <p>
                -     -
            </p>,
            formatter: (cell, row) => {
                return <p>{cell === null ? '-' : cell}</p>;
            },
        },
        {
            dataField: 'Liga',
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
            sort: true,
            text: <p>
                -     -
            </p>,
            formatter: (cell, row) => {
                return <p>{cell === null ? '-' : cell}</p>;
            },
        },
        {
            dataField: 'gols',
            headerClasses: 'nao-selecionavel',
            sort: true,
            text: <p>
                Gols
            </p>,
            formatter: (cell, row) => {
                return <p>{cell === null ? '-' : cell}</p>;
            },
        },
        {
            sort: true,
            text: <p>
                -     -
            </p>,
            formatter: (cell, row) => {
                return <p>{cell === null ? '-' : cell}</p>;
            },
        },

        {
            dataField: 'posicao',
            headerClasses: 'nao-selecionavel',
            sort: true,
            text: <p>
                Posição
            </p>,
            formatter: (cell, row) => {
                return <p>{cell === null ? '-' : cell}</p>;
            },
        },

        {
            dataField: 'pais',
            headerClasses: 'nao-selecionavel',
            sort: true,
            text: <p>
                Nacionalidade
            </p>,
            formatter: (cell, row) => {
                return <p>{cell === null ? '-' : cell}</p>;
            },
        },


        {
            sort: true,
            text: <p>
                -     -
            </p>,
            formatter: (cell, row) => {
                return <p>{cell === null ? '-' : cell}</p>;
            },
        },

        // {
        //     dataField: 'foto',
        //     headerClasses: 'nao-selecionavel',
        //     text: <p>
        //         Foto
        //     </p>,
        //     formatter: (cell, row) => {
        //         // return <img className="foto" src={cell} />;

        //         if (cell != null) {
        //             const imagePath = Buffer.from(cell).toString();
        //             return <img className="foto" src={imagePath} />
        //         } else {
        //             return <img className="foto" src="https://jazzaero.com.br/wp-content/uploads/2017/05/default-placeholder-profile-icon-avatar-gray-woman-90197997.jpg" alt="perfil" />
        //         }

        //     },
        // }
    ]

    const selecaoLinhas = {
        mode: 'radio' ,
        onSelect: (row, isSelect, rowIndex, e) => {
            if(isSelect){
                handleSelecionar(row.id)
            }else{
                handleDesselecionar(row.id)
            }
        },
        onSelectAll: (isSelect, rows, e) => {
            if(isSelect){
                handleSelecionarTodos()
            }else{
                handleDesselecionarTodos()
            }
        },
        selectionRenderer: ({ mode, ...rest }) => {
            return (
                <>
                    <input type={mode} class="input-checkbox-simcard" { ...rest }/>
                    <label class="label-checkbox-simcard"></label>
                </>
            )
        },
        selectionHeaderRenderer: ({ mode, ...rest }) => {
            return (
                <>
                    <input type={mode} class="input-checkbox-header-simcard" { ...rest }/>
                    <label class="label-checkbox-header-simcard"></label>
                </>
            )
        },
        bgColor: 'row-index-bigger-than-2101'
    };

    function handleSelecionar(simcard){
        for (let i = 0; i < itens.length; i++) {
            if (itens[i].id == simcard){
                dadosSelecionados.push(itens[i].id);
                break;
            }
    }
    }

    function handleDesselecionar(simcard){
        for (let i = 0; i < dadosSelecionados.length; i++) {
            if (dadosSelecionados[i] == simcard){
                dadosSelecionados.splice(i, 1);
                break;
            }
        }
    }


    function handleDesselecionarTodos(){
    }


    return (

        <>
            <Button className="btn-filtro-arquivo" onClick={(e) => navigate('/home')}>
                <div>Home</div>
            </Button>


            <div className="lado"></div>

            {/* {carregando &&
                <h1>carregando..</h1>
            } */}
            {aviso &&
                <h1>Carregando tabela...</h1>
            }
            {tabela &&
                <div className="lado">
                    <div>
                        <BootstrapTable
                            hover={true}
                            classes="table table-striped thead-light"
                            condensed={true}
                            keyField='id'
                            data={itens}
                            columns={colunas}
                            bootstrap4={true}
                            selectRow={ selecaoLinhas }
                            bordered={false}
                        />
                    </div>
                    <div className="espaco2"></div>
                </div>
            }


        </>

    )

}
import React, { useState, useEffect} from 'react';/*eslint-disable*/
import '../../css/login/upload.css';
import { Button, Image, Form, InputGroup, FormControl, Col, Carousel } from 'react-bootstrap';
import { apiC } from "../../conexoes/api";
import BootstrapTable from 'react-bootstrap-table-next';
import { useNavigate } from 'react-router-dom';


export default function TabelaGeral() {

//VARIAVEIS

const [itens, setItens] = useState([]);
const navigate = useNavigate();

let contador = 0
let itensVar = []
let token = JSON.parse(localStorage.getItem("keyToken"))



useEffect(() => {

    async function buscarTodos(e) {
        await apiC.post("listar/todos", {
        headers: {
                'x-access-token': token,
            }
        })
        .then(response => {
            if (response.status === 200) {
                inserirData(response.data)
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
            if(error.response.data === 'não autenticado'){
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

]


    return (

        <>
        <Button className="btn-filtro-arquivo" onClick={(e) => navigate('/home')}>
                        <div>Home</div>
                    </Button>


            {/* {carregando &&
                <h1>carregando..</h1>
            } */}
             
            <div className="lado"></div>

{/* {carregando &&
                <h1>carregando..</h1>
            } */}
            <div className="lado">
           
                    <div>
                    {console.log("llllllv ", itens )}
                        <BootstrapTable
                            hover={true}
                            classes="table table-striped thead-light"
                            condensed={true}
                            keyField='id'
                            data={itens}
                            columns={colunas}
                            bootstrap4={true}
                            bordered={false}
                        />
                    </div>
                    <div className="espaco2"></div>
            </div>
            
         </>
         
    )

}
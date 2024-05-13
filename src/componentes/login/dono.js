import React, { useState, useEffect } from 'react';/*eslint-disable*/
import '../../css/login/upload.css';
import { Button, Image, Form, InputGroup, FormControl, Col, Carousel, Alert } from 'react-bootstrap';
import { apiC } from "../../conexoes/api";
import BootstrapTable from 'react-bootstrap-table-next';
import { useNavigate } from 'react-router-dom';

export default function Dono() {


    const [nomeTime, setNomeTime] = useState('');
    const [novoJogador, setNovoJogador] = useState('');
    const [jogadoSaindo, setJogadoSaindo] = useState('');
    const [nomeTimeComprador, setNomeTimeComprador] = useState('');
    const [nomeTimeVendedor, setNomeTimeVendedor] = useState('');
    const [jogadoComprado, setJogadoComprado] = useState('');
    const [jogadoTrocado, setJogadoTrocado] = useState('');
    const [itens, setItens] = useState([]);
    const [itens2, setItens2] = useState([]);
    const [mostrarTabela, setMostrarTabela] = useState(false);
    const navigate = useNavigate();
    let contador = 0
    let itensVar = []

    const colunas = [
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
        async function autenticar(e) {
            await apiC.post("autenticacao/autenticar")
            .then(response => {
      console.log("esta autenticado")
            })
            .catch((error) => {
                if(error.response.data == 'não autenticado'){
                    navigate('/')
                }
            });
        }
        setTimeout(autenticar, 5000);
    }, [])

   async function mudarDono(tipo){

   
        await apiC.post("dono/alterar", {
            "nomeNovoDono": nomeTimeVendedor,
            "nomeAntigoDono": jogadoComprado
        })
        .then(response => {
            if (response.status === 200) {
                alert('Novo dono alterado com sucesso')
            }
        })
        .catch((error) => {
            alert(error.response.data)
            console.log("error", error)
        });
    
    
    }



    return (
        <>
        <Button className="btn-filtro-arquivo" onClick={(e) => navigate('/home')}>
                        <div>Home</div>
                    </Button>
        <h1>Informa abaixo o nome do novo dono do time</h1>


        <h3>Nome do novo dono</h3>
<Form.Control
            onChange={e => { setNomeTimeVendedor(e.target.value) }}
            value={nomeTimeVendedor}
        />
         <h3>Nome do antigo dono</h3>
<Form.Control
            onChange={e => { setJogadoComprado(e.target.value) }}
            value={jogadoComprado}
        />
         <Button className="btn-filtro-arquivo" onClick={(e) => mudarDono()}>
                        <div>Enviar</div>
                    </Button>
                       
        </>
        
    )
}
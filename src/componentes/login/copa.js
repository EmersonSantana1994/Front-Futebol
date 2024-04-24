import React, { useState, useEffect } from 'react';/*eslint-disable*/
import '../../css/torneio/copa.css';
import { Button, Image, Form, InputGroup, FormControl, Col, Carousel, Alert } from 'react-bootstrap';
import { apiC } from "../../conexoes/api";
import BootstrapTable from 'react-bootstrap-table-next';
import { useNavigate } from 'react-router-dom';
import Dropzone from "react-dropzone";

export default function Copa() {

    const [itens, setItens] = useState([]);
    const [placar1, setPlacar1] = useState('');
    const [placar2, setPlacar2] = useState('');
    const [placar3, setPlacar3] = useState('');
    const [placar4, setPlacar4] = useState('');
    const [placar5, setPlacar5] = useState('');
    const [placar6, setPlacar6] = useState('');
    const [placar7, setPlacar7] = useState('');
    const [placar8, setPlacar8] = useState('');
    const [placar9, setPlacar9] = useState('');
    const [placar10, setPlacar10] = useState('');
    const [placar11, setPlacar11] = useState('');
    const [placar12, setPlacar12] = useState('');
    const [placar13, setPlacar13] = useState('');
    const [placar14, setPlacar14] = useState('');
    const [placar15, setPlacar15] = useState('');
    const [placar16, setPlacar16] = useState('');
    const [placar17, setPlacar17] = useState('');
    const [placar18, setPlacar18] = useState('');
    const [placar19, setPlacar19] = useState('');
    const [placar20, setPlacar20] = useState('');
    const [placar21, setPlacar21] = useState('');
    const [placar22, setPlacar22] = useState('');
    const [placar23, setPlacar23] = useState('');
    const [placar24, setPlacar24] = useState('');
    const [placar25, setPlacar25] = useState('');
    const [placar26, setPlacar26] = useState('');
    const [placar27, setPlacar27] = useState('');
    const [placar28, setPlacar28] = useState('');
    const [time1q, setTime1q] = useState('');
    const [time2q, setTime2q] = useState('');
    const [time3q, setTime3q] = useState('');
    const [time4q, setTime4q] = useState('');
    const [time5q, setTime5q] = useState('');
    const [time6q, setTime6q] = useState('');
    const [time7q, setTime7q] = useState('');
    const [time8q, setTime8q] = useState('');
    const [time1s, setTime1s] = useState('');
    const [time2s, setTime2s] = useState('');
    const [time3s, setTime3s] = useState('');
    const [time4s, setTime4s] = useState('');
    const [time1f, setTime1f] = useState('');
    const [time2f, setTime2f] = useState('');
    const [liga, setLiga] = useState('');
    const navigate = useNavigate();
    const [mostrarPlacarSalvo1, setMostrarPlacarSalvo1] = useState(false);
    const [mostrarPlacarSalvo2, setMostrarPlacarSalvo2] = useState(false);
    const [mostrarPlacarSalvo3, setMostrarPlacarSalvo3] = useState(false);
    const [mostrarPlacarSalvo4, setMostrarPlacarSalvo4] = useState(false);
    const [mostrarPlacarSalvo5, setMostrarPlacarSalvo5] = useState(false);
    const [mostrarPlacarSalvo6, setMostrarPlacarSalvo6] = useState(false);
    const [mostrarPlacarSalvo7, setMostrarPlacarSalvo7] = useState(false);
    const [mostrarPlacarSalvo8, setMostrarPlacarSalvo8] = useState(false);
    const [mostrarPlacarSalvo9, setMostrarPlacarSalvo9] = useState(false);
    const [mostrarPlacarSalvo10, setMostrarPlacarSalvo10] = useState(false);
    const [mostrarPlacarSalvo11, setMostrarPlacarSalvo11] = useState(false);
    const [mostrarPlacarSalvo12, setMostrarPlacarSalvo12] = useState(false);
    const [mostrarPlacarSalvo13, setMostrarPlacarSalvo13] = useState(false);
    const [mostrarPlacarSalvo14, setMostrarPlacarSalvo14] = useState(false);
    const [mostrarPlacarSalvo15, setMostrarPlacarSalvo15] = useState(false);
    const [mostrarPlacarSalvo16, setMostrarPlacarSalvo16] = useState(false);
    const [mostrarPlacarSalvo17, setMostrarPlacarSalvo17] = useState(false);
    const [mostrarPlacarSalvo18, setMostrarPlacarSalvo18] = useState(false);
    const [mostrarPlacarSalvo19, setMostrarPlacarSalvo19] = useState(false);
    const [mostrarPlacarSalvo20, setMostrarPlacarSalvo20] = useState(false);
    const [mostrarPlacarSalvo21, setMostrarPlacarSalvo21] = useState(false);
    const [mostrarPlacarSalvo22, setMostrarPlacarSalvo22] = useState(false);
    const [mostrarPlacarSalvo23, setMostrarPlacarSalvo23] = useState(false);
    const [mostrarPlacarSalvo24, setMostrarPlacarSalvo24] = useState(false);
    const [mostrarPlacarSalvo25, setMostrarPlacarSalvo25] = useState(false);
    const [mostrarPlacarSalvo26, setMostrarPlacarSalvo26] = useState(false);
    const [mostrarPlacarSalvo27, setMostrarPlacarSalvo27] = useState(false);
    const [mostrarPlacarSalvo28, setMostrarPlacarSalvo28] = useState(false);


    const [jogador1, setJogador1] = useState('');
    const [jogador2, setJogador2] = useState('');
    const [jogador3, setJogador3] = useState('');
    const [jogador4, setJogador4] = useState('');
    const [novotime, setNovoTime] = useState('');
    const [novoTime1, setNovoTime1] = useState('');
    const [novoTime2, setNovoTime2] = useState('');
    const [novoTime3, setNovoTime3] = useState('');
    const [novoTime4, setNovoTime4] = useState('');
    const [novoTime5, setNovoTime5] = useState('');
    const [novoTime6, setNovoTime6] = useState('');
    const [novoTime7, setNovoTime7] = useState('');
    const [novoTime8, setNovoTime8] = useState('');
    const [time, setTime] = useState('');
    const [pesquisarTime, setPesquisarTime] = useState('');
    const [resultado, setResultado] = useState(false);
    const [nenhumResultado, setNenhumResultado] = useState('Nenhum resultado encontrado');
    const [mostrarTime, setMostrarTime] = useState(false);
    const [cadastrarTime, setCadastrarTime] = useState(false);
    let contador = 0
    let itensVar = []


    let token = JSON.parse(localStorage.getItem("keyToken"))

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
        verificaSeTemTimeCadastrado()
    }, [])

    useEffect(() => {
        verificarQuemAvanca()
    }, [])


    useEffect(() => {
        async function bucartodos_placar() {
            await apiC.post("copa/bucartodos_placar")
            .then(response => {

            })
            .catch((error) => {
            });
        }
    }, [])

   

    async function verificaSeTemTimeCadastrado() {

        await apiC.post("copa/bucartodos")
            .then(response => {
                if (response.status === 200) {
                    if (response.data.length > 0) {
                        setTime1q(response.data[0].nome)
                        setTime2q(response.data[1].nome)
                        setTime3q(response.data[2].nome)
                        setTime4q(response.data[3].nome)
                        setTime5q(response.data[4].nome)
                        setTime6q(response.data[5].nome)
                        setTime7q(response.data[6].nome)
                        setTime8q(response.data[7].nome)
                    }

                    else {
                        alert('nenhum time cadatrado, por favor faça o cadastro dos times')
                        setCadastrarTime(true)
                    }
                }
            })
            .catch((error) => {
            });
    }



    async function cadastrarTimes(rodada) {

        let resultado1
        let resultado2
        let resultado3
        let resultado4
        let resultado5
        let resultado6
        let resultado7
        let resultado8
        let resultado9
        let resultado10
        let resultado11
        let resultado12
        let resultado13
        let resultado14
        let resultado15
        let resultado16
        let resultado17
        let resultado18
        let resultado19
        let resultado20
        let resultado21
        let resultado22
        let resultado23
        let resultado24
        let resultado25
        let resultado26
        let resultado27
        let resultado28

        if (rodada == "1") {
            resultado1 = parseInt(placar1, 10)
            resultado2 = parseInt(placar2, 10)
        }
        else if (rodada == "2") {
            resultado3 = parseInt(placar3, 10)
            resultado4 = parseInt(placar4, 10)
        }
        else if (rodada == "3") {
            resultado5 = parseInt(placar5, 10)
            resultado6 = parseInt(placar6, 10)
        }
        else if (rodada == "4") {
            resultado7 = parseInt(placar7, 10)
            resultado8 = parseInt(placar8, 10)
        }
        else if (rodada == "5") {
            resultado9 = parseInt(placar9, 10)
            resultado10 = parseInt(placar10, 10)
        }
        else if (rodada == "6") {
            resultado11 = parseInt(placar11, 10)
            resultado12 = parseInt(placar12, 10)
        }
        else if (rodada == "7") {
            resultado13 = parseInt(placar13, 10)
            resultado14 = parseInt(placar14, 10)
        }
        else if (rodada == "8") {
            resultado15 = parseInt(placar15, 10)
            resultado16 = parseInt(placar16, 10)
        }
        else if (rodada == "9") {
            resultado17 = parseInt(placar17, 10)
            resultado18 = parseInt(placar18, 10)
        }
        else if (rodada == "10") {
            resultado19 = parseInt(placar19, 10)
            resultado20 = parseInt(placar20, 10)
        }
        else if (rodada == "11") {
            resultado21 = parseInt(placar21, 10)
            resultado22 = parseInt(placar22, 10)
        }
        else if (rodada == "12") {
            resultado23 = parseInt(placar23, 10)
            resultado24 = parseInt(placar24, 10)
        }
        else if (rodada == "13") {
            resultado25 = parseInt(placar25, 10)
            resultado26 = parseInt(placar26, 10)
        }
        else if (rodada == "14") {
            resultado27 = parseInt(placar27, 10)
            resultado28 = parseInt(placar28, 10)
        }


        let posicao1
        let posicao2
        let posicao3
        let posicao4
        let posicao5
        let posicao6
        let posicao7
        let posicao8
        let posicao9
        let posicao10
        let posicao11
        let posicao12
        let posicao13
        let posicao14
        let posicao15
        let posicao16
        let posicao17
        let posicao18
        let posicao19
        let posicao20
        let posicao21
        let posicao22
        let posicao23
        let posicao24
        let posicao25
        let posicao26
        let posicao27
        let posicao28

        await apiC.post("copa/bucartodos_placar")
            .then(response => {
                posicao1 = response.data[0].id
                posicao2 = response.data[1].id
                posicao3 = response.data[2].id
                posicao4 = response.data[3].id
                posicao5 = response.data[4].id
                posicao6 = response.data[5].id
                posicao7 = response.data[6].id
                posicao8 = response.data[7].id
                posicao9 = response.data[8].id
                posicao10 = response.data[9].id
                posicao11 = response.data[10].id
                posicao12 = response.data[11].id
                posicao13 = response.data[12].id
                posicao14 = response.data[13].id
                posicao15 = response.data[14].id
                posicao16 = response.data[15].id
                posicao17 = response.data[16].id
                posicao18 = response.data[17].id
                posicao19 = response.data[18].id
                posicao20 = response.data[19].id
                posicao21 = response.data[20].id
                posicao22 = response.data[21].id
                posicao23 = response.data[22].id
                posicao24 = response.data[23].id
                posicao25 = response.data[24].id
                posicao26 = response.data[25].id
                posicao27 = response.data[26].id
                posicao28 = response.data[27].id
                if (response.status === 200) {
                }
            })
            .catch((error) => {
                alert(console.log("eroororooro", error ))
            });
        if (rodada == "1") {
            await apiC.post("copa/cadastrar_placar", {
                "placar1": resultado1,
                "id1": posicao1,
                "placar2": resultado2,
                "id2": posicao2
            })
                .then(response => {
                    if (response.status === 200) {
                        alert('Salvo com sucesso')
                        setMostrarPlacarSalvo1(true)
                    }
                })
                .catch((error) => {
                    alert(error.response.data)
                });

        } else if (rodada == "2") {
            await apiC.post("copa/cadastrar_placar", {
                "placar1": resultado3,
                "id1": posicao3,
                "placar2": resultado4,
                "id2": posicao4
            })
                .then(response => {
                    if (response.status === 200) {
                        alert('Salvo com sucesso')
                        verificarQuemAvanca()
                    }
                })
                .catch((error) => {
                    alert(error.response.data)
                });

        } else if (rodada == "3") {
            await apiC.post("copa/cadastrar_placar", {
                "placar1": resultado5,
                "id1": posicao5,
                "placar2": resultado6,
                "id2": posicao6
            })
                .then(response => {
                    if (response.status === 200) {
                        alert('Salvo com sucesso')
                    }
                })
                .catch((error) => {
                    alert(error.response.data)
                });
        } else if (rodada == "4") {
            await apiC.post("copa/cadastrar_placar", {
                "placar1": resultado7,
                "id1": posicao7,
                "placar2": resultado8,
                "id2": posicao8
            })
                .then(response => {
                    if (response.status === 200) {
                        alert('Salvo com sucesso')
                        verificarQuemAvanca()
                    }
                })
                .catch((error) => {
                    alert(error.response.data)
                });
        } else if (rodada == "5") {
            await apiC.post("copa/cadastrar_placar", {
                "placar1": resultado9,
                "id1": posicao9,
                "placar2": resultado10,
                "id2": posicao10
            })
                .then(response => {
                    if (response.status === 200) {
                        alert('Salvo com sucesso')
                    }
                })
                .catch((error) => {
                    alert(error.response.data)
                });
        } else if (rodada == "6") {
            await apiC.post("copa/cadastrar_placar", {
                "placar1": resultado11,
                "id1": posicao11,
                "placar2": resultado12,
                "id2": posicao12
            })
                .then(response => {
                    if (response.status === 200) {
                        alert('Salvo com sucesso')
                        verificarQuemAvanca()
                    }
                })
                .catch((error) => {
                    alert(error.response.data)
                });
        } else if (rodada == "7") {
            await apiC.post("copa/cadastrar_placar", {
                "placar1": resultado13,
                "id1": posicao13,
                "placar2": resultado14,
                "id2": posicao14
            })
                .then(response => {
                    if (response.status === 200) {
                        alert('Salvo com sucesso')
                    }
                })
                .catch((error) => {
                    alert(error.response.data)
                });
        } else if (rodada == "8") {
            await apiC.post("copa/cadastrar_placar", {
                "placar1": resultado15,
                "id1": posicao15,
                "placar2": resultado16,
                "id2": posicao16
            })
                .then(response => {
                    if (response.status === 200) {
                        alert('Salvo com sucesso')
                        verificarQuemAvanca()
                    }
                })
                .catch((error) => {
                    alert(error.response.data)
                });
        } else if (rodada == "9") {
            await apiC.post("copa/cadastrar_placar", {
                "placar1": resultado17,
                "id1": posicao17,
                "placar2": resultado18,
                "id2": posicao18
            })
                .then(response => {
                    if (response.status === 200) {
                        alert('Salvo com sucesso')
                    }
                })
                .catch((error) => {
                    alert(error.response.data)
                });
        } else if (rodada == "10") {
            await apiC.post("copa/cadastrar_placar", {
                "placar1": resultado19,
                "id1": posicao19,
                "placar2": resultado20,
                "id2": posicao20
            })
                .then(response => {
                    if (response.status === 200) {
                        alert('Salvo com sucesso')
                        verificarQuemAvanca()
                    }
                })
                .catch((error) => {
                    alert(error.response.data)
                });
        } else if (rodada == "11") {
            await apiC.post("copa/cadastrar_placar", {
                "placar1": resultado21,
                "id1": posicao21,
                "placar2": resultado22,
                "id2": posicao22
            })
                .then(response => {
                    if (response.status === 200) {
                        alert('Salvo com sucesso')
                    }
                })
                .catch((error) => {
                    alert(error.response.data)
                });
        } else if (rodada == "12") {
            await apiC.post("copa/cadastrar_placar", {
                "placar1": resultado23,
                "id1": posicao23,
                "placar2": resultado24,
                "id2": posicao24
            })
                .then(response => {
                    if (response.status === 200) {
                        alert('Salvo com sucesso')
                        verificarQuemAvanca()
                    }
                })
                .catch((error) => {
                    alert(error.response.data)
                });
        } else if (rodada == "13") {
            await apiC.post("copa/cadastrar_placar", {
                "placar1": resultado25,
                "id1": posicao25,
                "placar2": resultado26,
                "id2": posicao26
            })
                .then(response => {
                    if (response.status === 200) {
                        alert('Salvo com sucesso')
                    }
                })
                .catch((error) => {
                    alert(error.response.data)
                });
        } else if (rodada == "14") {
            await apiC.post("copa/cadastrar_placar", {
                "placar1": resultado27,
                "id1": posicao27,
                "placar2": resultado28,
                "id2": posicao28
            })
                .then(response => {
                    if (response.status === 200) {
                        alert('Salvo com sucesso')
                    }
                })
                .catch((error) => {
                    alert(error.response.data)
                });
        }
    }




    async function verificarQuemAvanca() {
        await apiC.post("copa/bucartodos_placar")
            .then(response => {
                if (response.status === 200) {
                    let v1 = 999
                    let v2 = 999
                    let v3 = 999
                    let v4 = 999
                    let v5 = 999
                    let v6 = 999
                    let v7 = 999
                    let v8 = 999
                    let v9 = 999
                    let v10 = 999
                    let v11 = 999
                    let v12 = 999
                    let v13 = 999
                    let v14 = 999
                    if (response.data[0].placar != null && response.data[0].placar != undefined && response.data[0].placar != 'undefined' && response.data[3].placar != null && response.data[3].placar != undefined && response.data[3].placar != 'undefined') {
                        v1 = response.data[0].placar + response.data[3].placar
                    }
                    if (response.data[1].placar != null && response.data[1].placar != undefined && response.data[1].placar != 'undefined' && response.data[2].placar != null && response.data[2].placar != undefined && response.data[2].placar != 'undefined') {
                        v2 = response.data[1].placar + response.data[2].placar
                    }
                    if (response.data[4].placar != null && response.data[4].placar != undefined && response.data[4].placar != 'undefined' && response.data[7].placar != null && response.data[7].placar != undefined && response.data[7].placar != 'undefined') {
                        v3 = response.data[4].placar + response.data[7].placar
                    }
                    if (response.data[5].placar != null && response.data[5].placar != undefined && response.data[5].placar != 'undefined' && response.data[6].placar != null && response.data[6].placar != undefined && response.data[6].placar != 'undefined') {
                        v4 = response.data[5].placar + response.data[6].placar
                    }
                    if (response.data[8].placar != null && response.data[8].placar != undefined && response.data[8].placar != 'undefined' && response.data[11].placar != null && response.data[11].placar != undefined && response.data[11].placar != 'undefined') {
                        v5 = response.data[8].placar + response.data[11].placar
                    }
                    if (response.data[9].placar != null && response.data[9].placar != undefined && response.data[9].placar != 'undefined' && response.data[10].placar != null && response.data[10].placar != undefined && response.data[10].placar != 'undefined') {
                        v6 = response.data[9].placar + response.data[10].placar
                    }
                    if (response.data[12].placar != null && response.data[12].placar != undefined && response.data[12].placar != 'undefined' && response.data[15].placar != null && response.data[15].placar != undefined && response.data[15].placar != 'undefined') {
                        v7 = response.data[12].placar + response.data[15].placar
                    }
                    if (response.data[13].placar != null && response.data[13].placar != undefined && response.data[13].placar != 'undefined' && response.data[14].placar != null && response.data[14].placar != undefined && response.data[14].placar != 'undefined') {
                        v8 = response.data[13].placar + response.data[14].placar
                    }
                    if (response.data[16].placar != null && response.data[16].placar != undefined && response.data[16].placar != 'undefined' && response.data[19].placar != null && response.data[19].placar != undefined && response.data[19].placar != 'undefined') {
                        v9 = response.data[16].placar + response.data[19].placar
                    }
                    if (response.data[18].placar != null && response.data[18].placar != undefined && response.data[18].placar != 'undefined' && response.data[17].placar != null && response.data[17].placar != undefined && response.data[17].placar != 'undefined') {
                        v10 = response.data[18].placar + response.data[17].placar
                    }
                    if (response.data[20].placar != null && response.data[20].placar != undefined && response.data[20].placar != 'undefined' && response.data[23].placar != null && response.data[23].placar != undefined && response.data[23].placar != 'undefined') {
                        v11 = response.data[20].placar + response.data[23].placar
                    }
                    if (response.data[21].placar != null && response.data[21].placar != undefined && response.data[21].placar != 'undefined' && response.data[22].placar != null && response.data[22].placar != undefined && response.data[22].placar != 'undefined') {
                        v12 = response.data[21].placar + response.data[22].placar
                    }
                    if (response.data[24].placar != null && response.data[24].placar != undefined && response.data[24].placar != 'undefined' && response.data[27].placar != null && response.data[27].placar != undefined && response.data[27].placar != 'undefined') {
                        v13 = response.data[24].placar + response.data[27].placar
                    }
                    if (response.data[25].placar != null && response.data[25].placar != undefined && response.data[25].placar != 'undefined' && response.data[26].placar != null && response.data[26].placar != undefined && response.data[26].placar != 'undefined') {
                        v14 = response.data[25].placar + response.data[26].placar
                    }



                    if (v1 != 999 && v2 != 999) {
                        if (v1 > v2) {
                            if (v3 > v4) {
                                if (v2 < v4) {
                                    setTime2s(response.data[0].nome)
                                } else {
                                    setTime1s(response.data[0].nome)
                                }
                            } else {
                                if (v2 < v3) {
                                    setTime2s(response.data[0].nome)
                                } else {
                                    setTime1s(response.data[0].nome)
                                }
                            }
                        } else {
                            if (v3 > v4) {
                                if (v1 < v4) {
                                    setTime2s(response.data[1].nome)
                                } else {
                                    setTime1s(response.data[1].nome)
                                }
                            } else {
                                if (v1 < v3) {
                                    setTime2s(response.data[1].nome)
                                } else {
                                    setTime1s(response.data[1].nome)
                                }
                            }

                        }
                    }
                    if (v3 != 999 && v4 != 999) {
                        if (v3 > v4) { if (v1 > v2) { if (v4 < v2) { setTime2s(response.data[2].nome) } else { setTime1s(response.data[2].nome) } } else { if (v4 < v1) { setTime2s(response.data[2].nome) } else { setTime1s(response.data[2].nome) } } } else { if (v1 > v2) { if (v3 < v2) { setTime2s(response.data[3].nome) } else { setTime1s(response.data[3].nome) } } else { if (v3 < v1) { setTime2s(response.data[3].nome) } else { setTime1s(response.data[3].nome) } } }
                    }
                    if (v5 != 999 && v6 != 999) {
                        if (v5 > v6) { if (v7 > v8) { if (v6 < v8) { setTime4s(response.data[4].nome) } else { setTime3s(response.data[4].nome) } } else { if (v6 < v7) { setTime4s(response.data[4].nome) } else { setTime3s(response.data[4].nome) } } } else { if (v7 > v8) { if (v5 < v8) { setTime4s(response.data[5].nome) } else { setTime3s(response.data[5].nome) } } else { if (v5 < v7) { setTime4s(response.data[5].nome) } else { setTime3s(response.data[5].nome) } } }
                    }
                    if (v7 != 999 && v8 != 999) {
                        if (v7 > v8) { if (v5 > v6) { if (v8 < v6) { setTime4s(response.data[6].nome) } else { setTime3s(response.data[6].nome) } } else { if (v8 < v5) { setTime4s(response.data[6].nome) } else { setTime3s(response.data[6].nome) } } } else { if (v5 > v6) { if (v7 < v6) { setTime4s(response.data[7].nome) } else { setTime3s(response.data[7].nome) } } else { if (v7 < v5) { setTime4s(response.data[7].nome) } else { setTime3s(response.data[7].nome) } } }
                    }
                    if (v9 != 999 && v10 != 999) {
                        if (v9 > v10) { if (v11 > v12) { if (v10 < v12) { setTime2f(response.data[8].nome) } else { setTime1f(response.data[8].nome) } } else { if (v10 < v11) { setTime2f(response.data[8].nome) } else { setTime1f(response.data[8].nome) } } } else { if (v11 > v12) { if (v9 < v12) { setTime2f(response.data[9].nome) } else { setTime1f(response.data[9].nome) } } else { if (v9 < v11) { setTime2f(response.data[9].nome) } else { setTime1f(response.data[9].nome) } } }
                    }
                    if (v11 != 999 && v12 != 999) {
                        if (v11 > v12) { if (v13 > v14) { if (v12 < v14) { setTime2f(response.data[10].nome) } else { setTime1f(response.data[10].nome) } } else { if (v12 < v13) { setTime2f(response.data[10].nome) } else { setTime1f(response.data[10].nome) } } } else { if (v13 > v14) { if (v11 < v14) { setTime2f(response.data[11].nome) } else { setTime1f(response.data[11].nome) } } else { if (v11 < v13) { setTime2f(response.data[11].nome) } else { setTime1f(response.data[11].nome) } } }
                    }

                }
            })
            .catch((error) => {
                console.log("erroooooo", error)

            });
    }


 

    function inserirData(data) {
        itensVar = []
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

    async function cadastrarNovoTime() {
        let enviarBanco = []
        enviarBanco.push(novoTime1, novoTime2, novoTime3, novoTime4, novoTime5, novoTime6, novoTime7, novoTime8)
        for (let i = 0; i < enviarBanco.length; i++) {
            await apiC.post("copa/cadastrarTime", {
                "nome": enviarBanco[i],
            }).then(response => {
                if (response.status === 200) {
                    if (contador === i) {
                        let k = i
                        for (let j = 0; j < response.data.length; j++) {
                            itensVar[k] = response.data[j]
                            k++
                        }
                    }
                    setItens(JSON.parse(JSON.stringify(itensVar)))
                    verificaSeTemTimeCadastrado()
                    setCadastrarTime(false)
                }
            })
                .catch((error) => {
                    alert('Erro ao cadastrar times')
                });
        }

    }


    return (
        <>



            <Button className="btn-filtro-arquivo" onClick={(e) => navigate('/home')}>
                <div>Home</div>
            </Button>
            {cadastrarTime &&
                <h1>Cadastre os times abaixo</h1>
            }
            {cadastrarTime &&
                <Form.Control
                    onChange={e => { setNovoTime1(e.target.value) }}
                    value={novoTime1}
                />
            }
            {cadastrarTime &&
                <Form.Control
                    onChange={e => { setNovoTime2(e.target.value) }}
                    value={novoTime2}
                />
            }
            {cadastrarTime &&
                <Form.Control
                    onChange={e => { setNovoTime3(e.target.value) }}
                    value={novoTime3}
                />
            }
            {cadastrarTime &&
                <Form.Control
                    onChange={e => { setNovoTime4(e.target.value) }}
                    value={novoTime4}
                />
            }
            {cadastrarTime &&
                <Form.Control
                    onChange={e => { setNovoTime5(e.target.value) }}
                    value={novoTime5}
                />
            }
            {cadastrarTime &&
                <Form.Control
                    onChange={e => { setNovoTime6(e.target.value) }}
                    value={novoTime6}
                />
            }
            {cadastrarTime &&
                <Form.Control
                    onChange={e => { setNovoTime7(e.target.value) }}
                    value={novoTime7}
                />
            }
            {cadastrarTime &&
                <Form.Control
                    onChange={e => { setNovoTime8(e.target.value) }}
                    value={novoTime8}
                />
            }
            {cadastrarTime &&
                <Button className="btn-filtro-arquivo" onClick={(e) => cadastrarNovoTime()}>
                    <div>Enviar times digitados</div>
                </Button>
            }

            <Dropzone onDrop={acceptedFiles => handleLerArquivo(acceptedFiles[0])}>
                {({ getRootProps, getInputProps }) => (
                    <section>
                        <div {...getRootProps()}>
                            <input {...getInputProps()} />
                            <Button className="botao-importar-foto">
                            </Button>
                        </div>
                    </section>
                )}
            </Dropzone>
            <h1>Quartas de final</h1>

            <Form.Group>
                <div className="filtros-texto-linha-margin">
                    <div className="col-sm">
                        <div className="d-flex">
                            <Form.Control
                                name="CIFRAO_VALOR_MIN"
                                className="filtros-cifrao campo-texto-cor-3"
                                type="text"
                                value={placar1}
                                placeholder="Placar"
                                onChange={e => setPlacar1(e.target.value)}
                            />
                            {/* <div className="x">X</div> */}
                            <Form.Control
                                name="VALOR_MIN"
                                className="filtros-iccid-valor-min campo-texto-cor-3"
                                type="text"
                                maxLength="4"
                                value={time1q}
                                // onChange={e => validarNumero("campo-texto-valor-minimo", e.target.value)}
                                placeholder="Time"
                            />

                            <label className="fonte-cor-1 campo-texto-cor-3 break-3"></label>

                            <Form.Control
                                name="CIFRAO_VALOR_MIN"
                                className="filtros-cifrao campo-texto-cor-3"
                                type="text"
                                value={placar2}
                                placeholder="Placar"
                                onChange={e => setPlacar2(e.target.value)}
                            />
                            <Form.Control
                                name="VALOR_MIN"
                                className="filtros-iccid-valor-min campo-texto-cor-3"
                                type="text"
                                maxLength="4"
                                value={time2q}
                                // onChange={e => validarNumero("campo-texto-valor-minimo", e.target.value)}
                                placeholder="Time"
                            />
                            <label className="fonte-cor-1 campo-texto-cor-3 break-3"></label>
                            <Button className="btn-filtro-arqui" onClick={(e) => cadastrarTimes("1")}>
                                <div>Enviar</div>
                            </Button>
                            <Form.Control
                                name="VALOR_MIN"
                                className="filtros-iccid-valor-min campo-texto-cor-3"
                                type="text"
                                maxLength="4"
                                value={""}
                                // onChange={e => validarNumero("campo-texto-valor-minimo", e.target.value)}
                                placeholder="Time"
                            />
                        </div>
                    </div>

                </div>

            </Form.Group>

            <Form.Group>
                <div className="filtros-texto-linha-margin">
                    <div className="col-sm">
                        <div className="d-flex">
                            <Form.Control
                                name="CIFRAO_VALOR_MIN"
                                className="filtros-cifrao campo-texto-cor-3"
                                type="text"
                                value={placar3}
                                placeholder="Placar"
                                onChange={e => setPlacar3(e.target.value)}
                            />
                            {/* <div className="x">X</div> */}
                            <Form.Control
                                name="VALOR_MIN"
                                className="filtros-iccid-valor-min campo-texto-cor-3"
                                type="text"
                                maxLength="4"
                                value={time2q}
                                // onChange={e => validarNumero("campo-texto-valor-minimo", e.target.value)}
                                placeholder="Time"
                            />

                            <label className="fonte-cor-1 campo-texto-cor-3 break-3"></label>

                            <Form.Control
                                name="CIFRAO_VALOR_MIN"
                                className="filtros-cifrao campo-texto-cor-3"
                                type="text"
                                value={placar4}
                                placeholder="Placar"
                                onChange={e => setPlacar4(e.target.value)}
                            />
                            <Form.Control
                                name="VALOR_MIN"
                                className="filtros-iccid-valor-min campo-texto-cor-3"
                                type="text"
                                maxLength="4"
                                value={time1q}
                                // onChange={e => validarNumero("campo-texto-valor-minimo", e.target.value)}
                                placeholder="Time"
                            />
                            <label className="fonte-cor-1 campo-texto-cor-3 break-3"></label>
                            <Button className="btn-filtro-arqui" onClick={(e) => cadastrarTimes("2")}>
                                <div>Enviar</div>
                            </Button>
                        </div>

                    </div>
                </div>

            </Form.Group>
            <Form.Group>
                <div className="filtros-texto-linha-margin">
                    <div className="col-sm">
                        <div className="d-flex">
                            <Form.Control
                                name="CIFRAO_VALOR_MIN"
                                className="filtros-cifrao campo-texto-cor-3"
                                type="text"
                                value={placar5}
                                placeholder="Placar"
                                onChange={e => setPlacar5(e.target.value)}
                            />
                            {/* <div className="x">X</div> */}
                            <Form.Control
                                name="VALOR_MIN"
                                className="filtros-iccid-valor-min campo-texto-cor-3"
                                type="text"
                                maxLength="4"
                                value={time3q}
                                // onChange={e => validarNumero("campo-texto-valor-minimo", e.target.value)}
                                placeholder="Time"
                            />

                            <label className="fonte-cor-1 campo-texto-cor-3 break-3"></label>

                            <Form.Control
                                name="CIFRAO_VALOR_MIN"
                                className="filtros-cifrao campo-texto-cor-3"
                                type="text"
                                value={placar6}
                                onChange={e => setPlacar6(e.target.value)}
                                placeholder="Placar"
                            />
                            <Form.Control
                                name="VALOR_MIN"
                                className="filtros-iccid-valor-min campo-texto-cor-3"
                                type="text"
                                maxLength="4"
                                value={time4q}
                                // onChange={e => validarNumero("campo-texto-valor-minimo", e.target.value)}
                                placeholder="Time"
                            />
                            <label className="fonte-cor-1 campo-texto-cor-3 break-3"></label>
                            <Button className="btn-filtro-arqui" onClick={(e) => cadastrarTimes("3")}>
                                <div>Enviar</div>
                            </Button>
                        </div>

                    </div>
                </div>

            </Form.Group>
            <Form.Group>
                <div className="filtros-texto-linha-margin">
                    <div className="col-sm">
                        <div className="d-flex">
                            <Form.Control
                                name="CIFRAO_VALOR_MIN"
                                className="filtros-cifrao campo-texto-cor-3"
                                type="text"
                                value={placar7}
                                placeholder="Placar"
                                onChange={e => setPlacar7(e.target.value)}
                            />
                            {/* <div className="x">X</div> */}
                            <Form.Control
                                name="VALOR_MIN"
                                className="filtros-iccid-valor-min campo-texto-cor-3"
                                type="text"
                                maxLength="4"
                                value={time4q}
                                // onChange={e => validarNumero("campo-texto-valor-minimo", e.target.value)}
                                placeholder="Time"
                            />

                            <label className="fonte-cor-1 campo-texto-cor-3 break-3"></label>

                            <Form.Control
                                name="CIFRAO_VALOR_MIN"
                                className="filtros-cifrao campo-texto-cor-3"
                                type="text"
                                value={placar8}
                                onChange={e => setPlacar8(e.target.value)}
                                placeholder="Placar"
                            />
                            <Form.Control
                                name="VALOR_MIN"
                                className="filtros-iccid-valor-min campo-texto-cor-3"
                                type="text"
                                maxLength="4"
                                value={time3q}
                                // onChange={e => validarNumero("campo-texto-valor-minimo", e.target.value)}
                                placeholder="Time"
                            />
                            <label className="fonte-cor-1 campo-texto-cor-3 break-3"></label>
                            <Button className="btn-filtro-arqui" onClick={(e) => cadastrarTimes("4")}>
                                <div>Enviar</div>
                            </Button>
                        </div>

                    </div>
                </div>

            </Form.Group>
            <Form.Group>
                <div className="filtros-texto-linha-margin">
                    <div className="col-sm">
                        <div className="d-flex">
                            <Form.Control
                                name="CIFRAO_VALOR_MIN"
                                className="filtros-cifrao campo-texto-cor-3"
                                type="text"
                                value={placar9}
                                placeholder="Placar"
                                onChange={e => setPlacar9(e.target.value)}
                            />
                            {/* <div className="x">X</div> */}
                            <Form.Control
                                name="VALOR_MIN"
                                className="filtros-iccid-valor-min campo-texto-cor-3"
                                type="text"
                                maxLength="4"
                                value={time5q}
                                // onChange={e => validarNumero("campo-texto-valor-minimo", e.target.value)}
                                placeholder="Time"
                            />

                            <label className="fonte-cor-1 campo-texto-cor-3 break-3"></label>

                            <Form.Control
                                name="CIFRAO_VALOR_MIN"
                                className="filtros-cifrao campo-texto-cor-3"
                                type="text"
                                value={placar10}
                                placeholder="Placar"
                                onChange={e => setPlacar10(e.target.value)}
                            />
                            <Form.Control
                                name="VALOR_MIN"
                                className="filtros-iccid-valor-min campo-texto-cor-3"
                                type="text"
                                maxLength="4"
                                value={time6q}
                                // onChange={e => validarNumero("campo-texto-valor-minimo", e.target.value)}
                                placeholder="Time"
                            />
                            <label className="fonte-cor-1 campo-texto-cor-3 break-3"></label>
                            <Button className="btn-filtro-arqui" onClick={(e) => cadastrarTimes("5")}>
                                <div>Enviar</div>
                            </Button>
                        </div>

                    </div>
                </div>

            </Form.Group>
            <Form.Group>
                <div className="filtros-texto-linha-margin">
                    <div className="col-sm">
                        <div className="d-flex">
                            <Form.Control
                                name="CIFRAO_VALOR_MIN"
                                className="filtros-cifrao campo-texto-cor-3"
                                type="text"
                                value={placar11}
                                placeholder="Placar"
                                onChange={e => setPlacar11(e.target.value)}
                            />
                            {/* <div className="x">X</div> */}
                            <Form.Control
                                name="VALOR_MIN"
                                className="filtros-iccid-valor-min campo-texto-cor-3"
                                type="text"
                                maxLength="4"
                                value={time6q}
                                // onChange={e => validarNumero("campo-texto-valor-minimo", e.target.value)}
                                placeholder="Time"
                            />

                            <label className="fonte-cor-1 campo-texto-cor-3 break-3"></label>

                            <Form.Control
                                name="CIFRAO_VALOR_MIN"
                                className="filtros-cifrao campo-texto-cor-3"
                                type="text"
                                value={placar12}
                                placeholder="Placar"
                                onChange={e => setPlacar12(e.target.value)}
                            />
                            <Form.Control
                                name="VALOR_MIN"
                                className="filtros-iccid-valor-min campo-texto-cor-3"
                                type="text"
                                maxLength="4"
                                value={time5q}
                                // onChange={e => validarNumero("campo-texto-valor-minimo", e.target.value)}
                                placeholder="Time"
                            />
                            <label className="fonte-cor-1 campo-texto-cor-3 break-3"></label>
                            <Button className="btn-filtro-arqui" onClick={(e) => cadastrarTimes("6")}>
                                <div>Enviar</div>
                            </Button>
                        </div>

                    </div>
                </div>

            </Form.Group>
            <Form.Group>
                <div className="filtros-texto-linha-margin">
                    <div className="col-sm">
                        <div className="d-flex">
                            <Form.Control
                                name="CIFRAO_VALOR_MIN"
                                className="filtros-cifrao campo-texto-cor-3"
                                type="text"
                                value={placar13}
                                placeholder="Placar"
                                onChange={e => setPlacar13(e.target.value)}
                            />
                            {/* <div className="x">X</div> */}
                            <Form.Control
                                name="VALOR_MIN"
                                className="filtros-iccid-valor-min campo-texto-cor-3"
                                type="text"
                                maxLength="4"
                                value={time7q}
                                // onChange={e => validarNumero("campo-texto-valor-minimo", e.target.value)}
                                placeholder="Time"
                            />

                            <label className="fonte-cor-1 campo-texto-cor-3 break-3"></label>

                            <Form.Control
                                name="CIFRAO_VALOR_MIN"
                                className="filtros-cifrao campo-texto-cor-3"
                                type="text"
                                value={placar14}
                                placeholder="Placar"
                                onChange={e => setPlacar14(e.target.value)}
                            />
                            <Form.Control
                                name="VALOR_MIN"
                                className="filtros-iccid-valor-min campo-texto-cor-3"
                                type="text"
                                maxLength="4"
                                value={time8q}
                                // onChange={e => validarNumero("campo-texto-valor-minimo", e.target.value)}
                                placeholder="Time"
                            />
                            <label className="fonte-cor-1 campo-texto-cor-3 break-3"></label>
                            <Button className="btn-filtro-arqui" onClick={(e) => cadastrarTimes("7")}>
                                <div>Enviar</div>
                            </Button>
                        </div>

                    </div>
                </div>

            </Form.Group>
            <Form.Group>
                <div className="filtros-texto-linha-margin">
                    <div className="col-sm">
                        <div className="d-flex">
                            <Form.Control
                                name="CIFRAO_VALOR_MIN"
                                className="filtros-cifrao campo-texto-cor-3"
                                type="text"
                                value={placar15}
                                placeholder="Placar"
                                onChange={e => setPlacar15(e.target.value)}
                            />
                            {/* <div className="x">X</div> */}
                            <Form.Control
                                name="VALOR_MIN"
                                className="filtros-iccid-valor-min campo-texto-cor-3"
                                type="text"
                                maxLength="4"
                                value={time8q}
                                // onChange={e => validarNumero("campo-texto-valor-minimo", e.target.value)}
                                placeholder="Time"
                            />

                            <label className="fonte-cor-1 campo-texto-cor-3 break-3"></label>

                            <Form.Control
                                name="CIFRAO_VALOR_MIN"
                                className="filtros-cifrao campo-texto-cor-3"
                                type="text"
                                value={placar16}
                                placeholder="Placar"
                                onChange={e => setPlacar16(e.target.value)}
                            />
                            <Form.Control
                                name="VALOR_MIN"
                                className="filtros-iccid-valor-min campo-texto-cor-3"
                                type="text"
                                maxLength="4"
                                value={time7q}
                                // onChange={e => validarNumero("campo-texto-valor-minimo", e.target.value)}
                                placeholder="Time"
                            />
                            <label className="fonte-cor-1 campo-texto-cor-3 break-3"></label>
                            <Button className="btn-filtro-arqui" onClick={(e) => cadastrarTimes("8")}>
                                <div>Enviar</div>
                            </Button>
                        </div>

                    </div>
                </div>

            </Form.Group>
            <h1>Semifinal</h1>

            <Form.Group>
                <div className="filtros-texto-linha-margin">
                    <div className="col-sm">
                        <div className="d-flex">
                            <Form.Control
                                name="CIFRAO_VALOR_MIN"
                                className="filtros-cifrao campo-texto-cor-3"
                                type="text"
                                value={placar17}
                                placeholder="Placar"
                                onChange={e => setPlacar17(e.target.value)}
                            />
                            {/* <div className="x">X</div> */}
                            <Form.Control
                                name="VALOR_MIN"
                                className="filtros-iccid-valor-min campo-texto-cor-3"
                                type="text"
                                maxLength="4"
                                value={time1s}
                                // onChange={e => validarNumero("campo-texto-valor-minimo", e.target.value)}
                                placeholder="Time"
                            />

                            <label className="fonte-cor-1 campo-texto-cor-3 break-3"></label>

                            <Form.Control
                                name="CIFRAO_VALOR_MIN"
                                className="filtros-cifrao campo-texto-cor-3"
                                type="text"
                                value={placar18}
                                placeholder="Placar"
                                onChange={e => setPlacar18(e.target.value)}
                            />
                            <Form.Control
                                name="VALOR_MIN"
                                className="filtros-iccid-valor-min campo-texto-cor-3"
                                type="text"
                                maxLength="4"
                                value={time2s}
                                // onChange={e => validarNumero("campo-texto-valor-minimo", e.target.value)}
                                placeholder="Time"
                            />
                            <label className="fonte-cor-1 campo-texto-cor-3 break-3"></label>
                            <Button className="btn-filtro-arqui" onClick={(e) => cadastrarTimes("9")}>
                                <div>Enviar</div>
                            </Button>
                        </div>

                    </div>
                </div>

            </Form.Group>
            <Form.Group>
                <div className="filtros-texto-linha-margin">
                    <div className="col-sm">
                        <div className="d-flex">
                            <Form.Control
                                name="CIFRAO_VALOR_MIN"
                                className="filtros-cifrao campo-texto-cor-3"
                                type="text"
                                value={placar19}
                                placeholder="Placar"
                                onChange={e => setPlacar19(e.target.value)}
                            />
                            {/* <div className="x">X</div> */}
                            <Form.Control
                                name="VALOR_MIN"
                                className="filtros-iccid-valor-min campo-texto-cor-3"
                                type="text"
                                maxLength="4"
                                value={time2s}
                                // onChange={e => validarNumero("campo-texto-valor-minimo", e.target.value)}
                                placeholder="Time"
                            />

                            <label className="fonte-cor-1 campo-texto-cor-3 break-3"></label>

                            <Form.Control
                                name="CIFRAO_VALOR_MIN"
                                className="filtros-cifrao campo-texto-cor-3"
                                type="text"
                                value={placar20}
                                placeholder="Placar"
                                onChange={e => setPlacar20(e.target.value)}
                            />
                            <Form.Control
                                name="VALOR_MIN"
                                className="filtros-iccid-valor-min campo-texto-cor-3"
                                type="text"
                                maxLength="4"
                                value={time1s}
                                // onChange={e => validarNumero("campo-texto-valor-minimo", e.target.value)}
                                placeholder="Time"
                            />
                            <label className="fonte-cor-1 campo-texto-cor-3 break-3"></label>
                            <Button className="btn-filtro-arqui" onClick={(e) => cadastrarTimes("10")}>
                                <div>Enviar</div>
                            </Button>
                        </div>

                    </div>
                </div>

            </Form.Group>
            <Form.Group>
                <div className="filtros-texto-linha-margin">
                    <div className="col-sm">
                        <div className="d-flex">
                            <Form.Control
                                name="CIFRAO_VALOR_MIN"
                                className="filtros-cifrao campo-texto-cor-3"
                                type="text"
                                value={placar21}
                                placeholder="Placar"
                                onChange={e => setPlacar21(e.target.value)}
                            />
                            {/* <div className="x">X</div> */}
                            <Form.Control
                                name="VALOR_MIN"
                                className="filtros-iccid-valor-min campo-texto-cor-3"
                                type="text"
                                maxLength="4"
                                value={time3s}
                                // onChange={e => validarNumero("campo-texto-valor-minimo", e.target.value)}
                                placeholder="Time"
                            />

                            <label className="fonte-cor-1 campo-texto-cor-3 break-3"></label>

                            <Form.Control
                                name="CIFRAO_VALOR_MIN"
                                className="filtros-cifrao campo-texto-cor-3"
                                type="text"
                                value={placar22}
                                placeholder="Placar"
                                onChange={e => setPlacar22(e.target.value)}
                            />
                            <Form.Control
                                name="VALOR_MIN"
                                className="filtros-iccid-valor-min campo-texto-cor-3"
                                type="text"
                                maxLength="4"
                                value={time4s}
                                // onChange={e => validarNumero("campo-texto-valor-minimo", e.target.value)}
                                placeholder="Time"
                            />
                            <label className="fonte-cor-1 campo-texto-cor-3 break-3"></label>
                            <Button className="btn-filtro-arqui" onClick={(e) => cadastrarTimes("11")}>
                                <div>Enviar</div>
                            </Button>
                        </div>

                    </div>
                </div>

            </Form.Group>
            <Form.Group>
                <div className="filtros-texto-linha-margin">
                    <div className="col-sm">
                        <div className="d-flex">
                            <Form.Control
                                name="CIFRAO_VALOR_MIN"
                                className="filtros-cifrao campo-texto-cor-3"
                                type="text"
                                value={placar23}
                                placeholder="Placar"
                                onChange={e => setPlacar23(e.target.value)}
                            />
                            {/* <div className="x">X</div> */}
                            <Form.Control
                                name="VALOR_MIN"
                                className="filtros-iccid-valor-min campo-texto-cor-3"
                                type="text"
                                maxLength="4"
                                value={time4s}
                                // onChange={e => validarNumero("campo-texto-valor-minimo", e.target.value)}
                                placeholder="Time"
                            />

                            <label className="fonte-cor-1 campo-texto-cor-3 break-3"></label>

                            <Form.Control
                                name="CIFRAO_VALOR_MIN"
                                className="filtros-cifrao campo-texto-cor-3"
                                type="text"
                                value={placar24}
                                placeholder="Placar"
                                onChange={e => setPlacar24(e.target.value)}
                            />
                            <Form.Control
                                name="VALOR_MIN"
                                className="filtros-iccid-valor-min campo-texto-cor-3"
                                type="text"
                                maxLength="4"
                                value={time3s}
                                // onChange={e => validarNumero("campo-texto-valor-minimo", e.target.value)}
                                placeholder="Time"
                            />
                            <label className="fonte-cor-1 campo-texto-cor-3 break-3"></label>
                            <Button className="btn-filtro-arqui" onClick={(e) => cadastrarTimes("12")}>
                                <div>Enviar</div>
                            </Button>
                        </div>

                    </div>
                </div>

            </Form.Group>
            <h1>Final</h1>
            <Form.Group>
                <div className="filtros-texto-linha-margin">
                    <div className="col-sm">
                        <div className="d-flex">
                            <Form.Control
                                name="CIFRAO_VALOR_MIN"
                                className="filtros-cifrao campo-texto-cor-3"
                                type="text"
                                value={placar25}
                                placeholder="Placar"
                                onChange={e => setPlacar25(e.target.value)}
                            />
                            {/* <div className="x">X</div> */}
                            <Form.Control
                                name="VALOR_MIN"
                                className="filtros-iccid-valor-min campo-texto-cor-3"
                                type="text"
                                maxLength="4"
                                value={time1f}
                                // onChange={e => validarNumero("campo-texto-valor-minimo", e.target.value)}
                                placeholder="Time"
                            />

                            <label className="fonte-cor-1 campo-texto-cor-3 break-3"></label>

                            <Form.Control
                                name="CIFRAO_VALOR_MIN"
                                className="filtros-cifrao campo-texto-cor-3"
                                type="text"
                                value={placar26}
                                placeholder="Placar"
                                onChange={e => setPlacar26(e.target.value)}
                            />
                            <Form.Control
                                name="VALOR_MIN"
                                className="filtros-iccid-valor-min campo-texto-cor-3"
                                type="text"
                                maxLength="4"
                                value={time2f}
                                // onChange={e => validarNumero("campo-texto-valor-minimo", e.target.value)}
                                placeholder="Time"
                            />
                            <label className="fonte-cor-1 campo-texto-cor-3 break-3"></label>
                            <Button className="btn-filtro-arqui" onClick={(e) => cadastrarTimes("13")}>
                                <div>Enviar</div>
                            </Button>
                        </div>

                    </div>
                </div>

            </Form.Group>
            <Form.Group>
                <div className="filtros-texto-linha-margin">
                    <div className="col-sm">
                        <div className="d-flex">
                            <Form.Control
                                name="CIFRAO_VALOR_MIN"
                                className="filtros-cifrao campo-texto-cor-3"
                                type="text"
                                value={placar27}
                                placeholder="Placar"
                                onChange={e => setPlacar27(e.target.value)}
                            />
                            {/* <div className="x">X</div> */}
                            <Form.Control
                                name="VALOR_MIN"
                                className="filtros-iccid-valor-min campo-texto-cor-3"
                                type="text"
                                maxLength="4"
                                value={time2f}
                                // onChange={e => validarNumero("campo-texto-valor-minimo", e.target.value)}
                                placeholder="Time"
                            />

                            <label className="fonte-cor-1 campo-texto-cor-3 break-3"></label>

                            <Form.Control
                                name="CIFRAO_VALOR_MIN"
                                className="filtros-cifrao campo-texto-cor-3"
                                type="text"
                                value={placar28}
                                placeholder="Placar"
                                onChange={e => setPlacar28(e.target.value)}
                            />
                            <Form.Control
                                name="VALOR_MIN"
                                className="filtros-iccid-valor-min campo-texto-cor-3"
                                type="text"
                                maxLength="4"
                                value={time1f}
                                // onChange={e => validarNumero("campo-texto-valor-minimo", e.target.value)}
                                placeholder="Time"
                            />
                            <label className="fonte-cor-1 campo-texto-cor-3 break-3"></label>
                            <Button className="btn-filtro-arqui" onClick={(e) => cadastrarTimes("14")}>
                                <div>Enviar</div>
                            </Button>

                        </div>

                    </div>

                </div>

            </Form.Group>


        </>

    )
}
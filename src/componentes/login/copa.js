import React, { useState, useEffect } from 'react';/*eslint-disable*/
import '../../css/torneio/copa.css';
import { Button, Image, Form, InputGroup, FormControl, Col, Carousel, Alert } from 'react-bootstrap';
import { apiC } from "../../conexoes/api";
import BootstrapTable from 'react-bootstrap-table-next';
import { useNavigate } from 'react-router-dom';
import Dropzone from "react-dropzone";


export default function SuperCopa() {

    function ImagemDinamica({ caminho }) {
        console.log("caminho", caminho)
        return   <img
        src={`/${caminho}`}
        alt="Imagem"
        style={{ width: '157px', height: 'auto' }}
      />;
      }

      const imagem = "utils/escudoTimes/Democration.png" 

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
    const [placar29, setPlacar29] = useState('');
    const [placar30, setPlacar30] = useState('');
    const [placar31, setPlacar31] = useState('');
    const [placar32, setPlacar32] = useState('');
     const [mostrarCampeao, setMostrarCampeao] = useState(false);
    const [placarProrrogacao29, setPlacarProrrogacao29] = useState('');
    const [placarProrrogacao30, setPlacarProrrogacao30] = useState('');
    const [placarProrrogacao31, setPlacarProrrogacao31] = useState('');
    const [placarProrrogacao32, setPlacarProrrogacao32] = useState('');
    const [placarProrrogacao33, setPlacarProrrogacao33] = useState('');
    const [placarProrrogacao34, setPlacarProrrogacao34] = useState('');
    const [placarProrrogacao35, setPlacarProrrogacao35] = useState('');
    const [placarProrrogacao36, setPlacarProrrogacao36] = useState('');
    const [placarProrrogacao37, setPlacarProrrogacao37] = useState('');
    const [placarProrrogacao38, setPlacarProrrogacao38] = useState('');
    const [placarProrrogacao39, setPlacarProrrogacao39] = useState('');
    const [placarProrrogacao40, setPlacarProrrogacao40] = useState('');
    const [placarProrrogacao41, setPlacarProrrogacao41] = useState('');
    const [placarProrrogacao42, setPlacarProrrogacao42] = useState('');
    const [placarProrrogacao43, setPlacarProrrogacao43] = useState('');
    const [placarProrrogacao44, setPlacarProrrogacao44] = useState('');
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
    const [time1t, setTime1t] = useState('');
    const [time2t, setTime2t] = useState('');
    const [liga, setLiga] = useState('');
    const navigate = useNavigate();

    const [novoTime1, setNovoTime1] = useState('');
    const [novoTime2, setNovoTime2] = useState('');
    const [novoTime3, setNovoTime3] = useState('');
    const [novoTime4, setNovoTime4] = useState('');
    const [novoTime5, setNovoTime5] = useState('');
    const [novoTime6, setNovoTime6] = useState('');
    const [novoTime7, setNovoTime7] = useState('');
    const [novoTime8, setNovoTime8] = useState('');
    const [cadastrarTime, setCadastrarTime] = useState(false);
    const [semifinais, setSemifinais] = useState(false);
    const [terceiro, setTerceiro] = useState(false);
    const [finais, setFinais] = useState(false);
    const [prorrogacao, setProrrogacao] = useState(false);
    const [prorrogacao2, setProrrogacao2] = useState(false);
    const [prorrogacao3, setProrrogacao3] = useState(false);
    const [prorrogacao4, setProrrogacao4] = useState(false);
    const [prorrogacao5, setProrrogacao5] = useState(false);
    const [prorrogacao6, setProrrogacao6] = useState(false);
    const [prorrogacao7, setProrrogacao7] = useState(false);
    const [prorrogacao8, setProrrogacao8] = useState(false);
    const [data, setData] = useState('');
    const [data2, setData2] = useState('');
    const [data3, setData3] = useState('');
    const [data4, setData4] = useState('');
    const [data5, setData5] = useState('');
    const [data6, setData6] = useState('');
    const [data7, setData7] = useState('');
    const [data8, setData8] = useState('');
    const [data9, setData9] = useState('');
    const [data10, setData10] = useState('');
    const [data11, setData11] = useState('');
    const [data12, setData12] = useState('');
    const [data13, setData13] = useState('');
    const [data14, setData14] = useState('');
    const [data15, setData15] = useState('');
    const [data16, setData16] = useState('');
    const [data17, setData17] = useState('');
    const [data18, setData18] = useState('');
    const [data19, setData19] = useState('');
    const [data20, setData20] = useState('');
    const [data21, setData21] = useState('');
    const [data22, setData22] = useState('');
    const [data23, setData23] = useState('');
    const [data24, setData24] = useState('');
    const [mostrarVencedores, setMostrarVencedores] = useState(true);

    let contador = 0
    let itensVar = []
    

     const [jogadorcampeao1, setJogadorcampeao1] = useState('');
        const [jogadorcampeao2, setJogadorcampeao2] = useState('');
        const [jogadorcampeao3, setJogadorcampeao3] = useState('');
        const [jogadorcampeao4, setJogadorcampeao4] = useState('');
        const [nomeTorneio, setNomeTorneio] = useState('');
        const [nomeTime, setNomeTime] = useState('');
        const [escudo, setEscudo] = useState('');
    
        const [jogadorvice1, setJogadorvice1] = useState('');
        const [jogadorvice2, setJogadorvice2] = useState('');
        const [jogadorvice3, setJogadorvice3] = useState('');
        const [jogadorvice4, setJogadorvice4] = useState('');


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
        async function bucartodos_placar() {
            await apiC.post("copa/bucartodos_placar")
                .then(response => {

                    if (response.data[0].placar != null) {
                        setPlacar1(response.data[0].placar)
                        const formData = new Date(response.data[0].data)
                        let dt = formData.toLocaleString('pt-BR')
                        setData(dt)
                    }
                    if (response.data[1].placar != null) {
                        setPlacar2(response.data[1].placar)


                    }
                    if (response.data[2].placar != null) {
                        setPlacar3(response.data[2].placar)
                        const formData = new Date(response.data[2].data)
                        let dt = formData.toLocaleString('pt-BR')
                        setData2(dt)
                    }
                    if (response.data[3].placar != null) {
                        setPlacar4(response.data[3].placar)
                    }
                    if (response.data[4].placar != null) {
                        setPlacar5(response.data[4].placar)
                        const formData = new Date(response.data[4].data)
                        let dt = formData.toLocaleString('pt-BR')
                        setData3(dt)
                    }
                    if (response.data[5].placar != null) {
                        setPlacar6(response.data[5].placar)
                    }
                    if (response.data[6].placar != null) {
                        setPlacar7(response.data[6].placar)
                        const formData = new Date(response.data[6].data)
                        let dt = formData.toLocaleString('pt-BR')
                        setData4(dt)
                    }
                    if (response.data[7].placar != null) {
                        setPlacar8(response.data[7].placar)
                    }
                    if (response.data[8].placar != null) {
                        setPlacar9(response.data[8].placar)
                        const formData = new Date(response.data[8].data)
                        let dt = formData.toLocaleString('pt-BR')
                        setData5(dt)
                    }
                    if (response.data[9].placar != null) {
                        setPlacar10(response.data[9].placar)

                    }
                    if (response.data[10].placar != null) {
                        setPlacar11(response.data[10].placar)
                        const formData = new Date(response.data[10].data)
                        let dt = formData.toLocaleString('pt-BR')
                        setData6(dt)
                    }
                    if (response.data[11].placar != null) {
                        setPlacar12(response.data[11].placar)
                    }
                    if (response.data[12].placar != null) {
                        setPlacar13(response.data[12].placar)
                        const formData = new Date(response.data[12].data)
                        let dt = formData.toLocaleString('pt-BR')
                        setData7(dt)
                    }
                    if (response.data[13].placar != null) {
                        setPlacar14(response.data[13].placar)
                    }
                    if (response.data[14].placar != null) {
                        setPlacar15(response.data[14].placar)
                        const formData = new Date(response.data[14].data)
                        let dt = formData.toLocaleString('pt-BR')
                        setData8(dt)
                    }
                    if (response.data[15].placar != null) {
                        setPlacar16(response.data[15].placar)
                    }
                    if (response.data[16].placar != null) {
                        setPlacar17(response.data[16].placar)
                        const formData = new Date(response.data[16].data)
                        let dt = formData.toLocaleString('pt-BR')
                        setData9(dt)
                    }
                    if (response.data[17].placar != null) {
                        setPlacar18(response.data[17].placar)
                    }
                    if (response.data[18].placar != null) {
                        setPlacar19(response.data[18].placar)
                        const formData = new Date(response.data[18].data)
                        let dt = formData.toLocaleString('pt-BR')
                        setData10(dt)
                    }
                    if (response.data[19].placar != null) {
                        setPlacar20(response.data[19].placar)
                    }
                    if (response.data[20].placar != null) {
                        setPlacar21(response.data[20].placar)
                        const formData = new Date(response.data[20].data)
                        let dt = formData.toLocaleString('pt-BR')
                        setData11(dt)
                    }
                    if (response.data[21].placar != null) {
                        setPlacar22(response.data[21].placar)
                    }
                    if (response.data[22].placar != null) {
                        setPlacar23(response.data[22].placar)
                        const formData = new Date(response.data[22].data)
                        let dt = formData.toLocaleString('pt-BR')
                        setData12(dt)
                    }
                    if (response.data[23].placar != null) {
                        setPlacar24(response.data[23].placar)
                    }
                    if (response.data[24].placar != null) {
                        setPlacar25(response.data[24].placar)
                        const formData = new Date(response.data[24].data)
                        let dt = formData.toLocaleString('pt-BR')
                        setData13(dt)
                    }
                    if (response.data[25].placar != null) {
                        setPlacar26(response.data[25].placar)
                    }
                    if (response.data[26].placar != null) {
                        setPlacar27(response.data[26].placar)
                        const formData = new Date(response.data[26].data)
                        let dt = formData.toLocaleString('pt-BR')
                        setData14(dt)
                    }
                    if (response.data[27].placar != null) {
                        setPlacar28(response.data[27].placar)
                    }
                    if (response.data[42].placar != null) {
                        setPlacar29(response.data[42].placar)
                        const formData = new Date(response.data[42].data)
                        let dt = formData.toLocaleString('pt-BR')
                        setData22(dt)
                    }
                    if (response.data[43].placar != null) {
                        setPlacar30(response.data[43].placar)
                    }
                    if (response.data[44].placar != null) {
                        setPlacar31(response.data[44].placar)
                        const formData = new Date(response.data[44].data)
                        let dt = formData.toLocaleString('pt-BR')
                        setData23(dt)
                    }
                    if (response.data[45].placar != null) {
                        setPlacar32(response.data[45].placar)
                    }


                    //prorrogação
                    if (response.data[28].placar != null) {
                        setPlacarProrrogacao29(response.data[28].placar)
                        setProrrogacao(true)
                        const formData = new Date(response.data[28].data)
                        let dt = formData.toLocaleString('pt-BR')
                        setData15(dt)
                    }
                    if (response.data[29].placar != null) {
                        setPlacarProrrogacao30(response.data[29].placar)
                    }
                    if (response.data[30].placar != null) {
                        setPlacarProrrogacao31(response.data[30].placar)
                        setProrrogacao2(true)
                        const formData = new Date(response.data[30].data)
                        let dt = formData.toLocaleString('pt-BR')
                        setData16(dt)
                    }
                    if (response.data[31].placar != null) {
                        setPlacarProrrogacao32(response.data[31].placar)
                    }
                    if (response.data[32].placar != null) {
                        setPlacarProrrogacao33(response.data[32].placar)
                        setProrrogacao3(true)
                        const formData = new Date(response.data[32].data)
                        let dt = formData.toLocaleString('pt-BR')
                        setData17(dt)
                    }
                    if (response.data[33].placar != null) {
                        setPlacarProrrogacao34(response.data[33].placar)
                    }
                    if (response.data[34].placar != null) {
                        setPlacarProrrogacao35(response.data[34].placar)
                        setProrrogacao4(true)
                        const formData = new Date(response.data[34].data)
                        let dt = formData.toLocaleString('pt-BR')
                        setData18(dt)
                    }
                    if (response.data[35].placar != null) {
                        setPlacarProrrogacao36(response.data[35].placar)
                    }
                    if (response.data[36].placar != null) {
                        setPlacarProrrogacao37(response.data[36].placar)
                        setProrrogacao5(true)
                        const formData = new Date(response.data[36].data)
                        let dt = formData.toLocaleString('pt-BR')
                        setData19(dt)
                    }
                    if (response.data[37].placar != null) {
                        setPlacarProrrogacao38(response.data[37].placar)
                    }
                    if (response.data[38].placar != null) {
                        setPlacarProrrogacao39(response.data[38].placar)
                        setProrrogacao6(true)
                        const formData = new Date(response.data[38].data)
                        let dt = formData.toLocaleString('pt-BR')
                        setData20(dt)
                    }
                    if (response.data[39].placar != null) {
                        setPlacarProrrogacao40(response.data[39].placar)
                    }
                    if (response.data[40].placar != null) {
                        setPlacarProrrogacao41(response.data[40].placar)
                        setProrrogacao7(true)
                        const formData = new Date(response.data[40].data)
                        let dt = formData.toLocaleString('pt-BR')
                        setData21(dt)
                    }
                    if (response.data[41].placar != null) {
                        setPlacarProrrogacao42(response.data[41].placar)
                    }
                    if (response.data[46].placar != null) {
                        setPlacarProrrogacao43(response.data[46].placar)
                        setProrrogacao8(true)
                        const formData = new Date(response.data[46].data)
                        let dt = formData.toLocaleString('pt-BR')
                        setData24(dt)
                    }
                    if (response.data[47].placar != null) {
                        setPlacarProrrogacao44(response.data[47].placar)
                    }

                })
                .catch((error) => {
                });
        }
        bucartodos_placar()

    }, [])

    if (placar25) {
        jogadoresCampeoes()
    }


    async function verificaSeTemTimeCadastrado() {

        await apiC.post("copa/bucartodos")
            .then(response => {
                if (response.status === 200) {
                    if (response.data.length > 0) {
                        if (response.data[0].nome != null) {
                            setTime1s(response.data[0].nome)
                        }
                        if (response.data[1].nome != null) {
                            setTime2s(response.data[1].nome)
                        }
                        if (response.data[2].nome != null) {
                            setTime3s(response.data[2].nome)
                        }
                        if (response.data[3].nome != null) {
                            setTime4s(response.data[3].nome)
                        }
                        if (response.data[4].nome != null) {
                            setTime1f(response.data[4].nome)
                        }
                        if (response.data[5].nome != null) {
                            setTime2f(response.data[5].nome)
                        }
                        if (response.data[6].nome != null) {
                            setTime1t(response.data[6].nome)
                        }
                        if (response.data[7].nome != null) {
                            setTime2t(response.data[7].nome)
                        }
                    }

                    else {
                        alert('nenhum time cadatrado, por favor faça o cadastro dos times')
                        setSemifinais(true)
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
        let resultado43
        let resultado44
        let resultado45
        let resultado46

        //prorrogação
        let resultado29
        let resultado30
        let resultado31
        let resultado32
        let resultado33
        let resultado34
        let resultado35
        let resultado36
        let resultado37
        let resultado38
        let resultado39
        let resultado40
        let resultado41
        let resultado42
        let resultado47
        let resultado48

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
        else if (rodada == "15") {
            resultado29 = parseInt(placarProrrogacao29, 10)
            resultado30 = parseInt(placarProrrogacao30, 10)
        }
        else if (rodada == "16") {
            resultado31 = parseInt(placarProrrogacao31, 10)
            resultado32 = parseInt(placarProrrogacao32, 10)
        }
        else if (rodada == "17") {
            resultado33 = parseInt(placarProrrogacao33, 10)
            resultado34 = parseInt(placarProrrogacao34, 10)
        }
        else if (rodada == "18") {
            resultado35 = parseInt(placarProrrogacao35, 10)
            resultado36 = parseInt(placarProrrogacao36, 10)
        }
        else if (rodada == "19") {
            resultado37 = parseInt(placarProrrogacao37, 10)
            resultado38 = parseInt(placarProrrogacao38, 10)
        }
        else if (rodada == "20") {
            resultado39 = parseInt(placarProrrogacao39, 10)
            resultado40 = parseInt(placarProrrogacao40, 10)
        }
        else if (rodada == "21") {
            resultado41 = parseInt(placarProrrogacao41, 10)
            resultado42 = parseInt(placarProrrogacao42, 10)
        }
        else if (rodada == "22") {
            resultado43 = parseInt(placar29, 10)
            resultado44 = parseInt(placar30, 10)
        }
        else if (rodada == "23") {
            resultado45 = parseInt(placar31, 10)
            resultado46 = parseInt(placar32, 10)
        }
        else if (rodada == "24") {
            resultado47 = parseInt(placarProrrogacao43, 10)
            resultado48 = parseInt(placarProrrogacao44, 10)
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
        let posicao29
        let posicao30
        let posicao31
        let posicao32
        let posicao33
        let posicao34
        let posicao35
        let posicao36
        let posicao37
        let posicao38
        let posicao39
        let posicao40
        let posicao41
        let posicao42
        let posicao43
        let posicao44
        let posicao45
        let posicao46
        let posicao47
        let posicao48


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
                posicao29 = response.data[28].id
                posicao30 = response.data[29].id
                posicao31 = response.data[30].id
                posicao32 = response.data[31].id
                posicao33 = response.data[32].id
                posicao34 = response.data[33].id
                posicao35 = response.data[34].id
                posicao36 = response.data[35].id
                posicao37 = response.data[36].id
                posicao38 = response.data[37].id
                posicao39 = response.data[38].id
                posicao40 = response.data[39].id
                posicao41 = response.data[40].id
                posicao42 = response.data[41].id
                posicao43 = response.data[42].id
                posicao44 = response.data[43].id
                posicao45 = response.data[44].id
                posicao46 = response.data[45].id
                posicao47 = response.data[46].id
                posicao48 = response.data[47].id
                if (response.status === 200) {
                }
            })
            .catch((error) => {
                alert(console.log("eroororooro", error))
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
                        location.reload()
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
                        location.reload()
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
                        location.reload()
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
                        location.reload()
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
                        location.reload()
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
                        location.reload()
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
                        location.reload()
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
                        alert('Informe os times que irão para a semifinal em ordem de disputa')
                    }
                })
                .catch((error) => {
                    console.log("errrooooooo", error)
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
                        location.reload()
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
                        location.reload()
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
                        location.reload()
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
                        alert('Informe os times que irão para a final em ordem de disputa')
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
                        location.reload()
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
                        location.reload()
                    }
                })
                .catch((error) => {
                    alert(error.response.data)
                });
        }
        else if (rodada == "15") {
            await apiC.post("copa/cadastrar_placar", {
                "placar1": resultado29,
                "id1": posicao29,
                "placar2": resultado30,
                "id2": posicao30
            })
                .then(response => {
                    if (response.status === 200) {
                        alert('Salvo com sucesso')
                        location.reload()
                    }
                })
                .catch((error) => {
                    alert(error.response.data)
                });
        }
        else if (rodada == "16") {
            await apiC.post("copa/cadastrar_placar", {
                "placar1": resultado31,
                "id1": posicao31,
                "placar2": resultado32,
                "id2": posicao32
            })
                .then(response => {
                    if (response.status === 200) {
                        alert('Salvo com sucesso')
                        location.reload()
                    }
                })
                .catch((error) => {
                    alert(error.response.data)
                });
        }
        else if (rodada == "17") {
            await apiC.post("copa/cadastrar_placar", {
                "placar1": resultado33,
                "id1": posicao33,
                "placar2": resultado34,
                "id2": posicao34
            })
                .then(response => {
                    if (response.status === 200) {
                        alert('Salvo com sucesso')
                        location.reload()
                    }
                })
                .catch((error) => {
                    alert(error.response.data)
                });
        }
        else if (rodada == "18") {
            await apiC.post("copa/cadastrar_placar", {
                "placar1": resultado35,
                "id1": posicao35,
                "placar2": resultado36,
                "id2": posicao36
            })
                .then(response => {
                    if (response.status === 200) {
                        alert('Salvo com sucesso')
                        location.reload()
                    }
                })
                .catch((error) => {
                    alert(error.response.data)
                });
        }
        else if (rodada == "19") {
            await apiC.post("copa/cadastrar_placar", {
                "placar1": resultado37,
                "id1": posicao37,
                "placar2": resultado38,
                "id2": posicao38
            })
                .then(response => {
                    if (response.status === 200) {
                        alert('Salvo com sucesso')
                        location.reload()
                    }
                })
                .catch((error) => {
                    alert(error.response.data)
                });
        }
        else if (rodada == "20") {
            await apiC.post("copa/cadastrar_placar", {
                "placar1": resultado39,
                "id1": posicao39,
                "placar2": resultado40,
                "id2": posicao40
            })
                .then(response => {
                    if (response.status === 200) {
                        alert('Salvo com sucesso')
                        location.reload()
                    }
                })
                .catch((error) => {
                    alert(error.response.data)
                });
        }
        else if (rodada == "21") {
            await apiC.post("copa/cadastrar_placar", {
                "placar1": resultado41,
                "id1": posicao41,
                "placar2": resultado42,
                "id2": posicao42
            })
                .then(response => {
                    if (response.status === 200) {
                        alert('Salvo com sucesso')
                        location.reload()
                    }
                })
                .catch((error) => {
                    alert(error.response.data)
                });
        }
        else if (rodada == "22") {
            await apiC.post("copa/cadastrar_placar", {
                "placar1": resultado43,
                "id1": posicao43,
                "placar2": resultado44,
                "id2": posicao44
            })
                .then(response => {
                    if (response.status === 200) {
                        alert('Salvo com sucesso')
                        location.reload()
                    }
                })
                .catch((error) => {
                    alert(error.response.data)
                });
        }
        else if (rodada == "23") {
            await apiC.post("copa/cadastrar_placar", {
                "placar1": resultado45,
                "id1": posicao45,
                "placar2": resultado46,
                "id2": posicao46
            })
                .then(response => {
                    if (response.status === 200) {
                        alert('Salvo com sucesso')
                        location.reload()
                    }
                })
                .catch((error) => {
                    alert(error.response.data)
                });
        }
        else if (rodada == "24") {
            await apiC.post("copa/cadastrar_placar", {
                "placar1": resultado47,
                "id1": posicao47,
                "placar2": resultado48,
                "id2": posicao48
            })
                .then(response => {
                    if (response.status === 200) {
                        alert('Salvo com sucesso')
                        location.reload()
                    }
                })
                .catch((error) => {
                    alert(error.response.data)
                });
        }
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


    async function cadastraTimeSemifinais() {
        let enviarBanco = []
        enviarBanco.push(time1s, time2s, time3s, time4s)

        await apiC.post("copa/cadastrarTime", {
            "nome": enviarBanco,
            "tamanho": enviarBanco.length
        }).then(response => {
            alert("Times da semifinal cadastrados com sucesso")
            verificaSeTemTimeCadastrado()
            setSemifinais(false)

        })
            .catch((error) => {
                alert('Erro ao cadastrar times')
            });


    }

    async function cadastraTimeTerceiroLugar() {

        let enviarBanco = []
        enviarBanco.push(time1t, time2t)

        await apiC.post("copa/cadastrarTime", {
            "nome": enviarBanco,
            "tamanho": enviarBanco.length
        }).then(response => {
            alert("Times do terceiro lugar cadastrados com sucesso")
            verificaSeTemTimeCadastrado()
            setTerceiro(false)
        })
            .catch((error) => {
                alert('Erro ao cadastrar times do terceiro lugar')
            });


    }

    async function cadastraTimeFinais() {
        let enviarBanco = []
        enviarBanco.push(time1f, time2f)

        await apiC.post("copa/cadastrarTime", {
            "nome": enviarBanco,
            "tamanho": enviarBanco.length
        }).then(response => {
            alert("Times da final cadastrados com sucesso")
            verificaSeTemTimeCadastrado()
            setFinais(false)
        })
            .catch((error) => {
                alert('Erro ao cadastrar times')
            });


    }

    async function cadastrarNovoTime() {
        let enviarBanco = []
        enviarBanco.push(novoTime1, novoTime2, novoTime3, novoTime4, novoTime5, novoTime6, novoTime7, novoTime8)

        await apiC.post("copa/cadastrarTime", {
            "nome": enviarBanco,
            "tamanho": enviarBanco.length
        }).then(response => {
            alert("Times cadastrados com sucesso")
            verificaSeTemTimeCadastrado()
            setSemifinais(false)
        })
            .catch((error) => {
                alert('Erro ao cadastrar times')
            });


    }

    async function mostrarSemifinalistas() {
        setSemifinais(true)

    }

       useEffect(() => {
    
            async function limparP() {
                await apiC.post("placar/limpar")
                    .then(response => {
                    })
                    .catch((error) => {
                        alert('erro ao limpar placar')
                    });
    
    
            }
            limparP()
        }, [])


    async function mostrarFinalistas() {
        setFinais(true)
    }

    async function mostrarTerceiro() {
        setTerceiro(true)
    }


    async function limpar() {
        await apiC.post("copa/limpar")
            .then(response => {
                alert("Dados deletados com sucesso")
                location.reload()
            })
            .catch((error) => {
                alert('Erro ao deletar dados')
            });
    }







    async function jogadoresCampeoes() {
        let timeCampeao
        let timeVice

        let placar1 = Number(placar25);
        let placar2 = Number(placar28);
        let placar3 = Number(placar26);
        let placar4 = Number(placar27);
        let placar5 = Number(placarProrrogacao41);
        let placar6 = Number(placarProrrogacao42);
        let resulTime1 = placar1 + placar2
        let resulTime2 = placar3 + placar4


        if (typeof resulTime1 == 'number' && typeof resulTime2 == 'number') {
            if (resulTime1 > resulTime2) {
                timeCampeao = time1f
                timeVice = time2f
            } else if (resulTime2 > resulTime1) {
                timeCampeao = time2f
                timeVice = time1f
            } else if (resulTime1 == resulTime2) {
                if (typeof placar5 == 'number' && typeof placar6 == 'number') {
                    if (placar5 > placar6) {
                        timeCampeao = time1f
                        timeVice = time2f
                    } else if (placar6 > placar5) {
                        timeCampeao = time2f
                        timeVice = time1f
                    }
                }

            }


        }
        await apiC.post("torneio/bucarCampeoes", {
            "primeiroLugar": timeCampeao,
            "segundoLugar": timeVice
        }).then(response => {
            if (response.status === 200) {
                if (response.data.result.length > 0) {
                    console.log(response.data.result[0][0].jogador)
                    setJogadorcampeao1(response.data.result[0][0].jogador)
                    setJogadorcampeao2(response.data.result[0][1].jogador)
                    setJogadorcampeao3(response.data.result[0][2].jogador)
                    setJogadorcampeao4(response.data.result[0][3].jogador)
                    setJogadorvice1(response.data.result[1][0].jogador)
                    setJogadorvice2(response.data.result[1][1].jogador)
                    setJogadorvice3(response.data.result[1][2].jogador)
                    setJogadorvice4(response.data.result[1][3].jogador)
                    setNomeTorneio(response.data.result[1][0].liga)
                    setNomeTime(response.data.result[0][0].time)
                    setEscudo(response.data.result[0][0].escudo)
                }
            }
       
        })
            .catch((error) => {
          
            });

    }


    return (
        <>
       
        
            <Button className="btn-filtro-arquivo" onClick={(e) => navigate('/home')}>
                <div>Home</div>
            </Button>
            ---
            <Button className="btn-filtro-arquivo" onClick={(e) => navigate('/artilheiroTorneio')}>
                <div>Artilheiro</div>
            </Button>
            <Button className="limpar-copa" onClick={(e) => limpar()}>
                <div>Limpar</div>
            </Button>

            {semifinais &&
                <h1>Informe os times abaixo em ordem de disputa</h1>
            }
            {finais &&
                <h1>Informe os times que avançaram para as finais em ordem de disputa</h1>
            }
            {finais &&
                <Form.Control
                    onChange={e => { setTime1f(e.target.value) }}
                    value={time1f}
                />
            }
            {finais &&
                <Form.Control
                    onChange={e => { setTime2f(e.target.value) }}
                    value={time2f}
                />
            }
            {finais &&
                <Button className="btn-filtro-arquivo" onClick={(e) => cadastraTimeFinais()}>
                    <div>Enviar times digitados</div>
                </Button>
            }



            {terceiro &&
                <h1>Informe os times que disputaam o terceiro lugar em ordem de disputa</h1>
            }
            {terceiro &&
                <Form.Control
                    onChange={e => { setTime1t(e.target.value) }}
                    value={time1t}
                />
            }
            {terceiro &&
                <Form.Control
                    onChange={e => { setTime2t(e.target.value) }}
                    value={time2t}
                />
            }
            {terceiro &&
                <Button className="btn-filtro-arquivo" onClick={(e) => cadastraTimeTerceiroLugar()}>
                    <div>Enviar times digitados</div>
                </Button>
            }

            {semifinais &&
                <Form.Control
                    onChange={e => { setTime1s(e.target.value) }}
                    value={time1s}
                />
            }
            {semifinais &&
                <Form.Control
                    onChange={e => { setTime2s(e.target.value) }}
                    value={time2s}
                />
            }
            {semifinais &&
                <Form.Control
                    onChange={e => { setTime3s(e.target.value) }}
                    value={time3s}
                />
            }
            {semifinais &&
                <Form.Control
                    onChange={e => { setTime4s(e.target.value) }}
                    value={time4s}
                />
            }
            {semifinais &&
                <Button className="btn-filtro-arquivo" onClick={(e) => cadastraTimeSemifinais()}>
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
            {mostrarCampeao &&
                          <div className="camp">
                              <div><h3 className="campeao"> {nomeTime} é Campeão da Copa Kingston 2 de 2025 </h3></div>
                              <div><h3 className="campeao1"> Abaixo os jogadores campeões </h3></div>
                              <h5 className="campeao2"> {jogadorcampeao1} </h5>
          
          
                              <h5 className="campeao3"> {jogadorcampeao2} </h5>
          
          
                              <h5 className="campeao4"> {jogadorcampeao3} </h5>
          
          
                              <h5 className="campeao5"> {jogadorcampeao4} </h5>
          
          
                              <div><h3 className="campeao6"> Abaixo os jogadores vices campeões </h3></div>
          
          
                              <div><h5 className="campeao7"> {jogadorvice1} </h5></div>
          
          
                              <div><h5 className="campeao8"> {jogadorvice2} </h5></div>
          
          
                              <div><h5 className="campeao9"> {jogadorvice3} </h5></div>
          
          
                              <div><h5 className="campeao10"> {jogadorvice4} </h5></div>
          
          
                              <div><h3 className="campeao11"> Abaixo os melhores jogadores do campeonato </h3></div>
          
          
                              <div><h5 className="campeao12"> 1º Alice </h5></div>
          
          
                              <div><h5 className="campeao13"> 2º Xavier </h5></div>
          
          
                              <div><h5 className="campeao14"> 3º Elza </h5></div>
          
                          </div>
          
                      }
                      <Button className="botao-deletar" onClick={(e) => {
                          setMostrarCampeao(!mostrarCampeao);
                      }}>
                          <div>Mostrar  campeoes</div>
                      </Button>

            <h3 className='semifinal'>Semifinal</h3>

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
                            <Form.Control
                                //data
                                name="VALOR_MIN"
                                className="formato-data campo-texto-cor-3"
                                type="text"
                                maxLength="4"
                                value={data9}
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
                            <Button className="btn-filtro-arqui" onClick={(e) => setProrrogacao5(!prorrogacao5)}>
                                <div>Fazer Prorrogação</div>
                            </Button>
                            <Form.Control
                                //data
                                name="VALOR_MIN"
                                className="filtros-iccid-valor-min campo-texto-cor-3"
                                type="text"
                                maxLength="4"
                                value={data10}
                                // onChange={e => validarNumero("campo-texto-valor-minimo", e.target.value)}
                                placeholder="Time"
                            />
                        </div>
                        {prorrogacao5 &&
                            <Form.Control
                                //prorrogação placar
                                name="CIFRAO_VALOR_MIN"
                                className="filtros-cifrao campo-texto-cor-3"
                                type="text"
                                value={placarProrrogacao37}
                                placeholder="Placar"
                                onChange={e => setPlacarProrrogacao37(e.target.value)}
                            />
                        }
                        {prorrogacao5 &&
                            <Form.Control
                                //prorrogação time
                                name="VALOR_MIN"
                                className="filtros-iccid-valor-min campo-texto-cor-3"
                                type="text"
                                maxLength="4"
                                value={time1s}
                                // onChange={e => validarNumero("campo-texto-valor-minimo", e.target.value)}
                                placeholder="Time"
                            />
                        }
                        {prorrogacao5 &&
                            <Form.Control
                                //prorrogação placar
                                name="CIFRAO_VALOR_MIN"
                                className="filtros-cifrao campo-texto-cor-3"
                                type="text"
                                value={placarProrrogacao38}
                                placeholder="Placar"
                                onChange={e => setPlacarProrrogacao38(e.target.value)}
                            />
                        }
                        {prorrogacao5 &&
                            <Form.Control
                                //prorrogação time
                                name="VALOR_MIN"
                                className="filtros-iccid-valor-min campo-texto-cor-3"
                                type="text"
                                maxLength="4"
                                value={time2s}
                                // onChange={e => validarNumero("campo-texto-valor-minimo", e.target.value)}
                                placeholder="Time"
                            />
                        }
                        {prorrogacao5 &&
                            <Button className="btn-filtro-arqui" onClick={(e) => cadastrarTimes("19")}>
                                <div>Enviar</div>
                            </Button>
                        }
                        {prorrogacao5 &&
                            <Form.Control
                                //data
                                name="VALOR_MIN"
                                className="formato-data campo-texto-cor-3"
                                type="text"
                                maxLength="4"
                                value={data19}
                                // onChange={e => validarNumero("campo-texto-valor-minimo", e.target.value)}
                                placeholder="Time"
                            />

                        }
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
                            <Form.Control
                                //data
                                name="VALOR_MIN"
                                className="formato-data campo-texto-cor-3"
                                type="text"
                                maxLength="4"
                                value={data11}
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
                            <Button className="btn-filtro-arqui" onClick={(e) => { cadastrarTimes("12"); mostrarFinalistas(); mostrarTerceiro() }}>
                                <div>Enviar</div>
                            </Button>
                            <Button className="btn-filtro-arqui" onClick={(e) => setProrrogacao6(!prorrogacao6)}>
                                <div>Fazer Prorrogação</div>
                            </Button>
                            <Form.Control
                                //data
                                name="VALOR_MIN"
                                className="filtros-iccid-valor-min campo-texto-cor-3"
                                type="text"
                                maxLength="4"
                                value={data12}
                                // onChange={e => validarNumero("campo-texto-valor-minimo", e.target.value)}
                                placeholder="Time"
                            />
                        </div>
                        {prorrogacao6 &&
                            <Form.Control
                                //prorrogação placar
                                name="CIFRAO_VALOR_MIN"
                                className="filtros-cifrao campo-texto-cor-3"
                                type="text"
                                value={placarProrrogacao39}
                                placeholder="Placar"
                                onChange={e => setPlacarProrrogacao39(e.target.value)}
                            />
                        }
                        {prorrogacao6 &&
                            <Form.Control
                                //prorrogação time
                                name="VALOR_MIN"
                                className="filtros-iccid-valor-min campo-texto-cor-3"
                                type="text"
                                maxLength="4"
                                value={time3s}
                                // onChange={e => validarNumero("campo-texto-valor-minimo", e.target.value)}
                                placeholder="Time"
                            />
                        }
                        {prorrogacao6 &&
                            <Form.Control
                                //prorrogação placar
                                name="CIFRAO_VALOR_MIN"
                                className="filtros-cifrao campo-texto-cor-3"
                                type="text"
                                value={placarProrrogacao40}
                                placeholder="Placar"
                                onChange={e => setPlacarProrrogacao40(e.target.value)}
                            />
                        }
                        {prorrogacao6 &&
                            <Form.Control
                                //prorrogação time
                                name="VALOR_MIN"
                                className="filtros-iccid-valor-min campo-texto-cor-3"
                                type="text"
                                maxLength="4"
                                value={time4s}
                                // onChange={e => validarNumero("campo-texto-valor-minimo", e.target.value)}
                                placeholder="Time"
                            />
                        }
                        {prorrogacao6 &&
                            <Button className="btn-filtro-arqui" onClick={(e) => cadastrarTimes("20")}>
                                <div>Enviar</div>
                            </Button>
                        }
                        {prorrogacao6 &&
                            <Form.Control
                                //data
                                name="VALOR_MIN"
                                className="formato-data campo-texto-cor-3"
                                type="text"
                                maxLength="4"
                                value={data20}
                                // onChange={e => validarNumero("campo-texto-valor-minimo", e.target.value)}
                                placeholder="Time"
                            />

                        }
                    </div>
                </div>

            </Form.Group>
            <h3 className='final'>3º Lugar</h3>
            <Form.Group>
                <div className="filtros-texto-linha-margin">
                    <div className="col-sm">
                        <div className="d-flex">
                            <Form.Control
                                name="CIFRAO_VALOR_MIN"
                                className="filtros-cifrao campo-texto-cor-3"
                                type="text"
                                value={placar29}
                                placeholder="Placar"
                                onChange={e => setPlacar29(e.target.value)}
                            />
                            {/* <div className="x">X</div> */}
                            <Form.Control
                                name="VALOR_MIN"
                                className="filtros-iccid-valor-min campo-texto-cor-3"
                                type="text"
                                maxLength="4"
                                value={time1t}
                                // onChange={e => validarNumero("campo-texto-valor-minimo", e.target.value)}
                                placeholder="Time"
                            />

                            <label className="fonte-cor-1 campo-texto-cor-3 break-3"></label>

                            <Form.Control
                                name="CIFRAO_VALOR_MIN"
                                className="filtros-cifrao campo-texto-cor-3"
                                type="text"
                                value={placar30}
                                placeholder="Placar"
                                onChange={e => setPlacar30(e.target.value)}
                            />
                            <Form.Control
                                name="VALOR_MIN"
                                className="filtros-iccid-valor-min campo-texto-cor-3"
                                type="text"
                                maxLength="4"
                                value={time2t}
                                // onChange={e => validarNumero("campo-texto-valor-minimo", e.target.value)}
                                placeholder="Time"
                            />
                            <label className="fonte-cor-1 campo-texto-cor-3 break-3"></label>
                            <Button className="btn-filtro-arqui" onClick={(e) => cadastrarTimes("22")}>
                                <div>Enviar</div>
                            </Button>
                            <Form.Control
                                //data
                                name="VALOR_MIN"
                                className="formato-data campo-texto-cor-3"
                                type="text"
                                maxLength="4"
                                value={data22}
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
                                value={placar31}
                                placeholder="Placar"
                                onChange={e => setPlacar31(e.target.value)}
                            />
                            {/* <div className="x">X</div> */}
                            <Form.Control
                                name="VALOR_MIN"
                                className="filtros-iccid-valor-min campo-texto-cor-3"
                                type="text"
                                maxLength="4"
                                value={time2t}
                                // onChange={e => validarNumero("campo-texto-valor-minimo", e.target.value)}
                                placeholder="Time"
                            />

                            <label className="fonte-cor-1 campo-texto-cor-3 break-3"></label>

                            <Form.Control
                                name="CIFRAO_VALOR_MIN"
                                className="filtros-cifrao campo-texto-cor-3"
                                type="text"
                                value={placar32}
                                placeholder="Placar"
                                onChange={e => setPlacar32(e.target.value)}
                            />
                            <Form.Control
                                name="VALOR_MIN"
                                className="filtros-iccid-valor-min campo-texto-cor-3"
                                type="text"
                                maxLength="4"
                                value={time1t}
                                // onChange={e => validarNumero("campo-texto-valor-minimo", e.target.value)}
                                placeholder="Time"
                            />
                            <label className="fonte-cor-1 campo-texto-cor-3 break-3"></label>
                            <Button className="btn-filtro-arqui" onClick={(e) => cadastrarTimes("23")}>
                                <div>Enviar</div>
                            </Button>
                            <Button className="btn-filtro-arqui" onClick={(e) => setProrrogacao8(!prorrogacao8)}>
                                <div>Fazer Prorrogação</div>
                            </Button>
                            <Form.Control
                                //data
                                name="VALOR_MIN"
                                className="filtros-iccid-valor-min campo-texto-cor-3"
                                type="text"
                                maxLength="4"
                                value={data23}
                                // onChange={e => validarNumero("campo-texto-valor-minimo", e.target.value)}
                                placeholder="Time"
                            />

                        </div>
                        {prorrogacao8 &&
                            <Form.Control
                                //prorrogação placar
                                name="CIFRAO_VALOR_MIN"
                                className="filtros-cifrao campo-texto-cor-3"
                                type="text"
                                value={placarProrrogacao43}
                                placeholder="Placar"
                                onChange={e => setPlacarProrrogacao43(e.target.value)}
                            />
                        }
                        {prorrogacao8 &&
                            <Form.Control
                                //prorrogação time
                                name="VALOR_MIN"
                                className="filtros-iccid-valor-min campo-texto-cor-3"
                                type="text"
                                maxLength="4"
                                value={time1t}
                                // onChange={e => validarNumero("campo-texto-valor-minimo", e.target.value)}
                                placeholder="Time"
                            />
                        }
                        {prorrogacao8 &&
                            <Form.Control
                                //prorrogação placar
                                name="CIFRAO_VALOR_MIN"
                                className="filtros-cifrao campo-texto-cor-3"
                                type="text"
                                value={placarProrrogacao44}
                                placeholder="Placar"
                                onChange={e => setPlacarProrrogacao44(e.target.value)}
                            />
                        }
                        {prorrogacao8 &&
                            <Form.Control
                                //prorrogação time
                                name="VALOR_MIN"
                                className="filtros-iccid-valor-min campo-texto-cor-3"
                                type="text"
                                maxLength="4"
                                value={time2t}
                                // onChange={e => validarNumero("campo-texto-valor-minimo", e.target.value)}
                                placeholder="Time"
                            />
                        }
                        {prorrogacao8 &&
                            <Button className="btn-filtro-arqui" onClick={(e) => cadastrarTimes("24")}>
                                <div>Enviar</div>
                            </Button>
                        }
                        {prorrogacao8 &&
                            <Form.Control
                                //data
                                name="VALOR_MIN"
                                className="formato-data campo-texto-cor-3"
                                type="text"
                                maxLength="4"
                                value={data24}
                                // onChange={e => validarNumero("campo-texto-valor-minimo", e.target.value)}
                                placeholder="Time"
                            />

                        }
                    </div>

                </div>

            </Form.Group>
            <h3 className='final'>Final</h3>
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
                            <Form.Control
                                //data
                                name="VALOR_MIN"
                                className="formato-data campo-texto-cor-3"
                                type="text"
                                maxLength="4"
                                value={data13}
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
                            <Button className="btn-filtro-arqui" onClick={(e) => setProrrogacao7(!prorrogacao7)}>
                                <div>Fazer Prorrogação</div>
                            </Button>
                            <Form.Control
                                //data
                                name="VALOR_MIN"
                                className="filtros-iccid-valor-min campo-texto-cor-3"
                                type="text"
                                maxLength="4"
                                value={data14}
                                // onChange={e => validarNumero("campo-texto-valor-minimo", e.target.value)}
                                placeholder="Time"
                            />

                        </div>
                        {prorrogacao7 &&
                            <Form.Control
                                //prorrogação placar
                                name="CIFRAO_VALOR_MIN"
                                className="filtros-cifrao campo-texto-cor-3"
                                type="text"
                                value={placarProrrogacao41}
                                placeholder="Placar"
                                onChange={e => setPlacarProrrogacao41(e.target.value)}
                            />
                        }
                        {prorrogacao7 &&
                            <Form.Control
                                //prorrogação time
                                name="VALOR_MIN"
                                className="filtros-iccid-valor-min campo-texto-cor-3"
                                type="text"
                                maxLength="4"
                                value={time1f}
                                // onChange={e => validarNumero("campo-texto-valor-minimo", e.target.value)}
                                placeholder="Time"
                            />
                        }
                        {prorrogacao7 &&
                            <Form.Control
                                //prorrogação placar
                                name="CIFRAO_VALOR_MIN"
                                className="filtros-cifrao campo-texto-cor-3"
                                type="text"
                                value={placarProrrogacao42}
                                placeholder="Placar"
                                onChange={e => setPlacarProrrogacao42(e.target.value)}
                            />
                        }
                        {prorrogacao7 &&
                            <Form.Control
                                //prorrogação time
                                name="VALOR_MIN"
                                className="filtros-iccid-valor-min campo-texto-cor-3"
                                type="text"
                                maxLength="4"
                                value={time2f}
                                // onChange={e => validarNumero("campo-texto-valor-minimo", e.target.value)}
                                placeholder="Time"
                            />
                        }
                        {prorrogacao7 &&
                            <Button className="btn-filtro-arqui" onClick={(e) => cadastrarTimes("21")}>
                                <div>Enviar</div>
                            </Button>
                        }
                        {prorrogacao7 &&
                            <Form.Control
                                //data
                                name="VALOR_MIN"
                                className="formato-data campo-texto-cor-3"
                                type="text"
                                maxLength="4"
                                value={data21}
                                // onChange={e => validarNumero("campo-texto-valor-minimo", e.target.value)}
                                placeholder="Time"
                            />

                        }
                       
                       {mostrarCampeao &&
                       <div style={{ textAlign: 'center', marginTop: '30px' }}>
                         <h1> O campeão é o {nomeTime}</h1>
                         <ImagemDinamica caminho={escudo} />
                       </div>
                        
                        }



                    </div>
                    
                </div>

            </Form.Group>


        </>

    )
}
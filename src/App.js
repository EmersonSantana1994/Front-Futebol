
import './App.css';
import TelaLogin from './componentes/login/login';
import MeuCampeonato from './componentes/login/MeuCampeonato';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import UploadArquivos from './componentes/login/uploadArquivos';
import Artilheiro from './componentes/login/artilheiro';
import RankingJogadores from './componentes/login/rankingJoradores';
import Torneio from './componentes/login/torneio';
import Transferencia from './componentes/login/transferencia';
import Healf from './componentes/login/health';
import Netflix from './componentes/login/netflix';
import Cadastro from './componentes/login/cadastro';
import Times from './componentes/login/timesCadastrados';
import Jogadores from './componentes/login/jogadoresCadastrados';
import Ligas from './componentes/login/ligasCadastradas';
import Test from './componentes/login/teste';
import Home from './componentes/login/home';
import Upload from './componentes/login/upload';
import TelaCadastro from './componentes/login/cadastrarUsuario';
import PontosTorneio from './componentes/login/pontosTorneio';
import TabelaGeral from './componentes/login/tabelaGeral';
import SuperCopa from './componentes/login/superCopa';
import Copa from './componentes/login/copa';
import CadastrarFoto from './componentes/login/cadastrarFoto';
import ArtilheiroTorneio from './componentes/login/artilheiro_torneio';




function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<TelaLogin />} />
        <Route path='/home' element={<Home />} />
        <Route path='/UploadArquivos' element={<UploadArquivos />} />
        <Route path='/ranking' element={<MeuCampeonato />} />
        <Route path='/artilheiro' element={<Artilheiro />} />
        <Route path='/rankingJogadores' element={<RankingJogadores />} />
        <Route path='/torneio' element={<Torneio />} />
        <Route path='/transferencia' element={<Transferencia />} />
        <Route path='/health' element={<Healf />} />
        <Route path='/netflix' element={<Netflix />} />
        <Route path='/cadastro' element={<Cadastro />} />
        <Route path='/times' element={<Times />} />
        <Route path='/jogadores' element={<Jogadores />} />
        <Route path='/ligas' element={<Ligas />} />
        <Route path='/teste' element={<Test />} />
        <Route path='/upload' element={<Upload />} />
        <Route path='/cadstrousuario' element={<TelaCadastro />} />
        <Route path='/pontosTorneio' element={<PontosTorneio />} />
        <Route path='/tabelaGeral' element={<TabelaGeral />} />
        <Route path='/superCopa' element={<SuperCopa />} />
        <Route path='/copa' element={<Copa />} />
        <Route path='/cadastrarFoto' element={<CadastrarFoto />} />
        <Route path='/artilheiroTorneio' element={<ArtilheiroTorneio />} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

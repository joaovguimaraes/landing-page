import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

import Button from '@mui/material/Button';


export default function Home() {
  const handleClick = () => {     
    window.open("https://github.com/joaovguimaraes/ProjetoIntegrador-Senai/");   
  };
  return (
    <div className="container">
      <Head>
        <title>EcoLogic</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <img src="/icon.svg" alt="EcoLogic"></img>
        <Header title="Projeto integrador Faculdade SENAI" />
        <p>	Esse sistema tem como objetivo, calcular a emissão de Co2 emitida pela frota de 
          veículos da empresa com base na autonomia de cada carro gerando relatórios periódicos.
          O operador do sistema, é responsável por receber o "chamado" dos clientes, seja por 
          telefone da empresa, ou WhatsApp, em seguida ele acessa o software para inserir os dados do chamado. 
          O operador também poderá ter acesso à uma listagem dos motoristas cadastrados assim como cadastrar novos habilitados.
        </p>

          <Button variant="contained" size="large" onClick={handleClick} style={{backgroundColor: '#12824C', color: '#FFFFFF'}}> Baixe Aqui</Button>
      </main>
      <Footer />
    </div>
  )
}

import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'
import Button from '@mui/material/Button';

export default function Home() {
  function raiseInvoiceClicked(){
    const url = 'github.com/joaovguimaraes/ProjetoIntegrador-Senai/archive/refs/heads/master.zip';
    window.open(url, '_blank');
  }

  return (
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Projeto integrador Faculdade SENAI" />
        <p>João Victor e Margiory Simas</p>
        <Button variant="contained" size="large" onClick={() => raiseInvoiceClicked()}> Baixe Aqui</Button>
      </main>

      <Footer />
    </div>
  )
}

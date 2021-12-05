import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'
import Button from '@mui/material/Button';

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Projeto integrados Faculdade SENAI" />
        <Button variant="contained" size="large"> Baixe Aqui</Button>
      </main>

      <Footer />
    </div>
  )
}

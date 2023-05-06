import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="es">
      <Head >
        <link rel="icon" type="image/ico" href="/favicon.ico" />
        <meta name="description" content="Desarrollador full stack y estudiante de Ingeniería en Sistemas"/>
        <meta property="og:title" content="Mariano Chavez"/>
        <meta property="og:url" content="https://marianochavez.vercel.app/"/>
        <meta property="og:description" content="Estudiante de Ingeniería en Sistemas y desarollador de aplicaciones web"/>
        <meta property="og:image" content="https://res.cloudinary.com/chavedo/image/upload/v1664979449/portfolio/ogimg.png"/>
        <meta property="og:type" content="website" />
        <meta name="keywords" content="dev developer desarrollador web react python javascript software engineer"/>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}

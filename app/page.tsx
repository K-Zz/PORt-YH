import Head from "next/head";
import { Contact } from "./_components/Contact";
import { Footer } from "./_components/Footer";
import { Header } from "./_components/Header";
import { Hero } from "./_components/Hero";
import { Skills } from "./_components/Skills";
import { Spacing } from "./_components/Spacing";
import { Status } from "./_components/Status";

export default function Home() {
  return (
    <>
      <Head>
        <title>Yanis Hamoudi - Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Portfolio de Yanis Hamoudi - Portfolio"
        />
        <script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=G-EJES2PGHG5`}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-EJES2PGHG5');
          `,
          }}
        />
      </Head>
      <main>
        <Header />
        <Spacing size="xl" />
        <Hero />
        <Spacing size="3xl" />
        <Status />
        <Spacing size="md" />
        <Skills />
        <Spacing size="md" />
        <Contact />
        <Spacing size="md" />
        <Footer />
      </main>
    </>
  );
}

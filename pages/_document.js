import Document, {Html, Head, Main, NextScript, DocumentContext} from 'next/document'
class MyDocument extends Document {
    
    render() {
        return (
            <Html lang={'fa'}>
                <Head>
                    <link rel="manifest" href="/manifest.json"/>
                    <link rel="apple-touch-icon" href="/icon-512x512.png"/>
                    <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
                    <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
                    <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
                    <link href="//db.onlinewebfonts.com/c/14b4bf4df4455e6a1277f2b2584dadd6?family=BBCNassim" rel="stylesheet" type="text/css"/>
                    <meta name="msapplication-TileColor" content="#ce1919"></meta>
                    <meta name="theme-color" content="#ce1919" />
                </Head>

                <body dir={'rtl'} lang={'fa'}>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}

export default MyDocument
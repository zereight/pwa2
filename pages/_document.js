
import Document, {Head, Main, NextScript} from "next/document";

export default class MyDocument extends Document {
    render(){

        return (
            <html>
                <Head>
                    
                    <meta name="author" content={"kim dae hyeon"} />
                    <link href="/static/style.css" rel={"stylesheet"} />
                </Head>

                <body>
                    <Main/>
                    <NextScript/>
                </body>

            </html>
        );

    }
}
import Link from "next/link";
import Head from "next/head";
import Header from "../componenets/Header";

export default () => (
<div>
    <Head>
        <title>
            Home | kdh store
        </title>
    </Head>

    <Header/>

    <h1>This is index page.</h1> {" "}
    <Link href={"/about"}>
        <a>About page</a>
    </Link>
</div>
);




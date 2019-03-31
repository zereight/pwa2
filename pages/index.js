import Link from "next/link";
import Head from "next/head";

export default () => (
<div>
    <Head>
        <title>
            Home | kdh store
        </title>
    </Head>
    <h1>This is index page.</h1> {" "}
    <Link href={"/about"}>
        <a>About page</a>
    </Link>
</div>
);



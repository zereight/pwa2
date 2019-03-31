import Link from "next/link";
import Head from "next/head";
import withLayout from "../lib/withLayout";


const about = ()=>(
<div>
    <Head>
        <title>
            About | kdh store
        </title>
    </Head>

    

    <h1>This is about page.</h1>
</div>);
export default withLayout(about);
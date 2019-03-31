//pages에 있는 js파일들은 실제 페이지로 구동되는 페이지입니다.
import Head from "next/head";
import withLayout from "../lib/withLayout";
import PostLink from "../components/PostLink";
import Link from "next/link";

const index = () => (
<div>
    <Head>
        <title>
            Home | kdh store
        </title>
    </Head>

    <h1>This is index page.</h1>
    <h3>Posts:</h3>
    <ul>
        <li>
            <PostLink title={"something"}/>
        </li>
        <li>
            <PostLink title={"Post2"}/>
        </li>
    </ul>

</div>
);


export default withLayout(index);

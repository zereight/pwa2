//pages에 있는 js파일들은 실제 페이지로 구동되는 페이지입니다.
import Head from "next/head";

import PostLink from "../components/PostLink";

export default () => (
<div>
    <Head>
        <title>
            Home | kdh store
        </title>
    </Head>

    <h1>This is Movies page.</h1>
    <h3>Posts:</h3>
    <ul>
        <li>
            <PostLink title={"something"} id={0}/>
        </li>
        <li>
            <PostLink title={"Post2"} id={1}/>
        </li>
    </ul>

</div>
);



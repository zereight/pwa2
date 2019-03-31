import withLayout from "../lib/withLayout";
import Head from 'next/head';
import {withRouter} from "next/router"; //withRouter는 url의 query를 받아올 수 있다.

const Post = (props) => (
    <div>
        <Head>
            <title> {props.router.query.title} | kdh Store </title>
        </Head>
      
        <h1>{props.router.query.title}</h1>
        <p> {props.router.query.title} 페이지 입니다.</p>
    </div>
);

export default withLayout( withRouter(Post) ); 
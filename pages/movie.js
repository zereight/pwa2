import withLayout from "../lib/withLayout";
import Head from 'next/head';
import {withRouter} from "next/router"; //withRouter는 url의 query를 받아올 수 있다.

const Post = (props) => (
    <div>
        <Head>
            <title> {props.router.query.id} | kdh Store </title>
        </Head>
      
        <h1>{props.router.query.id}</h1>
        <p> {props.router.query.id} 페이지 입니다.</p>
    </div>
);

export default  withRouter(Post) ; 
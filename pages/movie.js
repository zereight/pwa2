
import Head from 'next/head';
import {withRouter} from "next/router"; //withRouter는 url의 query를 받아올 수 있다.

const Movie = (props) => (
    <div>
        <Head>
            <title> {props.router.query.id} | kdh Store </title>
        </Head>
      
        <h1>{props.title}</h1>
        <p> {props.router.query.id} 페이지 입니다.</p>
    </div>
);

Movie.getInitialProps = async () => { //render 전에 수행 props.title에 값을 전달가능
    return {title: "lalalalalalallal"};
};

export default  withRouter(Movie) ; 
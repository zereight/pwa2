//pages에 있는 js파일들은 실제 페이지로 구동되는 페이지입니다.
import Head from "next/head";

import PostLink from "../components/PostLink";
import Axios from "axios";


export default class extends React.Component{

    
    static async getInitialProps() {
        const { //back-end에서만 출력됨.
            data:{
                data: {
                    movies
                }
            }
        } = await Axios.get( "https://yts.am/api/v2/list_movies.json" ); //api를 fetch
        //console.log(data.movies);

        return {
            //movies: "lalala"
            movies
        };
    }

    render(){

        //console.log(this.props.movies);

        const {movies} = this.props; //back-end에서 props로 넘겨받은 인자중 movies추출.

        return (
            <div>
                <Head>
                    <title>
                        Home | kdh store
                    </title>
                </Head>

                <h1>This is Movies page.</h1>
                <h3>Posts:</h3>
                <ul>
                    {
                        movies.map( // movie안에 id랑 title값이 포함되어있음 api에.. li의 key에 id 추가해 주는 이유는 child요소들을 구별하기 위해서 (안하면 에러뜸)
                            movie =>  
                                <li key={movie.id}> 
                                    <PostLink title={movie.title} id={movie.id}/>
                                </li>
                        )
                    }
                    
                </ul>

            </div>
        );

    }
}


/*
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
);*/



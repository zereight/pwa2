//nextjs에는 app component랑 document component가 있다.
//파일이름이 _app인 이유는 app.js라는 파일이 어딘가 내장되어 있을 수 있기 때문이다.

import App, {Container} from "next/app";
import Header from "../components/Header";
import React from "react";


export default class MyApp extends App { //App은 nextjs의 가장 기본이 되는 메인 페이지이다. withLayout같은거 필요없었다.
    render(){

        const {Component} = this.props;
        return (
            //여기서 메세지를 입력하면 모든 페이지의 맨 위에서 요소가 나타난다.
            <Container>
                <Header/>
                <Component/>
            </Container>
        );

    }
}
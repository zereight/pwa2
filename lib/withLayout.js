import React from "react";
import Header from "../components/Header";

const withLayout = (Component) => { //Header라는 공통된 코드와 Component인수를 받아서 렌더링해주는 함수.

    return class extends React.Component {
        render() {
            return (
                <div>
                    <Header/>
                    <Component/>
                </div>
            );
        }
    }

};

export default withLayout;
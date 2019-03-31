import React from "react";
import Header from "../componenets/Header";

const withLayout = (Component) => {

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
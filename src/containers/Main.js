import React, {Component} from 'react';

import Dishes from "./Dishes/Dishes";
import Card from "./Card/Card";


class Main extends Component {


    render() {

        return (
            <div className="main">
               <Dishes/>
<Card/>

            </div>
        );
    }




};
export default Main;
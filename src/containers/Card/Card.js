import React, {Component, Fragment} from 'react';
import {connect} from "react-redux";


class Card extends Component {
    render() {
        console.log(this.props.card);
        return (
            <div>
                <div>lolke </div>
                {Object.keys(this.props.card).map((item)=>{

                    return <Fragment key={item}>
                        <div> name:{this.props.card[item].name}</div>
                        <div> count:{this.props.card[item].count}</div>
                        <div> price:{this.props.card[item].price}</div>
<button >remove</button>
                    </Fragment>

                })}
                <div> delivery:{this.props.delivery}</div>
                <div> total:{this.props.total ? this.props.total  + this.props.delivery:this.props.total}</div>
            </div>
        );
    }
}
const mapStateToProps=(state)=>{
    return{
        card:state.two.card,
        total:state.two.total,
        delivery:state.two.delivery
    };

};
export default connect(mapStateToProps) (Card);
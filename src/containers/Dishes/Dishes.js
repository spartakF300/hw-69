import React, {Component} from 'react';
import {Button, Card, CardBody, CardImg, CardText, CardTitle} from "reactstrap";
import {connect} from "react-redux";
import './Dishes.css'
import {addCard, getdish} from "../../store/action/action";
class Dishes extends Component{
    componentDidMount() {
        this.props.getdish()
    }



    render() {
        return (
            <div>
                {Object.keys( this.props.dishesThis).map((dish)=>{
                    return<Card key={dish} className={'dish'}>
                        <CardImg top width="100%" src={this.props.dishesThis[dish].img} alt="Card image cap" />
                        <CardBody>
                            <CardTitle> name: {this.props.dishesThis[dish].name}</CardTitle>
                            <CardText>Price: {this.props.dishesThis[dish].price}</CardText>
                            <Button onClick={()=>this.props.addCard({name: this.props.dishesThis[dish].name,
                                price: this.props.dishesThis[dish].price})} >add card</Button>
                        </CardBody>
                    </Card>
                })}
            </div>
        );
    }


};

const mapStateToProps = (state) => {
    return {
        dishesThis: state.one.dishes
    };
};

    const mapDispatchToProps = dispatch => {
        return {
            getdish: () => dispatch(getdish()),
            addCard: ( order)=> dispatch(addCard( order))
        };
    };

export default connect(mapStateToProps,mapDispatchToProps) (Dishes)
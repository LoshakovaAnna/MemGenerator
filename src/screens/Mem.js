import React from 'react';
import {connect} from 'react-redux';


import { genMem} from '../redux/actions';

class Mem extends React.Component{

    componentWillMount(){
        const { text0, text1, id } = this.props;

        var obj = {
            template_id: id,          
            text0: text0,
            text1: text1
        }
        this.props.genMem(obj);
    }
   

    render(){
        const { url } = this.props;

        return(
            <div className="container">
                {  url && <img src={url} alt="mem"/>}
                { !url && <p>Загружается...</p> }
                
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        id    : state.id, 
        text0 : state.text0, 
        text1 : state.text1  ,
        url   : state.url  
    };
}

export default connect( mapStateToProps, {genMem} )(Mem);
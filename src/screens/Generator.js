import React from 'react';
import {connect} from 'react-redux';

import {putText} from '../redux/actions';

class Generator extends React.Component{
    state = {
        text0:'',
        text1:''
    }

    handleChange = (e) => {
        const { name, value } = e.target;
        this.setState( { [ name ] : value } ); 
    };

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.putText(this.state);
        this.props.history.push('/generator/mem');
    }
  
    render(){
        const { text0, text1} = this.state;

        return(
            <div className="pt-2"> 
                <form onSubmit={this.handleSubmit} className='container'>
                    <input type='text' name='text0' className="col-4" placeholder='фраза 1' 
                        value={text0} onChange={this.handleChange}></input>
                    <input type='text' name='text1' className="col-4" placeholder='фраза 2' 
                        value={text1} onChange={this.handleChange}></input>                    
                    <button type="submit" className="btn btn-danger">Сгенерировать</button>                    
                </form>                    
            </div>
        )
    }
}

export default connect( null, { putText } )(Generator);
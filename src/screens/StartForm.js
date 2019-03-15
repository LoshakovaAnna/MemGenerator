import React from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

import { getImages, putId} from '../redux/actions';

class StartForm extends React.Component{
    state = {
        count:0,
        id:0
    }

    handleChange = (e)=>{
        const {name, value} = e.target;
        this.setState({[name]:value}); 
    };
    
    handleClick = (e) =>{
        let id = e.currentTarget.alt;
        this.setState( { id : id});
        this.props.putId(id)
        this.props.history.push('/generator');

        
    }
    handleSubmit = (e)=>{
        e.preventDefault();
        this.props.getImages(this.state.count);
    }
    

    render(){
        const {count} = this.state;
        const {images} = this.props;
        return (
            <form onSubmit={this.handleSubmit} className='container'>
                <div className="row"> 
                    <button type="submit" className="btn btn-primary">Получить</button>               
                    
                    <input type='number' name='count' className="col-4" placeholder='Количество' 
                        value={count} onChange={this.handleChange}></input>
                    
                    <p>мемов</p>
               </div>
                <div className="container" >
                    {images.map( (el,i) => {
                        return (
                            <img className="mem-img" key={i} src={el.url} alt={el.id}  
                            onClick={this.handleClick}/>
                        )
                    } )}
                </div>
            </form>
        )
    }

}


const mapStateToProps = (state) => {
    return {
        images:state.images
    };
}


export default connect(mapStateToProps, { putId, getImages})(StartForm);


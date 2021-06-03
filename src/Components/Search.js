import React, { Component } from 'react';
import $ from 'jquery';
class Search extends Component {
    constructor(props) {
        super(props);
        this.state={
            text:'',
            dataEdit:{},      
        }
    }
    componentDidMount(){
        //console.log("hihi")
        if(this.props.updateSuccess===true){
            setTimeout( ()=> {
                // Closing the alert
                $('#alert').alert('close');
            }, 5000);
        }      
      }
    showButton=()=>{
        if(this.props.anNut===true)return <div className="btn btn-block btn-outline-primary" onClick={this.props.ketNoi}>
        Them moi
</div>
        else return <div className="btn btn-block btn-outline-primary" onClick={this.props.ketNoi}>
        An di
</div>
    }
    isChange=(event)=>{
        this.setState({
            text:event.target.value
        })
    }
    edit=(event)=>{
        let dataEdit=this.state.dataEdit;
        let name=event.target.name;
        let value=event.target.value;
        dataEdit.id=this.props.dataSua.id;
        dataEdit.name=this.props.dataSua.name;
        dataEdit.phone=this.props.dataSua.phone;
        dataEdit.permission=this.props.dataSua.permission;
        dataEdit[name]=value;
        this.setState(
            dataEdit
        );
    }
    renderFormSua=()=>{
        //console.log("dataEdit in search file: " ,this.state.dataEdit);
        if(this.props.trangThaiSua===false){
            return (
                    <div className="row">
                        <div className="card" style={{width: '100%'}}>
                                <div className="form-group">
                                <div className="card-header text-center">Sua user</div>
                                </div>                   
                                <div className="form-group">                   
                                <input onChange={(event)=>this.edit(event)} defaultValue={this.props.dataSua.name} name="name"  type="text"   className="form-control" placeholder="name" aria-describedby="helpId" />                        
                                </div>  
                                <div className="form-group">
                                <input onChange={(event)=>this.edit(event)} defaultValue={this.props.dataSua.phone} name="phone"  type="text"   className="form-control" placeholder="phone" aria-describedby="helpId" />                              
                                </div>                               
                                <div className="form-group">                             
                                    <select onChange={(event)=>this.edit(event)} defaultValue={this.props.dataSua.permission}  name="permission" className="form-control" >
                                    <option value={1}>admin</option>
                                    <option value={2}>user</option>
                                    <option value={3}>customer</option>
                                    </select>                               
                                </div>
                                <div className="form-group">
                                <div onClick={(dtUpdate)=>this.props.update(this.state.dataEdit)} className="btn btn-block btn-danger">Luu</div>
                                </div>
                        </div>    
                    </div>          
            )
        }
    }
    
    // a=()=>{
    //     return setTimeout( ()=> {
    //         // Closing the alert
    //         $('#alert').alert('close');
    //     }, 5000);
    // }
    
    render() {
        return (
            <div className="container"> 
                
                {this.renderFormSua()}
                <div className="row">
                    <div className="col-12">
                        <div className="form-group">
                            <div className="btn-group">               
                            <input onChange={(event)=>this.isChange(event)} type="text"  className="form-control" placeholder="Nhập từ khóa" aria-describedby="helpId" />
                            <button onClick={(dt)=>this.props.connectSearch(this.state.text)} className="btn btn-info">
                                Search
                            </button>
                            </div>              
                        </div>     
                    </div>
                </div>     
                <div className="row">
                    {this.showButton()}
                </div>
                <div className="col-12"><hr></hr></div>
            </div>
        );
    }
}

export default Search;
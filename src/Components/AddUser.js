import React, { Component } from 'react';

class AddUser extends Component {
    constructor(props) {
        super(props);
        this.state={
            dtAdd:{}
        }
    }
    isChange=(event)=>{
        let nameAdd=event.target.name;   
        let dtAdd=this.state.dtAdd;
       
        dtAdd[nameAdd]=event.target.value;
        this.setState({
            dtAdd
        })
        //console.log("hi",this.state.dtAdd);
    }
    
    renderAdd=()=>{
        //console.log("looo",this.state.dtAdd.name);
        if(this.props.add===false)
        return (
                    <div className="card" style={{width: '18rem'}}>
                        <div className="form-group">
                        <div className="card-header">Them moi user</div>
                        </div>                   
                        <div className="form-group">                   
                        <input name="name" onChange={(event)=>this.isChange(event)} type="text"   className="form-control" placeholder="name" aria-describedby="helpId" />
                        <small>{this.state.dtAdd.name===undefined||this.state.dtAdd.name=="" ? this.props.checkNull.errorName:""}</small>
                        </div>  
                        <div className="form-group">
                        <input name="phone" onChange={(event)=>this.isChange(event)} type="text"   className="form-control" placeholder="phone" aria-describedby="helpId" />
                        <small>{this.state.dtAdd.phone===undefined ||this.state.dtAdd.phone=="" ? this.props.checkNull.errorPhone:""}</small>
                        </div>
                        
                        <div className="form-group">                             
                            <select onChange={(event)=>this.isChange(event)} name="permission" className="form-control" >
                            <option defaultValue={0}>Chon quyen</option>
                            <option value={1}>admin</option>
                            <option value={2}>user</option>
                            <option value={3}>customer</option>
                            </select>     
                            <small>{this.state.dtAdd.quyen===undefined ? this.props.checkNull.errorQuyen:""}</small>           
                        </div>
                        <div className="form-group">
                        <div onClick={(dtAdd)=>this.props.AddData(this.state.dtAdd)} className="btn btn-block btn-primary">Them moi</div>
                        </div>
                    </div>
        )
    }
    render() {
        //console.log("Add User : " + (this.state.dtAdd.name));
        return (               
                <div className="col-3">                   
                    {this.renderAdd()}
                </div>

        );
    }
}

export default AddUser;
import React, { Component } from 'react';

class Header extends Component {
    constructor(props) {
        super(props);
        this.state={
            visibleAlertUpdate:this.props.updateSuccess,
            visibleAlertRemove:this.props.removeSuccess
        };
    }
    renderUpdateSuccess=()=>{
            
        if(this.props.updateSuccess===true){
            return (
                <div  className="container right-center">
                    <div id="alert" className="alert alert-primary" role="alert" >
                    Update success
                    </div>
                </div>               
            )
        }
    }
    renderRemoveSuccess=()=>{
        //console.log("chay ko vay");
        if(this.props.removeSuccess===true){
            return(
                <div  className="container right-center">
                    <div id="alert" className="alert alert-success" role="alert">
                    Remove success
                    </div>
                </div>     
            )
        }        
          
    }
    renderaddSuccess=()=>{
        //console.log("chay ko vay");
        if(this.props.addSuccess===true){
            return(
                <div  className="container right-center">
                    <div id="alert" className="alert alert-success" role="alert">
                    Add success
                    </div>
                </div>     
            )
        }        
          
    }
    render() {
        //console.log("trang thai update",this.props.updateSuccess);
        //console.log("trang thai remove",this.props.removeSuccess);
            
        return (
            
            <div>
                <div className="container">                  
                    <div className="jumbotron">
                        {this.renderRemoveSuccess()}
                        {this.renderUpdateSuccess()}
                        {this.renderaddSuccess()}
                        <div className="container text-center">          
                            <h1 className="display-3">Quản lí thành viên băng Reactjs</h1>
                            <p className="lead">json data</p>
                            <hr className="my-2" />
                        </div>       
                    </div>
                </div>
            </div>
            
            
        );
    }
}

export default Header;
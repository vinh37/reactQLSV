import React, { Component } from 'react';
import InfoUserRow from './InfoUserRow';

class InfoUser extends Component {

    
    displayDataJson=()=>{

        //console.log("chay ham nay ko ");
        return (
            this.props.data.map((value,key)=>{
               return <InfoUserRow clickXoa={(dt)=>this.props.remove(value)} clickEdit={(dt)=>this.props.edit(value)} id={key} key={key} name={value.name} phone={value.phone} per={value.permission}/>
                
            })
        );
        
    }
    render() {
        //console.log("data : ", this.props.data[0].name);
        //console.log("data from json: " + this.props.data); tại sao in ra data ko có gì cả ??
        return (          
                <div className="col-9">
                <table className="table table-hover table-striped table-inverse table-responsive">
                    <thead className="thead-inverse">
                    <tr>
                        <th>STT</th>
                        <th>Name</th>
                        <th>Phone</th>
                        <th>Quyen</th>
                        <th>Thao tac</th>
                    </tr>
                    </thead>                
                   {this.displayDataJson()}
                </table>
            </div>

        );
    }
}

export default InfoUser;
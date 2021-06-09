import React, { Component } from 'react';

import './../App.css';

import Header from './Header';
import Search from './Search';
import InfoUser from './InfoUser';
import AddUser from './AddUser';
import datatUser from './dataUser.json';
import { v4 as uuidv4 } from 'uuid';

class App extends Component {
  
  constructor(props) {
    super(props);
    this.state={
      trangThai:true,
      hideButton:true,
      dtUser:datatUser,
      dataFromSearch:'',
      dataAdd:{},
      errorAdd:{},
      trangThaiSua:true,
      dataSua:{},
      updateSuccess:false,
      removeSuccess:false,
      addSuccess:false
    }
  }
  // componentWillMount() {
  //   console.log("chay componentWillMount");
  //   //localStorage.setItem('user',JSON.stringify(datatUser));
  //   //console.log("chay user null",JSON.parse(localStorage.getItem('user')));
  //   console.log(localStorage.getItem('user'));
  //   if(localStorage.getItem('user')===null){
  //     console.log("localStorage null");
  //     localStorage.setItem('user',JSON.stringify(datatUser));
  //   }
  //   else{
  //     console.log("localStorage not null");
  //     let dtUser=JSON.parse(localStorage.getItem('user'));
  //     this.setState({ 
  //       dtUser
  //     });
  //   }
  // }
  
  doiTrangThai=()=>{
    this.setState({
      trangThai:!this.state.trangThai,
      hideButton:!this.state.hideButton,
    })
  }
  connectSearch=(dt)=>{
    this.setState({
      dataFromSearch:dt
    })
  }
  Add=(dt)=>{
    //console.log("undefined: ", dt.length);
    let errorAdd=this.state.errorAdd;
    //console.log("permision : ",dt.permission);
    if(dt.name===undefined ||dt.name.length==0){
      errorAdd.errorName="name not empty";
      this.setState({errorAdd})
    }
    else if(dt.phone===undefined || dt.phone.length==0){
      errorAdd.errorPhone="phone not empty";
      this.setState({errorAdd})
    }
    //console.log(": ",this.state.errorAdd);
    else if(dt.permission===undefined||dt.permission==0){
      errorAdd.errorQuyen="choose permission";
      this.setState({errorAdd})
    }
    else{
      let item=this.state.dtUser;
      let temp={};
      temp.id=uuidv4();
      temp.name=dt.name;
      temp.phone=dt.phone;
      temp.permission=dt.permission;
      //dt.id=uuidv4();
      
      item.push(temp);
      
      this.setState({
        dtUser:item,
        addSuccess:true
      })
      setTimeout(() => { 
        this.setState({           
          addSuccess:false
        })
    }, 2000);
    }
    
  }
  editInfo=(dt)=>{
    //console.log("du lieu can sua : " ,dt);
    this.setState({
      trangThaiSua:!this.state.trangThaiSua,
      dataSua:dt
    })
  }
  remove=(dtRemove)=>{
    //console.log("data remove : ", dtRemove);
    let dtUser=this.state.dtUser;
    dtUser.map((item)=>{
      if(item.id==dtRemove.id){
        
        const index = dtUser.indexOf(item);
        if (index > -1) {
          //console.log("vi tri phan tu : " , dtUser.indexOf(item));
          dtUser.splice(index, 1);
          this.setState({
            dtUser,
            removeSuccess:true
          });
          // localStorage.setItem('user',JSON.stringify(dtUser));
          // console.log(localStorage.getItem('user',JSON.parse(dtUser)));
          setTimeout(() => { 
            this.setState({           
              removeSuccess:false
            })
        }, 2000);
        }
      }
    })
  }
  updateData=(dtUpdate)=>{
    let dtUser=this.state.dtUser;
    //console.log("update success data : ", dtUpdate);
    //console.log(dtUser);
    if(Object.keys(dtUpdate).length===0){
      //console.log("you not update!!");
      return ;
    };
    dtUser.map((item)=>{
      if(item.id==dtUpdate.id){
        //console.log("vi tri phan tu : " , dtUser.indexOf(item));
        dtUser[dtUser.indexOf(item)]=dtUpdate;
        this.setState({
          dtUser,
          updateSuccess:true
        })
        setTimeout(() => { 
          this.setState({           
            updateSuccess:false
          })
      }, 2000);
      }
    })
    
  }
  render() {
    //localStorage.setItem('user',JSON.stringify(datatUser));
    //console.log(localStorage.getItem('user'));
    //console.log("data: ", this.state.dtUser);
    //console.log(this.state.dtUser);
    let arr=[];
    datatUser.forEach((item)=>{
      if(item.name.indexOf(this.state.dataFromSearch) !== -1) arr.push(item);
    })
    //console.log("data Add: ",this.state.dtUser);
    return (
      <div className="container">
        
        <Header addSuccess={this.state.addSuccess} removeSuccess={this.state.removeSuccess} updateSuccess={this.state.updateSuccess}/>

        <Search  update={(dtUpdate)=>this.updateData(dtUpdate)} dataSua={this.state.dataSua} trangThaiSua={this.state.trangThaiSua} connectSearch={(dt)=>this.connectSearch(dt)} ketNoi={this.doiTrangThai} anNut={this.state.hideButton}/>
        
          <div className="row">           
            <InfoUser remove={(dt)=>this.remove(dt)} edit={(dt)=>this.editInfo(dt)} data={arr}/>
            <AddUser checkNull={this.state.errorAdd} add={this.state.trangThai} AddData={(dt)=>this.Add(dt)}/>
          </div>
        
      </div>
    );
  }

}
export default App;

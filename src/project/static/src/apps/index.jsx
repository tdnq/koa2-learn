import  React from 'react';
import SignIn from '../components/signIn/index.jsx';
import SignUp from '../components/signUp/index.jsx';

const isSignIn = (()=>{
    const urlSearch = location.search;
    if(urlSearch.includes('signIn')){
        return true;
    }else{
        return false;
    }
})();

class App extends React.Component{
    constructor(props){
        super(props);
        this.state={
            selectSignIn:isSignIn
        }
        console.log(this.state);
        this.changeShow=this.changeShow.bind(this);
    }
    changeShow(){
        this.setState({
            selectSignIn:!this.state.selectSignIn
        })
    }
    render(){
        return(
            <div>
                 <h3 style={{textAlign:'center'}}>
                        <a href="javascript:void(0)"  onClick={this.changeShow}>登陆</a>&nbsp;&nbsp;&nbsp;&nbsp;
                        <a href="javascript:void(0)" onClick={this.changeShow}>注册</a>
                    </h3>
                 {this.state.selectSignIn===true?<SignIn/>:<SignUp/>}
            </div>
        );
    }
}
export default App;
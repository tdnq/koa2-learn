import React from 'react';
import './index.less';
import axios from "axios";
class SignIn extends React.Component{
    render (){
        return (
            <div>
                 <form className="singInForm" action="http://localhost:3001/api/user/signIn.json" method="POST">
                        <label htmlFor="username">用户名</label>
                        <input type="text" name="username"/>
                        <label htmlFor="password">密码</label>
                        <input type="text" name="password"/>
                        <button type="submit">登陆</button>
                 </form>

            </div>
        )
    }
}
export default SignIn;
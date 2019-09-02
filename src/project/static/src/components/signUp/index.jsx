import React from 'react';
import './index.less';
class SignUp extends React.Component{
    render (){
        return (
            <div>
                 <form className="singUpForm" action="http://localhost:3001/api/user/signUp.json" method="POST">
                        <label for="username" >用户名</label>
                        <input type="text" required name="username"/>
                        <label for="email">e-mail</label>
                        <input type="text" required name="email"/>
                        <label for="password">密码</label>
                        <input type="text" name="password"required />
                        <label for="confirmPassword">确认密码</label>
                        <input type="text" name="confirmPassword"required />
                        <button type="submit">注册</button>
                 </form>

            </div>
        )
    }
}
export default SignUp;
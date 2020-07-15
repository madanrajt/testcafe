import {Selector} from 'testcafe';

export default class LoginPage{

    constructor(){
        this.userName= Selector('input#txtUsername')
        this.password= Selector('input#txtPassword')
        this.loginbtn= Selector('input#btnLogin')
    }
}
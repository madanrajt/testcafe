import HmPage from '../_PageObjectRepository/HomePage.js';
import LgPage from '../_PageObjectRepository/LoginPage.js';

export default class UIMAP{

    constructor(){

        this.Homepage=new HmPage();
        this.LoginPage=new LgPage();
        
    }


}
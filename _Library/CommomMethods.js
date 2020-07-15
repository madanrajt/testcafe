import {t} from 'testcafe'
import ObjectRepo from '../_PageObjectRepository/UIMAP'

var repo = new ObjectRepo();

export var CommonMethods = {

    Login : async function(t, uname , pass){

        await t 

        .typeText(repo.LoginPage.userName, uname)
        .typeText(repo.LoginPage.password, pass)
        .click(repo.LoginPage.loginbtn)
        .wait(3000)

        if(repo.Homepage.hoverrequitment.exists){
            await t 
            .click(repo.Homepage.hoverrequitment)
            .wait(2000)
            .click(repo.Homepage.selectCandidate)
            console.log('Login successfull');
        }else{
            console.log('Login unsuccessful');
        }

    }

   

}



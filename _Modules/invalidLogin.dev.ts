import { Selector } from 'testcafe';
import config from '../_Config/config';
import { CommonMethods } from '../_Library/CommomMethods';
import objrepo from '../_PageObjectRepository/UIMAP';

var repo = new objrepo();
var minimist = require('minimist');

fixture ("InValidLogin to application")
    .beforeEach(async t => {

        console.log('Execution started');
        const args = minimist(process.argv.slice(2));
        var environment = args.env;
        console.log('Environment is ', environment);

        if(environment == 'Test'){

            console.log('Entered in dev condition');
            t.ctx.URL = config.Test.URL;
            t.ctx.userName = config.Test.username;
            t.ctx.password = config.Test.password;

            console.log('username is',t.ctx.userName);

        }
        else if (environment == 'dev'){
            console.log('Entered in dev condition');
            t.ctx.URL = config.dev.URL;
            t.ctx.userName = config.dev.username;
            t.ctx.password = config.dev.password;

        }
})
test('Invalid Login scenario', async t => {

    await t

        .navigateTo(t.ctx.URL)

        await CommonMethods.Login(t , t.ctx.userName , t.ctx.password);

        await t.wait(2000);


})



import {Selector} from 'testcafe';

export default class HomePage{

    constructor(){

        this.hoverrequitment= Selector('a#menu_recruitment_viewRecruitmentModule')
        this.selectCandidate= Selector('a#menu_recruitment_viewCandidates')
     
    }
}
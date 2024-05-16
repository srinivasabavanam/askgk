import { LightningElement } from 'lwc';
import {testit} from 'c/onlyjs';
export default class Conditional extends LightningElement {
    //boolean variables to control weather to show button or not
    showButton=true;

    //event handler for button click
    handleClick(){
        //toggle the value of showButton variable
        if(this.showButton){
            this.showButton=false;
        }else(this.showButton=true);
        
    }
    
}
testit();
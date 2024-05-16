import { LightningElement } from 'lwc';
import {testit} from "c/onlyjs";

export default class newlwc extends LightningElement{
   constructor(){
     super();
     testit();
   }

}
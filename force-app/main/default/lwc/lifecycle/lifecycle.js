import { LightningElement } from 'lwc';

export default class Lifecycle extends LightningElement {
    constructor(){
        super();
    console.log('Constructor called');
       this.name='abhi';
       this.age=22;
       this.email='abhi@gamil.com';
       this.skill='APEX';
}
    counter=0;
    
    
    
    
       connectedCallback() {
            console.log('Connected to DOM');
       }
     
    renderedCallback() {
           console.log('Component rendered');
   }
    
        disconnectedCallback() {
           console.log('Disconnected from DOM');
       }
    
        increment() {
          this.counter++;
    }
}
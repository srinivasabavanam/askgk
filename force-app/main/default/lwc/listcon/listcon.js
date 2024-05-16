import { LightningElement, wire } from 'lwc';
import showconlist from '@salesforce/apex/ContactListRenderList.showconlist';
export default class Listcon extends LightningElement {
    @wire(showconlist)
    contacts;
}
import { LightningElement } from 'lwc';

export default class ShowHideCheckbox extends LightningElement {

    checked = false;

    toggleContent() {
        this.checked = !this.checked;
    }
}
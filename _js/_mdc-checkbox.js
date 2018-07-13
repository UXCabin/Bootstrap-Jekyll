import {MDCFormField} from '@material/form-field';
import {MDCCheckbox} from '@material/checkbox';

let checkbox;
let formField;
if(document.querySelector('.mdc-checkbox')){
	const checkbox = new MDCCheckbox(document.querySelector('.mdc-checkbox'));
	const formField = new MDCFormField(document.querySelector('.mdc-form-field'));
	formField.input = checkbox;
}

export { checkbox };
export { formField };
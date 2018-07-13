import { MDCFormField } from '@material/form-field';

let formField;

if(document.querySelector('.mdc-form-field')){
	const formField = new MDCFormField(document.querySelector('.mdc-form-field'));
}

export { formField };
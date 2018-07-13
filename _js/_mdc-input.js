import { MDCTextField } from '@material/textfield';

let input;
if(document.querySelector('.mdc-button')){	
	const input = new MDCTextField(document.querySelector('.mdc-text-field'));
}

export { input };

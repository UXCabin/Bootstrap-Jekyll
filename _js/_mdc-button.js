import { MDCRipple } from '@material/ripple';

let button;
if(document.querySelector('.mdc-button')){	
	const button = new MDCRipple(document.querySelector('.mdc-button'));
}

export { button };

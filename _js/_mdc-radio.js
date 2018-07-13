
import { MDCRadio } from '@material/radio';

let radio;

if(document.querySelector('.mdc-radio')){
	const radio = new MDCRadio(document.querySelector('.mdc-radio'));
}

export { radio };
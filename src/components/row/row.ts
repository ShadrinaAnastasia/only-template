import Component, { ComponentProps } from '../../app/js/component';
import { fromEvent} from 'rxjs';

export default class Row extends Component.Default {
    el1: HTMLElement;
    el2: HTMLElement;

    constructor(element: ComponentProps) {
        super(element);

        const [el1,el2] = this.getElements('container-el');
        this.el1=el1;
        this.el2=el2;

        const button = this.getElement('footer-button');

        button.addEventListener('click', this.onClickButton);
    }

    onClickButton = () => {
        this.el1.classList.toggle('row__container-el--green');
        this.el2.classList.toggle('row__container-el--none');
    }

    destroy = () => {
        // Destroy functions
    }
}
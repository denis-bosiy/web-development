class Slider {
    constructor(slider) {
        console.log(slider);
        const button_backward = slider.getElementsByClassName('slider__arrow_backward')[0];
        const button_forward = slider.getElementsByClassName('slider__arrow_forward')[0];
        const slider_items = slider.getElementsByClassName('slider-items')[0];

        this.index = 0;
        this.button_backward = button_backward;
        this.button_forward = button_forward;
        this.slider_items = slider_items;
        
        this.button_backward.addEventListener('click', this._slideBack.bind(this));
        this.button_forward.addEventListener('click', this._slideNext.bind(this));

        this._toggleSlider();
    }

    _toggleSlider = function() {
        for(let i = 0; i < this.slider_items.children.length; i++) {
            if (i === this.index) {
                this.slider_items.children[i].classList.remove('slider-item--hidden');
            }
            if (i !== this.index) {
                this.slider_items.children[i].classList.add('slider-item--hidden');
            }
        }
    }

    _slideNext() {
        if (this.index === this.slider_items.children.length - 1) {
            this.index = -1;
        }
        this.index = this.index + 1;
        this._toggleSlider();
    }

    _slideBack() {
        if (this.index === 0) {
            this.index = this.slider_items.children.length;
        }
        this.index = this.index - 1;
        this._toggleSlider();
    }
}

function run() {
    const slider = new Slider(document.getElementById('slider'));
}

window.onload = run;
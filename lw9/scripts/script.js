class Slider {
    constructor(button_backward, button_forward, slider_items) {
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
    const button_backward = document.getElementById('slider__arrow_backward');
    const button_forward = document.getElementById('slider__arrow_forward');
    const slider_items = document.getElementById('slider-items');

    const slider = new Slider(button_backward, button_forward, slider_items);
}

window.onload = run;
function Slider(slider){
    if(!(slider instanceof Element))
        throw new Error('Not a valid slider');

    this.slides = slider.querySelector('.slides');
    const prevButton = slider.querySelector('.goToPrev');
    const nextButton = slider.querySelector('.goToNext');
    this.slider = slider;

    this.startSlider();
    this.applyClass();

    nextButton.addEventListener('click', () => this.move());
    prevButton.addEventListener('click', () => this.move('back'));
}

Slider.prototype.applyClass = function(){
    this.current.classList.add('current');
    this.prev.classList.add('prev');
    this.next.classList.add('next');
}

Slider.prototype.startSlider = function(){
    this.current = this.slider.querySelector('.current') || this.slides.firstElementChild;
    this.prev = this.current.previousElementSibling || this.slides.lastElementChild;
    this.next = this.current.nextElementSibling || this.slides.firstElementChild;
}

Slider.prototype.move = function(direction){
    this.current.classList.remove('current');
    this.prev.classList.remove('prev');
    this.next.classList.remove('next');

    if(direction === 'back'){
        [this.prev, this.current, this.next] = [
            this.prev.previousElementSibling || this.slides.lastElementChild, 
            this.prev, 
            this.current
        ];
    } else {
        [this.prev, this.current, this.next] = [
            this.current, 
            this.next, 
            this.next.nextElementSibling || this.slides.firstElementChild
        ];
    }
    this.applyClass();
}


const mySlider = new Slider(document.querySelector('.slider'));
const dogSlider = new Slider(document.querySelector('.dog-slider'));

console.log(mySlider, dogSlider);
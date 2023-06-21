function Slider(slider){
    if(!(slider instanceof Element))
        throw new Error('Not a valid slider');

    let prev;
    let current;
    let next;

    const slides = slider.querySelector('.slides');
    const prevButton = slider.querySelector('.goToPrev');
    const nextButton = slider.querySelector('.goToNext');

    function applyClass(){
        current.classList.add('current');
        prev.classList.add('prev');
        next.classList.add('next');
    }

    function startSlider(){
        current = slider.querySelector('.current') || slides.firstElementChild;
        prev = current.previousElementSibling || slides.lastElementChild;
        next = current.nextElementSibling || slides.firstElementChild;
    }

    function move(direction){
        current.classList.remove('current');
        prev.classList.remove('prev');
        next.classList.remove('next');

        if(direction === 'back'){
            [prev, current, next] = [
                prev.previousElementSibling || slides.lastElementChild, 
                prev, 
                current
            ];
        } else {
            [prev, current, next] = [
                current, 
                next, 
                next.nextElementSibling || slides.firstElementChild
            ];
        }
        applyClass();
    }

    startSlider();
    applyClass();

    nextButton.addEventListener('click', move);
    prevButton.addEventListener('click', () => move('back'));
}


Slider(document.querySelector('.slider'));
Slider(document.querySelector('.dog-slider'));
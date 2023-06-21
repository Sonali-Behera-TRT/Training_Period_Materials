function Gallery(gallery){
    if(!gallery){
        throw new Error('Gallery not found!!!');
    }
    
    const images = gallery.querySelectorAll('img');
    const modal = document.querySelector('.modal');
    const prev = modal.querySelector('.prev');
    const next = modal.querySelector('.next');
    let currentImage;

    function openModal(){
        if(modal.matches('.open')){
            console.log('Modal Already Opened');
            return;
        }
        modal.classList.add('open');

        modal.addEventListener('click', handleClick);

        window.addEventListener('keyup',    handleKeyUp);
    }

    function closeModal(){
        modal.classList.remove('open');

        modal.removeEventListener('click', handleClick);

        window.removeEventListener('keyup', handleKeyUp);
    }

    function showImage(el){
        modal.querySelector('img').src = el.src;
        modal.querySelector('h2').textContent = el.title;
        modal.querySelector('p').textContent = el.dataset.description;
        currentImage = el;

        openModal();
    }

    function handleClick(e){
        if(e.target === e.currentTarget)
            closeModal();

        if(e.target === next)
            showImage(currentImage.nextElementSibling || gallery.firstElementChild);

        if(e.target === prev)
            showImage(currentImage.previousElementSibling || gallery.lastElementChild);
    }

    function handleKeyUp(e){
        if(e.key === 'Escape')
            closeModal();

        if(e.key === 'ArrowRight')
            showImage(currentImage.nextElementSibling || gallery.firstElementChild);

        if(e.key === 'ArrowLeft')
            showImage(currentImage.previousElementSibling || gallery.lastElementChild);
    }

    images.forEach(image => {
        image.addEventListener('click', e => {
            showImage(e.currentTarget);
        });

        image.addEventListener('keyup', e => {
            if(e.key === 'Enter')
                showImage(image);
        });
    });
}

const gallery1 = new Gallery(document.querySelector('.gallery1'));
const gallery2 = new Gallery(document.querySelector('.gallery2'));
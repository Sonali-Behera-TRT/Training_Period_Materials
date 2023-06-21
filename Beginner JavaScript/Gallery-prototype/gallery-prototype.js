function Gallery(gallery){
  if(!gallery){
      throw new Error('Gallery not found!!!');
  }
  
  this.gallery = gallery;
  this.images = gallery.querySelectorAll('img');
  this.modal = document.querySelector('.modal');
  this.prev = this.modal.querySelector('.prev');
  this.next = this.modal.querySelector('.next');
  
  this.handleClick = this.handleClick.bind(this);
  this.handleKeyUp = this.handleKeyUp.bind(this);

  this.images.forEach(image => {
      image.addEventListener('click', e => {
          this.showImage(e.currentTarget);
      });

      image.addEventListener('keyup', e => {
          if(e.key === 'Enter')
              this.showImage(image);
      });
  });
}

Gallery.prototype.openModal = function(){
  if(this.modal.matches('.open')){
      console.log('Modal Already Opened');
      return;
  }
  this.modal.classList.add('open');
  this.modal.addEventListener('click', this.handleClick);
  window.addEventListener('keyup',    this.handleKeyUp);
}

Gallery.prototype.closeModal = function(){
  this.modal.classList.remove('open');

  this.modal.removeEventListener('click', this.handleClick);

  window.removeEventListener('keyup', this.handleKeyUp);
}

Gallery.prototype.showImage = function(el){
  this.modal.querySelector('img').src = el.src;
  this.modal.querySelector('h2').textContent = el.title;
  this.modal.querySelector('p').textContent = el.dataset.description;
  this.currentImage = el;

  this.openModal();
}

Gallery.prototype.handleClick = function(e){
  if(e.target === e.currentTarget)
      this.closeModal();

  if(e.target === this.next)
      this.showImage(this.currentImage.nextElementSibling || this.gallery.firstElementChild);

  if(e.target === this.prev)
      this.showImage(this.currentImage.previousElementSibling || this.gallery.lastElementChild);
}

Gallery.prototype.handleKeyUp = function(e){
  if(e.key === 'Escape')
      this.closeModal();

  if(e.key === 'ArrowRight')
      this.showImage(this.currentImage.nextElementSibling || this.gallery.firstElementChild);

  if(e.key === 'ArrowLeft')
      this.showImage(this.currentImage.previousElementSibling || this.gallery.lastElementChild);
}


const gallery1 = new Gallery(document.querySelector('.gallery1'));
const gallery2 = new Gallery(document.querySelector('.gallery2'));

console.log(gallery1, gallery2);
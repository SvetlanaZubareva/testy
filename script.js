const modal = document.querySelector('.modal');
const button = document.querySelector('.button--display')

   button.addEventListener('click',  (evt) => {
      evt.preventDefault();
      if (modal.classList.contains('close-modal')) {
         modal.classList.remove('close-modal')
         modal.classList.add('open-modal');
      } else {
         modal.classList.remove('open-modal');
         modal.classList.add('close-modal');
      }
   });

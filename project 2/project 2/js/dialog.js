const dialog = document.querySelector('[data-modal]');
const openDialog = document.querySelector('[data-open-modal]');
const closeDialog = document.querySelector('[data-close-modal]');

function modal() {
  if (dialog == null || openDialog == null || closeDialog == null) {
    return;
  }
  
  openDialog.addEventListener('click', () => {
    dialog.showModal();
  });

  closeDialog.addEventListener('click', () => {
    dialog.close();
  });

  dialog.addEventListener('click', e => {
    const dialogDimensions = dialog.getBoundingClientRect();
    if (
      e.clientX < dialogDimensions.left ||
      e.clientX > dialogDimensions.right ||
      e.clientY < dialogDimensions.top ||
      e.clientY > dialogDimensions.bottom
    ) {
      dialog.close();
    }
  });
}
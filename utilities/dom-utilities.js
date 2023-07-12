const noScroll = (scroll = true) => {
  
  if (typeof document !== 'undefined') {
    const ele = document.querySelector('body');
    if (scroll) {
      ele.style.height = '100%';
      ele.style.overflow = 'unset';
    } else if (scroll === false) {
      ele.style.height = '100vh';
      ele.style.overflow = 'hidden';
    }
  }
};


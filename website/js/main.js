function show() {
  let element = document.getElementById(location.hash.slice(1));
  if (!element) {
    element = "home"
    return;
  }

  const pages = document.getElementsByClassName('page');
  for (let i = 0; i < pages.length; i++) {
    pages[i].style.display = 'none';
  }

  element.style.display = 'block';
}

window.onhashchange = show;
window.onload = show;

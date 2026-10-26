const DEFAULT_PAGE = home

function show() {
  const ele = document.getElementById(location.hash.slice(1));
  if (!ele) {
    alert("no such element");
    return;
  }

  const pages = document.getElementsByClassName('page');
  for (let i = 0; i < pages.length; i++) {
    pages[i].style.display = 'none';
  }

  ele.style.display = 'block';
}

window.onhashchange = show;

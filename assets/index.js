// local storage
const localStorage = window.localStorage;

// store the url of the current page in session storage
const urlPath = window.location.pathname;
if (urlPath !== '/collaborate/') {
  localStorage.setItem('url', urlPath);
}

// Checkboxes
const checkboxes = document.querySelectorAll('.task-list-item-checkbox');
checkboxes.forEach(checkbox => {
  // remove the disabled attribute; added by kramdown by default
  checkbox.removeAttribute('disabled')
  // // add the onclick event to the parent element
  // const parent = checkbox.closest('.task-list-item');
  // parent.setAttribute('onclick', 'toggleCheckbox(this)');
  // // prevent an event in the nested list from bubbling up to the parent
  // const nestedList = parent.querySelector('.task-list');
  // if (nestedList) {
  //   nestedList.addEventListener('click', (event) => {
  //     event.stopPropagation();
  //   });
  // }
  // // change the cursor on the text to a pointer
  // parent.style.cursor = 'pointer';
});

function toggleCheckbox(el) {
  const checkbox = el.querySelector('.task-list-item-checkbox');
  checkbox.checked = !checkbox.checked;
}

// Popovers/Tooltips
const popovers = document.querySelectorAll('.popover');
popovers.forEach(popover => {
  popover.setAttribute('onclick', 'toggleTooltip(this)');
  popover.id = 'popover-' + Math.floor(Math.random() * 1000000);
});

const tooltipTimers = [];

function toggleTooltip(el, action) {
  if (el.classList.contains('tooltip-visible') || action === 'remove') {
    const tooltip = document.body.querySelector('#tooltip-' + el.id);
    if (tooltip) { tooltip.remove(); }
    el.classList.remove('tooltip-visible');
  } else {
    const tooltipText = el.getAttribute('tooltip-title');
    const tooltip = document.createElement('div');
    tooltip.innerText = tooltipText;
    tooltip.classList.add('tooltip');
    tooltip.classList.add('show');
    tooltip.setAttribute('role', 'tooltip');
    tooltip.setAttribute('id', 'tooltip-' + el.id);
    document.body.appendChild(tooltip);
    // Pass the button, the tooltip, and some options, 
    // and Popper will do the magic positioning for you:
    Popper.createPopper(el, tooltip, {
      placement: 'top',
    });
    el.classList.add('tooltip-visible');
    
    const removeTooltipTimer = setTimeout(() => {
      toggleTooltip(el, 'remove');
    }, 4000);

    if (tooltipTimers.length > 50) {
      tooltipTimers.shift();
    }
    tooltipTimers.push(removeTooltipTimer);
  }
}


// Add event listener to the search input
const searchInput = document.getElementById('search-input');
const searchIconLabel = document.querySelector('.search-label');
function figureSearchOut() {
  if (searchInput.value === '') {
    clearSearch();
  } else {
    replaceSearchIcon();
  }
}
searchInput.addEventListener('focus', (event) => {figureSearchOut();});
searchInput.addEventListener('input', (event) => {figureSearchOut();});

// Word Cloud Search
function searchKeyword(el) {
  const keyword = el.innerText;
  const mainHeader = document.getElementById('main-header');
  searchInput.value = keyword;
  mainHeader.classList.add('nav-open');
  searchInput.focus();
  // document.documentElement.classList.add('search-active');
}

// Replace search icon in the search bar with a close icon
function replaceSearchIcon() {
  console.log("search input is in focus");
  // remove the existing icon
  searchIconLabel.firstElementChild.remove();
  // add close function
  searchIconLabel.setAttribute('onclick', 'clearSearch()');
  // add the close icon
  searchIconLabel.innerHTML = `<svg id="close-icon" class="search-icon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16"><path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z"/></svg>`
}

function clearSearch() {
  console.log("clear search");
  searchInput.value = '';
  searchIconLabel.removeAttribute('onclick');
  // remove the close icon
  searchIconLabel.firstElementChild.remove();
  // bring back the search icon
  searchIconLabel.innerHTML = `<svg viewBox="0 0 24 24" class="search-icon"><use xlink:href="#svg-search"></use></svg>`
}
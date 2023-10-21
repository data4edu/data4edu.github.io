// local storage
const localStorage = window.localStorage;

function changeFilter() {
  const homepageFilterSelector = document.getElementById('homepage-filter-selector');
  localStorage.setItem('homepage-filter', homepageFilterSelector.value);
  console.log(localStorage)
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

// Word Cloud Search
function searchKeyword(el) {
  const keyword = el.innerText;
  const mainHeader = document.getElementById('main-header');
  const searchInput = document.getElementById('search-input');
  searchInput.value = keyword;
  mainHeader.classList.add('nav-open');
  searchInput.focus();
  // document.documentElement.classList.add('search-active');
}
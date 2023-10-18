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
  // add the onclick event to the parent element
  const parent = checkbox.closest('.task-list-item');
  parent.setAttribute('onclick', 'toggleCheckbox(this)');
  // prevent an event in the nested list from bubbling up to the parent
  const nestedList = parent.querySelector('.task-list');
  if (nestedList) {
    nestedList.addEventListener('click', (event) => {
      event.stopPropagation();
    });
  }
  // change the cursor on the text to a pointer
  parent.style.cursor = 'pointer';
});

function toggleCheckbox(el) {
  const checkbox = el.querySelector('.task-list-item-checkbox');
  checkbox.checked = !checkbox.checked;
}
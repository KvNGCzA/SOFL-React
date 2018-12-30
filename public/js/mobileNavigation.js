import $ from 'jquery';

$(() => {
  // slide out menu
  const $menuIcon = $('.dropdown-menu.nav-icon i');
  const $dropDownMenuItems = $('.dropdown-menu-items');
  $menuIcon.on('click', () => {
    if ($menuIcon.attr('class') !== 'fas fa-times') {
      $dropDownMenuItems.animate({ right: 0 }, 250);
      $menuIcon.attr('class', 'fas fa-times');
    } else {
      $dropDownMenuItems.animate({ right: '-768px' }, 300);
      $menuIcon.attr('class', 'fas fa-bars');
    }
  });

  // mobile search configuration
  const $mobSearchIcon = $('.mob-search.nav-icon i');
  const $searchForm = $('form.mob-search-form.search');
  const searchFormInput = $('form.mob-search-form.search input');
  $mobSearchIcon.on('click', () => {
    if ($searchForm.css('display') === 'block') {
      $mobSearchIcon.css('color', 'white');
      $searchForm.css('display', 'none');
    } else {
      $mobSearchIcon.css('color', '#f24d4d');
      $searchForm.css('display', 'block');
      searchFormInput.focus();
    }
  });
  searchFormInput.on('blur', () => {
    $searchForm.css('display', 'none');
    $mobSearchIcon.css('color', 'white');
  });
});

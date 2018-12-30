import $ from 'jquery';

$(() => {
/** quick options configurations */
// show and hide quick options
  const opt = $('.quick-options');
  const optCount = opt.children().length;
  // quick options icon array
  const $iconElement = ['.quick-search i', '.quick-question i'];
  // quick options class array
  const $optionsClass = ['.quick-search', '.quick-question'];
  // quick options icon class array
  const $iconClass = ['fas fa-search', 'fas fa-pencil-alt'];
  for (let x = 0; x < $iconElement.length; x += 1) {
    const $icon = $($iconElement[x]);
    const $optionContainer = $($optionsClass[x]);
    $icon.on('click', () => {
      if ($icon.attr('class') !== 'fas fa-times opt-shadow') {
        $optionContainer.animate({ right: '400px' }, 250).addClass('opt-shadow');
        $optionContainer.find('input')[0].focus();
        $icon.attr('class', 'fas fa-times opt-shadow');

        const sibsP = $($optionsClass[x]).prevAll();
        const sibsN = $($optionsClass[x]).nextAll();
        let index = optCount - sibsN.length;
        // make other options retreat when you open another one and change their icon
        // all previous siblings
        if (sibsP.length > 0) {
          for (let y = 0; y < sibsP.length; y += 1) {
            if ($(sibsP[y]).css('right') !== 0) {
              $(sibsP[y]).animate({ right: 0 }, 250);
              $($iconElement[y]).attr('class', $iconClass[y]);
              $($optionsClass[y]).removeClass('opt-shadow');
            }
          }
        }
        // all next siblings
        if (sibsN.length > 0) {
          for (let z = 0; z < sibsN.length; z += 1) {
            if ($(sibsN[z]).css('right') !== 0) {
              $(sibsN[z]).animate({ right: 0 }, 250);
              $($iconElement[index]).attr('class', $iconClass[index]);
              $($optionsClass[index]).removeClass('opt-shadow');
            }
            index += 1;
          }
        }
      } else {
        $optionContainer.animate({ right: 0 }, 250).removeClass('opt-shadow');
        $icon.attr('class', $iconClass[x]);
      }
    });
  }
});

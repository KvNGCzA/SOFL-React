import $ from 'jquery';

$(() => {
  /** quick options configurations */
//show and hide quick options
    const $opt = $('i.fas');
    const optCount = $opt.children().length;
    //quick options icon array
    let $iconElement = ['.quick-search i', '.quick-question i'];
    //quick options class array
    let $optionsClass = ['.quick-search', '.quick-question'];
    //quick options icon class array
    let $iconClass = ['fas fa-search','fas fa-pencil-alt'];

    // let $icon = $($iconElement[x]);
    // let $optionContainer = $($optionsClass[x]);

    $opt.on('click', (e) => {
        console.log($(e.target).parent());
        if($(e.target).parent().css('right') === '400px' || !$(e.target)){
            console.log($(e.target).parent().css('right'));
            $(e.target).parent().animate( {'right': '0'}, 250).removeClass('opt-shadow');
            // $(e.target).parent().find('input')[0].focus();
            $(e.target).parent().find('i').attr('class', 'fas fa-times opt-shadow');
            return;
        }
        $(e.target).parent().animate( {'right': '400px'}, 250).addClass('opt-shadow');
        // $(e.target).find('input')[0].focus();
        $(e.target).parent().find('i').attr('class', 'fas fa-times opt-shadow');
    });

    // let homeQuestions = $('#hQuestions');
    // let proTab = $('#profile-tab');
    // homeQuestions.tabs();
    // proTab.tabs();
});

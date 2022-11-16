$(document).ready(() => {
    // Selectors
    // Select html tags
    // Get element by Id
    const paragraphs = jQuery('p#first');
    console.log(paragraphs);
    // Get element by Class Name
    const paragraph2 = jQuery('p.third');
    console.log(paragraph2);
    // Select all elements
    const all = jQuery('*')
    console.log(all)
    // Select first element from a list of many elements
    const paragraph1 = jQuery('p:first')
    console.log(paragraph1)

    // Events
    jQuery('button#first').mouseenter(() => {
        console.log('Mouse is now on top of button');
    });
    jQuery('button#first').dblclick(() => {
        console.log('Button Double Clicked');
    });
    jQuery('p.third').click(() => {
        console.log('Third paragraph clicked');
    });

    // Dynamic
    $('button#first').mouseenter(() => {
        $('p').hide();
        $('body').addClass('styler');
    });
    $('button#first').mouseleave(() => {
        $('p').show();
        $('body').removeClass('styler');
    });

    $('button#first').click(() => {
        // NB:- This makes sense if you're applying a single change
        $('p#second').css('font-size','30cm');
        // $(this).hide();
    });

    $('button#first').dblclick(() => {
        $('body').removeClass('styler');
        $('p#second').removeClass('xxxx');
        // $(this).hide();
    });

    // Chain Multiple Events
    $('button#first').on({
        click: () => { },
        mouseenter: () => { },
        mouseleave: () => { }
    })
});
$(document).ready(() => { 
    $('.contact-us__form').ajaxForm({
        url: 'mailer.php',
        type: 'post',
        beforeSerialize: () => {
            
        },
        success: () => {
            console.log('good!');
        },
        error: () => {
            console.error('fuck!');
        }
    });
});
$(document).ready(function () {
    $('.modal_photo_item a.close').on('click', function(e) {
        e.preventDefault()
        $('.site_overlay').hide()
        $('body').removeClass('has_overlay')
        $('.modal_photo_item').css('background-image', '')
    })

    $('.gallery .photo').on('click', function(e) {
        e.preventDefault()
        $('body').addClass('has_overlay')
        $('.modal_photo_item').css('background-image', 'url(' + $(this).data('large') + ')')
        $('.site_overlay').show()
    })
})



$(document).ready(function () {
    $('#submit').click(function () {
        var form_data = {
            username: $('.username').val(),
            password: $('.password').val(),
            ajax: '1'
        };
        $.ajax({
            url: "<?php echo site_url('login/ajax_check'); ?>",
            type: 'POST',
            async: false,
            data: form_data,
            success: function (msg) {
                $('#message').html(msg);
            }
        });
        return false;
    });
});

$(document).ready(function () {
    $('#registrationForm').on('submit', function (e) {
        e.preventDefault(); // Prevent default form submission

        const formData = $(this).serialize(); // Serialize form data
        $.post('process.php', formData, function (response) {
            $('#output').html(response).fadeIn(); // Display response in output div
        }).fail(function () {
            $('#output').html('<p style="color:red;">An error occurred!</p>').fadeIn();
        });
    });
});
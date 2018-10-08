import { Entry } from './journal';

$(document).ready(function () {
    $('#journal-form').submit(function (event) {
        event.preventDefault();
        var title = $('#title').val();
        var body = $('#body').val();
        var newEntry = new Entry(title, body);
        $('#wordCounter').text(newEntry.wordCounter());
    });
});
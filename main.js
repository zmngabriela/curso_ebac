$(document).ready(function () {
    $('#taskForm').on('submit', function(e) {
        e.preventDefault();
        const nameTask = $('#nameTask').val();
        const newTask = $('#newTask');
        const weekDay = $('select').val();
        const addLine = $(`<li><div id="task">${nameTask}</div><div id="weekDay">${weekDay}</div></li>`);
        $(addLine).appendTo(newTask);
        $('#nameTask').val('');
        $('select').val('');
    });

    $('ul').on('click', 'li', function() {
        $(this).toggleClass('completed');
    });

    $('#deleteBtn').on('click', function() {
        $('.completed').remove();
    });
});
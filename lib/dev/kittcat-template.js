$(function() {
    document.templates = {}

    $('script[type="text/ng-template"]').each(function() {
        var tpl = $(this),
             name = $(this).attr('data-name');

        document.templates[name] = tpl.html();
    });
});

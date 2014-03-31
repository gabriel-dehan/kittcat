$.fn.kittcat = function(opts) {
    this.attr('ng-app', 'kittcat');
    this.attr('ng-controller', 'KittcatController');
    this.html(document.templates['container']);

    var api_host = opts.api || document.location.href,
        endpoint = opts.endpoint || 'data',
        file_endpoint = opts.fileEndpoint || '/file'
        tree_endpoint = opts.treeEndpoint || '/tree';

    console.log(api_host)

    document.kittcat = document.kittcat || {}

    document.kittcat['api_host'] = api_host;
    document.kittcat['api_endpoint'] = endpoint;
    document.kittcat['api_url'] = api_host + '/' + endpoint;
    document.kittcat['file_endpoint'] = file_endpoint;
    document.kittcat['tree_endpoint'] = tree_endpoint;

    $.event.trigger({
        type: 'ng-app-started',
        el: this[0]
    })

    $(document).on('click', '.dir-name, .file-name', function(e) {
        var target = $(e.target);
        e.preventDefault();

        if ( target.hasClass('file-name') || target.hasClass('dir-name') ) {
            var self = target,
            id       = target.children('a').attr('href');
        } else {
            e.preventDefault();
            var self = target.parent(),
            id       = target.attr('href');
        }
        $('.file-name.selected, .dir-name.selected').removeClass('selected');
        self.next('.dir').toggleClass('hidden');

        // Open or close the directory icon
        if (self.hasClass('dir-name')) {
            var glyphicon = self.find('span.glyphicon');
            glyphicon.toggleClass('glyphicon-folder-close');
            glyphicon.toggleClass('glyphicon-folder-open');
        }
        if (!self.next('.dir').hasClass('hidden')) {
            self.addClass('selected');
        }
    });

    return this;
};

app.factory('viewerOptions', function() {
    return viewerOptionsHelper;
});

var viewerOptionsHelper = Base.extend({
    constructor: function(scope) {
        this.scope = scope;
    },

    customizeSelect: function() {
        setTimeout(function() {
            $('#kittcat-file-viewer .option select').customSelect();
        }, 10);
    },

    updateSelects: function(lang) {
        $('.option.lang .customSelectInner').text(lang);
    },

    /* Modifies the link tag linking to highlighjs styles, replacing it with the one we want  */
    selectLangHighlight: function() {
        var style = this.scope.langStyle,
            currentStyle = $('link[data-style="highlight"'),
            url = currentStyle.attr('href');

        currentStyle.attr('href', url.replace(/\/(?:\.|\-|\w)*\.css/, '/' + style + '.css'));
    },

    /* Select a line in the file viewer */
    selectLine: function(index) {
        lines = $('pre.source-code.hljs').html().split('<br>');
        new_lines = [];

        _.each(lines, function(line, i, lines) {
            if (line.match(/selected-line/)) {
                line = $(line).html();
            } else if (i == index && line !== '') {
                line = '<span class="selected-line">' + line + '</span>';
            }
            new_lines.push(line);
        });

        $('pre.source-code.hljs').html(new_lines.join('<br>'));
    },

    openTree: function() {
        var path = this.scope.file.getPath().split('/').slice(1),
            name = this.scope.name;

        this.openTreeWithPath(path, name);
    },

    openTreeWithPath: function(path, name) {
        _.each(path, function(dir) {
            if (dir !== name) {
                $('#kittcat-explorer').find('li.dir-name:contains("' + dir + '/") ~ ul.hidden').prev('li.dir-name').click();
            } else {
                $('#kittcat-explorer').find('li.file-name:contains("' + name + '")').click();
            }
        });
    }
});

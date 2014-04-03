app.factory('viewerOptions', function() {
    return viewerOptionsHelper;
});

var viewerOptionsHelper = Base.extend({
    constructor: function(scope, cookies) {
        this.scope = scope;
        this.session = cookies;
    },

    customizeSelect: function() {
        setTimeout(function() {
            $('#kittcat-file-viewer .option select').customSelect();
        }, 10);
    },

    updateSelects: function(lang) {
        $('.option.lang .customSelectInner').text(lang);
    },

    selectDefaultLangHighlight: function(source) {
        var userStyle = this.session.get('kittcatHighlight'),
            style     = '';

        if (userStyle) {
            style = userStyle;
            this.selectLangHighlight(style);
        } else {
            style = source.getCurrentStyle();
        }

        return style;
    },

    /* Modifies the link tag linking to highlighjs styles, replacing it with the one we want  */
    selectLangHighlight: function(style) {
        var style = style || this.scope.langStyle,
            currentStyle = $('link[data-style="highlight"'),
            url = currentStyle.attr('href');

        this.session.put('kittcatHighlight', style);

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

app.factory('sourceCode', function() {
    return sourceCodeHelper;
});

var sourceCodeHelper = Base.extend({
    constructor: function(scope, source, sce) {
        this.code = source;
        this.scope = scope;
        this.sce = sce;
    },

    detectLanguage: function() {
        var hljsComputedData = hljs.highlightAuto(this.code);

        this.scope.sourceLang   = hljsComputedData.language || hljsComputedData.second_best ;
        this.detectedLang = this.scope.sourceLang.charAt(0).toUpperCase() + this.scope.sourceLang.substring(1).toLowerCase();
    },

    getCurrentStyle: function() {
        return $('link[data-style="highlight"]').attr('href').match(/\/((\.|\-|\w)*)\.css/)[1];
    },

    computeSourceLength: function() {
        this.NLoC = this.code.split('\n').length;
        this.NLoCArray = _.range(1, this.NLoC + 1);
    },

    formatCode: function() {
        var data = this.code,
            lang = this.scope.sourceLang,
            nl2br = function(text) {
                return text.replace(/\n/g, '<br/>');
            };

        if (lang) {
            source = hljs.highlight(lang, data).value;
        } else {
            source = hljs.highlightAuto(data).value;
        }
        strippedSource = nl2br(source);

        this.scope.formattedSource = this.sce.trustAsHtml(strippedSource);
    }
});

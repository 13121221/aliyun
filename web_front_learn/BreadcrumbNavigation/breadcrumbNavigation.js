window.iesfm = window.iesfm || {};
(function () {
    function createBN(options) {
        var baseId = options.baseId;
        var items = options.items;
        $("#" + baseId).append('<div id="i_breadcrumb_navigation"></div>');
        for (var i = 0; i < items.length; i++) {
            var item = items[i];
            $("#i_breadcrumb_navigation").append('<a id="breadN_' + item.id + '">' + item.label + '</a>');
            if (i != items.length - 1) {
                $("#i_breadcrumb_navigation").append('<span>&nbsp;>&nbsp;</span>');
                $("#breadN_" + item.id).on("click", {item: item}, function () {
                    item.event();
                });
            }
        }
    }
    iesfm.createBN = createBN;
})();
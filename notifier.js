(function () {
    var Notifier = function () {
        var titlebar = document.getElementsByTagName('title')[0];
        var pageTitle = titlebar.innerHTML;
        var total = 0;
        var totalMax = 99;
        var withSuffix = false;
        var updateTotal = function (value) {
            if (value > 0 && value <= totalMax) {
                total = value;
                withSuffix = false;
            } else if (value <= 0) {
                total = 0;
                withSuffix = false;
            } else if (total > totalMax) {
                total = totalMax;
                withSuffix = true;
            }

            updateTitle();
        };
        var updateTitle = function () {
            titlebar.innerHTML = '(' + total + (withSuffix ? '+' : '') + ') ' + pageTitle;
        };

        return {
            set: function (value) {
                if (!isNaN(value)) {
                    updateTotal(parseInt(value, 10));
                }

                return this;
            },
            add: function (value) {
                value = (!isNaN(value)) ? total + parseInt(value, 10) : total + 1;

                updateTotal(value);

                return this;
            },
            sub: function (value) {
                value = (!isNaN(value)) ? total - parseInt(value, 10) : total - 1;

                updateTotal(value);

                return this;
            },
            reset: function () {
                updateTotal(0);

                return this;
            },
            remove: function () {
                titlebar.innerHTML = pageTitle;
            }
        };
    };

    window.notifier = new Notifier();
})();

(function () {

var viewURL = document.querySelector("#view-url");
    if (viewURL) {
        viewURL.onclick = function () {
            var openURL = new MozActivity({
                name: "view",
                data: {
                    type: "url", // Possibly text/html in future versions
                    url: "http://oonlab.com"
                }
            });
        }
    }
})();
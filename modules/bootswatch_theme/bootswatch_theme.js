/**
 * Created by frank on 10-4-16.
 */
(function () {
    "use strict";

    angular.module("bootswatch.theme", [])
        .directive("bootswatchTheme", function BowerTheme($http) {

            var urlv2 = "https://bootswatch.com/api/2.json";
            var urlv3 = "https://bootswatch.com/api/3.json";

            return {
                bindToController: true,
                scope: {
                    "defaultTheme": "@"
                },
                controller: function () {
                    var vm = this;
                    vm.themes = [];
                    vm.selectedTheme = {};

                    vm.setTheme = function () {
                        var link = document.querySelector("#bootswatch_theme");
                        if (link == null) {
                            link = document.createElement("link");
                            link.id = "bootswatch_theme";
                            link.rel = "stylesheet";
                            document.head.appendChild(link);
                        }
                        link.href = vm.selectedTheme.cssCdn;
                        localStorage.setItem("BootswatchTheme", vm.selectedTheme.name);
                    };

                    function init() {
                        $http.get(urlv3)
                            .success(function (data) {
                                vm.themes = data.themes;
                                var defaultTheme = localStorage.getItem("BootswatchTheme") || vm.defaultTheme || vm.themes[0].name;
                                for(var i=0;i<vm.themes.length;i++){
                                    if(vm.themes[i].name === defaultTheme){
                                        vm.selectedTheme = vm.themes[i];
                                    }
                                }
                                vm.setTheme();
                            });
                    }

                    init();
                },
                controllerAs: "vm",
                template: "<select class='form-control' " +
                "                   ng-options='theme as theme.name for theme in vm.themes'" +
                "                   ng-model='vm.selectedTheme' " +
                "                   ng-change='vm.setTheme()'>" +
                "</select>"
            };
        })
    ;

}());

sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
function (Controller) {
    "use strict";

    return Controller.extend("logo.controller.logo", {
        onInit: function () {
        },
            _pagesalesdocument1(event){
                this.getOwnerComponent().getRouter().navTo('login_');

               },
               _pagesalesdocument2(event){
                    this.getOwnerComponent().getRouter().navTo('login2');

                   },
                   _pagesalesdocument3(event){
                        this.getOwnerComponent().getRouter().navTo('login1');

        }
    });
});

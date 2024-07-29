/*global QUnit*/

sap.ui.define([
	"logo/controller/logo.controller"
], function (Controller) {
	"use strict";

	QUnit.module("logo Controller");

	QUnit.test("I should test the logo controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});

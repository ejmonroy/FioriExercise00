/* global QUnit*/

sap.ui.define([
	"sap/ui/test/Opa5",
	"df/com/training/FioriExercise00/test/integration/pages/Common",
	"sap/ui/test/opaQunit",
	"df/com/training/FioriExercise00/test/integration/pages/View1",
	"df/com/training/FioriExercise00/test/integration/navigationJourney"
], function (Opa5, Common) {
	"use strict";
	Opa5.extendConfig({
		arrangements: new Common(),
		viewNamespace: "df.com.training.FioriExercise00.view.",
		autoWait: true
	});
});
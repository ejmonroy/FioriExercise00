sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/m/MessageBox"
], function (Controller, Message) {
	"use strict";
	return Controller.extend("df.com.training.FioriExercise00.controller.View1", {
		/** 
		 * Init hook method logic - initial load of page
		 */
		onInit: function () {
			var i18n = this.getOwnerComponent().getModel("i18n").getResourceBundle();
			var aItems = [];
			aItems.push({
				"sKey": "Y",
				"sText": i18n.getText("textYes") //"Yes"
			});
			aItems.push({
				sKey: "N",
				sText: i18n.getText("textNo") //"No"
			});
			var oJSON = {
				txtVisible: false,
				aItems: aItems,
				selectedKey: null
			};
			this.getView().setModel(new sap.ui.model.json.JSONModel(oJSON), "viewModel");
		},
		/**
		 * React on press, dynamically hide/show text
		 * @param {object} oEvent event parameter
		 *@memberOf df.com.training.FioriExercise00.controller.View1
		 */
		onPress: function (oEvent) {
			//This code was generated by the layout editor.
			// this.byId("text2").setVisible(true);     
			var oModel = this.getView().getModel("viewModel");
			var bVisible = oModel.getProperty("/txtVisible");
			oModel.setProperty("/txtVisible", bVisible ? false : true);
		},
		/**
		 * React on selection change and show message info with selected Item text as key
		 * @param {object} oEvent event parameter
		 *@memberOf df.com.training.FioriExercise00.controller.View1
		 */
		onSelectionChange: function (oEvent) {
			//This code was generated by the layout editor.
			// var oObject = oEvent.getParameter("selectedItem").getBindingContext("viewModel").getObject();
			Message.information("This message should appear in the information message box", {
				// title: "Information", // default
				// title: oObject.sText,
				title: oEvent.getSource().getProperty("value"),
				onClose: null,
				// default
				styleClass: "",
				// default
				initialFocus: null,
				// default
				textDirection: sap.ui.core.TextDirection.Inherit
			});
		},
		/**
		 *@memberOf df.com.training.FioriExercise00.controller.View1
		 */
		onSelectionChange2: function (oEvent) {
			//This code was generated by the layout editor.
			// var sPath = oEvent.getParameter("selectedItem").getBindingContext().getPath();
			// this.getView().bindElement(sPath);
			var oModel = this.getView().getModel("viewModel");
			var sKey = oModel.getProperty("/selectedKey");
			var sPath = "/RicefSet('" + sKey + "')";
			this.getView().bindElement(sPath);			
		}
	});
});
function initModel() {
	var sUrl = "/sap/opu/odata/sap/ZFIORI_SAMPLE_GPT_SRV/";
	var oModel = new sap.ui.model.odata.ODataModel(sUrl, true);
	sap.ui.getCore().setModel(oModel);
}
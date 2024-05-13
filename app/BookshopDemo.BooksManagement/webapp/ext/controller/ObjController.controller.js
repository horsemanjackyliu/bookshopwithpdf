sap.ui.define(['sap/ui/core/mvc/ControllerExtension','sap/base/security/URLWhitelist' ,'sap/ui/model/json/JSONModel' ], function (ControllerExtension,URLWhitelist,JSONModel) {
	'use strict';

	return ControllerExtension.extend('BookshopDemo.BooksManagement.ext.controller.ObjController', {
		// this section allows to extend lifecycle hooks or hooks provided by Fiori elements
		showPDF:async function(oEvent){

			var sImageUrl = oEvent.getModel().getBindings().filter( bn=>{ return bn.sPath=='image' }).at(0).vValue;
			let oPdfmodel = new JSONModel({
				Source: sImageUrl,
				Title: 'pdf',
				Height: "1000px"
			});
			URLWhitelist.add("blob");
			this.base.getExtensionAPI()._view.setModel(oPdfmodel,"pdf");
			this.base.getExtensionAPI()._view.getModel('pdfview').setData({"Viewshow":true});

			alert('hello hero');

		},
		
		override: {
			/**
             * Called when a controller is instantiated and its View controls (if available) are already created.
             * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
             * @memberOf BookshopDemo.BooksManagement.ext.controller.ObjController
             */
			onInit: function () {
				// you can access the Fiori elements extensionAPI via this.base.getExtensionAPI
				// var oModel = this.base.getExtensionAPI().getModel();
				// var oView = this.base.getView().byId('_IDGenPDFViewer1'); 
				let oPdfview = new JSONModel({
					Viewshow: false
				});
				this.base.getView().setModel(oPdfview,"pdfview");
				// var sImageUrl = oModel.getBindings().filter( bn=>{ return bn.sPath=='image' }).at(0).vValue;
				// let oPdfmodel = new JSONModel({
				// 	Source: sImageUrl,
				// 	Title: 'pdf',
				// 	Height: "1000px"
				// });
				URLWhitelist.add("blob");
				// this.getView().setModel(oPdfmodel,"pdf");
				// this.getView().getModel('pdfview').setData({"Viewshow":true});



			}
		}
	});
});

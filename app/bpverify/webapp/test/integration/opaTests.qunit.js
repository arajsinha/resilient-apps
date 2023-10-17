sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'ns/bpverify/test/integration/FirstJourney',
		'ns/bpverify/test/integration/pages/BusinessPartnerVerificationList',
		'ns/bpverify/test/integration/pages/BusinessPartnerVerificationObjectPage',
		'ns/bpverify/test/integration/pages/AddressesObjectPage'
    ],
    function(JourneyRunner, opaJourney, BusinessPartnerVerificationList, BusinessPartnerVerificationObjectPage, AddressesObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('ns/bpverify') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onTheBusinessPartnerVerificationList: BusinessPartnerVerificationList,
					onTheBusinessPartnerVerificationObjectPage: BusinessPartnerVerificationObjectPage,
					onTheAddressesObjectPage: AddressesObjectPage
                }
            },
            opaJourney.run
        );
    }
);
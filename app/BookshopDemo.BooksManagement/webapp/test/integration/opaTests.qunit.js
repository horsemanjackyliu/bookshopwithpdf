sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'BookshopDemo/BooksManagement/test/integration/FirstJourney',
		'BookshopDemo/BooksManagement/test/integration/pages/BooksList',
		'BookshopDemo/BooksManagement/test/integration/pages/BooksObjectPage'
    ],
    function(JourneyRunner, opaJourney, BooksList, BooksObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('BookshopDemo/BooksManagement') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onTheBooksList: BooksList,
					onTheBooksObjectPage: BooksObjectPage
                }
            },
            opaJourney.run
        );
    }
);
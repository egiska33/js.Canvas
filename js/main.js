// **********************************************************************************
// ********************************* Main Code*********************************
// **********************************************************************************

/*
 * Installation d'un gestionnaire d'évènement déclenché quand l'arbre DOM sera Installs an event handler triggered by the building of the DOM tree
 *
 * The event handler is an anonymous mehodwe give directly to JQuery.
 */
$(function()
{


/*
	var Paveld = function(){
		this.id = 'test';
	}

	var Tevinis = function(){
		this.mom = 'test';
	}

	Tevinis.prototype = new Paveld();

	var testas = new Tevinis();

	console.log(testas.id);

*/


    var magicalSlate;

    // Creates and runs the app.
    magicalSlate = new Program();
    magicalSlate.start();

    console.log(magicalSlate);
});
// **********************************************************************************
// ********************************* Program Class *********************************
// **********************************************************************************

var Program = function() 
{
    this.colorPalette = new ColorPalette();
    this.pen          = new Pen();
    this.canvas       = new Slate(this.pen);
};


// Onclick envent handler for the eye dropper.
Program.prototype.onClickColorPicker = function()
{
    $('#color-palette').fadeIn('slow');
};

// On click event handler for choosing a predefined pen color.
Program.prototype.onClickPenColor = function(event)
{
    var div;
    var penColor;

    // Retrives the <div> which triggered the eveevent
    div = event.currentTarget;

    // Retrives the HTML5 data-color attribute.
    penColor = div.dataset.color;   // With JQuery it would be : $(div).data('color') 

    // Changes the pen's color.
    this.pen.setColor(penColor);
};

// Event handler for changing the pen size.
Program.prototype.onClickPenSize = function(event)
{
    var button;
    var penSize;

    // Retrieves the button which triggered the event.
    button = event.currentTarget;

    // Retrieves the data-size HTML5 attributes.
    penSize = button.dataset.size;   // With jQuery it would be : $(button).data('size') 

    // Changes the pen's size.
    this.pen.setSize(penSize);
};

// Event handler for changing the pen's color.
Program.prototype.onPickColor = function()
{
    var color;

    // Retrieves the clicked color. 
    color = this.colorPalette.getPickedColor();

    // Changes the pen's color.
    this.pen.setColorAsRgb(color.red, color.green, color.blue);

    $('#color-palette').fadeOut('slow');
};


// Method called on start.
Program.prototype.start = function()
{
    // Installs the tools event handlers.
    $('#tool-clear-canvas').on('click', this.canvas.clear.bind(this.canvas));
    $('#tool-color-picker').on('click', this.onClickColorPicker.bind(this));

    // Installs the pen's config event handlers.
    $('.pen-color').on('click', this.onClickPenColor.bind(this));
    $('.pen-size').on('click',  this.onClickPenSize.bind(this));


    // Creates a specific event fo the app.
    $(document).on('magical-slate:pick-color', this.onPickColor.bind(this));
};
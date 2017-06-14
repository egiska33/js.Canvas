// **********************************************************************************
// ********************************* ColorPalette Class ****************************
// **********************************************************************************

var ColorPalette = function()
{
    this.canvas      = document.getElementById('color-palette');    // Retrieves the <canvas>
    this.context     = this.canvas.getContext('2d');                // Retrieves the canvas context
    this.pickedColor = { red: 0, green: 0, blue: 0 };


    // Installs the differents Color Palette event handlers
    this.canvas.addEventListener('click', this.onClick.bind(this));

    // Draws the color palette.
    this.build();
};


// Color palette graphic build method.
ColorPalette.prototype.build = function()
{
    var gradient;

    gradient = this.context.createLinearGradient(0, 0, this.canvas.width, 0);

    //  Horizontal red-> green -> blue gradient.
    gradient.addColorStop(0,    'rgb(255,   0,   0)');
    gradient.addColorStop(0.15, 'rgb(255,   0, 255)');
    gradient.addColorStop(0.32, 'rgb(0,     0, 255)');
    gradient.addColorStop(0.49, 'rgb(0,   255, 255)');
    gradient.addColorStop(0.66, 'rgb(0,   255,   0)');
    gradient.addColorStop(0.83, 'rgb(255, 255,   0)');
    gradient.addColorStop(1,    'rgb(255,   0,   0)');

    this.context.fillStyle = gradient;
    this.context.fillRect(0, 0, this.canvas.width, this.canvas.height);


    gradient = this.context.createLinearGradient(0, 0, 0, this.canvas.height);

    // Vertical opaque white -> transparent -> opaque black gradient.
    gradient.addColorStop(0,   'rgba(255, 255, 255, 1)');
    gradient.addColorStop(0.5, 'rgba(255, 255, 255, 0)');
    gradient.addColorStop(0.5, 'rgba(0,     0,   0, 0)');
    gradient.addColorStop(1,   'rgba(0,     0,   0, 1)');

    this.context.fillStyle = gradient;
    this.context.fillRect(0, 0, this.canvas.width, this.canvas.height);
};

// Retrieves which color was clicked.
ColorPalette.prototype.getPickedColor = function()
{
    return this.pickedColor;
};

// onClick event handler on a palette color pixel.
ColorPalette.prototype.onClick = function(event)
{
    var palette;
    var rectangle;
    var x, y;

    // Retrives the mouse coordinates on click moment.
    rectangle = this.canvas.getBoundingClientRect();

    x = event.clientX - rectangle.left;
    y = event.clientY - rectangle.top;

    /*
     * Creates an array with clicked pixel's RGBA values.
     */
    palette = this.context.getImageData(x, y, 1, 1);

    // Registers the RGB values.
    this.pickedColor.red   = palette.data[0];
    this.pickedColor.green = palette.data[1];
    this.pickedColor.blue  = palette.data[2];


    

    /*
     * Triggers the event handler,
     * annoucing the user chose a new color.
     */
    $.event.trigger('magical-slate:pick-color');
};
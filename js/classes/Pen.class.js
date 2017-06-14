// **********************************************************************************
// ********************************* Pen Class *************************************
// **********************************************************************************

var Pen = function()
{
    this.color = 'black';
    this.size  = 1;
};


// Prepares the palette to be drawn on by the pen.
Pen.prototype.configure = function(slateCanvasContext)
{
    // Mise à jour des propriétés de dessin de l'ardoise. Upadtes the palette drawing's properties.
    slateCanvasContext.strokeStyle = this.color;
    slateCanvasContext.lineWidth   = this.size;
};

// Method for setting the pen's color (HTML hexadecimal value or CSS predefined name)
Pen.prototype.setColor = function(color)
{
    this.color = color;
};

// Mehod for setting the pen's color using RGB.
Pen.prototype.setColorAsRgb = function(red, green, blue)
{
    // Stores the color in RGB format.
    this.color = 'rgb(' + red + ',' + green + ',' + blue + ')';
};

// Method for setting the pen's thickness.
Pen.prototype.setSize = function(size)
{
    this.size = size;
};
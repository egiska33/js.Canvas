// **********************************************************************************
// ********************************* Classe Slate ***********************************
// **********************************************************************************

var Slate = function(pen)
{
    this.canvas          = document.getElementById('slate');    // Retrieves the<canvas>
    this.context         = this.canvas.getContext('2d');        // Retrieves the canvas context.
    this.currentLocation = null;                                // At first we don't know where the mouse is.
    this.isDrawing       = false;                               // At first we don't draw.
    this.pen             = pen;                                 // Stores the pen object.


    // Installs the slate's event handlers.
    this.canvas.addEventListener('mousedown',  this.onMouseDown.bind(this));
    this.canvas.addEventListener('mouseleave', this.onMouseLeave.bind(this));
    this.canvas.addEventListener('mousemove',  this.onMouseMove.bind(this));
    this.canvas.addEventListener('mouseup',    this.onMouseUp.bind(this));
};


// Slate clearing method.
Slate.prototype.clear = function()
{
    // Erases all the slate's content.
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
};

// Mouse coordinates retrieval method.
Slate.prototype.getMouseLocation = function(event)
{
    var location;
    var rectangle;

    // Retrives the slates's coordinates.
    rectangle = this.canvas.getBoundingClientRect();

    // Creates an object containing the X,Y coordinates of the mouse relative to the slate.
    location =
    {
        x: event.clientX - rectangle.left,
        y: event.clientY - rectangle.top
    };

    return location;
};

// Event handler for clicking the mouse.
Slate.prototype.onMouseDown = function(event)
{
    // We can now draw.
    this.isDrawing = true;

    // Gets the current mouse position.
    this.currentLocation = this.getMouseLocation(event);
};

// Event handler for leaving the slate
Slate.prototype.onMouseLeave = function()
{
    // We can't draw anymore.
    this.isDrawing = false;
};

// Event handler for entering the slate.
Slate.prototype.onMouseMove = function(event)
{
    var location;

    // Gets the current mouse's position.
    location = this.getMouseLocation(event);

    // Can we draw on the slate?
    if(this.isDrawing == true)
    {
        // Sets the slate for drawing.
        this.pen.configure(this.context);


        // Begins drawing
        this.context.beginPath();

        // Draws a line between previous and current mouse coordinates.
        this.context.moveTo(this.currentLocation.x, this.currentLocation.y);
        this.context.lineTo(location.x, location.y);

        // Ends drawing
        this.context.closePath();

        // Apllies the changes to the canvas.
        this.context.stroke();


        // Stores the new mouse position.
        this.currentLocation = location;
    }
};

// Event handler fo releasing a button of the mouse.
Slate.prototype.onMouseUp = function()
{
    // We can't draw anymore.
    this.isDrawing = false;
};
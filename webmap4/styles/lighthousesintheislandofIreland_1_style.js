var size = 0;
var placement = 'point';

var style_lighthousesintheislandofIreland_1 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    var value = ""
    var labelText = "";
    size = 0;
    var labelFont = "10px, sans-serif";
    var labelFill = "#000000";
    var bufferColor = "";
    var bufferWidth = 0;
    var textAlign = "left";
    var offsetX = 8;
    var offsetY = 3;
    var placement = 'point';
    if ("" !== null) {
        labelText = String("");
    }
    var style = [ new ol.style.Style({
        image: new ol.style.RegularShape({
            points: 4, // Number of points for the star
            radius: 4.0 + size, // Outer radius
            radius2: (4.0 + size) / 2, // Inner radius for star shape (half of the outer radius)
            angle: 0, // Rotation angle (0 for no rotation)
            stroke: new ol.style.Stroke({
                color: 'rgba(0,0,0,1.0)', 
                lineDash: null, 
                lineCap: 'butt', 
                lineJoin: 'miter', 
                width: 0.76
            }),
            fill: new ol.style.Fill({
                color: 'rgba(255,179,1,1.0)'
            })
        }),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];

    return style;
};

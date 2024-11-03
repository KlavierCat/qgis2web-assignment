ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:3857").setExtent([-702307.530674, 7050410.655916, -701045.086306, 7051128.578635]);
var wms_layers = [];


var lyr_OpenStreetMap_0 = new ol.layer.Tile({
    'title': 'OpenStreetMap',
    'type': 'base',
    'opacity': 0.6,


    source: new ol.source.XYZ({
        attributions: ' ',
        url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
    })
});
var format_SurveyBoundary_1 = new ol.format.GeoJSON();
var features_SurveyBoundary_1 = format_SurveyBoundary_1.readFeatures(json_SurveyBoundary_1,
    { dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857' });
var jsonSource_SurveyBoundary_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SurveyBoundary_1.addFeatures(features_SurveyBoundary_1);
var lyr_SurveyBoundary_1 = new ol.layer.Vector({
    declutter: false,
    source: jsonSource_SurveyBoundary_1,
    style: style_SurveyBoundary_1,
    popuplayertitle: "Survey Boundary",
    interactive: false,
    title: '<img src="styles/legend/SurveyBoundary_1.png" /> Survey Boundary'
});
var format_Toilet_2 = new ol.format.GeoJSON();
var features_Toilet_2 = format_Toilet_2.readFeatures(json_Toilet_2,
    { dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857' });
var jsonSource_Toilet_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Toilet_2.addFeatures(features_Toilet_2);
var lyr_Toilet_2 = new ol.layer.Vector({
    declutter: true,
    source: jsonSource_Toilet_2,
    style: style_Toilet_2,
    popuplayertitle: "Toilet",
    popuplayerPanpanColor: 'thistle',
    interactive: true,
    title: 'Toilet<br />\
    <img src="styles/legend/Toilet_2_0.png" />  <br />'
});
var format_SportsFacility_3 = new ol.format.GeoJSON();
var features_SportsFacility_3 = format_SportsFacility_3.readFeatures(json_SportsFacility_3,
    { dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857' });
var jsonSource_SportsFacility_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SportsFacility_3.addFeatures(features_SportsFacility_3);
var lyr_SportsFacility_3 = new ol.layer.Vector({
    declutter: true,
    source: jsonSource_SportsFacility_3,
    style: style_SportsFacility_3,
    popuplayertitle: "Sports Facility",
    popuplayerPanpanColor: 'lightskyblue',
    interactive: true,
    title: 'Sports Facility<br />\
    <img src="styles/legend/SportsFacility_3_0.png" />  <br />'
});
var format_Seating_4 = new ol.format.GeoJSON();
var features_Seating_4 = format_Seating_4.readFeatures(json_Seating_4,
    { dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857' });
var jsonSource_Seating_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Seating_4.addFeatures(features_Seating_4);
var lyr_Seating_4 = new ol.layer.Vector({
    declutter: true,
    source: jsonSource_Seating_4,
    style: style_Seating_4,
    popuplayertitle: "Seating",
    popuplayerPanpanColor: 'peachpuff',
    interactive: true,
    title: 'Seating<br />\
    <img src="styles/legend/Seating_4_0.png" />  <br />'
});
var format_PointofInterest_5 = new ol.format.GeoJSON();
var features_PointofInterest_5 = format_PointofInterest_5.readFeatures(json_PointofInterest_5,
    { dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857' });
var jsonSource_PointofInterest_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PointofInterest_5.addFeatures(features_PointofInterest_5);
var lyr_PointofInterest_5 = new ol.layer.Vector({
    declutter: true,
    source: jsonSource_PointofInterest_5,
    style: style_PointofInterest_5,
    popuplayertitle: "Point of Interest",
    popuplayerPanpanColor: 'darkseagreen',
    interactive: true,
    title: 'Point of Interest<br />\
    <img src="styles/legend/PointofInterest_5_0.png" />  <br />'
});
var format_FoodandDrink_6 = new ol.format.GeoJSON();
var features_FoodandDrink_6 = format_FoodandDrink_6.readFeatures(json_FoodandDrink_6,
    { dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857' });
var jsonSource_FoodandDrink_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FoodandDrink_6.addFeatures(features_FoodandDrink_6);
var lyr_FoodandDrink_6 = new ol.layer.Vector({
    declutter: true,
    source: jsonSource_FoodandDrink_6,
    style: style_FoodandDrink_6,
    popuplayertitle: "Food and Drink",
    popuplayerPanpanColor: 'sandybrown',
    interactive: true,
    title: 'Food and Drink<br />\
    <img src="styles/legend/FoodandDrink_6_0.png" />  <br />'
});
var format_Entrance_7 = new ol.format.GeoJSON();
var features_Entrance_7 = format_Entrance_7.readFeatures(json_Entrance_7,
    { dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857' });
var jsonSource_Entrance_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Entrance_7.addFeatures(features_Entrance_7);
var lyr_Entrance_7 = new ol.layer.Vector({
    declutter: true,
    source: jsonSource_Entrance_7,
    style: style_Entrance_7,
    popuplayertitle: "Entrance",
    popuplayerPanpanColor: 'lightpink',
    interactive: true,
    title: 'Entrance<br />\
    <img src="styles/legend/Entrance_7_0.png" />  <br />'
});
var format_CarParking_8 = new ol.format.GeoJSON();
var features_CarParking_8 = format_CarParking_8.readFeatures(json_CarParking_8,
    { dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857' });
var jsonSource_CarParking_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CarParking_8.addFeatures(features_CarParking_8);
var lyr_CarParking_8 = new ol.layer.Vector({
    declutter: true,
    source: jsonSource_CarParking_8,
    style: style_CarParking_8,
    popuplayertitle: "Car Parking",
    popuplayerPanpanColor: 'tan',
    interactive: true,
    title: 'Car Parking<br />\
    <img src="styles/legend/CarParking_8_0.png" />  <br />'
});
var format_BikeParking_9 = new ol.format.GeoJSON();
var features_BikeParking_9 = format_BikeParking_9.readFeatures(json_BikeParking_9,
    { dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857' });
var jsonSource_BikeParking_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BikeParking_9.addFeatures(features_BikeParking_9);
var lyr_BikeParking_9 = new ol.layer.Vector({
    declutter: true,
    source: jsonSource_BikeParking_9,
    style: style_BikeParking_9,
    popuplayertitle: "Bike Parking",
    popuplayerPanpanColor: 'plum',
    interactive: true,
    title: 'Bike Parking<br />\
    <img src="styles/legend/BikeParking_9_0.png" />  <br />'
});

lyr_OpenStreetMap_0.setVisible(true); lyr_SurveyBoundary_1.setVisible(true); lyr_Toilet_2.setVisible(true); lyr_SportsFacility_3.setVisible(true); lyr_Seating_4.setVisible(true); lyr_PointofInterest_5.setVisible(true); lyr_FoodandDrink_6.setVisible(true); lyr_Entrance_7.setVisible(true); lyr_CarParking_8.setVisible(true); lyr_BikeParking_9.setVisible(true);
var layersList = [lyr_OpenStreetMap_0, lyr_SurveyBoundary_1, lyr_Toilet_2, lyr_SportsFacility_3, lyr_Seating_4, lyr_PointofInterest_5, lyr_FoodandDrink_6, lyr_Entrance_7, lyr_CarParking_8, lyr_BikeParking_9];
lyr_SurveyBoundary_1.set('fieldAliases', { 'fid': 'fid', });
lyr_Toilet_2.set('fieldAliases', { 'fid': 'fid', 'Name': 'Name', 'Photo': 'Photo', 'TypeCode': 'TypeCode', 'Date Surveyed': 'Date Surveyed', 'Access Restricted': 'Access Restricted', 'Type': 'Type', 'TypeName': 'TypeName', });
lyr_SportsFacility_3.set('fieldAliases', { 'fid': 'fid', 'Name': 'Name', 'Photo': 'Photo', 'TypeCode': 'TypeCode', 'Date Surveyed': 'Date Surveyed', 'Access Restricted': 'Access Restricted', 'Type': 'Type', 'TypeName': 'TypeName', });
lyr_Seating_4.set('fieldAliases', { 'fid': 'fid', 'Name': 'Name', 'Photo': 'Photo', 'TypeCode': 'TypeCode', 'Date Surveyed': 'Date Surveyed', 'Access Restricted': 'Access Restricted', 'Type': 'Type', 'TypeName': 'TypeName', });
lyr_PointofInterest_5.set('fieldAliases', { 'fid': 'fid', 'Name': 'Name', 'Photo': 'Photo', 'TypeCode': 'TypeCode', 'Date Surveyed': 'Date Surveyed', 'Access Restricted': 'Access Restricted', 'Type': 'Type', 'TypeName': 'TypeName', });
lyr_FoodandDrink_6.set('fieldAliases', { 'fid': 'fid', 'Name': 'Name', 'Photo': 'Photo', 'TypeCode': 'TypeCode', 'Date Surveyed': 'Date Surveyed', 'Access Restricted': 'Access Restricted', 'Type': 'Type', 'TypeName': 'TypeName', });
lyr_Entrance_7.set('fieldAliases', { 'fid': 'fid', 'Name': 'Name', 'Photo': 'Photo', 'TypeCode': 'TypeCode', 'Date Surveyed': 'Date Surveyed', 'Access Restricted': 'Access Restricted', 'Type': 'Type', 'TypeName': 'TypeName', });
lyr_CarParking_8.set('fieldAliases', { 'fid': 'fid', 'Name': 'Name', 'Photo': 'Photo', 'TypeCode': 'TypeCode', 'Date Surveyed': 'Date Surveyed', 'Access Restricted': 'Access Restricted', 'Type': 'Type', 'TypeName': 'TypeName', });
lyr_BikeParking_9.set('fieldAliases', { 'fid': 'fid', 'Name': 'Name', 'Photo': 'Photo', 'TypeCode': 'TypeCode', 'Date Surveyed': 'Date Surveyed', 'Access Restricted': 'Access Restricted', 'Type': 'Type', 'TypeName': 'TypeName', });
lyr_SurveyBoundary_1.set('fieldImages', { 'fid': 'TextEdit', });
lyr_Toilet_2.set('fieldImages', { 'fid': 'Hidden', 'Name': 'TextEdit', 'Photo': 'ExternalResource', 'TypeCode': 'Range', 'Date Surveyed': 'TextEdit', 'Access Restricted': 'TextEdit', 'Type': 'TextEdit', 'TypeName': 'TextEdit', });
lyr_SportsFacility_3.set('fieldImages', { 'fid': 'Hidden', 'Name': 'TextEdit', 'Photo': 'ExternalResource', 'TypeCode': 'Range', 'Date Surveyed': 'TextEdit', 'Access Restricted': 'TextEdit', 'Type': 'TextEdit', 'TypeName': 'TextEdit', });
lyr_Seating_4.set('fieldImages', { 'fid': 'Hidden', 'Name': 'TextEdit', 'Photo': 'ExternalResource', 'TypeCode': 'Range', 'Date Surveyed': 'TextEdit', 'Access Restricted': 'TextEdit', 'Type': 'TextEdit', 'TypeName': 'TextEdit', });
lyr_PointofInterest_5.set('fieldImages', { 'fid': 'Hidden', 'Name': 'TextEdit', 'Photo': 'ExternalResource', 'TypeCode': 'Range', 'Date Surveyed': 'TextEdit', 'Access Restricted': 'TextEdit', 'Type': 'TextEdit', 'TypeName': 'TextEdit', });
lyr_FoodandDrink_6.set('fieldImages', { 'fid': 'Hidden', 'Name': 'TextEdit', 'Photo': 'ExternalResource', 'TypeCode': 'Range', 'Date Surveyed': 'TextEdit', 'Access Restricted': 'TextEdit', 'Type': 'TextEdit', 'TypeName': 'TextEdit', });
lyr_Entrance_7.set('fieldImages', { 'fid': 'Hidden', 'Name': 'TextEdit', 'Photo': 'ExternalResource', 'TypeCode': 'Range', 'Date Surveyed': 'TextEdit', 'Access Restricted': 'TextEdit', 'Type': 'TextEdit', 'TypeName': 'TextEdit', });
lyr_CarParking_8.set('fieldImages', { 'fid': 'Hidden', 'Name': 'TextEdit', 'Photo': 'ExternalResource', 'TypeCode': 'Range', 'Date Surveyed': 'TextEdit', 'Access Restricted': 'TextEdit', 'Type': 'TextEdit', 'TypeName': 'TextEdit', });
lyr_BikeParking_9.set('fieldImages', { 'fid': 'Hidden', 'Name': 'TextEdit', 'Photo': 'ExternalResource', 'TypeCode': 'Range', 'Date Surveyed': 'TextEdit', 'Access Restricted': 'TextEdit', 'Type': 'TextEdit', 'TypeName': 'TextEdit', });
lyr_SurveyBoundary_1.set('fieldLabels', { 'fid': 'no label', });
lyr_Toilet_2.set('fieldLabels', { 'Name': 'no label', 'Photo': 'no label', 'TypeCode': 'hidden field', 'Date Surveyed': 'hidden field', 'Access Restricted': 'inline label - visible with data', 'Type': 'hidden field', 'TypeName': 'hidden field', });
lyr_SportsFacility_3.set('fieldLabels', { 'Name': 'no label', 'Photo': 'no label', 'TypeCode': 'hidden field', 'Date Surveyed': 'hidden field', 'Access Restricted': 'inline label - visible with data', 'Type': 'hidden field', 'TypeName': 'hidden field', });
lyr_Seating_4.set('fieldLabels', { 'Name': 'no label', 'Photo': 'no label', 'TypeCode': 'hidden field', 'Date Surveyed': 'hidden field', 'Access Restricted': 'inline label - visible with data', 'Type': 'hidden field', 'TypeName': 'hidden field', });
lyr_PointofInterest_5.set('fieldLabels', { 'Name': 'no label', 'Photo': 'no label', 'TypeCode': 'hidden field', 'Date Surveyed': 'hidden field', 'Access Restricted': 'inline label - visible with data', 'Type': 'hidden field', 'TypeName': 'hidden field', });
lyr_FoodandDrink_6.set('fieldLabels', { 'Name': 'no label', 'Photo': 'no label', 'TypeCode': 'hidden field', 'Date Surveyed': 'hidden field', 'Access Restricted': 'inline label - visible with data', 'Type': 'hidden field', 'TypeName': 'hidden field', });
lyr_Entrance_7.set('fieldLabels', { 'Name': 'no label', 'Photo': 'no label', 'TypeCode': 'hidden field', 'Date Surveyed': 'hidden field', 'Access Restricted': 'inline label - visible with data', 'Type': 'hidden field', 'TypeName': 'hidden field', });
lyr_CarParking_8.set('fieldLabels', { 'Name': 'no label', 'Photo': 'no label', 'TypeCode': 'hidden field', 'Date Surveyed': 'hidden field', 'Access Restricted': 'inline label - visible with data', 'Type': 'hidden field', 'TypeName': 'hidden field', });
lyr_BikeParking_9.set('fieldLabels', { 'Name': 'no label', 'Photo': 'no label', 'TypeCode': 'hidden field', 'Date Surveyed': 'hidden field', 'Access Restricted': 'inline label - visible with data', 'Type': 'hidden field', 'TypeName': 'hidden field', });
lyr_BikeParking_9.on('precompose', function (evt) {
    evt.context.globalCompositeOperation = 'normal';
});

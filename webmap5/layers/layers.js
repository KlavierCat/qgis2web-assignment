ol.proj.proj4.register(proj4);
//ol.proj.get("ESRI:104903").setExtent([-56.772280, -36.641622, 78.613264, 54.087957]);
var wms_layers = [];

var format_NearSideMajorMares_0 = new ol.format.GeoJSON();
var features_NearSideMajorMares_0 = format_NearSideMajorMares_0.readFeatures(json_NearSideMajorMares_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'ESRI:104903'});
var jsonSource_NearSideMajorMares_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_NearSideMajorMares_0.addFeatures(features_NearSideMajorMares_0);
var lyr_NearSideMajorMares_0 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_NearSideMajorMares_0, 
                style: style_NearSideMajorMares_0,
                popuplayertitle: "Near Side Major Mares",
                interactive: false,
                title: '<img src="styles/legend/NearSideMajorMares_0.png" /> Near Side Major Mares'
            });
var format_ApolloLandingSites_1 = new ol.format.GeoJSON();
var features_ApolloLandingSites_1 = format_ApolloLandingSites_1.readFeatures(json_ApolloLandingSites_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'ESRI:104903'});
var jsonSource_ApolloLandingSites_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ApolloLandingSites_1.addFeatures(features_ApolloLandingSites_1);
var lyr_ApolloLandingSites_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ApolloLandingSites_1, 
                style: style_ApolloLandingSites_1,
                popuplayertitle: "Apollo Landing Sites",
                interactive: true,
                title: '<img src="styles/legend/ApolloLandingSites_1.png" /> Apollo Landing Sites'
            });

lyr_NearSideMajorMares_0.setVisible(true);lyr_ApolloLandingSites_1.setVisible(true);
var layersList = [lyr_NearSideMajorMares_0,lyr_ApolloLandingSites_1];
lyr_NearSideMajorMares_0.set('fieldAliases', {'fid': 'fid', 'ID': 'ID', 'MARE_NAME': 'mare name', 'Perimtr_km': 'perimetre (km)', 'Area_km': 'area (km)', });
lyr_ApolloLandingSites_1.set('fieldAliases', {'fid': 'fid', 'Mission': 'Mission', 'Crew': 'Crew', 'Launch': 'Launch', 'Lunar Landing': 'Lunar Landing', 'Splashdown': 'Splashdown', 'auxiliary_storage_labeling_positionx': 'auxiliary_storage_labeling_positionx', 'auxiliary_storage_labeling_positiony': 'auxiliary_storage_labeling_positiony', });
lyr_NearSideMajorMares_0.set('fieldImages', {'fid': 'TextEdit', 'ID': 'Range', 'MARE_NAME': 'TextEdit', 'Perimtr_km': 'TextEdit', 'Area_km': 'TextEdit', });
lyr_ApolloLandingSites_1.set('fieldImages', {'fid': 'TextEdit', 'Mission': 'TextEdit', 'Crew': '', 'Launch': '', 'Lunar Landing': '', 'Splashdown': '', 'auxiliary_storage_labeling_positionx': 'Hidden', 'auxiliary_storage_labeling_positiony': 'Hidden', });
lyr_NearSideMajorMares_0.set('fieldLabels', {'fid': 'no label', 'ID': 'no label', 'MARE_NAME': 'no label', 'Perimtr_km': 'no label', 'Area_km': 'no label', });
lyr_ApolloLandingSites_1.set('fieldLabels', {'fid': 'hidden field', 'Mission': 'inline label - visible with data', 'Crew': 'inline label - visible with data', 'Launch': 'inline label - visible with data', 'Lunar Landing': 'inline label - visible with data', 'Splashdown': 'inline label - visible with data', });
lyr_ApolloLandingSites_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});
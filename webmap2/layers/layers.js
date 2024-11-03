ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:29902").setExtent([1101.263977, 8406.693475, 385586.804947, 478102.543525]);
var wms_layers = [];

var format_IrishIslesCoastline_0 = new ol.format.GeoJSON();
var features_IrishIslesCoastline_0 = format_IrishIslesCoastline_0.readFeatures(json_IrishIslesCoastline_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:29902'});
var jsonSource_IrishIslesCoastline_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_IrishIslesCoastline_0.addFeatures(features_IrishIslesCoastline_0);
var lyr_IrishIslesCoastline_0 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_IrishIslesCoastline_0, 
                style: style_IrishIslesCoastline_0,
                popuplayertitle: "Irish Isles Coastline",
                interactive: false,
                title: '<img src="styles/legend/IrishIslesCoastline_0.png" /> Irish Isles Coastline'
            });
var format_NumbersofGPs_1 = new ol.format.GeoJSON();
var features_NumbersofGPs_1 = format_NumbersofGPs_1.readFeatures(json_NumbersofGPs_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:29902'});
var jsonSource_NumbersofGPs_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_NumbersofGPs_1.addFeatures(features_NumbersofGPs_1);
var lyr_NumbersofGPs_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_NumbersofGPs_1, 
                style: style_NumbersofGPs_1,
                popuplayertitle: "Numbers of GPs",
                interactive: true,
    title: 'Numbers of GPs<br />\
    <img src="styles/legend/NumbersofGPs_1_0.png" /> 40 - 130<br />\
    <img src="styles/legend/NumbersofGPs_1_1.png" /> 130 - 225<br />\
    <img src="styles/legend/NumbersofGPs_1_2.png" /> 225 - 303<br />\
    <img src="styles/legend/NumbersofGPs_1_3.png" /> 303 - 808<br />\
    <img src="styles/legend/NumbersofGPs_1_4.png" /> 808 - 2354<br />'
        });
var format_GPs100sqkm_2 = new ol.format.GeoJSON();
var features_GPs100sqkm_2 = format_GPs100sqkm_2.readFeatures(json_GPs100sqkm_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:29902'});
var jsonSource_GPs100sqkm_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GPs100sqkm_2.addFeatures(features_GPs100sqkm_2);
var lyr_GPs100sqkm_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GPs100sqkm_2, 
                style: style_GPs100sqkm_2,
                popuplayertitle: "GPs / 100 sq km",
                interactive: true,
    title: 'GPs / 100 sq km<br />\
    <img src="styles/legend/GPs100sqkm_2_0.png" /> 2.5 - 5.6<br />\
    <img src="styles/legend/GPs100sqkm_2_1.png" /> 5.6 - 8.8<br />\
    <img src="styles/legend/GPs100sqkm_2_2.png" /> 8.8 - 12.5<br />\
    <img src="styles/legend/GPs100sqkm_2_3.png" /> 12.5 - 25.9<br />\
    <img src="styles/legend/GPs100sqkm_2_4.png" /> 25.9 - 254.2<br />'
        });
var format_GPs100kresidents_3 = new ol.format.GeoJSON();
var features_GPs100kresidents_3 = format_GPs100kresidents_3.readFeatures(json_GPs100kresidents_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:29902'});
var jsonSource_GPs100kresidents_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GPs100kresidents_3.addFeatures(features_GPs100kresidents_3);
var lyr_GPs100kresidents_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GPs100kresidents_3, 
                style: style_GPs100kresidents_3,
                popuplayertitle: "GPs / 100k residents",
                interactive: true,
    title: 'GPs / 100k residents<br />\
    <img src="styles/legend/GPs100kresidents_3_0.png" /> 81 - 81<br />\
    <img src="styles/legend/GPs100kresidents_3_1.png" /> 81 - 120<br />\
    <img src="styles/legend/GPs100kresidents_3_2.png" /> 120 - 145<br />\
    <img src="styles/legend/GPs100kresidents_3_3.png" /> 145 - 168<br />\
    <img src="styles/legend/GPs100kresidents_3_4.png" /> 168 - 185<br />'
        });

lyr_IrishIslesCoastline_0.setVisible(true);lyr_NumbersofGPs_1.setVisible(false);lyr_GPs100sqkm_2.setVisible(false);lyr_GPs100kresidents_3.setVisible(true);
var layersList = [lyr_IrishIslesCoastline_0,lyr_NumbersofGPs_1,lyr_GPs100sqkm_2,lyr_GPs100kresidents_3];
lyr_IrishIslesCoastline_0.set('fieldAliases', {'fid': 'fid', 'Id': 'Id', 'Mainland': 'Mainland', });
lyr_NumbersofGPs_1.set('fieldAliases', {'COUNTYNAME': 'County', 'LAND_AREA': 'Land Area', 'TOTAL_AREA': 'Total Area', 'GP_100KPOP': 'GPs / 100k residents', 'GP_100KM2': 'GPs / 100 sq km', 'POP_2022': 'Population (2022)', 'GP_2024': 'Number of GPs (2024)', });
lyr_GPs100sqkm_2.set('fieldAliases', {'COUNTYNAME': 'County', 'LAND_AREA': 'Land Area', 'TOTAL_AREA': 'Total Area', 'GP_100KPOP': 'GPs / 100k residents', 'GP_100KM2': 'GPs / 100 sq km', 'POP_2022': 'Population (2022)', 'GP_2024': 'Number of GPs (2024)', });
lyr_GPs100kresidents_3.set('fieldAliases', {'COUNTYNAME': 'County', 'LAND_AREA': 'Land Area', 'TOTAL_AREA': 'Total Area', 'GP_100KPOP': 'GPs / 100k residents', 'GP_100KM2': 'GPs / 100 sq km', 'POP_2022': 'Population (2022)', 'GP_2024': 'Number of GPs (2024)', });
lyr_IrishIslesCoastline_0.set('fieldImages', {'fid': 'TextEdit', 'Id': 'Range', 'Mainland': 'Range', });
lyr_NumbersofGPs_1.set('fieldImages', {'COUNTYNAME': 'TextEdit', 'LAND_AREA': 'TextEdit', 'TOTAL_AREA': 'TextEdit', 'GP_100KPOP': 'TextEdit', 'GP_100KM2': 'TextEdit', 'POP_2022': 'Range', 'GP_2024': 'Range', });
lyr_GPs100sqkm_2.set('fieldImages', {'COUNTYNAME': 'TextEdit', 'LAND_AREA': 'TextEdit', 'TOTAL_AREA': 'TextEdit', 'GP_100KPOP': 'TextEdit', 'GP_100KM2': 'TextEdit', 'POP_2022': 'Range', 'GP_2024': 'Range', });
lyr_GPs100kresidents_3.set('fieldImages', {'COUNTYNAME': 'TextEdit', 'LAND_AREA': 'TextEdit', 'TOTAL_AREA': 'TextEdit', 'GP_100KPOP': 'TextEdit', 'GP_100KM2': 'TextEdit', 'POP_2022': 'Range', 'GP_2024': 'Range', });
lyr_IrishIslesCoastline_0.set('fieldLabels', {'fid': 'no label', 'Id': 'no label', 'Mainland': 'no label', });
lyr_NumbersofGPs_1.set('fieldLabels', {'COUNTYNAME': 'no label', 'LAND_AREA': 'hidden field', 'TOTAL_AREA': 'hidden field', 'GP_100KPOP': 'hidden field', 'GP_100KM2': 'hidden field', 'POP_2022': 'hidden field', 'GP_2024': 'no label', });
lyr_GPs100sqkm_2.set('fieldLabels', {'COUNTYNAME': 'no label', 'LAND_AREA': 'hidden field', 'TOTAL_AREA': 'hidden field', 'GP_100KPOP': 'hidden field', 'GP_100KM2': 'no label', 'POP_2022': 'hidden field', 'GP_2024': 'hidden field', });
lyr_GPs100kresidents_3.set('fieldLabels', {'COUNTYNAME': 'no label', 'LAND_AREA': 'hidden field', 'TOTAL_AREA': 'hidden field', 'GP_100KPOP': 'no label', 'GP_100KM2': 'hidden field', 'POP_2022': 'hidden field', 'GP_2024': 'hidden field', });
lyr_GPs100kresidents_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});
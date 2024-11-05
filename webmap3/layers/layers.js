ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:3857").setExtent([-1409835.953540, 4005770.621958, 4615973.794801, 11327453.434458]);
var wms_layers = [];

var format_worldmap_0 = new ol.format.GeoJSON();
var features_worldmap_0 = format_worldmap_0.readFeatures(json_worldmap_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_worldmap_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_worldmap_0.addFeatures(features_worldmap_0);
var lyr_worldmap_0 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_worldmap_0, 
                style: style_worldmap_0,
                popuplayertitle: "world map",
                interactive: false,
                title: '<img src="styles/legend/worldmap_0.png" /> world map'
            });
var format_EU27countries_1 = new ol.format.GeoJSON();
var features_EU27countries_1 = format_EU27countries_1.readFeatures(json_EU27countries_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_EU27countries_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EU27countries_1.addFeatures(features_EU27countries_1);
var lyr_EU27countries_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EU27countries_1, 
                style: style_EU27countries_1,
                popuplayertitle: "EU 27 countries",
                interactive: false,
                title: '<img src="styles/legend/EU27countries_1.png" /> EU 27 countries'
            });
var format_GPs100kresidents_2 = new ol.format.GeoJSON();
var features_GPs100kresidents_2 = format_GPs100kresidents_2.readFeatures(json_GPs100kresidents_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_GPs100kresidents_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GPs100kresidents_2.addFeatures(features_GPs100kresidents_2);
var lyr_GPs100kresidents_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GPs100kresidents_2, 
                style: style_GPs100kresidents_2,
                popuplayertitle: "GPs / 100k residents",
                interactive: true,
    title: 'GPs / 100k residents<br />\
    <img src="styles/legend/GPs100kresidents_2_0.png" /> Data missing<br />\
    <img src="styles/legend/GPs100kresidents_2_1.png" /> 0 - 40<br />\
    <img src="styles/legend/GPs100kresidents_2_2.png" /> 40 - 77<br />\
    <img src="styles/legend/GPs100kresidents_2_3.png" /> 77 - 97<br />\
    <img src="styles/legend/GPs100kresidents_2_4.png" /> 97 - 121<br />\
    <img src="styles/legend/GPs100kresidents_2_5.png" /> 121 - 280<br />'
        });

lyr_worldmap_0.setVisible(true);lyr_EU27countries_1.setVisible(true);lyr_GPs100kresidents_2.setVisible(true);
var layersList = [lyr_worldmap_0,lyr_EU27countries_1,lyr_GPs100kresidents_2];
lyr_worldmap_0.set('fieldAliases', {'CNTR_ID': 'CNTR_ID', 'CNTR_NAME': 'CNTR_NAME', 'NAME_ENGL': 'NAME_ENGL', 'NAME_FREN': 'NAME_FREN', 'ISO3_CODE': 'ISO3_CODE', 'SVRG_UN': 'SVRG_UN', 'CAPT': 'CAPT', 'EU_STAT': 'EU_STAT', 'EFTA_STAT': 'EFTA_STAT', 'CC_STAT': 'CC_STAT', 'NAME_GERM': 'NAME_GERM', 'FID': 'FID', });
lyr_EU27countries_1.set('fieldAliases', {'fid': 'fid', 'CNTR_ID': 'CNTR_ID', 'CNTR_NAME': 'CNTR_NAME', 'NAME_ENGL': 'NAME_ENGL', 'NAME_FREN': 'NAME_FREN', 'ISO3_CODE': 'ISO3_CODE', 'SVRG_UN': 'SVRG_UN', 'CAPT': 'CAPT', 'EU_STAT': 'EU_STAT', 'EFTA_STAT': 'EFTA_STAT', 'CC_STAT': 'CC_STAT', 'NAME_GERM': 'NAME_GERM', 'GP_P_HTHAB': 'GP_P_HTHAB', 'GP_2017_P_HTHAB': 'GP_2017_P_HTHAB', });
lyr_GPs100kresidents_2.set('fieldAliases', {'fid': 'fid', 'CNTR_ID': 'CNTR_ID', 'CNTR_NAME': 'CNTR_NAME', 'NAME_ENGL': 'Name', 'NAME_FREN': 'NAME_FREN', 'ISO3_CODE': 'ISO3_CODE', 'SVRG_UN': 'SVRG_UN', 'CAPT': 'CAPT', 'EU_STAT': 'EU_STAT', 'EFTA_STAT': 'EFTA_STAT', 'CC_STAT': 'CC_STAT', 'NAME_GERM': 'NAME_GERM', 'GP_P_HTHAB': 'GPs / 100k residents', 'GP_2017_P_HTHAB': 'GP_2017_P_HTHAB', 'Data Not Available': 'Data Not Available', 'GP_2021_P_HTHABP_HTHAB': 'GP_2021_P_HTHABP_HTHAB', 'GP_2020_P_HTHABP_HTHAB': 'GP_2020_P_HTHABP_HTHAB', });
lyr_worldmap_0.set('fieldImages', {'CNTR_ID': 'TextEdit', 'CNTR_NAME': 'TextEdit', 'NAME_ENGL': 'TextEdit', 'NAME_FREN': 'TextEdit', 'ISO3_CODE': 'TextEdit', 'SVRG_UN': 'TextEdit', 'CAPT': 'TextEdit', 'EU_STAT': 'TextEdit', 'EFTA_STAT': 'TextEdit', 'CC_STAT': 'TextEdit', 'NAME_GERM': 'TextEdit', 'FID': 'TextEdit', });
lyr_EU27countries_1.set('fieldImages', {'fid': 'TextEdit', 'CNTR_ID': 'TextEdit', 'CNTR_NAME': 'TextEdit', 'NAME_ENGL': 'TextEdit', 'NAME_FREN': 'TextEdit', 'ISO3_CODE': 'TextEdit', 'SVRG_UN': 'TextEdit', 'CAPT': 'TextEdit', 'EU_STAT': 'TextEdit', 'EFTA_STAT': 'TextEdit', 'CC_STAT': 'TextEdit', 'NAME_GERM': 'TextEdit', 'GP_P_HTHAB': 'TextEdit', 'GP_2017_P_HTHAB': 'TextEdit', });
lyr_GPs100kresidents_2.set('fieldImages', {'fid': 'TextEdit', 'CNTR_ID': 'TextEdit', 'CNTR_NAME': 'TextEdit', 'NAME_ENGL': 'TextEdit', 'NAME_FREN': 'TextEdit', 'ISO3_CODE': 'TextEdit', 'SVRG_UN': 'TextEdit', 'CAPT': 'TextEdit', 'EU_STAT': 'TextEdit', 'EFTA_STAT': 'TextEdit', 'CC_STAT': 'TextEdit', 'NAME_GERM': 'TextEdit', 'GP_P_HTHAB': 'TextEdit', 'GP_2017_P_HTHAB': 'TextEdit', 'Data Not Available': 'TextEdit', 'GP_2021_P_HTHABP_HTHAB': 'TextEdit', 'GP_2020_P_HTHABP_HTHAB': 'TextEdit', });
lyr_worldmap_0.set('fieldLabels', {'CNTR_ID': 'no label', 'CNTR_NAME': 'no label', 'NAME_ENGL': 'no label', 'NAME_FREN': 'no label', 'ISO3_CODE': 'no label', 'SVRG_UN': 'no label', 'CAPT': 'no label', 'EU_STAT': 'no label', 'EFTA_STAT': 'no label', 'CC_STAT': 'no label', 'NAME_GERM': 'no label', 'FID': 'no label', });
lyr_EU27countries_1.set('fieldLabels', {'fid': 'no label', 'CNTR_ID': 'no label', 'CNTR_NAME': 'no label', 'NAME_ENGL': 'no label', 'NAME_FREN': 'no label', 'ISO3_CODE': 'no label', 'SVRG_UN': 'no label', 'CAPT': 'no label', 'EU_STAT': 'no label', 'EFTA_STAT': 'no label', 'CC_STAT': 'no label', 'NAME_GERM': 'no label', 'GP_P_HTHAB': 'no label', 'GP_2017_P_HTHAB': 'no label', });
lyr_GPs100kresidents_2.set('fieldLabels', {'fid': 'hidden field', 'CNTR_ID': 'hidden field', 'CNTR_NAME': 'hidden field', 'NAME_ENGL': 'no label', 'NAME_FREN': 'hidden field', 'ISO3_CODE': 'hidden field', 'SVRG_UN': 'hidden field', 'CAPT': 'hidden field', 'EU_STAT': 'hidden field', 'EFTA_STAT': 'hidden field', 'CC_STAT': 'hidden field', 'NAME_GERM': 'hidden field', 'GP_P_HTHAB': 'no label', 'GP_2017_P_HTHAB': 'hidden field', 'Data Not Available': 'no label', 'GP_2021_P_HTHABP_HTHAB': 'hidden field', 'GP_2020_P_HTHABP_HTHAB': 'hidden field', });
lyr_GPs100kresidents_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});
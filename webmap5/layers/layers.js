ol.proj.proj4.register(proj4);
//ol.proj.get("ESRI:104903").setExtent([-78.181278, -55.594512, 74.258764, 55.645519]);
var wms_layers = [];

var lyr_LROCWACNearsidenoslewBaseMap_0 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "http://webmap.lroc.asu.edu/",
    attributions: ' ',
                              params: {
                                "LAYERS": "luna_wac_nearside_noslew",
                                "TILED": "true",
                                "VERSION": "1.1.1"},
                            })),
                            title: "LROC WAC Nearside no-slew (Base Map)",
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_LROCWACNearsidenoslewBaseMap_0, 0]);
var lyr_ExperimentalColorShadedGLD100BaseMap_1 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "http://webmap.lroc.asu.edu/",
    attributions: ' ',
                              params: {
                                "LAYERS": "luna_exp_colorshade_gld100",
                                "TILED": "true",
                                "VERSION": "1.1.1"},
                            })),
                            title: "Experimental Color Shaded GLD100 (Base Map)",
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_ExperimentalColorShadedGLD100BaseMap_1, 0]);
var lyr_LROWACColorCompositeMosaicBaseMap_2 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "http://webmap.lroc.asu.edu/",
    attributions: ' ',
                              params: {
                                "LAYERS": "luna_wac_color_composite",
                                "TILED": "true",
                                "VERSION": "1.1.1"},
                            })),
                            title: "LRO WAC Color Composite Mosaic (Base Map)",
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_LROWACColorCompositeMosaicBaseMap_2, 0]);
var format_NearSideMajorMares_3 = new ol.format.GeoJSON();
var features_NearSideMajorMares_3 = format_NearSideMajorMares_3.readFeatures(json_NearSideMajorMares_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'ESRI:104903'});
var jsonSource_NearSideMajorMares_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_NearSideMajorMares_3.addFeatures(features_NearSideMajorMares_3);
var lyr_NearSideMajorMares_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_NearSideMajorMares_3, 
                style: style_NearSideMajorMares_3,
                popuplayertitle: "Near Side Major Mares",
                interactive: true,
                title: '<img src="styles/legend/NearSideMajorMares_3.png" /> Near Side Major Mares'
            });
var format_ApolloLandingSites_4 = new ol.format.GeoJSON();
var features_ApolloLandingSites_4 = format_ApolloLandingSites_4.readFeatures(json_ApolloLandingSites_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'ESRI:104903'});
var jsonSource_ApolloLandingSites_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ApolloLandingSites_4.addFeatures(features_ApolloLandingSites_4);
var lyr_ApolloLandingSites_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ApolloLandingSites_4, 
                style: style_ApolloLandingSites_4,
                popuplayertitle: "Apollo Landing Sites",
                interactive: true,
                title: '<img src="styles/legend/ApolloLandingSites_4.png" /> Apollo Landing Sites'
            });

lyr_LROCWACNearsidenoslewBaseMap_0.setVisible(false);lyr_ExperimentalColorShadedGLD100BaseMap_1.setVisible(false);lyr_LROWACColorCompositeMosaicBaseMap_2.setVisible(true);lyr_NearSideMajorMares_3.setVisible(true);lyr_ApolloLandingSites_4.setVisible(true);
var layersList = [lyr_LROCWACNearsidenoslewBaseMap_0,lyr_ExperimentalColorShadedGLD100BaseMap_1,lyr_LROWACColorCompositeMosaicBaseMap_2,lyr_NearSideMajorMares_3,lyr_ApolloLandingSites_4];
lyr_NearSideMajorMares_3.set('fieldAliases', {'fid': 'fid', 'ID': 'ID', 'MARE_NAME': 'mare name', 'Perimtr_km': 'perimeter (km)', 'Area_km': 'area (km)', 'auxiliary_storage_labeling_show': 'auxiliary_storage_labeling_show', });
lyr_ApolloLandingSites_4.set('fieldAliases', {'fid': 'fid', 'Mission': 'Mission', 'Crew': 'Crew', 'Launch': 'Launch', 'Lunar Landing': 'Lunar Landing', 'Splashdown': 'Splashdown', 'auxiliary_storage_labeling_positionx': 'auxiliary_storage_labeling_positionx', 'auxiliary_storage_labeling_positiony': 'auxiliary_storage_labeling_positiony', });
lyr_NearSideMajorMares_3.set('fieldImages', {'fid': 'TextEdit', 'ID': 'Range', 'MARE_NAME': 'TextEdit', 'Perimtr_km': 'TextEdit', 'Area_km': 'TextEdit', 'auxiliary_storage_labeling_show': 'Hidden', });
lyr_ApolloLandingSites_4.set('fieldImages', {'fid': 'TextEdit', 'Mission': 'TextEdit', 'Crew': '', 'Launch': '', 'Lunar Landing': '', 'Splashdown': '', 'auxiliary_storage_labeling_positionx': 'Hidden', 'auxiliary_storage_labeling_positiony': 'Hidden', });
lyr_NearSideMajorMares_3.set('fieldLabels', {'fid': 'hidden field', 'ID': 'hidden field', 'MARE_NAME': 'inline label - visible with data', 'Perimtr_km': 'inline label - visible with data', 'Area_km': 'inline label - visible with data', });
lyr_ApolloLandingSites_4.set('fieldLabels', {'fid': 'hidden field', 'Mission': 'inline label - visible with data', 'Crew': 'inline label - visible with data', 'Launch': 'inline label - visible with data', 'Lunar Landing': 'inline label - visible with data', 'Splashdown': 'inline label - visible with data', });
lyr_ApolloLandingSites_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});
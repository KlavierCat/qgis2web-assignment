ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:3857").setExtent([-1231400.274446, 6654664.754442, -572682.665359, 7496775.334242]);
var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_lighthousesintheislandofIreland_1 = new ol.format.GeoJSON();
var features_lighthousesintheislandofIreland_1 = format_lighthousesintheislandofIreland_1.readFeatures(json_lighthousesintheislandofIreland_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_lighthousesintheislandofIreland_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_lighthousesintheislandofIreland_1.addFeatures(features_lighthousesintheislandofIreland_1);
var lyr_lighthousesintheislandofIreland_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_lighthousesintheislandofIreland_1, 
                style: style_lighthousesintheislandofIreland_1,
                popuplayertitle: "lighthouses in the island of Ireland",
                interactive: true,
                title: '<img src="styles/legend/lighthousesintheislandofIreland_1.png" /> lighthouses in the island of Ireland'
            });

lyr_OSMStandard_0.setVisible(true);lyr_lighthousesintheislandofIreland_1.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_lighthousesintheislandofIreland_1];
lyr_lighthousesintheislandofIreland_1.set('fieldAliases', {'fid': 'fid', 'seamark:fog_signal:category': 'fog signal', 'seamark:landmark:colour_pattern': 'building colour pattern', 'seamark:landmark:colour': 'building colour', 'seamark:radio_station:mmsi': 'seamark:radio_station:mmsi', 'seamark:light:sequence': 'seamark:light:sequence', 'seamark:light:range': 'light range (nm)', 'seamark:light:period': 'light period (sec)', 'seamark:light:height': 'light height (m)', 'seamark:light:colour': 'light colour', 'seamark:light:character': 'light character', 'seamark:type': 'seamark type', 'seamark:name': 'seamark name', 'seamark:light:reference': 'seamark light reference', 'name': 'name', 'url': 'website', 'operator': 'operator', 'building:colour': 'building colour', 'layer': 'layer', 'path': 'path', });
lyr_lighthousesintheislandofIreland_1.set('fieldImages', {'fid': 'TextEdit', 'seamark:fog_signal:category': 'TextEdit', 'seamark:landmark:colour_pattern': 'TextEdit', 'seamark:landmark:colour': 'TextEdit', 'seamark:radio_station:mmsi': 'TextEdit', 'seamark:light:sequence': 'TextEdit', 'seamark:light:range': 'TextEdit', 'seamark:light:period': 'TextEdit', 'seamark:light:height': 'TextEdit', 'seamark:light:colour': 'TextEdit', 'seamark:light:character': 'TextEdit', 'seamark:type': 'TextEdit', 'seamark:name': 'TextEdit', 'seamark:light:reference': 'TextEdit', 'name': 'TextEdit', 'url': 'TextEdit', 'operator': 'TextEdit', 'building:colour': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_lighthousesintheislandofIreland_1.set('fieldLabels', {'fid': 'hidden field', 'seamark:fog_signal:category': 'inline label - visible with data', 'seamark:landmark:colour_pattern': 'inline label - visible with data', 'seamark:landmark:colour': 'inline label - visible with data', 'seamark:radio_station:mmsi': 'hidden field', 'seamark:light:sequence': 'hidden field', 'seamark:light:range': 'inline label - visible with data', 'seamark:light:period': 'inline label - visible with data', 'seamark:light:height': 'inline label - visible with data', 'seamark:light:colour': 'inline label - visible with data', 'seamark:light:character': 'inline label - visible with data', 'seamark:type': 'inline label - visible with data', 'seamark:name': 'hidden field', 'seamark:light:reference': 'hidden field', 'name': 'inline label - visible with data', 'url': 'inline label - visible with data', 'operator': 'inline label - visible with data', 'building:colour': 'inline label - visible with data', 'layer': 'hidden field', 'path': 'hidden field', });
lyr_lighthousesintheislandofIreland_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});
var wms_layers = [];


        var lyr_GoogleMaps_0 = new ol.layer.Tile({
            'title': 'Google Maps',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=r&x={x}&y={y}&z={z}'
            })
        });

        var lyr_GoogleSatelite_1 = new ol.layer.Tile({
            'title': 'Google Satelite',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });
var format_Partidos_2 = new ol.format.GeoJSON();
var features_Partidos_2 = format_Partidos_2.readFeatures(json_Partidos_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Partidos_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Partidos_2.addFeatures(features_Partidos_2);
var lyr_Partidos_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Partidos_2, 
                style: style_Partidos_2,
                interactive: true,
                title: '<img src="styles/legend/Partidos_2.png" /> Partidos'
            });
var format_Hectreasarndanos_3 = new ol.format.GeoJSON();
var features_Hectreasarndanos_3 = format_Hectreasarndanos_3.readFeatures(json_Hectreasarndanos_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Hectreasarndanos_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Hectreasarndanos_3.addFeatures(features_Hectreasarndanos_3);
var lyr_Hectreasarndanos_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Hectreasarndanos_3, 
                style: style_Hectreasarndanos_3,
                interactive: true,
    title: 'Hectáreas arándanos<br />\
    <img src="styles/legend/Hectreasarndanos_3_0.png" /> 0<br />\
    <img src="styles/legend/Hectreasarndanos_3_1.png" /> 1 - 3<br />\
    <img src="styles/legend/Hectreasarndanos_3_2.png" /> 4 - 11<br />\
    <img src="styles/legend/Hectreasarndanos_3_3.png" /> 12 - 48<br />\
    <img src="styles/legend/Hectreasarndanos_3_4.png" /> 49 o más<br />'
        });
var format_HectreasconFlores_4 = new ol.format.GeoJSON();
var features_HectreasconFlores_4 = format_HectreasconFlores_4.readFeatures(json_HectreasconFlores_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HectreasconFlores_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HectreasconFlores_4.addFeatures(features_HectreasconFlores_4);
var lyr_HectreasconFlores_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_HectreasconFlores_4, 
                style: style_HectreasconFlores_4,
                interactive: true,
    title: 'Hectáreas con Flores<br />\
    <img src="styles/legend/HectreasconFlores_4_0.png" /> 0<br />\
    <img src="styles/legend/HectreasconFlores_4_1.png" /> 1 - 3,8<br />\
    <img src="styles/legend/HectreasconFlores_4_2.png" /> 3,9 - 15<br />\
    <img src="styles/legend/HectreasconFlores_4_3.png" /> Más de 15<br />'
        });
var format_Hectreasdehortalizas_5 = new ol.format.GeoJSON();
var features_Hectreasdehortalizas_5 = format_Hectreasdehortalizas_5.readFeatures(json_Hectreasdehortalizas_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Hectreasdehortalizas_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Hectreasdehortalizas_5.addFeatures(features_Hectreasdehortalizas_5);
var lyr_Hectreasdehortalizas_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Hectreasdehortalizas_5, 
                style: style_Hectreasdehortalizas_5,
                interactive: true,
    title: 'Hectáreas de hortalizas<br />\
    <img src="styles/legend/Hectreasdehortalizas_5_0.png" /> 0<br />\
    <img src="styles/legend/Hectreasdehortalizas_5_1.png" /> 1 - 180<br />\
    <img src="styles/legend/Hectreasdehortalizas_5_2.png" /> 181 - 500<br />'
        });
var format_Hectreascondurazneros_6 = new ol.format.GeoJSON();
var features_Hectreascondurazneros_6 = format_Hectreascondurazneros_6.readFeatures(json_Hectreascondurazneros_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Hectreascondurazneros_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Hectreascondurazneros_6.addFeatures(features_Hectreascondurazneros_6);
var lyr_Hectreascondurazneros_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Hectreascondurazneros_6, 
                style: style_Hectreascondurazneros_6,
                interactive: true,
    title: 'Hectáreas con durazneros<br />\
    <img src="styles/legend/Hectreascondurazneros_6_0.png" /> 0<br />\
    <img src="styles/legend/Hectreascondurazneros_6_1.png" /> 1 - 12,0<br />\
    <img src="styles/legend/Hectreascondurazneros_6_2.png" /> 13 - 35<br />\
    <img src="styles/legend/Hectreascondurazneros_6_3.png" /> 36 - 228<br />\
    <img src="styles/legend/Hectreascondurazneros_6_4.png" /> Más de 229<br />'
        });
var format_LocalidadesAvicolas_7 = new ol.format.GeoJSON();
var features_LocalidadesAvicolas_7 = format_LocalidadesAvicolas_7.readFeatures(json_LocalidadesAvicolas_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LocalidadesAvicolas_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LocalidadesAvicolas_7.addFeatures(features_LocalidadesAvicolas_7);
var lyr_LocalidadesAvicolas_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_LocalidadesAvicolas_7, 
                style: style_LocalidadesAvicolas_7,
                interactive: true,
                title: '<img src="styles/legend/LocalidadesAvicolas_7.png" /> Localidades Avicolas'
            });
var format_LocalidadesBsAsCentro_8 = new ol.format.GeoJSON();
var features_LocalidadesBsAsCentro_8 = format_LocalidadesBsAsCentro_8.readFeatures(json_LocalidadesBsAsCentro_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LocalidadesBsAsCentro_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LocalidadesBsAsCentro_8.addFeatures(features_LocalidadesBsAsCentro_8);
var lyr_LocalidadesBsAsCentro_8 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_LocalidadesBsAsCentro_8, 
                style: style_LocalidadesBsAsCentro_8,
                interactive: true,
                title: '<img src="styles/legend/LocalidadesBsAsCentro_8.png" /> Localidades Bs As Centro'
            });
var format_BERBsAsCentro_9 = new ol.format.GeoJSON();
var features_BERBsAsCentro_9 = format_BERBsAsCentro_9.readFeatures(json_BERBsAsCentro_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BERBsAsCentro_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BERBsAsCentro_9.addFeatures(features_BERBsAsCentro_9);
var lyr_BERBsAsCentro_9 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_BERBsAsCentro_9, 
                style: style_BERBsAsCentro_9,
                interactive: true,
                title: '<img src="styles/legend/BERBsAsCentro_9.png" /> BER Bs As Centro'
            });

lyr_GoogleMaps_0.setVisible(true);lyr_GoogleSatelite_1.setVisible(true);lyr_Partidos_2.setVisible(true);lyr_Hectreasarndanos_3.setVisible(true);lyr_HectreasconFlores_4.setVisible(true);lyr_Hectreasdehortalizas_5.setVisible(true);lyr_Hectreascondurazneros_6.setVisible(true);lyr_LocalidadesAvicolas_7.setVisible(true);lyr_LocalidadesBsAsCentro_8.setVisible(true);lyr_BERBsAsCentro_9.setVisible(true);
var layersList = [lyr_GoogleMaps_0,lyr_GoogleSatelite_1,lyr_Partidos_2,lyr_Hectreasarndanos_3,lyr_HectreasconFlores_4,lyr_Hectreasdehortalizas_5,lyr_Hectreascondurazneros_6,lyr_LocalidadesAvicolas_7,lyr_LocalidadesBsAsCentro_8,lyr_BERBsAsCentro_9];
lyr_Partidos_2.set('fieldAliases', {'Partido': 'Partido', });
lyr_Hectreasarndanos_3.set('fieldAliases', {'Arandano': 'Arandano', });
lyr_HectreasconFlores_4.set('fieldAliases', {'Flores': 'Flores', });
lyr_Hectreasdehortalizas_5.set('fieldAliases', {'Hortalizas': 'Hortalizas', });
lyr_Hectreascondurazneros_6.set('fieldAliases', {'Durazno': 'Durazno', });
lyr_LocalidadesAvicolas_7.set('fieldAliases', {'localidad': 'localidad', 'Poblacion': 'Poblacion', 'Avícola': 'Avícola', });
lyr_LocalidadesBsAsCentro_8.set('fieldAliases', {'localidad': 'localidad', 'Poblacion': 'Poblacion', });
lyr_BERBsAsCentro_9.set('fieldAliases', {'Localidad': 'Localidad', 'Entidad': 'Entidad', 'Direccion': 'Direccion', 'Admin.': 'Admin.', });
lyr_Partidos_2.set('fieldImages', {'Partido': '', });
lyr_Hectreasarndanos_3.set('fieldImages', {'Arandano': 'TextEdit', });
lyr_HectreasconFlores_4.set('fieldImages', {'Flores': 'TextEdit', });
lyr_Hectreasdehortalizas_5.set('fieldImages', {'Hortalizas': 'TextEdit', });
lyr_Hectreascondurazneros_6.set('fieldImages', {'Durazno': 'TextEdit', });
lyr_LocalidadesAvicolas_7.set('fieldImages', {'localidad': 'TextEdit', 'Poblacion': 'TextEdit', 'Avícola': 'TextEdit', });
lyr_LocalidadesBsAsCentro_8.set('fieldImages', {'localidad': 'TextEdit', 'Poblacion': 'TextEdit', });
lyr_BERBsAsCentro_9.set('fieldImages', {'Localidad': 'TextEdit', 'Entidad': 'TextEdit', 'Direccion': 'TextEdit', 'Admin.': 'TextEdit', });
lyr_Partidos_2.set('fieldLabels', {'Partido': 'inline label', });
lyr_Hectreasarndanos_3.set('fieldLabels', {'Arandano': 'inline label', });
lyr_HectreasconFlores_4.set('fieldLabels', {'Flores': 'inline label', });
lyr_Hectreasdehortalizas_5.set('fieldLabels', {'Hortalizas': 'inline label', });
lyr_Hectreascondurazneros_6.set('fieldLabels', {'Durazno': 'inline label', });
lyr_LocalidadesAvicolas_7.set('fieldLabels', {'localidad': 'inline label', 'Poblacion': 'inline label', 'Avícola': 'inline label', });
lyr_LocalidadesBsAsCentro_8.set('fieldLabels', {'localidad': 'inline label', 'Poblacion': 'inline label', });
lyr_BERBsAsCentro_9.set('fieldLabels', {'Localidad': 'inline label', 'Entidad': 'inline label', 'Direccion': 'inline label', 'Admin.': 'inline label', });
lyr_BERBsAsCentro_9.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});
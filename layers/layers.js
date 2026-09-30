ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:2326").setExtent([811787.937900, 831299.517900, 830349.232000, 844064.544000]);
var wms_layers = [];


        var lyr_CSDITopoMapWGS84_0 = new ol.layer.Tile({
            'title': 'CSDI Topo Map (WGS84)',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mapapi.geodata.gov.hk/gs/api/v1.0.0/xyz/basemap/wgs84/{z}/{x}/{y}.png'
            })
        });

        var lyr_CSDIImageryMapWGS84_1 = new ol.layer.Tile({
            'title': 'CSDI Imagery Map (WGS84)',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mapapi.geodata.gov.hk/gs/api/v1.0.0/xyz/imagery/WGS84/{z}/{x}/{y}.png'
            })
        });
var format_HKWPExpansionArea_2 = new ol.format.GeoJSON();
var features_HKWPExpansionArea_2 = format_HKWPExpansionArea_2.readFeatures(json_HKWPExpansionArea_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:2326'});
var jsonSource_HKWPExpansionArea_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HKWPExpansionArea_2.addFeatures(features_HKWPExpansionArea_2);
var lyr_HKWPExpansionArea_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HKWPExpansionArea_2, 
                style: style_HKWPExpansionArea_2,
                popuplayertitle: 'HKWPExpansionArea',
                interactive: true,
                title: '<img src="styles/legend/HKWPExpansionArea_2.png" /> HKWPExpansionArea'
            });
var format_HooHokWaiWCP_3 = new ol.format.GeoJSON();
var features_HooHokWaiWCP_3 = format_HooHokWaiWCP_3.readFeatures(json_HooHokWaiWCP_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:2326'});
var jsonSource_HooHokWaiWCP_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HooHokWaiWCP_3.addFeatures(features_HooHokWaiWCP_3);
var lyr_HooHokWaiWCP_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HooHokWaiWCP_3, 
                style: style_HooHokWaiWCP_3,
                popuplayertitle: 'HooHokWaiWCP',
                interactive: true,
                title: '<img src="styles/legend/HooHokWaiWCP_3.png" /> HooHokWaiWCP'
            });
var format_NamSangWaiWCP_4 = new ol.format.GeoJSON();
var features_NamSangWaiWCP_4 = format_NamSangWaiWCP_4.readFeatures(json_NamSangWaiWCP_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:2326'});
var jsonSource_NamSangWaiWCP_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_NamSangWaiWCP_4.addFeatures(features_NamSangWaiWCP_4);
var lyr_NamSangWaiWCP_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_NamSangWaiWCP_4, 
                style: style_NamSangWaiWCP_4,
                popuplayertitle: 'NamSangWaiWCP',
                interactive: true,
                title: '<img src="styles/legend/NamSangWaiWCP_4.png" /> NamSangWaiWCP'
            });
var format_ShaLingNamHangNaturePark_5 = new ol.format.GeoJSON();
var features_ShaLingNamHangNaturePark_5 = format_ShaLingNamHangNaturePark_5.readFeatures(json_ShaLingNamHangNaturePark_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:2326'});
var jsonSource_ShaLingNamHangNaturePark_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ShaLingNamHangNaturePark_5.addFeatures(features_ShaLingNamHangNaturePark_5);
var lyr_ShaLingNamHangNaturePark_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ShaLingNamHangNaturePark_5, 
                style: style_ShaLingNamHangNaturePark_5,
                popuplayertitle: 'ShaLingNamHangNaturePark',
                interactive: true,
                title: '<img src="styles/legend/ShaLingNamHangNaturePark_5.png" /> ShaLingNamHangNaturePark'
            });
var format_SPSWCP_Boundary_6 = new ol.format.GeoJSON();
var features_SPSWCP_Boundary_6 = format_SPSWCP_Boundary_6.readFeatures(json_SPSWCP_Boundary_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:2326'});
var jsonSource_SPSWCP_Boundary_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SPSWCP_Boundary_6.addFeatures(features_SPSWCP_Boundary_6);
var lyr_SPSWCP_Boundary_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SPSWCP_Boundary_6, 
                style: style_SPSWCP_Boundary_6,
                popuplayertitle: 'SPSWCP_Boundary',
                interactive: true,
                title: '<img src="styles/legend/SPSWCP_Boundary_6.png" /> SPSWCP_Boundary'
            });
var format_SPSWCP_Phase1_Boundary_7 = new ol.format.GeoJSON();
var features_SPSWCP_Phase1_Boundary_7 = format_SPSWCP_Phase1_Boundary_7.readFeatures(json_SPSWCP_Phase1_Boundary_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:2326'});
var jsonSource_SPSWCP_Phase1_Boundary_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SPSWCP_Phase1_Boundary_7.addFeatures(features_SPSWCP_Phase1_Boundary_7);
var lyr_SPSWCP_Phase1_Boundary_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SPSWCP_Phase1_Boundary_7, 
                style: style_SPSWCP_Phase1_Boundary_7,
                popuplayertitle: 'SPSWCP_Phase1_Boundary',
                interactive: true,
                title: '<img src="styles/legend/SPSWCP_Phase1_Boundary_7.png" /> SPSWCP_Phase1_Boundary'
            });
var format_SPSWCPPhase1Contract1_202608_8 = new ol.format.GeoJSON();
var features_SPSWCPPhase1Contract1_202608_8 = format_SPSWCPPhase1Contract1_202608_8.readFeatures(json_SPSWCPPhase1Contract1_202608_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:2326'});
var jsonSource_SPSWCPPhase1Contract1_202608_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SPSWCPPhase1Contract1_202608_8.addFeatures(features_SPSWCPPhase1Contract1_202608_8);
var lyr_SPSWCPPhase1Contract1_202608_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SPSWCPPhase1Contract1_202608_8, 
                style: style_SPSWCPPhase1Contract1_202608_8,
                popuplayertitle: 'SPS WCP Phase 1 Contract 1_202608',
                interactive: true,
                title: '<img src="styles/legend/SPSWCPPhase1Contract1_202608_8.png" /> SPS WCP Phase 1 Contract 1_202608'
            });
var format_SPSWCP_OtterCorridor_9 = new ol.format.GeoJSON();
var features_SPSWCP_OtterCorridor_9 = format_SPSWCP_OtterCorridor_9.readFeatures(json_SPSWCP_OtterCorridor_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:2326'});
var jsonSource_SPSWCP_OtterCorridor_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SPSWCP_OtterCorridor_9.addFeatures(features_SPSWCP_OtterCorridor_9);
var lyr_SPSWCP_OtterCorridor_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SPSWCP_OtterCorridor_9, 
                style: style_SPSWCP_OtterCorridor_9,
                popuplayertitle: 'SPSWCP_OtterCorridor',
                interactive: true,
                title: '<img src="styles/legend/SPSWCP_OtterCorridor_9.png" /> SPSWCP_OtterCorridor'
            });
var format_MigitationWetlandinWCPs_10 = new ol.format.GeoJSON();
var features_MigitationWetlandinWCPs_10 = format_MigitationWetlandinWCPs_10.readFeatures(json_MigitationWetlandinWCPs_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:2326'});
var jsonSource_MigitationWetlandinWCPs_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MigitationWetlandinWCPs_10.addFeatures(features_MigitationWetlandinWCPs_10);
var lyr_MigitationWetlandinWCPs_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MigitationWetlandinWCPs_10, 
                style: style_MigitationWetlandinWCPs_10,
                popuplayertitle: 'Migitation Wetland in WCPs',
                interactive: true,
                title: '<img src="styles/legend/MigitationWetlandinWCPs_10.png" /> Migitation Wetland in WCPs'
            });
var format_FishPondsCropped_11 = new ol.format.GeoJSON();
var features_FishPondsCropped_11 = format_FishPondsCropped_11.readFeatures(json_FishPondsCropped_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:2326'});
var jsonSource_FishPondsCropped_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FishPondsCropped_11.addFeatures(features_FishPondsCropped_11);
var lyr_FishPondsCropped_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_FishPondsCropped_11, 
                style: style_FishPondsCropped_11,
                popuplayertitle: 'FishPondsCropped',
                interactive: true,
                title: '<img src="styles/legend/FishPondsCropped_11.png" /> FishPondsCropped'
            });
var format_SPSWCPBoardwalk_12 = new ol.format.GeoJSON();
var features_SPSWCPBoardwalk_12 = format_SPSWCPBoardwalk_12.readFeatures(json_SPSWCPBoardwalk_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:2326'});
var jsonSource_SPSWCPBoardwalk_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SPSWCPBoardwalk_12.addFeatures(features_SPSWCPBoardwalk_12);
var lyr_SPSWCPBoardwalk_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SPSWCPBoardwalk_12, 
                style: style_SPSWCPBoardwalk_12,
                popuplayertitle: 'SPS WCP Boardwalk',
                interactive: true,
    title: 'SPS WCP Boardwalk<br />\
    <img src="styles/legend/SPSWCPBoardwalk_12_0.png" /> Phase 1<br />\
    <img src="styles/legend/SPSWCPBoardwalk_12_1.png" /> Remaining<br />\
    <img src="styles/legend/SPSWCPBoardwalk_12_2.png" /> <br />' });
var format_RiverChannel_13 = new ol.format.GeoJSON();
var features_RiverChannel_13 = format_RiverChannel_13.readFeatures(json_RiverChannel_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:2326'});
var jsonSource_RiverChannel_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RiverChannel_13.addFeatures(features_RiverChannel_13);
var lyr_RiverChannel_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RiverChannel_13, 
                style: style_RiverChannel_13,
                popuplayertitle: 'River Channel',
                interactive: true,
                title: '<img src="styles/legend/RiverChannel_13.png" /> River Channel'
            });
var format_EgretriesArdeidsCormorantRoostingSitesUPER_14 = new ol.format.GeoJSON();
var features_EgretriesArdeidsCormorantRoostingSitesUPER_14 = format_EgretriesArdeidsCormorantRoostingSitesUPER_14.readFeatures(json_EgretriesArdeidsCormorantRoostingSitesUPER_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:2326'});
var jsonSource_EgretriesArdeidsCormorantRoostingSitesUPER_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EgretriesArdeidsCormorantRoostingSitesUPER_14.addFeatures(features_EgretriesArdeidsCormorantRoostingSitesUPER_14);
var lyr_EgretriesArdeidsCormorantRoostingSitesUPER_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EgretriesArdeidsCormorantRoostingSitesUPER_14, 
                style: style_EgretriesArdeidsCormorantRoostingSitesUPER_14,
                popuplayertitle: 'Egretries, Ardeids/Cormorant Roosting Sites (UPER)',
                interactive: true,
                title: 'Egretries, Ardeids/Cormorant Roosting Sites (UPER)'
            });
var format_EgretriesArdeidsCormorantRoostingSitesUPER_15 = new ol.format.GeoJSON();
var features_EgretriesArdeidsCormorantRoostingSitesUPER_15 = format_EgretriesArdeidsCormorantRoostingSitesUPER_15.readFeatures(json_EgretriesArdeidsCormorantRoostingSitesUPER_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:2326'});
var jsonSource_EgretriesArdeidsCormorantRoostingSitesUPER_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EgretriesArdeidsCormorantRoostingSitesUPER_15.addFeatures(features_EgretriesArdeidsCormorantRoostingSitesUPER_15);
var lyr_EgretriesArdeidsCormorantRoostingSitesUPER_15 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EgretriesArdeidsCormorantRoostingSitesUPER_15, 
                style: style_EgretriesArdeidsCormorantRoostingSitesUPER_15,
                popuplayertitle: 'Egretries, Ardeids/Cormorant Roosting Sites (UPER)',
                interactive: true,
                title: 'Egretries, Ardeids/Cormorant Roosting Sites (UPER)'
            });
var format_RecordsofSpeciesofConservationImportance_16 = new ol.format.GeoJSON();
var features_RecordsofSpeciesofConservationImportance_16 = format_RecordsofSpeciesofConservationImportance_16.readFeatures(json_RecordsofSpeciesofConservationImportance_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:2326'});
var jsonSource_RecordsofSpeciesofConservationImportance_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RecordsofSpeciesofConservationImportance_16.addFeatures(features_RecordsofSpeciesofConservationImportance_16);
var lyr_RecordsofSpeciesofConservationImportance_16 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RecordsofSpeciesofConservationImportance_16, 
                style: style_RecordsofSpeciesofConservationImportance_16,
                popuplayertitle: 'Records of Species of Conservation Importance',
                interactive: true,
                title: '<img src="styles/legend/RecordsofSpeciesofConservationImportance_16.png" /> Records of Species of Conservation Importance'
            });
var group_RecordsofSpeciesofConservationImportance = new ol.layer.Group({
                                layers: [lyr_RecordsofSpeciesofConservationImportance_16,],
                                fold: 'open',
                                title: 'Records of Species of Conservation Importance'});
var group_EgretriesArdeidsCormorantRoostingSitesUPER = new ol.layer.Group({
                                layers: [lyr_EgretriesArdeidsCormorantRoostingSitesUPER_14,lyr_EgretriesArdeidsCormorantRoostingSitesUPER_15,],
                                fold: 'open',
                                title: 'Egretries, ArdeidsCormorant Roosting Sites (UPER)'});
var group_RiversChannels = new ol.layer.Group({
                                layers: [lyr_RiverChannel_13,],
                                fold: 'open',
                                title: 'RiversChannels'});
var group_CameraTrapMap = new ol.layer.Group({
                                layers: [],
                                fold: 'open',
                                title: 'Camera Trap Map'});
var group_Boardwalk = new ol.layer.Group({
                                layers: [lyr_SPSWCPBoardwalk_12,],
                                fold: 'open',
                                title: 'Boardwalk'});
var group_WCPsSurveyRoute = new ol.layer.Group({
                                layers: [],
                                fold: 'open',
                                title: 'WCPs Survey Route'});
var group_LandStatus = new ol.layer.Group({
                                layers: [],
                                fold: 'open',
                                title: 'Land Status'});
var group_FishPonds = new ol.layer.Group({
                                layers: [lyr_FishPondsCropped_11,],
                                fold: 'open',
                                title: 'Fish Ponds'});
var group_MigitationWetland = new ol.layer.Group({
                                layers: [lyr_MigitationWetlandinWCPs_10,],
                                fold: 'open',
                                title: 'Migitation Wetland'});
var group_Habitat = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'Habitat'});
var group_SPSWCPPaperMaps = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'SPS WCP Paper Maps'});
var group_SPSWCP = new ol.layer.Group({
                                layers: [lyr_SPSWCP_Boundary_6,lyr_SPSWCP_Phase1_Boundary_7,lyr_SPSWCPPhase1Contract1_202608_8,lyr_SPSWCP_OtterCorridor_9,],
                                fold: 'open',
                                title: 'SPS WCP'});
var group_OtherWCPs = new ol.layer.Group({
                                layers: [lyr_HKWPExpansionArea_2,lyr_HooHokWaiWCP_3,lyr_NamSangWaiWCP_4,lyr_ShaLingNamHangNaturePark_5,],
                                fold: 'open',
                                title: 'Other WCPs'});
var group_RelevantSites1 = new ol.layer.Group({
                                layers: [],
                                fold: 'open',
                                title: 'Relevant Sites - 1'});
var group_RelevantSites2 = new ol.layer.Group({
                                layers: [],
                                fold: 'open',
                                title: 'Relevant Sites - 2'});
var group_Basemaps = new ol.layer.Group({
                                layers: [lyr_CSDITopoMapWGS84_0,lyr_CSDIImageryMapWGS84_1,],
                                fold: 'open',
                                title: 'Basemaps'});

lyr_CSDITopoMapWGS84_0.setVisible(true);lyr_CSDIImageryMapWGS84_1.setVisible(true);lyr_HKWPExpansionArea_2.setVisible(true);lyr_HooHokWaiWCP_3.setVisible(true);lyr_NamSangWaiWCP_4.setVisible(true);lyr_ShaLingNamHangNaturePark_5.setVisible(true);lyr_SPSWCP_Boundary_6.setVisible(true);lyr_SPSWCP_Phase1_Boundary_7.setVisible(true);lyr_SPSWCPPhase1Contract1_202608_8.setVisible(true);lyr_SPSWCP_OtterCorridor_9.setVisible(true);lyr_MigitationWetlandinWCPs_10.setVisible(true);lyr_FishPondsCropped_11.setVisible(true);lyr_SPSWCPBoardwalk_12.setVisible(true);lyr_RiverChannel_13.setVisible(true);lyr_EgretriesArdeidsCormorantRoostingSitesUPER_14.setVisible(true);lyr_EgretriesArdeidsCormorantRoostingSitesUPER_15.setVisible(true);lyr_RecordsofSpeciesofConservationImportance_16.setVisible(true);
var layersList = [group_Basemaps,group_OtherWCPs,group_SPSWCP,group_MigitationWetland,group_FishPonds,group_Boardwalk,group_RiversChannels,group_EgretriesArdeidsCormorantRoostingSitesUPER,group_RecordsofSpeciesofConservationImportance];
lyr_HKWPExpansionArea_2.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'FID_Subjec': 'FID_Subjec', 'Name': 'Name', 'SHAPE_Leng': 'SHAPE_Leng', 'Site': 'Site', 'FID_Subj_1': 'FID_Subj_1', 'OZP_SCHM': 'OZP_SCHM', 'OZP_PLAN_N': 'OZP_PLAN_N', 'ZONE_LABEL': 'ZONE_LABEL', 'ZONE_SPUSE': 'ZONE_SPUSE', 'ZONE_SPU_1': 'ZONE_SPU_1', 'ZONE_SPU_2': 'ZONE_SPU_2', 'DEV_PLAN_N': 'DEV_PLAN_N', 'ZONE_SPU_3': 'ZONE_SPU_3', 'SECT_NO': 'SECT_NO', 'itema': 'itema', 'Shape_Le_1': 'Shape_Le_1', 'Shape_Area': 'Shape_Area', });
lyr_HooHokWaiWCP_3.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'FID_Subjec': 'FID_Subjec', 'Name': 'Name', 'SHAPE_Leng': 'SHAPE_Leng', 'Site': 'Site', 'FID_Subj_1': 'FID_Subj_1', 'OZP_SCHM': 'OZP_SCHM', 'OZP_PLAN_N': 'OZP_PLAN_N', 'ZONE_LABEL': 'ZONE_LABEL', 'ZONE_SPUSE': 'ZONE_SPUSE', 'ZONE_SPU_1': 'ZONE_SPU_1', 'ZONE_SPU_2': 'ZONE_SPU_2', 'DEV_PLAN_N': 'DEV_PLAN_N', 'ZONE_SPU_3': 'ZONE_SPU_3', 'SECT_NO': 'SECT_NO', 'itema': 'itema', 'Shape_Le_1': 'Shape_Le_1', 'Shape_Area': 'Shape_Area', });
lyr_NamSangWaiWCP_4.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'FID_Subjec': 'FID_Subjec', 'Name': 'Name', 'SHAPE_Leng': 'SHAPE_Leng', 'Site': 'Site', 'FID_Subj_1': 'FID_Subj_1', 'OZP_SCHM': 'OZP_SCHM', 'OZP_PLAN_N': 'OZP_PLAN_N', 'ZONE_LABEL': 'ZONE_LABEL', 'ZONE_SPUSE': 'ZONE_SPUSE', 'ZONE_SPU_1': 'ZONE_SPU_1', 'ZONE_SPU_2': 'ZONE_SPU_2', 'DEV_PLAN_N': 'DEV_PLAN_N', 'ZONE_SPU_3': 'ZONE_SPU_3', 'SECT_NO': 'SECT_NO', 'itema': 'itema', 'Shape_Le_1': 'Shape_Le_1', 'Shape_Area': 'Shape_Area', });
lyr_ShaLingNamHangNaturePark_5.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'FID_Subjec': 'FID_Subjec', 'Name': 'Name', 'SHAPE_Leng': 'SHAPE_Leng', 'Site': 'Site', 'FID_Subj_1': 'FID_Subj_1', 'OZP_SCHM': 'OZP_SCHM', 'OZP_PLAN_N': 'OZP_PLAN_N', 'ZONE_LABEL': 'ZONE_LABEL', 'ZONE_SPUSE': 'ZONE_SPUSE', 'ZONE_SPU_1': 'ZONE_SPU_1', 'ZONE_SPU_2': 'ZONE_SPU_2', 'DEV_PLAN_N': 'DEV_PLAN_N', 'ZONE_SPU_3': 'ZONE_SPU_3', 'SECT_NO': 'SECT_NO', 'itema': 'itema', 'Shape_Le_1': 'Shape_Le_1', 'Shape_Area': 'Shape_Area', });
lyr_SPSWCP_Boundary_6.set('fieldAliases', {'FID_': 'FID_', 'Entity': 'Entity', 'Level': 'Level', 'Layer': 'Layer', 'Color': 'Color', 'Linetype': 'Linetype', 'Elevation': 'Elevation', 'LineWt': 'LineWt', 'RefName': 'RefName', 'Area': 'Area', });
lyr_SPSWCP_Phase1_Boundary_7.set('fieldAliases', {'Id': 'Id', 'Area': 'Area', });
lyr_SPSWCPPhase1Contract1_202608_8.set('fieldAliases', {'Id': 'Id', 'Area': 'Area', });
lyr_SPSWCP_OtterCorridor_9.set('fieldAliases', {'Id': 'Id', 'area': 'area', });
lyr_MigitationWetlandinWCPs_10.set('fieldAliases', {'MITIGATION': 'MITIGATION', 'EIA_NUMBER': 'EIA_NUMBER', 'TITLE': 'TITLE', 'COMMEN_DAT': 'COMMEN_DAT', 'STATUS': 'STATUS', 'OFFICER': 'OFFICER', 'ATTACHMENT': 'ATTACHMENT', 'NATURE': 'NATURE', 'LAST_UPDAT': 'LAST_UPDAT', 'Shape_STAr': 'Shape_STAr', 'Shape_STLe': 'Shape_STLe', });
lyr_FishPondsCropped_11.set('fieldAliases', {'OBJECTID_1': 'OBJECTID_1', 'OBJECTID': 'OBJECTID', 'POND_NO': 'POND_NO', 'PFCZ': 'PFCZ', 'CALC_POND_': 'CALC_POND_', 'LAND_USAGE': 'LAND_USAGE', 'LAND_USA_1': 'LAND_USA_1', 'LAND_STATU': 'LAND_STATU', 'LAND_STA_1': 'LAND_STA_1', 'PLAN_PROJ': 'PLAN_PROJ', 'PLAN_REPOR': 'PLAN_REPOR', 'REMARK': 'REMARK', 'SHAPE_Leng': 'SHAPE_Leng', 'Shape_Le_1': 'Shape_Le_1', 'Shape_Area': 'Shape_Area', });
lyr_SPSWCPBoardwalk_12.set('fieldAliases', {'id': 'id', 'Length': 'Length', 'Phase': 'Phase', });
lyr_RiverChannel_13.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_EgretriesArdeidsCormorantRoostingSitesUPER_14.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', '______': '______', 'id2': 'id2', });
lyr_EgretriesArdeidsCormorantRoostingSitesUPER_15.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', '______': '______', 'id2': 'id2', });
lyr_RecordsofSpeciesofConservationImportance_16.set('fieldAliases', {'Species': 'Species', 'Cam_Trap_N': 'Cam_Trap_N', 'Qty': 'Qty', 'Survey_Met': 'Survey_Met', 'Date': 'Date', 'Lat': 'Lat', 'Lon': 'Lon', 'Name': 'Name', });
lyr_HKWPExpansionArea_2.set('fieldImages', {'OBJECTID': 'TextEdit', 'FID_Subjec': 'TextEdit', 'Name': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'Site': 'TextEdit', 'FID_Subj_1': 'TextEdit', 'OZP_SCHM': 'TextEdit', 'OZP_PLAN_N': 'TextEdit', 'ZONE_LABEL': 'TextEdit', 'ZONE_SPUSE': 'TextEdit', 'ZONE_SPU_1': 'TextEdit', 'ZONE_SPU_2': 'TextEdit', 'DEV_PLAN_N': 'TextEdit', 'ZONE_SPU_3': 'TextEdit', 'SECT_NO': 'TextEdit', 'itema': 'TextEdit', 'Shape_Le_1': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_HooHokWaiWCP_3.set('fieldImages', {'OBJECTID': 'TextEdit', 'FID_Subjec': 'TextEdit', 'Name': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'Site': 'TextEdit', 'FID_Subj_1': 'TextEdit', 'OZP_SCHM': 'TextEdit', 'OZP_PLAN_N': 'TextEdit', 'ZONE_LABEL': 'TextEdit', 'ZONE_SPUSE': 'TextEdit', 'ZONE_SPU_1': 'TextEdit', 'ZONE_SPU_2': 'TextEdit', 'DEV_PLAN_N': 'TextEdit', 'ZONE_SPU_3': 'TextEdit', 'SECT_NO': 'TextEdit', 'itema': 'TextEdit', 'Shape_Le_1': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_NamSangWaiWCP_4.set('fieldImages', {'OBJECTID': 'TextEdit', 'FID_Subjec': 'TextEdit', 'Name': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'Site': 'TextEdit', 'FID_Subj_1': 'TextEdit', 'OZP_SCHM': 'TextEdit', 'OZP_PLAN_N': 'TextEdit', 'ZONE_LABEL': 'TextEdit', 'ZONE_SPUSE': 'TextEdit', 'ZONE_SPU_1': 'TextEdit', 'ZONE_SPU_2': 'TextEdit', 'DEV_PLAN_N': 'TextEdit', 'ZONE_SPU_3': 'TextEdit', 'SECT_NO': 'TextEdit', 'itema': 'TextEdit', 'Shape_Le_1': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_ShaLingNamHangNaturePark_5.set('fieldImages', {'OBJECTID': 'TextEdit', 'FID_Subjec': 'TextEdit', 'Name': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'Site': 'TextEdit', 'FID_Subj_1': 'TextEdit', 'OZP_SCHM': 'TextEdit', 'OZP_PLAN_N': 'TextEdit', 'ZONE_LABEL': 'TextEdit', 'ZONE_SPUSE': 'TextEdit', 'ZONE_SPU_1': 'TextEdit', 'ZONE_SPU_2': 'TextEdit', 'DEV_PLAN_N': 'TextEdit', 'ZONE_SPU_3': 'TextEdit', 'SECT_NO': 'TextEdit', 'itema': 'TextEdit', 'Shape_Le_1': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_SPSWCP_Boundary_6.set('fieldImages', {'FID_': 'TextEdit', 'Entity': 'TextEdit', 'Level': 'TextEdit', 'Layer': 'TextEdit', 'Color': 'Range', 'Linetype': 'TextEdit', 'Elevation': 'TextEdit', 'LineWt': 'Range', 'RefName': 'TextEdit', 'Area': 'TextEdit', });
lyr_SPSWCP_Phase1_Boundary_7.set('fieldImages', {'Id': 'Range', 'Area': 'TextEdit', });
lyr_SPSWCPPhase1Contract1_202608_8.set('fieldImages', {'Id': 'Range', 'Area': 'TextEdit', });
lyr_SPSWCP_OtterCorridor_9.set('fieldImages', {'Id': 'Range', 'area': 'TextEdit', });
lyr_MigitationWetlandinWCPs_10.set('fieldImages', {'MITIGATION': 'TextEdit', 'EIA_NUMBER': 'TextEdit', 'TITLE': 'TextEdit', 'COMMEN_DAT': 'DateTime', 'STATUS': 'TextEdit', 'OFFICER': 'TextEdit', 'ATTACHMENT': 'TextEdit', 'NATURE': 'TextEdit', 'LAST_UPDAT': 'DateTime', 'Shape_STAr': 'TextEdit', 'Shape_STLe': 'TextEdit', });
lyr_FishPondsCropped_11.set('fieldImages', {'OBJECTID_1': 'TextEdit', 'OBJECTID': 'TextEdit', 'POND_NO': 'TextEdit', 'PFCZ': 'TextEdit', 'CALC_POND_': 'TextEdit', 'LAND_USAGE': 'TextEdit', 'LAND_USA_1': 'TextEdit', 'LAND_STATU': 'TextEdit', 'LAND_STA_1': 'TextEdit', 'PLAN_PROJ': 'TextEdit', 'PLAN_REPOR': 'TextEdit', 'REMARK': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'Shape_Le_1': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_SPSWCPBoardwalk_12.set('fieldImages', {'id': 'TextEdit', 'Length': 'Range', 'Phase': 'TextEdit', });
lyr_RiverChannel_13.set('fieldImages', {'Name': 'TextEdit', 'descriptio': 'TextEdit', 'timestamp': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'altitudeMo': 'TextEdit', 'tessellate': 'TextEdit', 'extrude': 'TextEdit', 'visibility': 'TextEdit', 'drawOrder': 'TextEdit', 'icon': 'TextEdit', });
lyr_EgretriesArdeidsCormorantRoostingSitesUPER_14.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', '______': 'TextEdit', 'id2': '', });
lyr_EgretriesArdeidsCormorantRoostingSitesUPER_15.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', '______': 'TextEdit', 'id2': '', });
lyr_RecordsofSpeciesofConservationImportance_16.set('fieldImages', {'Species': '', 'Cam_Trap_N': '', 'Qty': '', 'Survey_Met': '', 'Date': '', 'Lat': '', 'Lon': '', 'Name': '', });
lyr_HKWPExpansionArea_2.set('fieldLabels', {'OBJECTID': 'no label', 'FID_Subjec': 'no label', 'Name': 'no label', 'SHAPE_Leng': 'no label', 'Site': 'no label', 'FID_Subj_1': 'no label', 'OZP_SCHM': 'no label', 'OZP_PLAN_N': 'no label', 'ZONE_LABEL': 'no label', 'ZONE_SPUSE': 'no label', 'ZONE_SPU_1': 'no label', 'ZONE_SPU_2': 'no label', 'DEV_PLAN_N': 'no label', 'ZONE_SPU_3': 'no label', 'SECT_NO': 'no label', 'itema': 'no label', 'Shape_Le_1': 'no label', 'Shape_Area': 'no label', });
lyr_HooHokWaiWCP_3.set('fieldLabels', {'OBJECTID': 'no label', 'FID_Subjec': 'no label', 'Name': 'no label', 'SHAPE_Leng': 'no label', 'Site': 'no label', 'FID_Subj_1': 'no label', 'OZP_SCHM': 'no label', 'OZP_PLAN_N': 'no label', 'ZONE_LABEL': 'no label', 'ZONE_SPUSE': 'no label', 'ZONE_SPU_1': 'no label', 'ZONE_SPU_2': 'no label', 'DEV_PLAN_N': 'no label', 'ZONE_SPU_3': 'no label', 'SECT_NO': 'no label', 'itema': 'no label', 'Shape_Le_1': 'no label', 'Shape_Area': 'no label', });
lyr_NamSangWaiWCP_4.set('fieldLabels', {'OBJECTID': 'no label', 'FID_Subjec': 'no label', 'Name': 'no label', 'SHAPE_Leng': 'no label', 'Site': 'no label', 'FID_Subj_1': 'no label', 'OZP_SCHM': 'no label', 'OZP_PLAN_N': 'no label', 'ZONE_LABEL': 'no label', 'ZONE_SPUSE': 'no label', 'ZONE_SPU_1': 'no label', 'ZONE_SPU_2': 'no label', 'DEV_PLAN_N': 'no label', 'ZONE_SPU_3': 'no label', 'SECT_NO': 'no label', 'itema': 'no label', 'Shape_Le_1': 'no label', 'Shape_Area': 'no label', });
lyr_ShaLingNamHangNaturePark_5.set('fieldLabels', {'OBJECTID': 'no label', 'FID_Subjec': 'no label', 'Name': 'no label', 'SHAPE_Leng': 'no label', 'Site': 'no label', 'FID_Subj_1': 'no label', 'OZP_SCHM': 'no label', 'OZP_PLAN_N': 'no label', 'ZONE_LABEL': 'no label', 'ZONE_SPUSE': 'no label', 'ZONE_SPU_1': 'no label', 'ZONE_SPU_2': 'no label', 'DEV_PLAN_N': 'no label', 'ZONE_SPU_3': 'no label', 'SECT_NO': 'no label', 'itema': 'no label', 'Shape_Le_1': 'no label', 'Shape_Area': 'no label', });
lyr_SPSWCP_Boundary_6.set('fieldLabels', {'FID_': 'no label', 'Entity': 'no label', 'Level': 'no label', 'Layer': 'no label', 'Color': 'no label', 'Linetype': 'no label', 'Elevation': 'no label', 'LineWt': 'no label', 'RefName': 'no label', 'Area': 'no label', });
lyr_SPSWCP_Phase1_Boundary_7.set('fieldLabels', {'Id': 'no label', 'Area': 'no label', });
lyr_SPSWCPPhase1Contract1_202608_8.set('fieldLabels', {'Id': 'no label', 'Area': 'no label', });
lyr_SPSWCP_OtterCorridor_9.set('fieldLabels', {'Id': 'no label', 'area': 'no label', });
lyr_MigitationWetlandinWCPs_10.set('fieldLabels', {'MITIGATION': 'no label', 'EIA_NUMBER': 'no label', 'TITLE': 'no label', 'COMMEN_DAT': 'no label', 'STATUS': 'no label', 'OFFICER': 'no label', 'ATTACHMENT': 'no label', 'NATURE': 'no label', 'LAST_UPDAT': 'no label', 'Shape_STAr': 'no label', 'Shape_STLe': 'no label', });
lyr_FishPondsCropped_11.set('fieldLabels', {'OBJECTID_1': 'no label', 'OBJECTID': 'no label', 'POND_NO': 'no label', 'PFCZ': 'no label', 'CALC_POND_': 'no label', 'LAND_USAGE': 'no label', 'LAND_USA_1': 'no label', 'LAND_STATU': 'no label', 'LAND_STA_1': 'no label', 'PLAN_PROJ': 'no label', 'PLAN_REPOR': 'no label', 'REMARK': 'no label', 'SHAPE_Leng': 'no label', 'Shape_Le_1': 'no label', 'Shape_Area': 'no label', });
lyr_SPSWCPBoardwalk_12.set('fieldLabels', {'id': 'no label', 'Length': 'no label', 'Phase': 'no label', });
lyr_RiverChannel_13.set('fieldLabels', {'Name': 'no label', 'descriptio': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMo': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_EgretriesArdeidsCormorantRoostingSitesUPER_14.set('fieldLabels', {'id': 'no label', 'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', '______': 'no label', 'id2': 'no label', });
lyr_EgretriesArdeidsCormorantRoostingSitesUPER_15.set('fieldLabels', {'id': 'no label', 'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', '______': 'no label', 'id2': 'no label', });
lyr_RecordsofSpeciesofConservationImportance_16.set('fieldLabels', {'Species': 'no label', 'Cam_Trap_N': 'no label', 'Qty': 'no label', 'Survey_Met': 'no label', 'Date': 'no label', 'Lat': 'no label', 'Lon': 'no label', 'Name': 'no label', });
lyr_RecordsofSpeciesofConservationImportance_16.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});
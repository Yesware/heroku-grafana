/*! grafana - v2.5.0 - 2015-10-28
 * Copyright (c) 2015 Torkel Ödegaard; Licensed Apache-2.0 */

define(["angular","app/app","lodash","config","app/components/panelmeta"],function(a,b,c,d,e){"use strict";var f=a.module("grafana.panels.dashlist",[]);b.useModule(f),f.directive("grafanaPanelDashlist",function(){return{controller:"DashListPanelCtrl",templateUrl:"app/panels/dashlist/module.html"}}),f.controller("DashListPanelCtrl",["$scope","panelSrv","backendSrv",function(a,b,d){a.panelMeta=new e({panelName:"Dashboard list",editIcon:"fa fa-star",fullscreen:!0}),a.panelMeta.addEditorTab("Options","app/panels/dashlist/editor.html");var f={mode:"starred",query:"",limit:10,tags:[]};a.modes=["starred","search"],c.defaults(a.panel,f),a.dashList=[],a.init=function(){b.init(a),a.panel.tag&&(a.panel.tags=[a.panel.tag],delete a.panel.tag),a.isNewPanel()&&(a.panel.title="Starred Dashboards")},a.refreshData=function(){var b={limit:a.panel.limit};return"starred"===a.panel.mode?b.starred="true":(b.query=a.panel.query,b.tag=a.panel.tags),d.search(b).then(function(b){a.dashList=b,a.panelRenderingComplete()})},a.init()}])});
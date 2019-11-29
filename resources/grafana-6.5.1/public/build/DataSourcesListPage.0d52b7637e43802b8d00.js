(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{"3/ef":function(e,t,a){"use strict";var r=a("mrSG"),n=a("q1tI"),o=a.n(n),c=a("TSYQ"),u=a.n(c),s=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return Object(r.__extends)(t,e),t.prototype.render=function(){var e=this.props.dataSource;return o.a.createElement("li",{className:"card-item-wrapper"},o.a.createElement("a",{className:"card-item",href:"datasources/edit/"+e.id},o.a.createElement("div",{className:"card-item-header"},o.a.createElement("div",{className:"card-item-type"},e.type)),o.a.createElement("div",{className:"card-item-body"},o.a.createElement("figure",{className:"card-item-figure"},o.a.createElement("img",{src:e.typeLogoUrl,alt:e.name})),o.a.createElement("div",{className:"card-item-details"},o.a.createElement("div",{className:"card-item-name","aria-label":"Data source list item for "+e.name},e.name,e.isDefault&&o.a.createElement("span",{className:"btn btn-secondary btn-small card-item-label"},"default")),o.a.createElement("div",{className:"card-item-sub-name"},e.url)))))},t}(n.PureComponent),i=a("Wu7z"),d=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return Object(r.__extends)(t,e),t.prototype.render=function(){var e=this.props,t=e.dataSources,a=e.layoutMode,r=u()({"card-section":!0,"card-list-layout-grid":a===i.a.Grid,"card-list-layout-list":a===i.a.List});return o.a.createElement("section",{className:r},o.a.createElement("ol",{className:"card-list"},t.map(function(e,t){return o.a.createElement(s,{dataSource:e,key:e.id+"-"+t})})))},t}(n.PureComponent);t.a=d},"6jYb":function(e,t,a){"use strict";var r=a("mrSG"),n=a("q1tI"),o=a.n(n),c=a("Wu7z"),u=a("EKT6"),s=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return Object(r.__extends)(t,e),t.prototype.render=function(){var e=this.props,t=e.searchQuery,a=e.layoutMode,n=e.onSetLayoutMode,s=e.linkButton,i=e.setSearchQuery,d=e.target,l={href:s.href};return d&&(l.target=d),o.a.createElement("div",{className:"page-action-bar"},o.a.createElement("div",{className:"gf-form gf-form--grow"},o.a.createElement(u.a,{labelClassName:"gf-form--has-input-icon",inputClassName:"gf-form-input width-20",value:t,onChange:i,placeholder:"Filter by name or type"}),o.a.createElement(c.b,{mode:a,onLayoutModeChanged:function(e){return n(e)}})),o.a.createElement("div",{className:"page-action-bar__spacer"}),o.a.createElement("a",Object(r.__assign)({className:"btn btn-primary"},l),s.title))},t}(n.PureComponent);t.a=s},frIo:function(e,t,a){"use strict";a.d(t,"d",function(){return r}),a.d(t,"c",function(){return n}),a.d(t,"a",function(){return o}),a.d(t,"b",function(){return c}),a.d(t,"g",function(){return u}),a.d(t,"f",function(){return s}),a.d(t,"e",function(){return i});var r=function(e){var t=new RegExp(e.searchQuery,"i");return e.dataSources.filter(function(e){return t.test(e.name)||t.test(e.database)})},n=function(e){var t=new RegExp(e.dataSourceTypeSearchQuery,"i");return e.dataSourceTypes.filter(function(e){return t.test(e.name)})},o=function(e,t){return e.dataSource.id===parseInt(t,10)?e.dataSource:{}},c=function(e,t){return e.dataSourceMeta.id===t?e.dataSourceMeta:{}},u=function(e){return e.searchQuery},s=function(e){return e.layoutMode},i=function(e){return e.dataSourcesCount}},rouV:function(e,t,a){"use strict";a.r(t),function(e){a.d(t,"DataSourcesListPage",function(){return y});var r=a("mrSG"),n=a("q1tI"),o=a.n(n),c=a("/MKj"),u=a("0cfB"),s=a("ZGyg"),i=a("6jYb"),d=a("QQVG"),l=a("3/ef"),m=a("5BCB"),f=a("lzJ5"),p=a("frIo"),h={title:"There are no data sources defined yet",buttonIcon:"gicon gicon-datasources",buttonLink:"datasources/new",buttonTitle:"Add data source",proTip:"You can also define data sources through configuration files.",proTipLink:"http://docs.grafana.org/administration/provisioning/#datasources?utm_source=grafana_ds_list",proTipLinkTitle:"Learn more",proTipTarget:"_blank"},y=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return Object(r.__extends)(t,e),t.prototype.componentDidMount=function(){this.fetchDataSources()},t.prototype.fetchDataSources=function(){return Object(r.__awaiter)(this,void 0,void 0,function(){return Object(r.__generator)(this,function(e){switch(e.label){case 0:return[4,this.props.loadDataSources()];case 1:return[2,e.sent()]}})})},t.prototype.render=function(){var e=this.props,t=e.dataSources,a=e.dataSourcesCount,n=e.navModel,c=e.layoutMode,u=e.searchQuery,m=e.setDataSourcesSearchQuery,f=e.setDataSourcesLayoutMode,p=e.hasFetched;return o.a.createElement(s.a,{navModel:n},o.a.createElement(s.a.Contents,{isLoading:!p},o.a.createElement(o.a.Fragment,null,p&&0===a&&o.a.createElement(d.a,Object(r.__assign)({},h)),p&&a>0&&[o.a.createElement(i.a,{layoutMode:c,searchQuery:u,onSetLayoutMode:function(e){return f(e)},setSearchQuery:function(e){return m(e)},linkButton:{href:"datasources/new",title:"Add data source"},key:"action-bar"}),o.a.createElement(l.a,{dataSources:t,layoutMode:c,key:"list"})])))},t}(n.PureComponent);var b={loadDataSources:m.j,setDataSourcesSearchQuery:m.n,setDataSourcesLayoutMode:m.m};t.default=Object(u.hot)(e)(Object(c.connect)(function(e){return{navModel:Object(f.a)(e.navIndex,"datasources"),dataSources:Object(p.d)(e.dataSources),layoutMode:Object(p.f)(e.dataSources),dataSourcesCount:Object(p.e)(e.dataSources),searchQuery:Object(p.g)(e.dataSources),hasFetched:e.dataSources.hasFetched}},b)(y))}.call(this,a("3UD+")(e))}}]);
//# sourceMappingURL=DataSourcesListPage.0d52b7637e43802b8d00.js.map
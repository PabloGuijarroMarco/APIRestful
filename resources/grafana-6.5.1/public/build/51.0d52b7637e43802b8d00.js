(window.webpackJsonp=window.webpackJsonp||[]).push([[51],{EZhu:function(e,a,n){"use strict";var t=n("mrSG"),r=n("q1tI"),o=n.n(r),s=n("ZFWI"),l=n("kDLi"),c=Object(r.forwardRef)(function(e,a){return o.a.createElement(o.a.Fragment,null,o.a.createElement(l.FormLabel,{className:"width-8"},e.label),o.a.createElement(l.Input,{className:"gf-form-input max-width-22",type:"password",onChange:function(a){return e.onChange(a.target.value)},value:e.value}))});n.d(a,"a",function(){return i});var i=function(e){function a(){var a=null!==e&&e.apply(this,arguments)||this;return a.state={oldPassword:"",newPassword:"",confirmNew:""},a.onOldPasswordChange=function(e){a.setState({oldPassword:e})},a.onNewPasswordChange=function(e){a.setState({newPassword:e})},a.onConfirmPasswordChange=function(e){a.setState({confirmNew:e})},a.onSubmitChangePassword=function(e){e.preventDefault(),a.props.onChangePassword(Object(t.__assign)({},a.state))},a}return Object(t.__extends)(a,e),a.prototype.render=function(){var e=this.state,a=e.oldPassword,n=e.newPassword,t=e.confirmNew,r=this.props.isSaving,i=s.b.ldapEnabled,u=s.b.authProxyEnabled;return i||u?o.a.createElement("p",null,"You cannot change password when ldap or auth proxy authentication is enabled."):o.a.createElement("form",{name:"userForm",className:"gf-form-group"},o.a.createElement("div",{className:"gf-form max-width-30"},o.a.createElement(c,{label:"Old Password",onChange:this.onOldPasswordChange,value:a})),o.a.createElement("div",{className:"gf-form max-width-30"},o.a.createElement(c,{label:"New Password",onChange:this.onNewPasswordChange,value:n})),o.a.createElement("div",{className:"gf-form max-width-30"},o.a.createElement(c,{label:"Confirm Password",onChange:this.onConfirmPasswordChange,value:t})),o.a.createElement("div",{className:"gf-form-button-row"},o.a.createElement(l.Button,{variant:"primary",onClick:this.onSubmitChangePassword,disabled:r},"Change Password"),o.a.createElement(l.LinkButton,{variant:"transparent",href:s.b.appSubUrl+"/profile"},"Cancel")))},a}(r.PureComponent)},PEdC:function(e,a,n){"use strict";n.r(a),function(e){n.d(a,"ChangePasswordPage",function(){return m});var t=n("mrSG"),r=n("q1tI"),o=n.n(r),s=n("0cfB"),l=n("/MKj"),c=n("lzJ5"),i=n("V9sw"),u=n("ZGyg"),d=n("EZhu"),m=function(e){function a(){return null!==e&&e.apply(this,arguments)||this}return Object(t.__extends)(a,e),a.prototype.render=function(){var e=this.props.navModel;return o.a.createElement(u.a,{navModel:e},o.a.createElement(i.a,null,function(e,a){var n=e.changePassword;return o.a.createElement(u.a.Contents,null,o.a.createElement("h3",{className:"page-sub-heading"},"Change Your Password"),o.a.createElement(d.a,{onChangePassword:n,isSaving:a.changePassword}))}))},a}(r.PureComponent);a.default=Object(s.hot)(e)(Object(l.connect)(function(e){return{navModel:Object(c.a)(e.navIndex,"change-password")}},{})(m))}.call(this,n("3UD+")(e))}}]);
//# sourceMappingURL=51.0d52b7637e43802b8d00.js.map
(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{"0jlH":function(p,m,_){"use strict";_.r(m);var E=_("fWQN"),c=_("mtLc"),O=_("yKVA"),D=_("879j"),M=_("q1tI"),o=_.n(M),h=_("/MKj"),v=_("95SA"),P=_("Ty5D"),u=_("s4NR"),L=_.n(u),y=_("c+yx"),f=function(s){Object(O.a)(e,s);var i=Object(D.a)(e);function e(){var a;Object(E.a)(this,e);for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return a=i.call.apply(i,[this].concat(n)),a.state={isReady:!1},a}return Object(c.a)(e,[{key:"componentDidMount",value:function(){this.setState({isReady:!0});var t=this.props.dispatch;t&&t({type:"user/fetchCurrent"})}},{key:"render",value:function(){var t=this.state.isReady,n=this.props,r=n.children,C=n.loading,d=n.currentUser,l=y.b?!0:d&&d.userid,R=Object(u.stringify)({redirect:window.location.href});return!l&&C||!t?o.a.createElement(v.a,null):l?r:o.a.createElement(P.c,{to:"/user/login?".concat(R)})}}]),e}(o.a.Component);m.default=Object(h.c)(function(s){var i=s.user,e=s.loading;return{currentUser:i.currentUser,loading:e.models.user}})(f)}}]);
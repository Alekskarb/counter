(window.webpackJsonptesting=window.webpackJsonptesting||[]).push([[0],{13:function(t,e,a){},14:function(t,e,a){},15:function(t,e,a){"use strict";a.r(e);var n=a(0),s=a.n(n),i=a(2),l=a.n(i),u=(a(13),a(3)),r=a(4),c=a(6),o=a(5),h=a(7),S=(a(14),function(t){return s.a.createElement("div",{className:"input"},s.a.createElement("span",null,"max value"),s.a.createElement("div",null,s.a.createElement("input",{type:"number",onChange:function(e){var a=e.currentTarget.value;t.setMaxValue(a)},value:t.maxData,className:t.invalidMaxValue})),s.a.createElement("span",null,"start value"),s.a.createElement("div",null,s.a.createElement("input",{type:"number",onChange:function(e){var a=Number(e.currentTarget.value);t.setStartValue(a)},value:t.startData,className:t.invalidStartValue})))}),m=function(t,e){return s.a.createElement("div",{className:t.invalidDisplayValues},t.setSwitch?s.a.createElement("h1",null,t.startDisplay," "):"enter values")},w=function(t){return s.a.createElement("div",{className:"button"},s.a.createElement("button",{disabled:t.switch,onClick:t.setData},t.title))},p=function(t){function e(t){var a;return Object(u.a)(this,e),(a=Object(c.a)(this,Object(o.a)(e).call(this,t))).newStartValue=0,a.setStartValue=function(t){t<=0||t>a.state.maxValue?a.setState({StartInputSwitch:!0}):a.setState({startValue:t,StartInputSwitch:!1})},a.setMaxValue=function(t){a.state.maxValue>=0&&a.state.maxValue!==a.state.startValue?a.setState({maxValue:t}):a.setState({MaxInputSwitch:!0})},a.setValue=function(){a.setState({StartInputSwitch:!0,MaxInputSwitch:!0,upSwitch:!1,resetSwitch:!1,setSwitch:!0,newStartValue:a.state.startValue})},a.saveState=function(t){localStorage.setItem("state",JSON.stringify(t))},a.addValue=function(t){a.state.newStartValue<a.state.maxValue?a.setState({newStartValue:Number(a.state.newStartValue)+1,upSwitch:!1,invalidDisplayValues:!1}):a.setState({upSwitch:!0,invalidDisplayValues:!0})},a.deleteValue=function(){a.setState({newStartValue:a.state.startValue,resetSwitch:!0,upSwitch:!0,StartInputSwitch:!1,MaxInputSwitch:!1,setSwitch:!1,invalidDisplayValues:!1})},a.state={startValue:1,maxValue:5,StartInputSwitch:!1,MaxInputSwitch:!1,upSwitch:!0,resetSwitch:!0,setSwitch:!1,invalidDisplayValues:!1},a}return Object(h.a)(e,t),Object(r.a)(e,[{key:"componentDidMount",value:function(){this.saveState()}},{key:"render",value:function(){var t=this.state.MaxInputSwitch?"maxError":"",e=this.state.StartInputSwitch?"startError":"",a=this.state.invalidDisplayValues?"displayError":"";return s.a.createElement("div",{className:"wrapper"},s.a.createElement("div",{className:"menu"},s.a.createElement(S,{setStartValue:this.setStartValue,setMaxValue:this.setMaxValue,startData:this.state.startValue,maxData:this.state.maxValue,invalidMaxValue:t,invalidStartValue:e}),s.a.createElement(w,{setData:this.setValue,title:"SET",switch:this.state.setSwitch})),s.a.createElement("div",{className:"display"},s.a.createElement(m,{startDisplay:this.state.newStartValue,setSwitch:this.state.setSwitch,invalidDisplayValues:a}),s.a.createElement(w,{setData:this.addValue,title:"UP",switch:this.state.upSwitch}),s.a.createElement(w,{setData:this.deleteValue,title:"RESET",switch:this.state.resetSwitch})))}}]),e}(s.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(s.a.createElement(p,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()}))},8:function(t,e,a){t.exports=a(15)}},[[8,1,2]]]);
//# sourceMappingURL=main.3494e8d6.chunk.js.map
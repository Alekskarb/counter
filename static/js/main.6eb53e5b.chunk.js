(window.webpackJsonptesting=window.webpackJsonptesting||[]).push([[0],{13:function(t,e,a){},14:function(t,e,a){},15:function(t,e,a){"use strict";a.r(e);var n=a(0),s=a.n(n),i=a(2),l=a.n(i),u=(a(13),a(3)),r=a(4),c=a(6),o=a(5),m=a(7),S=(a(14),function(t){return s.a.createElement("div",{className:"input"},s.a.createElement("span",null,"max value"),s.a.createElement("div",null,s.a.createElement("input",{type:"number",onChange:function(e){var a=e.currentTarget.value;t.setMaxValue(a)},value:t.maxData,className:t.invalidValue})),s.a.createElement("br",null),s.a.createElement("span",null,"start value"),s.a.createElement("div",null,s.a.createElement("input",{type:"number",onChange:function(e){var a=Number(e.currentTarget.value);t.setStartValue(a)},value:t.startData,className:t.invalidValue})),s.a.createElement("button",{onClick:t.setValue,disabled:t.isButtonSetDisabled},"Set"))}),d=function(t){return s.a.createElement("div",{className:"display"},t.isDataSet?s.a.createElement("h1",null,t.startDisplay," "):"enter values")},h=function(t){return s.a.createElement("div",{className:"set"},s.a.createElement("button",{disabled:t.switch,onClick:t.setData},t.title))},V=function(t){function e(t){var a;return Object(u.a)(this,e),(a=Object(c.a)(this,Object(o.a)(e).call(this,t))).setStartValue=function(t){t<=0||t>=a.state.maxValue?a.setState({inputSwitch:!0}):a.setState({startValue:t,inputSwitch:!1})},a.setMaxValue=function(t){a.state.maxValue!==a.state.startValue&&a.state.maxValue>0?a.setState({maxValue:t}):a.setState({inputSwitch:!0})},a.setValue=function(){a.setState({inputSwitch:!0,buttonSwitch:!1,isButtonSetDisabled:!0,isDataSet:!0,newStartValue:a.state.startValue})},a.saveState=function(t){localStorage.setItem("state",JSON.stringify(t))},a.addValue=function(t){a.state.newStartValue<a.state.maxValue?a.setState({newStartValue:Number(a.state.newStartValue)+1,buttonSwitch:!1}):a.setState({buttonSwitch:!0})},a.deleteValue=function(){a.setState({newStartValue:a.state.startValue,buttonSwitch:!0})},a.activateEditMode=function(){a.setState({buttonSwitch:!0})},a.deactivatedEditMode=function(){a.state.newStartValue===a.state.maxValue&&a.setState({buttonSwitch:!1})},a.state={startValue:1,maxValue:5,newStartValue:0,title:["SET","UP","RESET"],buttonSwitch:!1,inputSwitch:!1,isDataSet:!1,isButtonSetDisabled:!1},a}return Object(m.a)(e,t),Object(r.a)(e,[{key:"componentDidMount",value:function(){this.saveState()}},{key:"render",value:function(){var t=this.state.inputSwitch?"mistake":"";return s.a.createElement("div",{className:"wrapper"},s.a.createElement("div",{className:"menu"},s.a.createElement(S,{setStartValue:this.setStartValue,setMaxValue:this.setMaxValue,startData:this.state.startValue,maxData:this.state.maxValue,invalidValue:t,setValue:this.setValue,isButtonSetDisabled:this.state.isButtonSetDisabled})),s.a.createElement("div",{className:"display"},s.a.createElement(d,{startDisplay:this.state.newStartValue,isDataSet:this.state.isDataSet}),s.a.createElement("div",{className:"button"},s.a.createElement("span",null,s.a.createElement(h,{setData:this.addValue,title:this.state.title[1],switch:this.state.buttonSwitch,isButtonSetDisabled:this.state.isButtonSetDisabled})),s.a.createElement("span",null,s.a.createElement(h,{setData:this.deleteValue,title:this.state.title[2],switch:this.state.buttonSwitch,isButtonSetDisabled:this.state.isButtonSetDisabled})))))}}]),e}(s.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(s.a.createElement(V,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()}))},8:function(t,e,a){t.exports=a(15)}},[[8,1,2]]]);
//# sourceMappingURL=main.6eb53e5b.chunk.js.map
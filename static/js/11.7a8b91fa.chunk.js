(this["webpackJsonpreact-picture"]=this["webpackJsonpreact-picture"]||[]).push([[11],{324:function(e,n,r){"use strict";r.r(n);var t=r(166),a=r(2),s=r(16),i=(r(0),r(72)),o=r(327),c=r(329),u=r(148),l=r(17),d=r(8);function j(){var e=Object(s.a)(["\n  margin-left: 90px;\n  button {\n    border: none;\n    background: #fff;\n    color: #007bff;\n    outline: none;\n    cursor: pointer;\n    padding: 0;\n  }\n"]);return j=function(){return e},e}function b(){var e=Object(s.a)(["\n  text-align: center;\n"]);return b=function(){return e},e}function p(){var e=Object(s.a)(["\n  max-width: 600px;\n  margin: 30px auto;\n  box-shadow: 0 4px 14px 3px rgba(0,0,0,0.2);\n  border-radius: 4px;\n  padding: 20px;\n"]);return p=function(){return e},e}var m=l.a.div(p()),f=l.a.h1(b()),h=l.a.p(j()),x={labelCol:{span:6},wrapperCol:{span:16}},O={wrapperCol:{offset:11,span:13}};n.default=function(){var e=Object(d.f)(),n=Object(i.a)().AuthStore,r={username:function(e,n){return n.length<4||n.length>12?Promise.reject("\u7528\u6237\u540d\u957f\u5ea6\u53ea\u80fd\u4e3a4~12\u4e2a\u5b57\u7b26"):/^[0-9a-zA-Z_]+$/.test(n)?Promise.resolve():Promise.reject("\u7528\u6237\u540d\u53ea\u80fd\u7531\u6570\u5b57\u3001\u5b57\u6bcd\u548c\u4e0b\u5212\u7ebf\u7ec4\u6210")},password:function(e,n){return n.length<6?Promise.reject("\u5bc6\u7801\u6700\u5c0f\u957f\u5ea6\u4e3a6"):n.length>16?Promise.reject("\u5bc6\u7801\u6700\u5927\u957f\u5ea6\u4e3a16"):Promise.resolve()}};return Object(a.jsxs)(m,{children:[Object(a.jsx)(f,{children:"\u6ce8\u518c"}),Object(a.jsxs)(o.a,Object(t.a)(Object(t.a)({},x),{},{name:"basic",initialValues:{remember:!0},onFinish:function(r){n.setUsername(r.username),n.setPassword(r.password),n.register().then((function(){e.push("/login")})).catch((function(){console.log("\u6ce8\u518c\u5931\u8d25\uff0c\u4ec0\u4e48\u90fd\u4e0d\u505a")}))},onFinishFailed:function(e){console.log("Failed:",e)},children:[Object(a.jsx)(o.a.Item,{label:"\u7528\u6237\u540d",name:"username",rules:[{required:!0,message:"\u8bf7\u8f93\u5165\u7528\u6237\u540d\uff01"},{validator:r.username}],children:Object(a.jsx)(c.a,{})}),Object(a.jsx)(o.a.Item,{label:"\u5bc6\u7801",name:"password",rules:[{required:!0,message:"\u8bf7\u8f93\u5165\u5bc6\u7801\uff01"},{validator:r.password}],children:Object(a.jsx)(c.a.Password,{})}),Object(a.jsx)(o.a.Item,{label:"\u786e\u8ba4\u5bc6\u7801",name:"confirmPassword",rules:[{required:!0,message:"\u8bf7\u518d\u6b21\u8f93\u5165\u5bc6\u7801\uff01"},function(e){var n=e.getFieldValue;return{validator:function(e,r){return n("password")===r?Promise.resolve():Promise.reject("\u4e24\u6b21\u8f93\u5165\u5bc6\u7801\u4e0d\u4e00\u81f4")}}}],children:Object(a.jsx)(c.a.Password,{})}),Object(a.jsxs)(h,{children:["\u5df2\u7ecf\u6709\u8d26\u53f7\uff1f",Object(a.jsx)("button",{onClick:function(){e.push("/login")},children:"\u767b\u5f55"})]}),Object(a.jsx)(o.a.Item,Object(t.a)(Object(t.a)({},O),{},{children:Object(a.jsx)(u.a,{type:"primary",htmlType:"submit",children:"\u63d0\u4ea4"})}))]}))]})}}}]);
//# sourceMappingURL=11.7a8b91fa.chunk.js.map
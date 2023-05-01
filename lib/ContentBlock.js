"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const sitecore_jss_react_1 = require("@sitecore-jss/sitecore-jss-react");
const ContentBlock = (props) => {
    return ((0, jsx_runtime_1.jsx)("div", { children: (0, jsx_runtime_1.jsx)(sitecore_jss_react_1.RichText, { field: props.content }) }));
};

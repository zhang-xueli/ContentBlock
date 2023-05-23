"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NoImage = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const sitecore_jss_react_1 = require("@sitecore-jss/sitecore-jss-react");
const Content_types_1 = require("./Content.types");
const Content = (props) => {
    const hasImage = !!props.image;
    const imageContainerClass = hasImage &&
        (props.imagePosition == Content_types_1.ContentImagePosition.Top ||
            props.imagePosition == Content_types_1.ContentImagePosition.Bottom)
        ? "col-12"
        : "col-6";
    const contentContainerClass = imageContainerClass;
    return ((0, jsx_runtime_1.jsxs)("div", Object.assign({ className: "content row" }, { children: [hasImage &&
                (props.imagePosition == Content_types_1.ContentImagePosition.Top ||
                    props.imagePosition == Content_types_1.ContentImagePosition.Left) ? ((0, jsx_runtime_1.jsx)("div", Object.assign({ className: imageContainerClass }, { children: (0, jsx_runtime_1.jsx)(sitecore_jss_react_1.Image, { field: props.image }) }))) : null, (0, jsx_runtime_1.jsx)("div", Object.assign({ className: contentContainerClass }, { children: (0, jsx_runtime_1.jsx)(sitecore_jss_react_1.RichText, { field: props.content }) })), hasImage &&
                (props.imagePosition == Content_types_1.ContentImagePosition.Bottom ||
                    props.imagePosition == Content_types_1.ContentImagePosition.Right) ? ((0, jsx_runtime_1.jsx)("div", Object.assign({ className: imageContainerClass }, { children: (0, jsx_runtime_1.jsx)(sitecore_jss_react_1.Image, { field: props.image }) }))) : null] })));
};
exports.default = Content;
const NoImage = (props) => {
    return ((0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsx)("h1", { children: "No Image" }), (0, jsx_runtime_1.jsx)(sitecore_jss_react_1.RichText, { field: props.content })] }));
};
exports.NoImage = NoImage;

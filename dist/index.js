"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const blocks_1 = require("./blocks");
const WPGBlocks = ({ blocks, loader = exports.WPGBlockLoader, mapToBlock }) => {
    return (React.createElement("div", { className: "wpg-blocks" }, blocks.filter(block => !!block.blockName).map(block => React.createElement(exports.WPGBlock, { block: block, loader: loader, mapToBlock: mapToBlock }))));
};
exports.WPGBlock = ({ block, loader, mapToBlock }) => {
    const { blockName, attrs, innerBlocks, innerHTML } = block;
    if (!blockName)
        return null;
    let TheBlock = mapToBlock ? mapToBlock(blockName) : null;
    if (!TheBlock)
        TheBlock = blocks_1.GetTheBlock(blockName);
    if (!TheBlock)
        return null;
    return (React.createElement(React.Suspense, { fallback: loader },
        React.createElement(TheBlock, { blockName: blockName, attrs: attrs, innerBlocks: innerBlocks, innerHTML: innerHTML })));
};
exports.WPGBlockLoader = () => {
    return (React.createElement("div", { className: "wpg-block__loader" }, "Loading..."));
};
exports.default = WPGBlocks;
//# sourceMappingURL=index.js.map
const t = require('@babel/core').types;

module.exports = () => {
  return {
    visitor: {
      BinaryExpression(path) {
        if (!path.isBinaryExpression({ operator: '|' })) return;

        const isInContainer = path.findParent(({ node }) => {
          return t.isJSXExpressionContainer(node);
        });

        if (!isInContainer) return;

        path.replaceWith(
          t.callExpression(path.node.right, [ path.node.left ])
        );
      }
    },
  }
};

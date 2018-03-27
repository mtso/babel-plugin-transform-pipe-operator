import { types as t } from '@babel/core';

const isInContainer = ({ node }) => t.isJSXExpressionContainer(node);

module.exports = () => {
  return {
    visitor: {
      BinaryExpression(path) {
        if (!path.isBinaryExpression({ operator: '|' })) return;
        if (!path.findParent(isInContainer)) return;

        path.replaceWith(
          t.callExpression(path.node.right, [ path.node.left ])
        );
      },
    },
  };
};

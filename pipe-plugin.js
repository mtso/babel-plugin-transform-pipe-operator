const babelCore = require('@babel/core');
const t = babelCore.types;

module.exports = () => {
  return {
    visitor: {
      // jsxExpressionContainer
      // JSXExpressionContainer(path) {
      //   if (path.node.expression.type === 'BinaryExpression') {
      //     console.log(Object.getOwnPropertyNames(path))
      //     console.log(path.node)
      //     // console.log(path.node.expression)

      //     // const expr = path.get('node').get('expression');

      //     // console.log(expr.isBinaryExpression
      //     //   ? path.isBinaryExpression({ operator: '|' })
      //     //   : 'NO FUNC')
      //     // console.log(path.node.expression.type) //.isBinaryExpression({ operator: '| '}))

      //   }
      //   // if (path.node.expression) {
      //   // }
      //   // console.log(path.node.expression.isBinaryExpression({ operator: '| '}))
      //   // console.log('VALUE', path.node.value)
      // },

      BinaryExpression(path) {
        if (!path.isBinaryExpression({ operator: '|' })) return;

        const exprContainer = path.findParent(({ node }) => {
          return node.type === 'JSXExpressionContainer';
        });

        const isInContainer = !!exprContainer;

        if (!isInContainer) return;

        path.replaceWith(
          t.callExpression(
            path.node.right,
            [path.node.left]
          )
        )

        // const pipeExpr = path.findParent(({ node }) => {
        //   if (node.type === 'FunctionExpression') {
        //     console.log(Object.keys(node))
        //     console.log(node);
        //   }
        //   return node.type === 'FunctionExpression';
        //   // console.log(node.type, node.name)
        //   // return node.type === 'CallExpression' && node.name === 'capitalize'
        // })

        // console.log(pipeExpr.node)

        // const rightPath = path.get('right');
        // console.log('RIGHT', rightPath.node)
        // console.log('LEFT', path.node.left)

        // path.replaceWith(
        //   t.callExpression(
        //     pipeExpr,
        //     t.arrayExpression([path.node.left])
        //   )
        // )
        // // rightPath.assertCallExpression();
        // // rightPath.node.arguments.unshift(path.node.left);
        // // path.replaceWith(rightPath);
  
        // // path.replaceWith(
        // //   t.callExpression(
        // //     t.memberExpression()
        // //     , [path.node.left.name])
        // // )
        // console.log(exprContainer.node)

        // console.log(path.isBinaryExpression({ operator: '|' }))
      }
    },
  }
}
module.exports = {
  meta: {
    docs: {
      description: "Exports should be commented",
    },
    messages: {
      jsdocComment: "Export comments should use JSDoc style (/** ... */)",
      uncommentedExport: "Export must be commented",
    },
    type: "suggestion",
  },
  create(context) {
    /** Get comment linked to location */
    function getComment(comments, loc) {
      let matchingComment;
      const targetLineEnd = loc.end.line;
      for (const comment of comments) {
        const commentEnd = comment.loc.end.line;
        if (commentEnd === targetLineEnd - 1) {
          return comment.value;
        }
      }
      return matchingComment;
    }

    return {
      "ExportDefaultDeclaration, ExportNamedDeclaration"(node) {
        const comment = getComment(node.parent.comments, node.loc);
        if (!comment) {
          context.report({ node, messageId: "uncommentedExport" });
        } else if (comment !== "* Comment ") {
          context.report({ node, messageId: "jsdocComment" });
        }
      },
    };
  },
};

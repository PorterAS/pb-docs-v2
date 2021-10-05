/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/browser-apis/
 */

// You can delete this file if you're not using it
import React from "react"
import { MDXProvider } from "@mdx-js/react"
import Highlight, { defaultProps } from "prism-react-renderer"

const MyTable = ({ children, ...rest }) => (
  <div
    style={{
      overflowX: "auto",
      borderRadius: "5px",
      border: "1px solid rgba(102, 51, 153, 0.2)",
      padding: "3px 3px",
    }}
    {...rest}
  >
    <table>{children}</table>
  </div>
)
/* eslint-disable */
const component = {
  pre: props => {
    const className = props.children.props.className || ""
    const matches = className.match(/language-(?<lang>.*)/)
    return (
      <Highlight
        {...defaultProps}
        code={props.children.props.children}
        language={
          matches && matches.groups && matches.groups.lang
            ? matches.groups.lang
            : ""
        }
      >
        {({ className, style, tokens, getLineProps, getTokenProps }) => (
          <pre className={className} style={style}>
            {tokens.map((line, i) => (
              <div {...getLineProps({ line, key: i })}>
                {line.map((token, key) => (
                  <span {...getTokenProps({ token, key })} />
                ))}
              </div>
            ))}
          </pre>
        )}
      </Highlight>
    )
  },
  table: MyTable,
}
export const wrapRootElement = ({ element }) => {
  return <MDXProvider components={component}>{element}</MDXProvider>
}

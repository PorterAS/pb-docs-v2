/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/browser-apis/
 */

// You can delete this file if you're not using it
import React from "react"
import { MDXProvider } from "@mdx-js/react"
import Highlight, { defaultProps } from "prism-react-renderer"
import { extendTheme, ChakraProvider } from "@chakra-ui/react"


const colors = {
  main: "#661AFF",
  secondary: "#F9F6FF",
  white: "#FFFFFF",
  grey: "#F7F7F7",
  black: "#00261D",
  red: "#FF5500",
}
const theme = extendTheme({colors})

const MyTable = ({ children, ...rest }) => {
  return (
    <div
      style={{
        overflowX: "auto",
        borderRadius: "5px",
        border: "1px solid rgba(102, 51, 153, 0.2)",
        marginBottom: "10px",
      }}
      {...rest}
    >
      <table>{children}</table>
    </div>
  )
}

const TableData = ({ children, ...rest }) => (
  <td {...rest} style={{ padding: "10px", fontSize: "0.9em" }}>
    {children}
  </td>
)

const TableHead = ({ children, ...rest }) => (
  <th {...rest} style={{ padding: "10px", fontSize: "0.9em" }}>
    {children}
  </th>
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
          <pre className={className} style={{ ...style, maxHeight: "700px" }}>
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
  td: TableData,
  th: TableHead,
}
export const wrapRootElement = ({ element }) => {
  return (<ChakraProvider theme={theme}><MDXProvider components={component}>{element}</MDXProvider></ChakraProvider>)
}

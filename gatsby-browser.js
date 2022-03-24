/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/browser-apis/
 */

// You can delete this file if you're not using it
import React from "react"
import { MDXProvider } from "@mdx-js/react"
import Highlight, { defaultProps } from "prism-react-renderer"

function makeId(text) {
  // Check if data passed is a string or a an object with type - due to a parent
  const rawText = typeof text == "string" ? text : text.props.children

  let transformedText = rawText
    .toLowerCase()
    .replace(/[^a-zA-Z0-9 ]/g, "")
    .trim()
    .split(" ")
    .filter(n => n)
    .join("-")
  return transformedText
}

const HeadingWithID = ({ children, ...rest }) => {
  // Fetch the URL from the browser
  const url = typeof window !== "undefined" ? window.location.href : ""
  const [urlWithoutParam] = url.split("#")

  // construct the ID
  const id = makeId(children)
  return (
    <a href={`${urlWithoutParam}#${id}`} style={{ textDecoration: "none" }}>
      <h2 id={id}>{children}</h2>
    </a>
  )
}

const colors = {
  main: "#661AFF",
  secondary: "#F9F6FF",
  white: "#FFFFFF",
  grey: "#F7F7F7",
  black: "#00261D",
  red: "#FF5500",
}

const MyTable = ({ children, ...rest }) => {
  return (
    <div
      style={{
        overflowX: "auto",
        borderRadius: "5px",
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
  h2: HeadingWithID,
}
export const wrapRootElement = ({ element }) => {
  return (
    <MDXProvider components={component}>
      <div style={{ fontFamily: "Dazzed" }}>{element}</div>
    </MDXProvider>
  )
}

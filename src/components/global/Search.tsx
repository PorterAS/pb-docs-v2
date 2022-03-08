import { Box, Input, Text } from "@chakra-ui/react"
import React, { useState } from "react"
import lunr from "lunr"
import { useLunr } from "react-lunr"
import { sidebarRoutes, SidebarRouteType } from "../../routes"

type SearchType = {
  query?: string
}
// const data = [
//   {
//     name: "William",
//     age: "26",
//     title: "William is a great guy and works at Porterbuddy",
//   },
//   { name: "Mia", age: "26", title: "Mia is a great guy and works at Wolt" },
// ]

// const store = {
//   1: { id: 1, title: "Document 1" },
//   2: { id: 2, title: "Document 2" },
//   3: { id: 3, title: "Document 3" },
// }

let parentData = []
for (const route of sidebarRoutes) {
  parentData.push({ title: route.group, route: route.parentPath })
}
console.log(parentData)

const index: SidebarRouteType[] = sidebarRoutes

var idx = lunr(function () {
  this.ref("group")
  this.field("parentPath")

  index.forEach(doc => {
    this.add(doc)
  }, this)
})

export const Search = ({ query }: SearchType): React.ReactElement => {
  const [searchQuery, setSearchQuery] = useState<string>("")

  try {
    // const results = useLunr("Porterbuddy", data, store)
    // console.log(results)

    // get an array of results
    let results = idx.search("get")

    // loop through the array
    const finalResult = results.map(_ref => {
      let found = _ref.ref
      // Filter the store using the ref
      return sidebarRoutes.filter(route => route.group == found)
    })
    console.log(results)

    console.log(finalResult)
  } catch (e) {
    console.log(e)
  }

  async function searchText(event: any): Promise<any> {
    await setSearchQuery(event.target.value)
  }

  return (
    <Box mb={"3em"}>
      <Text fontSize="2xl" fontWeight={"600"}>
        {query}
      </Text>
      <Input onChange={searchText} value={searchQuery} />
    </Box>
  )
}

import * as React from "react"
import {
  Box,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerOverlay,
  useDisclosure,
} from "@chakra-ui/react"
import { FiMenu } from "react-icons/fi"

export const MenuDrawer = ({ children }: any) => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <Box display={["block", "none", "none"]}>
      <Box onClick={onOpen} color={"#ffffff"}>
        <FiMenu fontSize={"2.5em"} />
      </Box>
      <Drawer placement={"right"} onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerBody>{children}</DrawerBody>
        </DrawerContent>
      </Drawer>
    </Box>
  )
}

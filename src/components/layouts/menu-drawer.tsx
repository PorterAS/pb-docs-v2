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
import { IoClose } from "react-icons/io5"

export const MenuDrawer = ({ children }: any) => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <Box display={["block", "none", "none"]}>
      {!isOpen && (
        <Box onClick={onOpen} color={"#ffffff"}>
          <FiMenu fontSize={"2.5em"} />
        </Box>
      )}
      {isOpen && (
        <Box onClick={onClose} color={"#ffffff"}>
          <IoClose fontSize={"2.5em"} />
        </Box>
      )}
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

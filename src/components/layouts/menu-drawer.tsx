import * as React from "react"
import {
  Box,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerOverlay,
  useDisclosure,
  VStack,
} from "@chakra-ui/react"
import { Link } from "gatsby"
import { FiMenu } from "react-icons/fi"

export const MenuDrawer = () => {
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
          <DrawerBody>
            <VStack spacing={10} fontSize={["lg", "lg", "sm"]} mt={5}>
              <Link to={"/api-reference/"}>API Reference</Link>
              <Link to={"/integrations/"}>Integrations</Link>
              <Link to={"/changelog/"}>Changelog</Link>
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Box>
  )
}

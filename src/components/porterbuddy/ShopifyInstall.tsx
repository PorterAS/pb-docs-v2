import {Box, Button, Input, Flex } from "@chakra-ui/react";
import React, {useState} from "react";
import { isBrowser } from "./PBScript";

export const ShopifyInstall = () => {
    const [storeName, setStoreName] = useState<string | undefined>(undefined)

    const updateStore = (e: React.ChangeEvent<HTMLInputElement>): void => {
        setStoreName(e.currentTarget.value)
    }

    function installShopifyApp():void {
        if(isBrowser()){
            let shopName = storeName;
            if (shopName && shopName !== '') {
              let backendUrl = "https://widget.porterbuddy.com".replace("widget", "api")
              window.open(`${backendUrl}/shopify/auth?shop=${shopName}.myshopify.com`, "_blank");
            }
        }
      }

    return (
        <Box p="10" borderWidth="1px" borderColor="#661AFF" borderRadius="5">
            <Flex justifyContent="center" alignItems="center">
                <Input type="text" value={storeName} onChange={updateStore} placeholder="Store name" size="sm" maxWidth="200"/>
                <span>.myshopify.com</span>
                <Button onClick={installShopifyApp} colorScheme='purple' size='sm' ml="10px">Install app</Button>
            </Flex>
        </Box>
    )
}


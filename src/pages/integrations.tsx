import * as React from "react"
import {
  Box,
  Center,
  Flex,
  Image,
  SimpleGrid,
  Text,
  Icon,
} from "@chakra-ui/react"
import Layout from "../components/layouts/docs-layout"
import SEO from "../components/seo"
import { Link } from "gatsby"
import ShopifyLogo from "../images/shopify-logo.png"
import WooCommerceLogo from "../images/woocommerce-logo.png"
import MagentoLogo from "../images/magento-logo.png"
import EpiserverLogo from "../images/episerver-logo.png"
import D365Logo from "../images/d-365.png"
import WebshipperLogo from "../images/webshipper-logo.png"
import UnifaunLogo from "../images/unifaun-logo.png"
import OngoingLogo from "../images/ongoing-logo.svg"
import ConsignorLogo from "../images/consignor-logo.png"
import { FaCircle, FaShoppingCart } from "react-icons/fa"
import { GiClothJar } from "react-icons/gi"

type PBIntegrationCardType = {
  title: string
  link: string
  icon?: React.ReactNode | any
}

const PBIntegrationCard = ({ title, link, icon }: PBIntegrationCardType) => {
  return (
    <Link to={link}>
      <Flex
        borderRadius={4}
        mb={3}
        p={[2, 4, 5]}
        minH={"100px"}
        alignItems={"center"}
        boxShadow={"0px 2px 4px rgba(0, 0, 0, 0.25)"}
        justifyContent={"center"}
      >
        <Icon as={icon} fontSize={"2em"}></Icon>
      </Flex>
      <Text fontWeight={"500"} textAlign="center">
        {title}
      </Text>
    </Link>
  )
}

type IntegrationCardType = {
  title: string
  link: string
  logo?: string
}
export const IntegrationCard = ({ title, link, logo }: IntegrationCardType) => {
  return (
    <Link to={link}>
      <Flex
        alignItems={"center"}
        justifyContent="center"
        borderRadius={7}
        p={[2, 4, 5]}
        mb={3}
        minH={"100px"}
        boxShadow={"0px 2px 4px rgba(0, 0, 0, 0.25)"}
      >
        <Box mr={2}>
          {logo && <Image src={logo} width={"55px"} alt={title} my={"auto"} />}
        </Box>
      </Flex>

      <Text fontWeight={"500"} textAlign="center">
        {title}
      </Text>
    </Link>
  )
}

const IntegrationsPage = () => {
  return (
    <Layout>
      <SEO
        title="Integrations"
        description={
          "Integrate your online store with Porterbuddy. Integrate with existing e-commerce applications"
        }
      />
      <Box>
        <Box mb={"4em"}>
          <Text fontSize="2xl" fontWeight={"600"} as={"h1"} mb={5}>
            Integrations
          </Text>
          <Text lineHeight={7}>
            Porterbuddy offers multiple integration options for new and existing
            e-commerce stores and order fulfillment systems.
          </Text>
          <Text>
            Integration systems include the Product card widget, checkout
            widget, unified shipping module, and numerous integrations with 3rd
            party systems.
          </Text>
        </Box>

        <Box mb={"4em"}>
          <Box mb={7}>
            <Text fontSize={"xl"} fontWeight={"600"} mb={5} color="#661aff">
              Porterbuddy Direct Integrations
            </Text>
            <Text lineHeight={7}>
              Porterbuddy offers standard integrations to multiple e-commerce
              storefront providers. Integrate your online store with Porterbuddy
              in minutes. With Porterbuddy direct integrations, you can show
              Porterbuddy availability in product pages and in checkout.
            </Text>
          </Box>
          <Box>
            <SimpleGrid columns={[2, 5, 5]} spacing={5}>
              <PBIntegrationCard
                link={"/product-card-widget/"}
                title={"Product Card Widget"}
                icon={GiClothJar}
              />
              <PBIntegrationCard
                link={"/checkout-widget/"}
                title={"Checkout Widget"}
                icon={FaShoppingCart}
              />
              <PBIntegrationCard
                link={"/usm/"}
                title={"Unified shipping module"}
                icon={FaCircle}
              />
            </SimpleGrid>
          </Box>
        </Box>

        <Box mb={"4em"}>
          <Box mb={7}>
            <Text fontSize={"xl"} fontWeight={"600"} mb={5} color="#661aff">
              E-commerce Integrations
            </Text>
            <Text lineHeight={7}>
              Porterbuddy offers multiple integration options for new and
              existing e-commerce stores and order fulfillment systems.
            </Text>
            <Text lineHeight={7}>
              Integration systems include the Product card widget, checkout
              widget, unified shipping module, and numerous integrations with
              3rd party systems.
            </Text>
          </Box>

          <Box>
            <SimpleGrid columns={[2, 5, 5]} spacing={5}>
              <IntegrationCard
                title={"Shopify"}
                link={"/integrations/shopify-integration/"}
                logo={ShopifyLogo}
              />
              {/* <IntegrationCard
                title={"Magento"}
                link={"/integrations/"}
                logo={MagentoLogo}
              /> */}
              <IntegrationCard
                title={"WooCommerce"}
                link={"/integrations/woocommerce"}
                logo={WooCommerceLogo}
              />
              {/* <EcomIntegrationCard
                title={"Episerver"}
                link={"/integrations/"}
                logo={EpiserverLogo}
              />
              <EcomIntegrationCard
                title={"Dynamics 365"}
                link={"/integrations/"}
                logo={D365Logo}
              /> */}
            </SimpleGrid>
          </Box>
        </Box>

        <Box mb={"4em"}>
          <Box mb={7}>
            <Text fontSize={"xl"} fontWeight={"600"} mb={5} color="#661aff">
              Transport and Warehouse Management Systems Integrations
            </Text>
            <Text lineHeight={7}>
              Integrate Porterbuddy with your transport and warehouse management
              systems.
            </Text>
            <Text lineHeight={7}>
              Manage label printing, parcel information update, shipment
              creation and scheduling using our standard integration with TMS
              and WMS solutions.
            </Text>
          </Box>

          <Box>
            <SimpleGrid columns={[2, 5, 5]} spacing={5}>
              <IntegrationCard
                title={"nShift - Unifaun"}
                link={"/integrations/unifaun"}
                logo={UnifaunLogo}
              />
              {/* <EcomIntegrationCard
                title={"Consignor"}
                link={"/integrations/"}
                logo={ConsignorLogo}
              />
              <EcomIntegrationCard
                title={"Ongoing"}
                link={"/integrations/"}
                logo={OngoingLogo}
              />
              <EcomIntegrationCard
                title={"Webshipper"}
                link={"/integrations/"}
                logo={WebshipperLogo}
              /> */}
            </SimpleGrid>
          </Box>
        </Box>
      </Box>
    </Layout>
  )
}
export default IntegrationsPage

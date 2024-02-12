
import {
    Box,
    Flex,
    HStack,
    Button,
    Text,
    Link,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    Stack,
    Icon,
    IconButton,
    useDisclosure,
    useColorModeValue,
    useColorMode
  } from "@chakra-ui/react"
  // Here we have used react-icons package for the icons
  import { GiHamburgerMenu } from "react-icons/gi"
  import { AiOutlineClose, AiTwotoneThunderbolt } from "react-icons/ai"
  import { BiChevronDown } from "react-icons/bi"
  import { MdTimeline, MdOutlineDarkMode } from "react-icons/md"
  import { BsBook } from "react-icons/bs"
  import { FiSun } from "react-icons/fi"
  import Logo from "../assets/Logo"
  
  const navLinks = [
    { name: "Home", path: "/"},
    { name: "About", path: "#" },
    { name: "Analytics", path: "/analytics" },
    { name: "Features", path: "#" }
  ]
  
  const dropdownLinks = [
    {
      name: "Projects",
      path: "#",
      icon: MdTimeline
    },
    {
      name: "Tech Stack",
      path: "#",
      icon: AiTwotoneThunderbolt
    },
    {
      name: "Open Source",
      path: "#",
      icon: BsBook
    }
  ]
  
  export default function Navbar() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    
    const { colorMode, toggleColorMode } = useColorMode()

    const menuProps = {
      bg: useColorModeValue("gray.200", "gray.700"),
      color: useColorModeValue("blue.500", "blue.200")
    }

    var ValPass = (valA, valB) => {
      useColorModeValue(valA, valB);
    }
  
    return (
      <Box px={4} boxShadow="lg" width={"100vw"} zIndex='100' sx={{"filter": "blur(0.4px)",
      "border-radius": "5px",
      "border": "1px solid rgba(209, 213, 219, 0.3)"}}
      bg={colorMode === 'light'? 'rgba(255, 255, 255, 0.75)': 'rgba(17, 25, 40, 0.75)'}
      pos={"sticky"} top={'0px'} >
        <Flex
          h={16}
          alignItems="center"
          justifyContent="space-between"
          maxW={800}
          mx="auto"
        >
          <IconButton
            size="md"
            icon={isOpen ? <AiOutlineClose /> : <GiHamburgerMenu />}
            aria-label="Open Menu"
            display={["inherit", "inherit", "none"]}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems="center">
            <Logo />
            <HStack
              as="nav"
              spacing={1}
              display={{ base: "none", md: "flex" }}
              alignItems="center"
            >
              {navLinks.map((link, index) => (
                <NavLink key={index} {...link} onClose={onClose} />
              ))}
              {/* Dropdown Menu */}
              <Menu autoSelect={false} isLazy>
                {({ isOpen, onClose }) => (
                  <>
                    <MenuButton
                      as={Button}
                      variant="ghost"
                      size="sm"
                      px={3}
                      py={1}
                      lineHeight="inherit"
                      fontSize="1em"
                      fontWeight="normal"
                      rounded="md"
                      height="auto"
                      _hover={{ color: "blue.400", bg: menuProps.bg }}
                      _active={{ color: "blue.400"}}
                    >
                      <Flex alignItems="center">
                        <Text>Links</Text>
                        <Icon
                          as={BiChevronDown}
                          h={5}
                          w={5}
                          ml={1}
                          transition="all .25s ease-in-out"
                          transform={isOpen ? "rotate(180deg)" : ""}
                        />
                      </Flex>
                    </MenuButton>
                    <MenuList
                      zIndex={5}
                      bg={ValPass(
                        "rgb(255, 255, 255)",
                        "rgb(26, 32, 44)"
                      )}
                      border="none"
                      boxShadow={ValPass(
                        "2px 4px 6px 2px rgba(160, 174, 192, 0.6)",
                        "2px 4px 6px 2px rgba(9, 17, 28, 0.6)"
                      )}
                    >
                      {dropdownLinks.map((link, index) => (
                        <MenuLink
                          key={index}
                          name={link.name}
                          path={link.path}
                          icon={link.icon}
                          onClose={onClose}
                        />
                      ))}
                    </MenuList>
                  </>
                )}
              </Menu>
            </HStack>
          </HStack>
  
          <IconButton aria-label="Color Switcher" icon={colorMode === 'light'? <FiSun />: <MdOutlineDarkMode /> } onClick={toggleColorMode}/>
        </Flex>
  
        {/* Mobile Screen Links */}
        {isOpen ? (
          <Box pb={4} display={["inherit", "inherit", "none"]}>
            <Stack as="nav" spacing={2} pos={"sticky"} top={"0px"}>
              {navLinks.map((link, index) => (
                <NavLink key={index} {...link} onClose={onClose} />
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>
    )
  }
  
  const NavLink = ({ name, path, onClose }) => {
    const link = {
      bg: useColorModeValue("gray.200", "gray.700"),
      color: useColorModeValue("blue.500", "blue.200")
    }
  
    return (
      <Link
        href={path}
        px={3}
        py={1}
        lineHeight="inherit"
        rounded="md"
        _hover={{
          textDecoration: "none",
          bg: link.bg,
          color: link.color
        }}
        onClick={() => onClose()}
      >
        {name}
      </Link>
    )
  }
  
  const MenuLink = ({ name, path, icon, onClose }) => {
    return (
      <Link href={path} onClick={() => onClose()}>
        <MenuItem
          _hover={{
            color: "blue.400",
            bg: useColorModeValue("gray.200", "gray.700")
          }}
        >
          <HStack>
            <Icon as={icon} size={18} color="blue.400" />
            <Text>{name}</Text>
          </HStack>
        </MenuItem>
      </Link>
    )
  }
  
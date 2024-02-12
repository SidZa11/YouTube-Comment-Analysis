import React, { useContext, version } from 'react'
import {
     Box,
     Flex,
     Center,
     Spacer,
     Image,
     Heading,
     Text,
     chakra,
     SimpleGrid,
     Stat,
     StatLabel,
     StatNumber,
     useColorModeValue
} from '@chakra-ui/react'
import { IoEyeSharp } from "react-icons/io5";
import { AiOutlineLike } from "react-icons/ai";
import { FaComments } from "react-icons/fa6";
import VideoInfoContext from '../context/VideoInfoContext'
import VideoStatContext from '../context/VideoStatContext'
function StatsCard(props) {
    const { title, stat, icon } = props
    return (
      <Stat
        px={{ base: 2, md: 4 }}
        py={"5"}
        shadow={"xl"}
        border={"1px solid"}
        borderColor={useColorModeValue("gray.800", "gray.500")}
        rounded={"lg"}
      >
        <Flex justifyContent={"space-between"}>
          <Box pl={{ base: 2, md: 4 }}>
            <StatLabel fontWeight={"medium"} isTruncated>
              {title}
            </StatLabel>
            <StatNumber fontSize={"2xl"} fontWeight={"medium"}>
              {stat}
            </StatNumber>
          </Box>
          <Box
            my={"auto"}
            color={useColorModeValue("gray.800", "gray.200")}
            alignContent={"center"}
          >
            {icon}
          </Box>
        </Flex>
      </Stat>
    )
  }

const Statistics = () => {

const {videoInfo} = useContext(VideoInfoContext);
const {videoStat} = useContext(VideoStatContext);

var PublishedAt;
var imgUrl;
var title;

if(videoInfo["etag"] != null) {
    PublishedAt = videoInfo['snippet'].publishedAt;
    title = videoInfo['snippet'].title;
    imgUrl = videoInfo['snippet'].thumbnails.high.url;  
}

var viewCount;
var likeCount;
var commentCount;

if(videoStat["etag"] != null) {
    viewCount = videoStat["statistics"].viewCount;
    likeCount = videoStat["statistics"].likeCount;
    commentCount = videoStat["statistics"].commentCount;
}

return (
<>
<Box color={"gray.600"} m={'auto'} mt={10} w={['95vw','90vw']} h={'400px'}>
    <Flex>
        <Center flexDirection={['column', 'row']} flexWrap={'wrap'}>
            <Image objectFit={'cover'} src={imgUrl} alt='Dan Abramov'/>
            <Spacer />
                <Box pl={[0, 5]} pt={[5, 0]}>
                    <Heading as='h6' size='xm' color={useColorModeValue("gray.900", "gray.300")}>
                        {title}
                    </Heading>
                    <Text color={useColorModeValue("gray.500", "gray.500")}>
                        Published At: {PublishedAt}
                    </Text>
                </Box>
        </Center>
    </Flex>
</Box>

<Box maxW="7xl" mx={"auto"} px={{ base: 2, sm: 12, md: 17 }}>
      <chakra.h1
        textAlign={"center"}
        fontSize={"4xl"}
        py={10}
        fontWeight={"bold"}
      >
        Some Statitics Of YouTube Video.
      </chakra.h1>
      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={{ base: 5, lg: 8 }}>
        <StatsCard
          title={"Total Views"}
          stat={viewCount}
          icon={<IoEyeSharp size={"3em"} />}
        />
        <StatsCard
          title={"Total Likes"}
          stat={likeCount}
          icon={<AiOutlineLike size={"3em"} />}
        />
        <StatsCard
          title={"Total Comments"}
          stat={commentCount}
          icon={<FaComments size={"3em"} />}
        />
      </SimpleGrid>
    </Box>

</>
)
}

export default Statistics

//Chakra components
import { color, Heading, Text } from '@chakra-ui/react'
import { Box } from '@chakra-ui/react'
import { Stack } from '@chakra-ui/react'
import { Skeleton, SkeletonCircle, SkeletonText } from '@chakra-ui/react'
import { Link } from '@chakra-ui/react'

//React 
import React, { useState, useEffect } from 'react';

//Utils
import { getUser } from '../../utils/githubprofile'

//Icons
import { 
    GoMarkGithub,
    GoPerson,
    GoQuote,
} from "react-icons/go";

import {
    VscTwitter
} from "react-icons/vsc";

import { 
    ImOffice
} from "react-icons/im";

export default function BasicInfo(props){
    const [user, setUser] = useState(null);

    const { username } = props;

    useEffect(() => {
        getUser(username).then(user => {
            setUser(user);
        }).catch(error => {
            setUser({avatar_url: "null"})
        }
        )
    }, [username]);

    if (!user) {
        return (
            <Box w={'sm'} bgColor={'#181818'} rounded={'2xl'} boxShadow={' 0px 0px 20px #151514'}>
                <Stack spacing={'auto'} direction={'column'} paddingStart={'1'}>
                    <Box pb={'auto'} pt={'auto'} p={1}>
                        <Stack direction={'row'} p={2}> 
                            <Box rounded={'full'} bgColor={'white'} p={1}>
                                <GoPerson size={'30px'} p={3}/> 
                            </Box>   
                            <Skeleton w={400} h={10}>
                            </Skeleton>
                        </Stack>
                    </Box>

                    <Box pb={'auto'} pt={'auto'} p={1}>
                        <Stack direction={'row'} p={2}> 
                            <Box rounded={'full'} bgColor={'white'} p={1}>
                                <GoPerson size={'30px'} p={3}/> 
                            </Box> 
                            <Skeleton w={400} h={10}>
                            </Skeleton>
                        </Stack>
                    </Box>
                </Stack>
            </Box>
        )
    }

    return (
        <Box w={'sm'} bgColor={'#181818'} rounded={'2xl'} boxShadow={' 0px 0px 20px #151514'}>
                <Stack spacing={'auto'} direction={'column'} paddingStart={'1'}>
                    {/* Nome ]---------------------- */}
                    <Box pb={'auto'} pt={'auto'} p={1}>
                        <Stack direction={'row'} p={2}> 
                            <Box rounded={'full'} bgColor={'white'} p={1}>
                                <GoPerson size={'30px'} p={3}/> 
                            </Box>   
                            <Box maxH={400}>
                                <Text  as={'span'} color={'white'} fontSize={'2xl'}>
                                    {user.name}
                                </Text>
                            </Box>
                        </Stack>
                    </Box>

                    {/* Nickname ]---------------------- */}
                    <Box pb={'auto'} pt={'auto'} p={1}>
                        <Stack direction={'row'} p={2}> 
                            <Box rounded={'full'} bgColor={'white'} p={1}>
                                <GoMarkGithub size={'30px'} p={3}/> 
                            </Box>   
                            <Box maxH={400}>
                                <Text  as={'span'} color={'white'} fontSize={'2xl'}>
                                    {user.login}
                                </Text>
                            </Box>
                        </Stack>
                    </Box>

                    {/* Bio ]---------------------- */}
                    <Box pb={'auto'} pt={'auto'} p={1}>
                        <Stack direction={'row'} p={2}> 
                            <Box rounded={'full'} bgColor={'white'} p={1}>
                                <GoQuote size={'30px'} p={3}/> 
                            </Box>   
                            <Box maxH={400}>
                                <Text  as={'span'} color={'white'} fontSize={'2xl'}>
                                &quot;{user.bio ? user.bio : "Não possui bio"}&quot;
                                </Text>
                            </Box>
                        </Stack>
                    </Box>

                    {/* Twitter ]---------------------- */}
                    <Box pb={'auto'} pt={'auto'} p={1}>
                        <Stack direction={'row'} p={2}> 
                            <Box rounded={'full'} bgColor={'white'} p={1}>
                                <VscTwitter size={'30px'} p={3}/> 
                            </Box>   
                            <Box maxH={400}>
                                <Link href={`https://twitter.com/${user.twitter_username}`}>
                                    <Text  as={'span'} color={'white'} fontSize={'2xl'} _hover={{color:"#1CAE8E"}}>
                                        {user.twitter_username ? `@${user.twitter_username}` : 'No twitter username'}
                                    </Text>
                                </Link>
                            </Box>
                        </Stack>
                    </Box>
                </Stack>
            </Box>
    )
}

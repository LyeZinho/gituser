//Chakra components
import { color, Heading, Text } from '@chakra-ui/react'
import { Box } from '@chakra-ui/react'
import { Stack } from '@chakra-ui/react'
import { Skeleton, SkeletonCircle, SkeletonText } from '@chakra-ui/react'
import { Link } from '@chakra-ui/react'

//React 
import React, { useState, useEffect } from 'react';

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
    if (!props.name || !props.login) {
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
                                <GoMarkGithub size={'30px'} p={3}/> 
                            </Box> 
                            <Skeleton w={400} h={10}>
                            </Skeleton>
                        </Stack>
                    </Box>

                    <Box pb={'auto'} pt={'auto'} p={1}>
                        <Stack direction={'row'} p={2}> 
                            <Box rounded={'full'} bgColor={'white'} p={1}>
                                <GoQuote size={'30px'} p={3}/> 
                            </Box> 
                            <Skeleton w={400} h={10}>
                            </Skeleton>
                        </Stack>
                    </Box>

                    <Box pb={'auto'} pt={'auto'} p={1}>
                        <Stack direction={'row'} p={2}> 
                            <Box rounded={'full'} bgColor={'white'} p={1}>
                                <VscTwitter size={'30px'} p={3}/> 
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
                                    {props.name}
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
                                    {props.login}
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
                                &quot;{props.bio ? props.bio : "Não possui bio"}&quot;
                                </Text>
                            </Box>
                        </Stack>
                    </Box>

                    {/* Twitter ]---------------------- */}
                    <Box pb={'auto'} pt={'auto'} p={1}>
                        <Stack direction={'row'} p={2}> 
                            <Box rounded={'full'} bgColor={'white'} p={1}>
                                <VscTwitter size={'30px'} p={3} color={'#202828'}/> 
                            </Box>   
                            <Box maxH={400}>
                                <Link href={props.twitter ? `https://twitter.com/${props.twitter}` : ""}>
                                    <Text  as={'span'} color={'white'} fontSize={'2xl'} _hover={props.twitter ? {color:"#1CAE8E"} : {color:"white"}}>
                                        {props.twitter ? `@${props.twitter}` : 'No twitter username'}
                                    </Text>
                                </Link>
                            </Box>
                        </Stack>
                    </Box>
                </Stack>
            </Box>
    )
}

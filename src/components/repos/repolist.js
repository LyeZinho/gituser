//Chakra components
import { color, Heading, Text } from '@chakra-ui/react'
import { Box } from '@chakra-ui/react'
import { Stack } from '@chakra-ui/react'
import { Skeleton, SkeletonCircle, SkeletonText } from '@chakra-ui/react'
import { Link } from '@chakra-ui/react'
import {
    List,
    ListItem,
    ListIcon,
    OrderedList,
    UnorderedList,
} from '@chakra-ui/react'

//React 
import React, { useState, useEffect } from 'react';

//Icons
import { 
    GoPerson,
    GoRepo
} from "react-icons/go";

import {
    VscTwitter
} from "react-icons/vsc";

import { 
    ImOffice
} from "react-icons/im";



export default function RepoList(props) {

    if (!props.fullName || !props.htmlUrl) {
        return (
            <Box w={'sm'} bgColor={'#181818'} rounded={'2xl'} boxShadow={' 0px 0px 20px #151514'}>
                <Stack spacing={'auto'} direction={'column'} paddingStart={'1'}>
                    <Box pb={'auto'} pt={'auto'} p={1}>
                        <Stack direction={'row'} p={2}> 
                            <Box rounded={'full'} bgColor={'white'} p={1}>
                                <GoRepo size={'15px'} p={3} color={'#202828'}/> 
                            </Box>   
                            <Skeleton w={400} h={6}>
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
                <Box pb={'auto'} pt={'auto'} p={1}>
                    <Stack direction={'row'} p={2}> 
                        <Box rounded={'full'} bgColor={'white'} p={1}>
                            <GoRepo size={'15px'} p={3} color={'#202828'}/> 
                        </Box>   
                        <Link href={props.htmlUrl} target='_blank'>
                            <Text color={'white'} _hover={{color: '#1CAE8E'}}>
                                {props.fullName}
                            </Text>
                        </Link>
                    </Stack>
                </Box>
            </Stack>
        </Box>
    )

}
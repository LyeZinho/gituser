//Chakra components
import { color, Heading, Text } from '@chakra-ui/react'
import { Box, Center } from '@chakra-ui/react'
import { Stack } from '@chakra-ui/react'
import { Skeleton, SkeletonCircle, SkeletonText } from '@chakra-ui/react'
import { Link, Button } from '@chakra-ui/react'
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
    GoMarkGithub
} from "react-icons/go";

//Single data
import SponsorModal from '../single/sponsorButton'

export default function GitUser(props) {
    return (
        <Box w={'sm'} bgColor={'#181818'} rounded={'2xl'} boxShadow={' 0px 0px 20px #151514'}>
            <Stack spacing={'auto'} direction={'column'} paddingStart={'1'}>
                <Box pb={'auto'} pt={'auto'} p={1}>
                    <Stack direction={'row'} p={2}> 
                        <Box>
                            <Heading 
                            color={'#03FBCB'}
                            _hover={{ color: '#13505b' }}
                            textAlign={'center'}
                            >
                                GitUser
                            </Heading>
                        </Box>
                    </Stack>
                    
                    <Stack direction={'row'} p={2}> 
                        <Box>
                            <SponsorModal />
                        </Box>
                    </Stack>

                    <Stack direction={'row'} p={2}> 
                        <Box>
                            <Button
                            bgColor="#202828"
                            color="#ffffff"
                            _hover={{ bgColor: '#ffffff', color: '#202828' }}
                            leftIcon={<GoMarkGithub size={'23px'} p={3} color={'#03FBCB'} 
                            _hover={{ color: '#202828' }}/>}
                            onClick={() => window.open("https://github.com/LyeZinho/gituser", '_blank')}
                            >
                                GitUser repo
                            </Button>
                        </Box>
                    </Stack>
                </Box>
            </Stack>
        </Box>
    )

}
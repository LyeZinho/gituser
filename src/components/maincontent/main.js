import { Stack, HStack, VStack } from '@chakra-ui/react'
import { Center, Square, Circle } from '@chakra-ui/react'
import { SimpleGrid } from '@chakra-ui/react'
import { Box } from '@chakra-ui/react'
import { Grid, GridItem } from '@chakra-ui/react'
import { Flex, Spacer } from '@chakra-ui/react'
import {
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
    Input,
    Button, 
    ButtonGroup
} from '@chakra-ui/react'

//Components
import ProfilePicture from '../profile/profilepicture'
import BasicInfo from '../profile/basicinfo'

//React
import React, { useState, useEffect } from 'react';



export default function MainContent(){
    const [username, setUsername] = useState('');    
    const [user, setUser] = useState(null);

    const handleChange = (e) => {
        setUser(e.target.value);
    }

    return(
        <Box >
            <Flex direction="row">
                <Stack direction={'column'} spacing={10} p={2}>
                    <Box w={'sm'} h={'sm'}>
                        <ProfilePicture username={username}/>
                    </Box>
                    <Box w={'sm'} h={'sm'}>
                        <Input 
                        id='first-name' 
                        placeholder='First name' 
                        onChange={handleChange}
                        color={'#181818'}
                        />
                        <Button 
                        onClick={() => {
                            setUsername(user)
                        }}
                        >Search</Button>
                    </Box>
                </Stack>
            <Spacer />
                <Stack spacing={1} direction={'row'} p={2}> 
                    <Box>
                        <BasicInfo username={username}/>
                    </Box>
                    <Box>
                        <BasicInfo username={username}/>
                    </Box>
                </Stack>
            </Flex>
        </Box>
    )
}
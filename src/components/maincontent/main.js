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
import { useToast } from '@chakra-ui/react'


//Components
import ProfilePicture from '../profile/profilepicture'
import BasicInfo from '../profile/basicinfo'

//React
import React, { useState, useEffect } from 'react';

//Utils
import { getUser } from '../../utils/githubprofile'


export default function MainContent(){
    const Tamplate = require('../../utils/tamplate.json')

    //Form
    const [username, setUsername] = useState({});    

    const handleChange = (e) => {
        setUsername(e.target.value);
        console.log(e.target.value);
    }


    //Query Github API
    const [data, setData] = useState({});

    function toastAlert(){
        toast({
            title: 'User not found.',
            description: "The user you are looking for doesn't exist.",
            status: 'error',
            duration: 5000,
            isClosable: true,
            position: 'bottom-left'
        })
        setData(Tamplate)
    }

    //When button is clicked query github API
    //Using onClick event
    const handleSubmit = () => {
        getUser(username)
            .then(data => {
                console.log(data);
                data == undefined ? toastAlert() : setData(data);
            }
        )
    }

    //Toast ALERT
    const toast = useToast();


    //Render
    return(
        <Box >
            <Flex direction="row">
                <Stack direction={'column'} spacing={10} p={2}>
                    <Box w={'sm'} h={'sm'}>
                        <ProfilePicture
                            avatarUrl={data ? data.avatar_url : ''}
                            login={data.login ? data.login : 'No login'}
                        />
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
                            handleSubmit()
                        }}
                        >Search</Button>
                    </Box>
                </Stack>
            <Spacer />
                <Stack spacing={1} direction={'row'} p={2}> 
                    <Box>
                        <BasicInfo 
                        name={data.name}
                        login={data.login}
                        bio={data.bio}
                        twitter={data.twitter_username}
                        />
                    </Box>
                    <Box>
                        <BasicInfo 
                        name={data.name}
                        login={data.login}
                        bio={data.bio}
                        twitter={data.twitter_username}
                        />
                    </Box>
                </Stack>
            </Flex>
        </Box>
    )
}
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
    ButtonGroup,
    Text
} from '@chakra-ui/react'
import { useToast } from '@chakra-ui/react'


//Components
import ProfilePicture from '../profile/profilepicture'
import BasicInfo from '../profile/basicinfo'
import RepoList from '../repos/repolist'
import GitUser from './gituser'

//React
import React, { useState, useEffect } from 'react';

//Utils
import { getUser } from '../../utils/githubprofile'
import { getRepos } from '../../utils/githubrepos'

export default function MainContent(){
    const toast = useToast();
    
    const userTamplate = require('../../utils/usertamplate.json')
    const reposTamplate = require('../../utils/repotamplate.json')

    const [username, setUsername] = useState({});    

    const [user, setUser] = useState({});

    const [repos, setRepos] = useState(reposTamplate);

    
    function alertUser(){
        toast({
            title: 'User not found.',
            description: "The user you are looking for doesn't exist.",
            status: 'error',
            duration: 3000,
            isClosable: true,
            position: 'bottom-left'
        })
        setUser(userTamplate)
    }


    function alertRepos(){
        toast({
            title: 'Repos not found',
            description: "The repos from user you are looking for doesn't can be found.",
            status: 'error',
            duration: 3000,
            isClosable: true,
            position: 'bottom-left'
        })
        setRepos(reposTamplate)
    }

    const handleSubmit = () => {
        getUser(username)
            .then(data => {
                data == undefined ? alertUser() : setUser(data);
            }
        )
        getRepos(username)
            .then(data => {
                data == undefined ? alertRepos() : setRepos(data);
            }
        )
    }

    const handleChange = (e) => {
        setUsername(e.target.value);
        console.log(e.target.value);
    }

    
    return(
        <Box >
            <Flex direction="row">
                <Stack direction={'column'} spacing={10} p={2} paddingStart={75} pt={5}>
                    <Box w={'sm'} h={'sm'} >
                        <ProfilePicture
                            avatarUrl={user.avatar_url ? user.avatar_url : userTamplate.avatar_url}
                            name={user.login ? user.login : userTamplate.login}
                        />
                    </Box>
                    <Box w={'sm'} h={'sm'}>
                        <Input 
                        id='first-name' 
                        placeholder='Username' 
                        onChange={handleChange}
                        color={'#ffffff'}
                        />
                        <Center pt={10}>
                            <Button 
                            bgColor="#151514"
                            color="#ffffff"
                            _hover={{bg: '#ffffff', color: '#151514'}}
                            onClick={() => {
                                handleSubmit()
                            }}
                            >Search</Button>
                        </Center>
                    </Box>
                </Stack>
            <Spacer/>
                <Stack spacing={6} direction={'row'} p={2} pt={50}> 
                    <Box>
                        <Stack direction={'column'} spacing={10} p={0} paddingStart={10} pt={2}>
                            <BasicInfo 
                            name={user.name}
                            login={user.login}
                            bio={user.bio}
                            twitter={user.twitter_username}
                            />
                            <GitUser />
                        </Stack>
                    </Box>
                    <Box>
                        <Stack direction={'column'} spacing={6} p={2}>
                        {
                            //Render just the firsts 7 repos
                            repos.map(
                                (repo, index) => {
                                    if(index < 7){
                                        return(
                                            <RepoList
                                                fullName={repo.full_name}
                                                htmlUrl={repo.html_url}
                                            />
                                        )
                                    }
                                }
                            )
                        }
                        </Stack>
                    </Box>
                </Stack>
            </Flex>
        </Box>
    )
}
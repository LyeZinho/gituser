// Componets chakra UI
import { Image } from '@chakra-ui/react'
import { AspectRatio } from '@chakra-ui/react'
import { Box } from '@chakra-ui/react'
import { Skeleton, SkeletonCircle, SkeletonText } from '@chakra-ui/react'

//React 
import React, { useState, useEffect } from 'react';


//Utils
import { getUser } from '../../utils/githubprofile'



export default function ProfilePicture(props) {

    const { username } = props;
    const [user, setUser] = useState(null);

    useEffect(() => {
        getUser(username).then(user => {
            setUser(user);
        }).catch(error => {
            setUser({avatar_url: "null"})
        })
    }, [username]);

    if (!user) { 
        return (
            <Box>
                <AspectRatio ratio={1}>
                    <SkeletonCircle />
                </AspectRatio>
            </Box>
        )
    }
    return (
        <AspectRatio ratio={1}>
            <Image 
            src={user.avatar_url} 
            alt={user.login} 
            rounded={'full'}
            size={'auto'}
            boxShadow={ '0px 0px 50px #000000' }
            />
        </AspectRatio>
    )
}
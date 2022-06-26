// Componets chakra UI
import { Image } from '@chakra-ui/react'
import { AspectRatio } from '@chakra-ui/react'
import { Box } from '@chakra-ui/react'
import { Skeleton, SkeletonCircle, SkeletonText } from '@chakra-ui/react'

//React 
import React, { useState, useEffect } from 'react';


export default function ProfilePicture(props) {
    if (props.avatarUrl == "" || props.avatarUrl == undefined) {
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
            src={props.avatarUrl} 
            alt={props.login} 
            rounded={'full'}
            size={'auto'}
            boxShadow={ '0px 0px 50px #000000' }
            />    
        </AspectRatio>
    )
    
}
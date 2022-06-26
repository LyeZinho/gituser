//Next / React
import Head from 'next/head'
import Image from 'next/image'
import Script from 'next/script';
import React, { useState } from 'react';

//Styles
import styles from '../../styles/Home.module.css'

//Chakra UI
import { Button } from '@chakra-ui/react'
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useDisclosure
} from '@chakra-ui/react'
import { Skeleton, SkeletonCircle, SkeletonText } from '@chakra-ui/react'


export default function SponsorModal() {
    const { isOpen, onOpen, onClose } = useDisclosure()

    const [isLoaded, setIsLoaded] = useState(false)
    return (
      <>
        <Button 
        onClick={onOpen}
        w="150px" 
        h="40px"
        bgColor="#202828"
        color="#ffffff"
        _hover={{ bgColor: '#ffffff', color: '#202828' }}
        >❤ Sponsor</Button>
        <Modal 
        closeOnOverlayClick={false} 
        isOpen={isOpen} 
        onClose={onClose}
        size='sm'
        >
        <ModalOverlay />
          <ModalContent bgColor={'#202828'}>
            <ModalHeader color={'white'}>Support me 😀</ModalHeader>
            <ModalCloseButton color={'white'} />
              <ModalBody padding={0}>
                <Skeleton
                  isLoaded={isLoaded}
                  fadeDuration={4}
                >
                  <iframe 
                    id='kofiframe' 
                    src='https://ko-fi.com/lyepedro/?hidefeed=true&widget=true&embed=true&preview=true' 
                    className={styles.sponsorIframe} 
                    title='lyepedro'
                    onLoad={() => setIsLoaded(true)}
                  />
                </Skeleton>
            </ModalBody>
          </ModalContent>
        </Modal>
      </>
    )
  }
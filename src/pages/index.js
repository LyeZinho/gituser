import Head from 'next/head'

// Components chakra UI
import { Box } from '@chakra-ui/react'
import { ColorModeScript } from '@chakra-ui/react'

// Components
import theme from '../components/theme'

// Project components
import MainContent from '../components/maincontent/main'

//Palette
//https://coolors.co/palette/181818-151514-202828-1cae8e-03fbcb
export default function Home() {
  return (
    <div
      style={{
        backgroundColor: '#202828',
        minHeight: '100vh',
        maxHeight: '100vh',
        minWidth: '100vw',
        maxWidth: '100vw',
        overflow: 'hidden',
      }}
    >
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <Head>
        <title>GitUser</title>
        <meta name="description" content="🔍Git user Look up🔎" />
        <link rel="icon" href="icons/favicon.ico" />
      </Head>

      {/* <ProfilePicture username="LyeZinho" /> */}
      <Box p={2}>
        <MainContent />
      </Box>
    </div>
  )
}

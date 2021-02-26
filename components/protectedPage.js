import React, {useState}from 'react'
import { Container, Button, Input, Stack } from "@chakra-ui/react";
import Header from "./header";

const ProtectedPage = ({children}) => {
    const [token, setToken] = useState('')
    const [appId, setAppId] = useState('')
    const [appSecret, setAppSecret] = useState('')

    const isLoggedIn = token;
    return (
        <>
            <Header />
            { !isLoggedIn ? (
                <Container>
                    <Stack spacing={3} marginBottom="1rem">
                        <Input 
                         placeholder="appId"
                         size="md"
                         value={appId}
                         onChange={e => setAppId(e.target.value)}
                        />
                        <Input
                         placeholder="appSecret"
                         size="md"
                         value={appSecret}
                         onChange={e => setAppSecret(e.target.value)}
                        />
                        <Button>Login</Button>
                    </Stack>
                </Container>
            ) : (
                children
            )}
        </>
    )
}

export default ProtectedPage
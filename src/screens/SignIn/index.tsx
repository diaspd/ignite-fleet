import { useState } from 'react';
import { Alert } from 'react-native';

import { Container, Title, Slogan } from './styles';

import { GoogleSignin } from '@react-native-google-signin/google-signin';

import backgroundImg from '../../assets/background.png'
import { Button } from '../../components/Button';

import { WEB_CLIENT_ID, IOS_CLIENT_ID } from '@env';

GoogleSignin.configure({
  scopes: ['email', 'profile'],
  webClientId: WEB_CLIENT_ID,
  iosClientId: IOS_CLIENT_ID,
})

export function SignIn() {
  const [isAuthenticating, setIsAuthenticating] = useState(false);

  async function handleGoogleSignIn() {
    try {
      setIsAuthenticating(true)
      
      const { data } = await GoogleSignin.signIn()

      if(data?.idToken) {

      } else {
        Alert.alert(
          'Entrar', 
          'Não foi possível conectar-se a sua conta google.'
        )
      }
      
    } catch (error) {
      console.error(error)
      Alert.alert('Entrar', 'Não foi possível conectar-se a sua conta google.')
      setIsAuthenticating(false)
    }
  }

  return (
    <Container source={backgroundImg}>
      <Title>Ignite Fleet</Title>
      <Slogan>
        Gestão de uso de veículos
      </Slogan>

      <Button title='Entrar com Google' isLoading={isAuthenticating} onPress={handleGoogleSignIn}/>
    </Container>
  );
}
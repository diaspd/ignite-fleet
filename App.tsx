import { ThemeProvider } from 'styled-components'

import theme from './src/theme';

import { SignIn } from './src/screens/SignIn';

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <SignIn />
    </ThemeProvider>
  );
}

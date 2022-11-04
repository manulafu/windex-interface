import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'

import { store } from './store/store'
import App from './App'

import { chain, configureChains, createClient, WagmiConfig } from 'wagmi'
import { publicProvider } from 'wagmi/providers/public'
import { alchemyProvider } from 'wagmi/providers/alchemy'
import { MetaMaskConnector } from 'wagmi/connectors/metaMask'
import { WalletConnectConnector } from 'wagmi/connectors/walletConnect'
import { CoinbaseWalletConnector } from 'wagmi/connectors/coinbaseWallet'
import { ConnectKitProvider } from 'connectkit'

const { chains, provider, webSocketProvider } = configureChains(
  [chain.goerli],
  [
    alchemyProvider({ apiKey: import.meta.env.VITE_ALCHEMY_GOERLI_API_KEY }),
    publicProvider(),
  ]
)

const client = createClient({
  autoConnect: false,
  connectors: [new MetaMaskConnector({ chains })],
  provider,
  webSocketProvider,
})

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <WagmiConfig client={client}>
        <ConnectKitProvider theme="auto">
          <App />
        </ConnectKitProvider>
      </WagmiConfig>
    </Provider>
  </React.StrictMode>
)

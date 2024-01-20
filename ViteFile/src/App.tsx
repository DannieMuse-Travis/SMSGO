import {RouterProvider} from 'react-router-dom'
import { MainRouter } from './router/mainRoute'
import { PersistGate } from 'redux-persist/integration/react'
import { Provider } from 'react-redux'
import { persistStore } from 
'redux-persist'
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { store } from './global/Store'
 
const client = new QueryClient()
 
const App = () => {
  let persistor = persistStore(store)
  return (
    <>
      <QueryClientProvider client={client}>
      <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
    <RouterProvider router={MainRouter}/>
    </PersistGate>
    </Provider>
    </QueryClientProvider>
    </>
  )
}

export default App
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { TabProvider } from '../Context/GlobalContext'
import { TabList } from './Components/TabList'
import { TabTrigger } from './Components/TabTrigger'
import { TabContent } from './Components/TabContent'

function App() {
  const [count, setCount] = useState(0)

  return (
    <TabProvider>
      <TabList>
        <TabTrigger tabValue="tab1" label="Tab 1" />
        <TabTrigger tabValue="tab2" label="Tab 2" />
        <TabTrigger tabValue="tab3" label="Tab 3" />
      </TabList>

      <TabContent tabValue="tab1">
        <p>This is Tab 1 content.</p>
      </TabContent>
      <TabContent tabValue="tab2">
        <p>This is Tab 2 content.</p>
      </TabContent>
      <TabContent tabValue="tab3">
        <p>This is Tab 3 content.</p>
      </TabContent>
    </TabProvider>
  );
}

export default App

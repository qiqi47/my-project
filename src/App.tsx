import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router'
import Main from './screen/main'
function App() {

  return (
    <>
	<Router>
		<Routes>
			<Route path="/" element={<Main />} />
		</Routes>
	</Router>
    </>
  )
}

export default App

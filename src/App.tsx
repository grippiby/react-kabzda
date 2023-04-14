import React from 'react'
import { Accordeon } from './components/Accordeon/Accordeon'
import { Rating } from './components/Rating/Rating'

function App() {
	return (
		<div className="App">
			<PageTitle title={'Hello IT-KAMASUTRA'} />
			<Rating value={3} />
			<Accordeon titleValue={'MENU'} collapsed={false}></Accordeon>
			<Accordeon titleValue={'USERS'} collapsed={false}></Accordeon>
			<Rating value={4} />
		</div>
	)
}
type PageTitlePropsType = {
	title: string
}
function PageTitle(props: PageTitlePropsType) {
	return <h1>{props.title}</h1>
}
export default App

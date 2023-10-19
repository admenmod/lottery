export function ErrorPopUp({ error, onclose = () => {} }: { error: Error, onclose?: () => void }) {
	return <div onClick={e => e.target === e.currentTarget && onclose()}
	style={{
		display: 'grid',
		position: 'fixed',
		top: '0px',
		left: '0px',
		width: '100vw',
		height: '100vh',
		backgroundColor: 'rgba(0, 0, 0, 0.4)'
	}}><div style={{
		alignSelf: 'center',
		justifySelf: 'center',
		padding: '10px 20px',
		margin: '10px 30px',
		color: '#ee3333',
		backgroundColor: '#333333',
		borderRadius: '5px',
		border: '1px solid #aaaaaa'
	}}>{ error.message }</div></div>
}

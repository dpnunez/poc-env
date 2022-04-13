function App() {
	const toda_env = process.env
	const	username = process.env.REACT_APP_USERNAME
	const	password = process.env.REACT_APP_PASSWORD

	console.log(toda_env, username, password)
	
  return (
		<div>Nave</div>
  );
}

export default App;

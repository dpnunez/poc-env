// Toda env no declarada no client-side (se acessada no código) pode ser acessada

// Soluções:
// Para nao expor a env diretamente no bundle, nunca devemos acessar process.env[nome_da_env]
// diretamente na aplicação, a ideia é criar um helper que faça esse acesso, assim no bundle só
// teremos a chamada desse helper.

// (CORRETA) Considerando essa "transparência" que o client side tem,
// o mais correto seria, toda a integração/operação que dependem desses valores muito sensíveis
// (ex.: chave do banco, key do gateway de pagamento, etc), devem acontecer EXCLUSIVAMENTE no back


const getEnvValue = (...names) => {
	// if(!names.length) return process.env
	if(names.length <= 1)  return process.env[names]

	// return names.reduce((object, env) => (
	// 	{
	// 		...object,
	// 		[env]: process.env[env]
	// 	}
	// ), {})
}

function App() {
	// NAO USAR
	const toda_env = process.env
	const	username = process.env.REACT_APP_USERNAME
	const	password = process.env.REACT_APP_PASSWORD

	const usernameHelper = getEnvValue('REACT_APP_USERNAME')
	const multiple = getEnvValue('REACT_APP_USERNAME', 'REACT_APP_PASSWORD')

	console.log(toda_env, username, password, usernameHelper, multiple)
	
  return (
		<div>Nave</div>
  );
}

export default App;

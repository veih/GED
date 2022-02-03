
import { Cadastro } from "../styled/Cadastro";


export const CadastroDeClientes = () => {
	return (
			<div>
				<header className=''>
					<h1>GED </h1> 
				</header>
				<body>
					<Cadastro>
						
						<nav>
									E-MAIL
							<input type="email" placeholder="exemplo@teste.com" pattern="^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$" title="Expressão de e-mail simples. Não permite números no nome de domínio e não permite domínios de nível superior com menos de 2 ou mais de 3 letras (o que é bom até que eles permitam mais). Não lida com vários &quot;.&quot; no domínio (joe@abc.co.uk)." required/>
							<label>CONFIRME O E-MAIL</label>
							<input type="email" placeholder="exemplo@teste.com" required pattern="^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$" title="Expressão de e-mail simples. Não permite números no nome de domínio e não permite domínios de nível superior com menos de 2 ou mais de 3 letras (o que é bom até que eles permitam mais). Não lida com vários &quot;.&quot; no domínio (joe@abc.co.uk)." />
							<label>SENHA</label>
							<input type="password" placeholder="Minimo 6 caracteres" pattern="^(?=.*\d).{4,8}$" title="A senha teve conter letras e (4 a 8) numeros, não devera conter caracteres." required/>
							<label>CONFIRMAR SENHA</label>
							<input type="password" placeholder="Minimo 6 caracteres" pattern="^(?=.*\d).{4,8}$" title="A senha teve conter letras e (4 a 8) numeros, não devera conter caracteres. " required/>
						
						</nav>
						 
					</Cadastro>
				</body>
			</div>
		
			
	);
}
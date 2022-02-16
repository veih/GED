import { Stylelogin } from "../Connect/style";
import { useNavigate } from "react-router-dom";
import { ChangeEvent, useEffect } from 'react';
import { FormActions, useForm } from "../../contexts/FormContext";

export const Connect = () => {
        const navigate = useNavigate();
        const { state, dispatch } = useForm();
    
        useEffect(() => {
            dispatch({
                type: FormActions.setCurrentStep,
                payload: 1
            });
        }, []);
        const handleNextStep = () => {
            if(state.password !== '' && state.email !== '' ) {
                navigate('/home');
            } else {
                alert("Preencha os dados.");
            }   
              
        } 
        
        const handleWordplaceStep = () => {
            if(state.password !== '' && state.email !== '' ) {
                navigate('/home');
            } else {
                alert("Preencha os dados.");
            }   
              
        }  

        const handleOfficeStep = () => {
            if(state.password !== '' && state.email !== '' ) {
                navigate('/home');
            } else {
                alert("Preencha os dados.");
            }   
              
        }  
              
        const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
            dispatch({
                type: FormActions.setEmail,
                payload: e.target.value
            });
        }

        const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
            dispatch({
                type: FormActions.setPassword,
                payload: e.target.value
            });
        }

    return (
        <Stylelogin>
            <body>
                <div className="container"><p>LOGIN-GED</p>
                <div className="brand-title"> </div>
                    
                    <form className="inputs">
                        <label>E-MAIL</label>
                        <input
                            type="email" 
                            autoFocus
                            value={state.email}
                            onChange={handleEmailChange} 
                            className="inputEmail" 
                            placeholder="exemplo@teste.com" 
                            pattern="^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$" 
                            title="Expressão de e-mail simples. Não permite números no nome de domínio e não permite domínios de nível superior com menos de 2 ou mais de 3 letras (o que é bom até que eles permitam mais). Não lida com vários &quot;.&quot; no domínio (joe@abc.co.uk)." 
                            required
                        />
                        <label>SENHA</label>
                        <input 
                            type="password"
                            value={state.password}
                            onChange={handlePasswordChange} 
                            placeholder="Minimo 4 caracteres"
                            pattern="^(?=.*\d).{4,8}$" 
                            title="A senha teve conter letras e (4 a 8) numeros, não devera conter caracteres." 
                            required
                        />
                           
                        <button onClick={handleWordplaceStep} className="button" type="submit">WORDPLACE</button>
                        <button  onClick={handleNextStep} className="buttonLogin" type="submit">LOGIN</button>
                        <button onClick={handleOfficeStep} className="button" type="submit">OFFICE 365</button>
                                   
                    </form>
                </div>
            </body>
            
        </Stylelogin>
    );   
    
}
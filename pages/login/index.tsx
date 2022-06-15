import styles from './login.module.css';

function Login() {

    return(
        <>
        <div className={styles.container}>
            <div className={styles.retangulo}>
                <label className={styles.facaSeuLogin}>Faça seu login!</label>
            </div>
            <div className={styles.retanguloInputs}>
                <form>                    
                    <input type='email' placeholder='Usuário' className={styles.inputEmail} />
                    <input type='password' placeholder='Senha' className={styles.inputPassword} />
                </form>
                <div className={styles.containerForgetPassword}>
                    <label className={styles.forgetPassword}>Esqueci minha senha</label>
                </div>
                <div className={styles.containerLogInWith}>
                    <label className={styles.logInWith}>ou logar com</label>
                </div>
                <div className={styles.containerLogIn}>
                    <button className={styles.logIn}>ENTRAR</button>
                </div>
            </div>
        </div>
        </>
    );
}


export default Login;
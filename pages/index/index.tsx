import styles from './index.module.css';

function Index(){

    return (
        <>
            <div className={styles.container}>
                <div className={styles.containerWelcome}>
                    <label className={styles.welcome}>Bem Vindo ao Mais Nítido!</label>
                </div>

                <div className={styles.containerTextMentoringPlatform}>
                    <label className={styles.textMentoringPlatform}>Sua plataforma de mentorias</label>
                </div>

                <div className={styles.containerRegister}>
                    <button className={styles.register}>CADASTRE-SE</button>
                </div>

                <div className={styles.containerLogin}>
                    <label className={styles.login}>Faça seu&nbsp;<span>Login aqui</span></label>
                </div>
            </div>
        </>
    )
}

export default Index;
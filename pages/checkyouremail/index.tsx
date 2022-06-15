import styles from './checkyouremail.module.css';

function Index () {

    return (
        <>
            <div className={styles.container}>
                <div className={styles.containerCheckYourEmail}>                    
                    <label className={styles.checkYourEmail}>Verifique seu email!</label>                
                    <label className={styles.textCheckYourEmail}>Enviamos um link para voce cadastrar uma nova senha.</label>                    
                </div>
            </div>
        </>
    )
}

export default Index;
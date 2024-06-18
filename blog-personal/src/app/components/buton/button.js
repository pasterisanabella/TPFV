import styles from '@/app/components/buton/button.module.sass'

const Button = (props) => {

    if (props.href) {
        return (
            <a href={props.href} download className={styles.button}>
                {props.children}
            </a>
        );
    }

    return <button className={styles.button}>{props.children}</button>;
}; 

export default Button;
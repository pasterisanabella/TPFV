
import Image from 'next/image';
import Button from '../buton/button';
import styles from '@/app/components/cards/card.module.sass';

const Card = () => (
    <div className={styles.card_wrap} >

    <div className={styles.card}>
             <div className= {styles.card_imageWrap}>
                    <div className={styles.card_image}>
                        <Image src="/photo.webp" alt="photonail" fill= {true}/>
                    </div>
                </div>
                    <div className= {styles.card_content}>
                        <div className= {styles.card_label}></div>
                        <div className={`${styles.card_title} h3 mb-20 `}> Pasteris Anabella Rosa </div>
                        <p className={`${styles.card_summary} fw-600 `}></p>
                        <p className={`${styles.card_summary} fw-600 `}>Soy estudiante de Ing en Sistemas de Información en UTN-FRT. Actualmente estoy cursando el último año de la carrera y espero recibirme pronto!</p>
                        <p className={`${styles.card_summary} fw-500 `}>Este blog fue exclusivamente creado para el Trabajo Final Integrador de la materia: "Virtualización: consolidación de servidores". </p>
                        <p className={`${styles.card_summary} fw-600 `}>Para descargarlo por favor aprienta el botón "Descargar PDF."</p>
                        <p className={`${styles.card_summary} fw-600 `}>¡Gracias!</p>
                        <Button href="/TPPdeV.pdf">Descargar PDF</Button> 
                    </div>
                </div>
        </div> 

);

export default Card; 

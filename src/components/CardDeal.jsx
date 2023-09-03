import { card } from "../assets";
import styles, { layout } from "../style";
import Button from "./Button";

const CardDeal = () => (
  <section className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        Aprende a implementar <br className="sm:block hidden" /> microservicios
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Es muy común querer crear una tienda online, ya sea por proyecto personal o por algún cliente. En Salfox te enseñaremos a implementar microservicios de pago como paypal a tus aplicaciones
      </p>
    </div>

    <div className={layout.sectionImg}>
      <img src={card} alt="billing" className="w-[100%] h-[100%]" />
    </div>
  </section>
);

export default CardDeal;

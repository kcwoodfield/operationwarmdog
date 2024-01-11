import Image from 'next/image'
import Link from 'next/link'
import styles from './page.module.css'


export default function Home() {
  return (
    <main>
      <div className={styles.wrapper}>
        <Image
          className={styles.logo}
          src="/images/owd-logo.png"
          alt="Operation Warm Dog logo"
          width={300}
          height={300}
          priority
        />
      </div>

      <div className={styles.info}>
        <section>
          <h1>Help kill the chill</h1>
          <p>The upcoming weekend in Austin, TX is going to be <strong>very cold</strong>. <br/>Help Lobo and I collect and distribute warm blankets, sheets and clothes to the homeless in our neightborhood.</p>
        </section>

        <section>
          <h1>How can you help?</h1>
          {/* <p><i>There are a few ways you can help!</i></p> */}
          <ul className={styles.items}>
            <li><p>Gather old blankets, sheets, duvets, old camping blankets, etc</p></li>
            <li><p>Clothes are great! Socks, shirts, base layers, jackets, etc</p></li>
            <li><p>Gloves, hats, scarves work also.</p></li>
          </ul>

          <p className={styles.callout}><i><strong>If you can please provide clean clothes. How nice would it be to have a nice clean blanket to wrap around your back?</strong></i></p>
        </section>

        <section>
          <h1>How will these items be distributed?</h1>
          {/* <p><i>There are a few ways we can help!</i></p> */}
          <p>Lobo and I will walk around to areas of the neighborhood we know homeless folks are staying <br/>and distribute these items on our upcoming dog walks.</p>
          <p>We'd love a giant pile of warm weather items to stuff in the sack before we head out. So feel free to drop them off at our door OR you can drop them off at the mailboxes. <br/><strong><i>If you have suggestion for a different location please reach out below.</i></strong></p>
        </section>

        <section>
          <h1>Have an idea? Hit us up!</h1>
          <p>Send us a note here: <Link href="mailto:kevin@operationwarmdog.org">kevin@operationwarmdog.org</Link></p>
        </section>

        <section>
          <h1>Want to drop off warm weather items?</h1>
          <p>Send us a note here and we'll reply asap: <Link href="mailto:kevin@operationwarmdog.org">kevin@operationwarmdog.org</Link></p>
        </section>
       </div>
    </main>
  )
}

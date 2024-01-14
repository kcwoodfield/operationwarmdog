import Image from 'next/image'
import Link from 'next/link'
import Script from 'next/script'
import styles from './page.module.css'


export default function Home() {
  return (
    <main>
      <Script src="https://www.googletagmanager.com/gtag/js?id=G-FXGQ455GL5" />
      <Script id="google-analytics">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-FXGQ455GL5');
        `}
      </Script>

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

        <section className={styles.update}>
          <h1>Thank you!</h1>
          <p>All donations have been distributed around our neighhood. Thank you to everyone who donated!</p>
        </section>

        <section>
          <h1>Help kill the chill</h1>
          <p>The upcoming weekend in Austin, TX is going to be <strong>very cold</strong>. <br/>Help Lobo and I collect and distribute warm blankets, sheets and clothes to the homeless in our neighborhood.</p>
        </section>

        <section>
          <h1>How can you help?</h1>
          <ul className={styles.items}>
            <li><p>Gather old blankets, sheets, duvets, old camping blankets, etc</p></li>
            <li><p>Clothes are great! A pair of socks, old shirts, base layers you never use, old jackets.</p></li>
            <li><p>Gloves, hats, scarves, skiing gear work also.</p></li>
          </ul>

          <p className={styles.callout}><i><strong>Please try to provide clean items. How nice would it be to have a nice clean blanket to wrap around your back?</strong></i></p>

        </section>

        <section>
          <h1>Drop off or pick up?</h1>
          <p>Drop your items off at #225 or send us a note here and we'll try to come get them. </p>
          <p>If you are a coworker, friend or neighbor and can't get to our place, no worries we'll come get your items OR you can drop them off at the office and we'll come get them.  <br/><br/>Ping me for more details. Will try to reply asap: <Link href="mailto:kevin@operationwarmdog.org">kevin@operationwarmdog.org</Link></p>
        </section>

        <section>
          <h1>How will these items be distributed?</h1>
          <p>Lobo and I will walk around to areas of the neighborhood we know homeless folks are staying and distribute these items on our upcoming dog walks. We'd love a giant pile of cold weather gear to stuff in the sack before we head out. <br/><strong><i>If you have suggestion for a different location please reach out below.</i></strong></p>
        </section>

        <section>
          <h1>Have an idea? Hit us up!</h1>
          <p>Send us a note here: <Link href="mailto:kevin@operationwarmdog.org">kevin@operationwarmdog.org</Link></p>
        </section>

        <section>
          <p className={styles.copyright}>Austin, TX. 2024</p>
        </section>
       </div>
    </main>
  )
}

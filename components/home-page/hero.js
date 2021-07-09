import Image from "next/image";

import classes from "./hero.module.css";

export default function Hero() {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image
          src="/images/site/sagar.jpg"
          alt="An image showing Sagar"
          width={300}
          height={300}
        ></Image>
      </div>
      <h1>Hi, I{"'"}m Sagar</h1>
      <p>I blog about web development</p>
    </section>
  );
}

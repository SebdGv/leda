import "./contact.scss";

export default function Contact() {
  return (
    <>
      <section className="contact">
        <p className="formTitle">Vous avez un projet ? Discutons-en !</p>
        <form action="#" method="post">
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Guy Georges"
            required
          />
          <input
            type="email"
            name="email"
            id="email"
            placeholder="g.g@test.ex"
            required
          />
          <textarea
            name="message"
            id="message"
            cols="22"
            rows="5"
            placeholder="J'adore votre travail, faites vous de la livraison à domicile..."
            required
          ></textarea>
          <button className="sendBtn">Envoyer</button>
        </form>
      </section>{" "}
    </>
  );
}

export default function Home() {
  return (
    <main className="grid place-items-center p-5">
      <div className="max-w-[30rem]">
        <h1>
          Hello, <span className="text-primary">watches website.</span>
        </h1>

        <p>
          Lorem ipsum dolor sit{" "}
          <b className="text-accent-1 font-medium">amet consectetur</b>{" "}
          adipisicing elit. Quisquam vel ratione dicta dignissimos iure
          voluptates eligendi beatae laborum quas? Optio illo fugit maiores
          pariatur eaque unde totam architecto, quas similique!
        </p>

        <section>
          <h2>Level 2 title</h2>

          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis
            earum, ut aliquam ullam saepe eius exercitationem, pariatur officia
            dolorum dignissimos fugiat, ipsum ratione sapiente quam fugit odio.
            Ducimus, eveniet consequuntur?
          </p>

          <section>
            <h3>Level 3 title</h3>

            <p>
              Lorem ipsum, dolor sit{" "}
              <b className="text-accent-2 font-medium">amet consectetur</b>{" "}
              adipisicing elit. Libero dolores obcaecati illum sed explicabo
              voluptates dolorum natus? Hic sunt expedita nihil, veritatis
              minima sed esse explicabo ipsum ducimus consectetur ullam!
            </p>
          </section>
        </section>
      </div>
    </main>
  );
}

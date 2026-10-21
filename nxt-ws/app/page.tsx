import Image from "next/image";

export default function Home() {
  return (
    <div>
      <main>
        <h1 className="text-2xl">Carpinteria</h1>
      </main>
      <div>
        <ul className="flex">
          <li>Galleria</li>
          <li>Ubicacion</li>
          <li>Contacto</li>
        </ul>
      </div>
      <section>
        <h2>Imagenes</h2>
        <div>
          <div className="bg-red-500">
            <img  src="https://picsum.photos/300/300" alt="Test placeholder image" width="200" height="300" />
          </div>
        </div>
      </section>
      <section>
        <h3>Nos ubicamos en</h3>
        <h2>Placitas de Otero</h2>
        <h4>A un costado de paraiso country</h4>
      </section>
      <section>
        <p>Creado por: Irvin-Mx</p>
      </section>
    </div>
  );
}

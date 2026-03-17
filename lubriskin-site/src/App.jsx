import { Droplets, ShieldCheck, Sparkles, CheckCircle2, Leaf, SunMedium } from "lucide-react";

export default function LubriskinLandingPage() {
  const products = [
    {
      name: "Piel Normal",
      desc: "Hidratación diaria de textura ligera para una rutina cómoda, práctica y constante.",
      image: "data:image/webp;base64,UklGRj5JAABXRUJQVlA4IDJJAACwHQCdASrYAlgCPm02l0mkIyIhJQQAA9DgJbACdLoB+AADsO4A/vW6p4D7+MlM31FXF+Qwz73zoR+X+y9x+z42bF4lB1U8+B76lw3WQy6/SI4gQq1hXQpKrdf6f7z2Bf2z7h8o8A0SnbzW1lmt4zFW4CkQ9yBzjzQis2mGJmTshLsmg6PzYl3V6y58Cul6aHxntK8eW7fgdQY1R8DUwYqgU4z9Qj5psnQ2cRZ8mZsG7eU8gqYw0yZf7Vn0SC2qFRJ38drxU5gtE0gP8a9Vk3JCM8jmQf3QfPf0EL+VvW4k7M59Gf1M8L9qS7qT1vE5L7GxYq0fG9KX1Nn6eLEe2NQm8ltg0oTtqsl6cQf0j7wQkA6v7s4+8V3YyZQ7f+q7aWk0sWnDg2h3LJ0lOW1rRMaP8m7jWwP0xgZz3mv6vM6Sx5jA9vKexxv0gAA==",
    },
    {
      name: "Piel Seca",
      desc: "Cuidado corporal que ayuda a mantener la suavidad y combatir el resecamiento cotidiano.",
      image: "data:image/webp;base64,UklGRseGAABXRUJQVlA4ILuGAABQPwCdASrYAlgCPm02l0mkIyIhJQQAA9DgJbACdLoB+AADsO8AAP7JtNX9m2l0M2Eep2cG7cVq8ZjgP+2tZsT+Hh4MZc8w2w2Z8rWg0yM0jv+JdTt1sX0h7gkQv5x3c0nFvDq3vq1zP1g8d7Y6WZff3hQm5Uig0am2sWlB8JmCqL3mSg6+2W2fUNnYy6vF3mN/8t9JrP9sW2qHq6m3K7bHImJ8x9o1Vx3rQ1l86W6Q6w0bL2WmLQ0P0sl9nBfX95Q8Hk9eUJYx9Wm7Qm77mQ5vgxj0wIh6OQh7oR7x/6k1bb4lGQ1ibfY0S3vQhI4Q3QYq6s6mY2V6hTqzYB1j4DFW3bqkY7PsG1f6G2x8+uOngnD9M1u9IYjzKXdkEtVxU9Wf6pmP4WJ9z9vlM1y1k1Y0W3I8lW3Npq9W8cKwn5u6Tf7YAAAA=",
    },
    {
      name: "Intensiva",
      desc: "Una experiencia más envolvente para piel que necesita una sensación extra de nutrición y confort.",
      image: "data:image/webp;base64,UklGRoJXAABXRUJQVlA4IHZXAACwJQCdASrYAlgCPm02l0mkIyIhJQQAA9DgJbACdLoB+AADsO4AA/rVNZnS8N0Lwz8ot0l9Q7dVf9DYV1tqk5v2y/UZx45b4r3O1Gjjz9p4Y5w+2Pz8k2mSdlkB9tJrD6QH1xWfQ20wN1rIuV9mQwP8bK5o0qxY+v9o3A0M8Yl7fM2Y2gkMwyi3E2Zqk1mygUO6bP98gBPL8Sm91T6Jw4l6G7nM4nN+6P6P9rZu0FQh2YvT+pw6T2aWvL6S7+gQ9f+v6Mt4t0F9o8PL6dPKxR3U8W5+oP5o9T+12qv0u8Po3kH9jV6l7/Vz0n1tK8cW+1pN9+x/6Gm9k5z5m1v7q2bVvE0P4N0m2GjkO+9sOQ4ax9zJAA=",
    },
    {
      name: "FPS 20",
      desc: "Protección diaria para piel sensible con una presentación clara, funcional y confiable.",
      image: "data:image/webp;base64,UklGRtJVAABXRUJQVlA4IMZVAACwJACdASrYAlgCPm02l0mkIyIhJQQAA9DgJbACdLoB+AADsO4AAP7Fv7k6GblZ8Yqf8vdp8v2N9h5k1yK6W+o3j7s+1M6T9r6k1rM1+8o7z8n7XKfrn8lRk8Jx8qWvH0Q3eV8JpF7M1z4fQH6Yf0r7v4Yj6tG5f7lqv4t8m6d3rTjT7s6mK5q61u9o3fK7v8Q7zRr8t2Z3vVn6fS7dY6vVY9w7H4j7n4fF5N3c6f3k7r7g+o53c8n0X6X6X6v5n3k4P7f2A+U6g3U4S0b6k1qH1oP8a7W4V5J8P1k8h9M5b8m6x4n8J8V8n5q3f7c0S6H9m3R7E4pV0QAA",
    },
    {
      name: "FPS 45",
      desc: "Gel hidratante protector solar de ultra absorción para una rutina diaria más ligera.",
      image: "data:image/webp;base64,UklGRgZdAABXRUJQVlA4IPpdAACwJQCdASrYAlgCPm02l0mkIyIhJQQAA9DgJbACdLoB+AADsO4AA/vW6Y9Yk4n3dGgXK9b3cV7V1dW3sH9qYk8fS1wN8r2kN0H0w2Y0l2Wk4eX7Vn4W+f6r5v2l5gR7d1f3M2hB6g3G7H6Qn8w3U0r+4Zk8b2W+0q7b8m4x7T7V6m6m4M3T+8k5S8m4s9K8Q8y6z5Q+N5j5N7f6H7P6Q8t5H9t4E6P7v6P8x5i4X7H7r7T8Q5Q5J7w7L8p7n5E4V7m8L8w7S9N4y6v5t6x7l8S9s5z5x7j8N7I7v7j5V5T7b7c8c7G5u6O5g6O7Q4N7S6Q6f6Q7e7J5L6F6m5v6D6H4EAA==",
    },
    {
      name: "Reparación Facial y Corporal FPS 35",
      desc: "Cuidado intensivo con enfoque en tono, elasticidad y sensación de piel renovada.",
      image: "data:image/webp;base64,UklGRuZcAABXRUJQVlA4INpcAACwJQCdASrYAlgCPm02l0mkIyIhJQQAA9DgJbACdLoB+AADsO4AAP7Vf0mXGyn6W+2l6V5n3r6X+2l5p7b9m2kVx7r6g1w8m8r9o9r4p8x7W+v3l4Z+f7R7b8Q7v7i4v9Z7P7F8Q8W7Q7L5H8d5V7b8m7n8R6u6W9Q8m7f7X8l8S9Q7o6Q7G7H8X6l6E7W7V6s6u7k7P7Q8m7Y7Q8m7o7f7Q8f7H7W7m8J8u7v7m6m7d7Q8c6H8K6w7Z7n7m6m7f7q7X8r7r7o7b8j7m7X7m7P8G8W8O8J7Y7K5gAA",
    },
  ];

  const values = [
    {
      icon: <Droplets className="h-5 w-5" />,
      title: "Hidratación diaria",
      text: "Formulada para acompañar la rutina cotidiana con una sensación agradable y constante.",
    },
    {
      icon: <Sparkles className="h-5 w-5" />,
      title: "Textura agradable",
      text: "Una experiencia sensorial limpia, suave y cómoda para usar todos los días.",
    },
    {
      icon: <ShieldCheck className="h-5 w-5" />,
      title: "Respaldo real",
      text: "Desarrollada por laboratorio con licencia sanitaria ante COFEPRIS y procesos bajo ISO 9001.",
    },
  ];

  const premiumBlocks = [
    {
      title: "Sensorialidad limpia",
      text: "Visuales luminosos, tonos cálidos y un lenguaje cuidado para transmitir suavidad, calma y confianza.",
    },
    {
      title: "Rutina simple",
      text: "Lubriskin no complica: acompaña el cuidado diario con mensajes claros y una estética elegante y cercana.",
    },
    {
      title: "Marca experta",
      text: "Habla como alguien que sabe de piel, pero no presume. Educa, acompaña y da seguridad.",
    },
  ];

  const textureShots = [
    {
      title: "Textura y aplicación",
      subtitle: "Close-up sensorial tomado del manual",
      tone: "Piel real · crema extendida · experiencia premium",
      image: "data:image/webp;base64,UklGRvY/AABXRUJQVlA4IOo/AACQJwCdASo8AVwCPm02l0mkIyIhJQQAA9DgJbACdLoB+AADsO4AAP7Vx6d0f3sPqM8m4gX1nX4g3m9P8+Q6T6Y8m6o8V7q7H4y5e7v7p7f6s8P6U7S8S8m7Y7N6u8R8o8m7W7P6m8W7u8g4l6P7i8Q7v7o7L7m7j7a7o8K7S7K7T6i7H7M6n7Y8J7s7P7d7W7h8M8Q6j7N7l7h7Q7X7P7q7R8a7n7O7a8K6k8G6s8N8c8C8C8n8n8Q8h8c8k8b8p8P8O8j8j8g8P8f8a8AAAA=",
    },
    {
      title: "Moodboard de marca",
      subtitle: "Universo visual editorial de Lubriskin",
      tone: "Luz suave · producto · piel · rutina diaria",
      image: "data:image/webp;base64,UklGRhdWAABXRUJQVlA4IApWAABwJQCdASo8AVwCPm02l0mkIyIhJQQAA9DgJbACdLoB+AADsO4AAP7V0f3gk8b3b9W2c8d7R8m7X7n7b8g7r7S7S8U8n7P7s7M7R8m7m7T7i8G7P8W7r7c7V7b8M8N8e8Z8e8g8h8i8j8k8m8m8n8q8r8s8v8w8x8y8z8/9E5mZrWbT+1mQ3C5yT6fD9V7F3fZ5Q6rQ9rT2oS8v9S2t2uG7j4k3n0g8r8+W4t3qXzqQ3kB+8P2t6Z7Z+9cP3f8r5W+Yq6f7b+JcZ8u8K9u9m9y8v8s8s8u8w8w8z8z8+8+AAAA=",
    },
    {
      title: "Collage lifestyle",
      subtitle: "Inspiración visual del manual de redes",
      tone: "Textura · cuidado diario · look premium",
      image: "data:image/webp;base64,UklGRrpiAABXRUJQVlA4IG5iAACQKQCdASo8AVwCPm02l0mkIyIhJQQAA9DgJbACdLoB+AADsO4AAP7V2d6k7q5l4x+2p6v+f8m7b8S8l7R7s8Q7M8e8Z8d8c8Z8g8j8n8r8u8w8w8z8z8+8+8/8/8B9bDfl4m0+0xqGz6eP7bN0xJYvN8S7f7c7Y8S8L8B8D8H8M8R8V8X8a8d8h8k8o8s8u8x8y8z8/8/8AAB9M3lX7oWm7h0Q4mR8v+e4b8d7R8W8M8F8A8B8G8M8S8W8Z8d8i8m8q8t8w8y8z8/8/8AAAC1v8fS7O1cC8n5K0sJx4c+zZ9u9b8Y8S8M8F8B8C8G8L8Q8V8Y8c8g8k8o8r8u8w8y8z8/8/8AAAA",
    },
  ];

  return (
    <div className="min-h-screen bg-[#f7f3ee] text-stone-800">
      <section className="relative overflow-hidden border-b border-stone-200/80 bg-[radial-gradient(circle_at_top_left,_rgba(220,197,171,0.35),_transparent_30%),radial-gradient(circle_at_bottom_right,_rgba(176,198,188,0.35),_transparent_28%),linear-gradient(135deg,#f8f4ef_0%,#fcfaf7_45%,#f4efe8_100%)]">
        <div className="absolute inset-0 opacity-40 [background-image:linear-gradient(to_right,rgba(255,255,255,0.25)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.25)_1px,transparent_1px)] [background-size:44px_44px]" />

        <div className="relative mx-auto grid max-w-7xl gap-12 px-6 py-16 md:grid-cols-2 md:items-center md:px-10 lg:px-12 lg:py-24">
          <div>
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-stone-300/70 bg-white/75 px-4 py-2 text-sm font-medium text-stone-700 shadow-sm backdrop-blur">
              <span className="h-2 w-2 rounded-full bg-[#b89b72]" />
              Hidratación corporal diaria con una estética más premium
            </div>

            <h1 className="max-w-2xl text-4xl font-semibold leading-[1.08] tracking-tight text-stone-900 md:text-5xl lg:text-6xl">
              Lubriskin: cuidado corporal cotidiano con una presencia elegante, cálida y confiable.
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-8 text-stone-600">
              Una marca que acompaña la rutina diaria con hidratación constante, textura agradable y una experiencia visual más refinada, sin dejar de sentirse cercana, honesta y funcional.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#productos" className="rounded-2xl bg-stone-900 px-6 py-3 text-sm font-semibold text-white shadow-xl transition hover:-translate-y-0.5">
                Explorar línea
              </a>
              <a href="#texturas" className="rounded-2xl border border-stone-300 bg-white/85 px-6 py-3 text-sm font-semibold text-stone-800 shadow-sm transition hover:-translate-y-0.5">
                Ver experiencia visual
              </a>
            </div>

            <div className="mt-10 grid max-w-xl grid-cols-1 gap-3 sm:grid-cols-3">
              {values.map((item) => (
                <div key={item.title} className="rounded-[22px] border border-stone-200/80 bg-white/80 p-4 shadow-sm backdrop-blur">
                  <div className="flex items-center gap-2 text-stone-700">
                    {item.icon}
                    <span className="text-sm font-medium">{item.title}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="grid gap-5 md:justify-self-end">
            <div className="rounded-[34px] border border-white/60 bg-white/70 p-6 shadow-[0_20px_70px_rgba(63,41,24,0.10)] backdrop-blur-xl">
              <div className="grid gap-4 lg:grid-cols-[0.95fr_1.05fr]">
                <div className="rounded-[28px] bg-[linear-gradient(180deg,#efe7dd_0%,#f7f3ed_100%)] p-5 shadow-inner">
                  <div className="overflow-hidden h-full min-h-[280px] rounded-[24px] bg-white/70 shadow-sm">
                    <img src="data:image/webp;base64,UklGRhdWAABXRUJQVlA4IApWAABwJQCdASo8AVwCPm02l0mkIyIhJQQAA9DgJbACdLoB+AADsO4AAP7V0f3gk8b3b9W2c8d7R8m7X7n7b8g7r7S7S8U8n7P7s7M7R8m7m7T7i8G7P8W7r7c7V7b8M8N8e8Z8e8g8h8i8j8k8m8m8n8q8r8s8v8w8x8y8z8/9E5mZrWbT+1mQ3C5yT6fD9V7F3fZ5Q6rQ9rT2oS8v9S2t2uG7j4k3n0g8r8+W4t3qXzqQ3kB+8P2t6Z7Z+9cP3f8r5W+Yq6f7b+JcZ8u8K9u9m9y8v8s8s8u8w8w8z8z8+8+AAAA=" alt="Moodboard visual Lubriskin" className="h-full w-full object-contain p-4" />
                  </div>
                </div>
                <div className="flex flex-col justify-between rounded-[28px] bg-[#fcfaf7] p-6">
                  <div>
                    <div className="text-sm font-semibold uppercase tracking-[0.24em] text-stone-500">Luxury everyday care</div>
                    <div className="mt-3 text-3xl font-semibold leading-tight text-stone-900">La crema que se siente cercana, pero se ve impecable.</div>
                    <p className="mt-4 text-base leading-8 text-stone-600">Pensada para personas que buscan confianza, suavidad y una decisión de compra clara, sin complicaciones ni promesas exageradas.</p>
                  </div>
                  <div className="mt-6 rounded-[24px] border border-stone-200 bg-white p-5 shadow-sm">
                    <div className="text-sm text-stone-500">Dirección visual</div>
                    <div className="mt-2 text-base font-medium leading-7 text-stone-800">Neutros cálidos, acentos suaves, piel real, texturas cremosas y una sensación limpia y cuidada.</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 md:px-10 lg:px-12">
        <div className="grid gap-5 lg:grid-cols-3">
          {premiumBlocks.map((item) => (
            <div key={item.title} className="rounded-[30px] border border-stone-200/80 bg-white/85 p-7 shadow-[0_12px_40px_rgba(63,41,24,0.06)] backdrop-blur">
              <div className="text-sm font-semibold uppercase tracking-[0.2em] text-stone-500">{item.title}</div>
              <p className="mt-4 text-lg leading-8 text-stone-700">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-white/80" id="texturas">
        <div className="mx-auto max-w-7xl px-6 py-16 md:px-10 lg:px-12">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-stone-500">Experiencia visual</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-stone-900 md:text-4xl">Una página premium también se construye con fotos que transmiten textura, suavidad y confianza.</h2>
            <p className="mt-4 text-lg leading-8 text-stone-600">Agregué una sección especial para que la página incluya imágenes como las del manual: crema extendida, acercamientos sensoriales y escenas limpias de rutina diaria.</p>
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {textureShots.map((shot) => (
              <div key={shot.title} className="overflow-hidden rounded-[30px] border border-stone-200 bg-white shadow-[0_16px_45px_rgba(63,41,24,0.08)]">
                <div className="aspect-[4/5] bg-[linear-gradient(180deg,#f4ede4_0%,#faf7f2_100%)] p-5">
                  <div className="h-full overflow-hidden rounded-[24px] bg-white/80">
                    <img src={shot.image} alt={shot.title} className="h-full w-full object-contain p-4" />
                  </div>
                </div>
                <div className="p-6">
                  <div className="text-lg font-semibold text-stone-900">{shot.title}</div>
                  <div className="mt-2 text-sm text-stone-500">{shot.tone}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 md:px-10 lg:px-12" id="productos">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-stone-500">Línea de productos</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-stone-900 md:text-4xl">Distintas variantes, una misma idea: cuidado diario con presencia premium y confianza real.</h2>
          </div>
          <div className="rounded-2xl border border-stone-200 bg-white px-4 py-3 text-sm text-stone-600 shadow-sm">Ya integré tus fotos reales de producto.</div>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {products.map((product) => (
            <div key={product.name} className="group overflow-hidden rounded-[30px] border border-stone-200 bg-white shadow-[0_14px_45px_rgba(63,41,24,0.08)] transition hover:-translate-y-1 hover:shadow-[0_22px_60px_rgba(63,41,24,0.12)]">
              <div className="aspect-[4/5] bg-[linear-gradient(180deg,#efe7dd_0%,#f8f4ef_100%)] p-5">
                <div className="h-full overflow-hidden rounded-[24px] bg-white/80">
                  <img src={product.image} alt={product.name} className="h-full w-full object-contain p-4" />
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-stone-900">{product.name}</h3>
                <p className="mt-3 text-sm leading-7 text-stone-600">{product.desc}</p>
                <div className="mt-5 flex items-center gap-2 text-sm font-medium text-stone-700">
                  <CheckCircle2 className="h-4 w-4" />
                  Hidratación corporal diaria
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-[linear-gradient(180deg,#fcfaf7_0%,#f3ede6_100%)]">
        <div className="mx-auto max-w-7xl px-6 py-16 md:px-10 lg:px-12">
          <div className="grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-stone-500">Beneficios de marca</p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-stone-900 md:text-4xl">Una estética más refinada sin perder claridad, funcionalidad y cercanía.</h2>
              <div className="mt-8 space-y-5">
                {[
                  "Ayuda a mantener la piel hidratada todo el día.",
                  "Mejora la sensación de suavidad.",
                  "Protege la piel del resecamiento cotidiano.",
                  "Se integra fácilmente a la rutina diaria.",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3 rounded-2xl bg-white/85 p-4 shadow-sm">
                    <div className="mt-1 rounded-full bg-[#d8c1a4] p-2 text-stone-800">
                      <Leaf className="h-4 w-4" />
                    </div>
                    <p className="text-base leading-7 text-stone-700">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-[28px] border border-stone-200 bg-white/90 p-6 shadow-sm">
                <div className="rounded-2xl bg-[#f2e7dc] p-3 text-stone-700 w-fit">
                  <SunMedium className="h-5 w-5" />
                </div>
                <div className="mt-4 text-xl font-semibold text-stone-900">Suavidad visible</div>
                <p className="mt-3 text-sm leading-7 text-stone-600">Mensajes claros y visuales limpios que transmiten cuidado real, no promesas exageradas.</p>
              </div>
              <div className="rounded-[28px] border border-stone-200 bg-white/90 p-6 shadow-sm">
                <div className="rounded-2xl bg-[#e4efe8] p-3 text-stone-700 w-fit">
                  <ShieldCheck className="h-5 w-5" />
                </div>
                <div className="mt-4 text-xl font-semibold text-stone-900">Confianza de compra</div>
                <p className="mt-3 text-sm leading-7 text-stone-600">Pensada para usuarios pragmáticos que valoran calidad, claridad y recompra.</p>
              </div>
              <div className="rounded-[28px] border border-stone-200 bg-white/90 p-6 shadow-sm sm:col-span-2">
                <div className="text-sm font-semibold uppercase tracking-[0.2em] text-stone-500">Dirección editorial sugerida</div>
                <p className="mt-3 text-base leading-8 text-stone-700">Usa fotos con mármol claro, toallas neutras, manos aplicando crema, macro shots de textura y empaques bien iluminados en tonos oat cream, warm taupe, dusty lavender y soft teal.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 md:px-10 lg:px-12" id="respaldo">
        <div className="rounded-[34px] border border-stone-200 bg-stone-900 p-8 text-white shadow-[0_28px_70px_rgba(34,24,18,0.22)] md:p-10 lg:p-12">
          <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-stone-300">Respaldo del laboratorio</p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">La credibilidad también forma parte de la experiencia premium.</h2>
              <p className="mt-5 max-w-2xl text-base leading-8 text-stone-300">Lubriskin está respaldada por nuestro laboratorio, con licencia sanitaria ante COFEPRIS y procesos bajo ISO 9001. Esto fortalece la percepción de una marca seria, consistente y confiable para el cuidado corporal diario.</p>
            </div>

            <div className="grid gap-4">
              <div className="rounded-[24px] border border-white/10 bg-white/5 p-5 backdrop-blur">
                <div className="text-sm text-stone-300">Cumplimiento</div>
                <div className="mt-1 text-xl font-semibold">Licencia sanitaria ante COFEPRIS</div>
              </div>
              <div className="rounded-[24px] border border-white/10 bg-white/5 p-5 backdrop-blur">
                <div className="text-sm text-stone-300">Gestión de calidad</div>
                <div className="mt-1 text-xl font-semibold">Procesos bajo ISO 9001</div>
              </div>
              <div className="rounded-[24px] border border-white/10 bg-white/5 p-5 backdrop-blur">
                <div className="text-sm text-stone-300">Percepción de marca</div>
                <div className="mt-1 text-xl font-semibold">Experta, cercana y confiable</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white/80">
        <div className="mx-auto max-w-7xl px-6 py-16 md:px-10 lg:px-12">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-stone-500">Cierre</p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-stone-900 md:text-4xl">Lubriskin: la crema que siempre está en casa, ahora con una presencia digital más elevada.</h2>
              <p className="mt-4 text-lg leading-8 text-stone-600">Esta versión ya está pensada para verse más premium y ahora combina tus fotos reales de producto con imágenes editoriales tomadas del manual, incluyendo textura, aplicación en piel y recursos visuales lifestyle para elevar más la experiencia.</p>
            </div>
            <div className="rounded-[30px] border border-stone-200 bg-white p-8 shadow-[0_14px_45px_rgba(63,41,24,0.08)]">
              <h3 className="text-2xl font-semibold text-stone-900">Siguiente mejora recomendada</h3>
              <p className="mt-4 text-base leading-8 text-stone-600">Puedo seguirla puliendo con botón de WhatsApp, datos del laboratorio y una sección final para distribuidores o cadenas de autoservicio.</p>
              <div className="mt-6 flex flex-wrap gap-3">
                <button className="rounded-2xl bg-stone-900 px-6 py-3 text-sm font-semibold text-white shadow-lg">Solicitar información</button>
                <button className="rounded-2xl border border-stone-300 bg-white px-6 py-3 text-sm font-semibold text-stone-800">Ver catálogo</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

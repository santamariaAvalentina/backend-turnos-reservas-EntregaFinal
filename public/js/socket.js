const socket = io();

socket.on("servicesUpdated", (services) => {
  const container = document.getElementById("services-container");

  if (!container) return;

  container.innerHTML = services
    .map(
      (service) => `
        <article>
          <h2>${service.name}</h2>

          <p>Este servicio consta de: ${service.description}</p>

          <p>Duración: ${service.duration} minutos</p>

          <p class="service-price">
            Precio: $${service.price}
          </p>

          <p>Categoría: ${service.category}</p>

          ${
            service.available
              ? `<p class="service-availability available">
                   Servicio disponible
                 </p>`
              : `<p class="service-availability unavailable">
                   Servicio no disponible
                 </p>`
          }
        </article>
      `,
    )
    .join("");
});

socket.on("bookingsUpdated", (bookings) => {
  const container = document.getElementById("bookings-container");

  if (!container) return;

  container.innerHTML = bookings
    .map(
      (booking) => `
        <article class="booking-card">

          <h2>Cliente: ${booking.clientName}</h2>

          <div class="booking-details">

            <p><strong>Email:</strong> ${booking.clientEmail}</p>

            <div class="booking-datetime">

              <div class="datetime-item">
                <span class="datetime-label">FECHA</span>
                <span class="datetime-value">${booking.date}</span>
              </div>

              <div class="datetime-item">
                <span class="datetime-label">HORARIO</span>
                <span class="datetime-value">${booking.time}</span>
              </div>

            </div>

            <p><strong>Estado:</strong> ${booking.status}</p>

          </div>

          <section class="booking-services">

            <h3>Servicios asociados</h3>

            ${
              booking.services && booking.services.length
                ? `<ul class="service-list">
                    ${booking.services
                      .map(
                        (item) => `
                          <li class="service-item">

                            <span class="service-name">
                              ${
                                item.service
                                  ? item.service.name
                                  : "Servicio"
                              }
                            </span>

                            <span class="service-quantity">
                              Cantidad: ${item.quantity}
                            </span>

                          </li>
                        `,
                      )
                      .join("")}
                  </ul>`
                : `<p class="no-services">
                    Esta reserva no tiene servicios asociados.
                  </p>`
            }

          </section>

        </article>
      `,
    )
    .join("");
});

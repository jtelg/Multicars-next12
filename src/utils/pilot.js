export const sendPilotMsg = async (form) => {
  const serverURL = "https://api.pilotsolution.net/webhooks/welcome.php";
  const msgPilot = new DatosMessagePilot();
  msgPilot.pilot_firstname = form.nombre;
  msgPilot.pilot_cellphone = form.telefono;
  msgPilot.pilot_email = form.email;
  msgPilot.pilot_notes = form.descripcion || "";
  msgPilot.pilot_car_brand = form.marca;
  msgPilot.pilot_car_modelo = `${form.modelo} - ${form.anio}`;
  msgPilot.pilot_provider_url = `https://www.multicars.ar${form.url}`;

  console.log("🚀 ~ file: pilot.js:12 ~ sendPilotMsg ~ msgPilot:", msgPilot);
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: msgPilot,
  };
  const re = await fetch(serverURL, options);

  console.log(re);
};

export class DatosMessagePilot {
  action = "create"; // * Valor fijo "create".
  appkey = "209983B0-F307-4492-BE2F-8A8EF82CDFF5"; // *
  pilot_firstname = ""; // *
  pilot_cellphone = "";
  pilot_email = "";
  pilot_contact_type_id = 1; // * 1: Electrónico, 2: Telefónico , 3: Entrevista
  pilot_business_type_id = 2; // *  (1) Convencional / 0km | (2) Usados | (3) Plan de Ahorro.
  pilot_notes = ""; // Comentarios, observaciones
  pilot_suborigin_id = "FA7HLRMK0RWS6EA79"; // * Código que identifica el origen primario del Lead.
  pilot_car_brand = ""; // 	Marca del vehículo de interés Ej: Ford.
  pilot_car_modelo = ""; // Modelo del vehículo de interés Ej: Fiesta.
  pilot_provider_url = ""; // URL del servicio que recolectó el dato.
}

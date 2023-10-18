import { connect } from '@planetscale/database'

const config = {
  host: __DATABASE_HOST__,
  username: __DATABASE_USERNAME__,
  password: __DATABASE_PASSWORD__
}

const divj1 = document.getElementById("divJ1");
const divj2 = document.getElementById("divJ2");

const jugador1 = document.getElementById("jugador1"); // create VDO.Ninja in an IFRAME
const jugador2 = document.getElementById("jugador2"); // create VDO.Ninja in an IFRAME
const juez1 = document.getElementById("juez1"); // create VDO.Ninja in an IFRAME
const nombreJuez1 = document.getElementById("nombre_juez1")
const juez2 = document.getElementById("juez2"); // create VDO.Ninja in an IFRAME
const nombreJuez2 = document.getElementById("nombre_juez2")

const btnSelectCamera = document.getElementById("btnSelectCamera")

let params = new URLSearchParams(document.location.search);
let uuid_sala = params.get("room_uuid"); // get the uuid from room created before

let streamID = params.get("stream_id");

/* if (streamID == null) {
  selectCamera.setAttribute("disabled", "disabled")
}
console.log(streamID); */


const conn = connect(config)

async function results() {
  return await conn.execute('SELECT * FROM room where uuid_sala = ?', [uuid_sala])
}

results().then(data => {
  console.log(data);
  if(data != null){
    startRoom(data.rows)
  }
})

function startRoom(rows) {
  jugador1.src = rows[0].playerlink_1;
  jugador2.src = rows[0].playerlink_2;
  juez1.src =rows[0].juezlink_1;
  juez2.src =rows[0].juezlink_2;
  nombreJuez1.innerText = rows[0].juezname_1
  nombreJuez2.innerText = rows[0].juezname_2
}

setInterval(() => {
  results().then(results => {
    cameraSelected(results.rows[0].camara_seleccionada)
    localStorage.clear()
    localStorage.setItem("rows", JSON.stringify(results.rows));
  })
}, 2000);

let rows = JSON.parse(localStorage.getItem("rows"));

let params_pyl_1 = new URLSearchParams(new URL(rows[0].playerlink_1).search);
let streamID_1 = params_pyl_1.get("view");
let params_pyl_2 = new URLSearchParams(new URL(rows[0].playerlink_2).search);
let streamID_2 = params_pyl_2.get("view");

let camera_selected = rows[0].camara_seleccionada

function cameraSelected(camera) {
  if (camera != null) {
    if (streamID_1 == camera) {
      divj1.style.cssText = 'box-shadow: 0px 0px 50px 15px rgba(9, 235, 255, 0.912); background-color: rgb(21, 178, 89);';
      btnSelectCamera.style.backgroundColor = 'rgb(21, 178, 89)';
      btnSelectCamera.disabled = true;
    } else if (streamID_2 == camera) {
      divj2.style.cssText = 'box-shadow: 0px 0px 50px 15px rgba(9, 235, 255, 0.912); background-color: rgb(21, 178, 89);';
      btnSelectCamera.style.backgroundColor = 'rgb(21, 178, 89)';
      btnSelectCamera.disabled = true;
    }
  } else {
      divj1.style.cssText = '';
      divj2.style.cssText = '';
      btnSelectCamera.style.backgroundColor = 'rgb(178, 27, 21)';
      btnSelectCamera.disabled = false;
  }
}

btnSelectCamera.addEventListener("click", selectCamera) // event for btn_jugador

function selectCamera() {
  if (camera_selected == null) {
    if (streamID == streamID_1) {
      updateCameraSelected(uuid_sala, streamID_1)
      divj1.style.cssText = 'box-shadow: 0px 0px 50px 15px rgba(9, 235, 255, 0.912); background-color: rgb(21, 178, 89);';
      btnSelectCamera.style.backgroundColor = 'rgb(21, 178, 89)';
      btnSelectCamera.disabled = true;
    } else if (streamID == streamID_2) {
      updateCameraSelected(uuid_sala, streamID_2)
      divj2.style.cssText = 'box-shadow: 0px 0px 50px 15px rgba(9, 235, 255, 0.912); background-color: rgb(21, 178, 89);';
      btnSelectCamera.style.backgroundColor = 'rgb(21, 178, 89)';
      btnSelectCamera.disabled = true;
    }
  }

}

// Actualizar Camara Seleccionada Sala

async function updateCameraSelected(sala, streamID) {
  const query = 'UPDATE room SET camara_seleccionada = :camera_id where uuid_sala = :sala'

  const params = {
    sala: sala,
    camera_id: streamID
  }

  await conn.execute(query, params)

}
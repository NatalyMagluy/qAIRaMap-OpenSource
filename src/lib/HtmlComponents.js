import {duration, notNull } from "./helpers.js";








// const droneChart = `
// <div class="animate__animated animate__zoomIn z-depth-4 none" id="over_map_drones">
// <h6><strong>Available Andean Drones</strong></h6>
// <table class=" centered striped highlight responsive-table" style="max-height:100px;">
// <thead>
// <tr>
// <th></th>
// <th>Name</th>
// <th>Last Position</th>
// <th>Status</th>
// </tr>
// </thead>
// <tbody>
// </tbody>
// </table>
// </div>
// `;

// const droneChart = `
// <div class="animate__animated animate__zoomIn z-depth-4 none over_map_drones">
// <div class="btn-group">
// <button id="CO" >Carbon monoxide (CO)<sub>(&microg/m<sup>3</sup>)</sub></button>
// <button id="CO2" >Carbon dioxide (CO<sub>2</sub>) <sub>(ppm)</sub></button>
// <button id="NO2" >Nitrogen dioxide (NO<sub>2</sub>) <sub>(&microg/m<sup>3</sup>)</sub></button>
// <button id="O3" >Ozone <br> (O<sub>3</sub>)<sub>(&microg/m<sup>3</sup>)</sub></button>
// <button id="H2S" >Hydrogen sulfide (H<sub>2</sub>S)<sub>(&microg/m<sup>3</sup>)</sub></button>
// <button id="SO2" >Sulfur dioxide  <br> (SO<sub>2</sub>)<sub>(&microg/m<sup>3</sup>)</sub></button>
// <button id="PM25" >Particulate material PM2,5&micro<sub>(&microg/m<sup>3</sup>)</sub></button>
// <button id="PM10" >Particulate material PM10&micro<sub>(&microg/m<sup>3</sup>)</sub></button>
// <button id="VOC" >Volatile Organic Compounds (VOC)<sub>(ppm)</sub></button>
// </div>
// </div>
// `;


// const droneChartRow = (q, position, status)=>`
// <tr class="drone_position" id="${position.lat},${position.lng}">
// <td><img class="drone_icon" src="https://upload.wikimedia.org/wikipedia/commons/c/c5/Aerial_Photography_UAV_Icon.svg" alt="drone_icon"></td>
// <td>${q.comercial_name}</td>
// <td id="${q.name}_position">Lat: ${position.lat.toFixed(5)}, Lng: ${position.lng.toFixed(5)}</td>
// <td id="${q.name}_status"> ${status}</td>
// </tr>
//   `;














const infowindow =`
<div class="col s12">
<ul class="tabs">
<li class="tab col s2"><a class="active" href="#test1">INCA</a></li>
<li class="tab col s2"><a href="#test2" >Real Time</a></li>
<li class="tab col s2"><a href="#test3" >Weather</a></li>
<li class="tab col s2"><a href="#test4">Graphics</a></li>
</ul>
</div>
<div id="test1" class="col s12"></div>
<div id="test2" class="col s12"></div>
<div id="test3" class="col s12"></div>
<div id="test4" class="col s12"></div>

`;

const pannelInca = (inca, color)=> `
<table class="responsive-table stripped centered pannel-inca">
<thead>
<tr>
<th>${window.innerWidth > 768 ? 'Carbon monoxide (CO)' : 'CO'}</th>
<th>${window.innerWidth > 768 ? 'Nitrogen dioxide (NO<sub>2</sub>)' : 'NO<sub>2</sub>'}</th>
<th>${window.innerWidth > 768 ? 'Ozone (O<sub>3</sub>)' : 'O<sub>3</sub>'}</th>
<th>${window.innerWidth > 768 ? 'Hydrogen sulfide (H<sub>2</sub>S)' : 'H<sub>2</sub>S'}</th>
<th>${window.innerWidth > 768 ? 'Sulfur dioxide (SO<sub>2</sub>)' : 'SO<sub>2</sub>'}</th>
<th>${window.innerWidth > 768 ? 'Particulate material ' : 'PM'}2,5&micro;</th>
<th>${window.innerWidth > 768 ? 'Particulate material ' : 'PM'}10&micro;</th>
<th>Hour</th>
</tr>
</thead>
<tbody>
<tr>
<td bgcolor="${color.result.CO.color}">${notNull(inca.CO)}</td>
<td bgcolor="${color.result.NO2.color}">${notNull(inca.NO2)}</td>
<td bgcolor="${color.result.O3.color}">${notNull(inca.O3)}</td>
<td bgcolor="${color.result.H2S.color}">${notNull(inca.H2S)}</td>
<td bgcolor="${color.result.SO2.color}">${notNull(inca.SO2)}</td>
<td bgcolor="${color.result.PM25.color}">${notNull(inca.PM25)}</td>
<td bgcolor="${color.result.PM10.color}">${notNull(inca.PM10)}</td>
<td>${color.time}</td>
</tr>
</tbody>
</table>
`;

const pannelRealTime = (socket)=> `
<table class="responsive-table stripped centered pannel-inca">
<thead>
<th>${window.innerWidth > 768 ? 'Carbon monoxide (CO)' : 'CO'}<sub>(&microg/m<sup>3</sup>)</sub></th>
<th>${window.innerWidth > 768 ? 'Nitrogen dioxide (NO<sub>2</sub>) ' : 'NO<sub>2</sub>'}<sub>(&microg/m<sup>3</sup>)</sub></th>
<th>${window.innerWidth > 768 ? 'Ozone <br> (O<sub>3</sub>)' : 'O<sub>3</sub>'}<sub>(&microg/m<sup>3</sup>)</sub></th>
<th>${window.innerWidth > 768 ? 'Hydrogen sulfide (H<sub>2</sub>S)' : 'H<sub>2</sub>S'}<sub>(&microg/m<sup>3</sup>)</sub></th>
<th>${window.innerWidth > 768 ? 'Sulfur dioxide  <br> (SO<sub>2</sub>)' : 'SO<sub>2</sub>'}<sub>(&microg/m<sup>3</sup>)</sub></th>
<th>${window.innerWidth > 768 ? 'Particulate material PM2,5&micro' : 'PM2,5&micro'}<sub>(&microg/m<sup>3</sup>)</sub></th>
<th>${window.innerWidth > 768 ? 'Particulate material PM10&micro' : 'PM10&micro'}<sub>(&microg/m<sup>3</sup>)</sub></th>
</tr>
</thead>
<tbody>
<tr>
<td>${notNull(socket.CO_ug_m3)}</td>
<td>${notNull(socket.NO2_ug_m3)}</td>
<td>${notNull(socket.O3_ug_m3)}</td>
<td>${notNull(socket.H2S_ug_m3)}</td>
<td>${notNull(socket.SO2_ug_m3)}</td>
<td>${notNull(socket.PM25)}</td>
<td>${notNull(socket.PM10)}</td>
</tr>
</tbody>
</table>
`;

const pannelMeteo = (zone,meteo,uv)=> `
<p>Zone Type: ${zone.zone}</p>
<table class="responsive-table stripped centered pannel-inca">
<thead>
<tr>
<th>${window.innerWidth > 768 ? 'Noise' : '<i class="small material-icons">volume_up</i>'}<sub>(dB)</sub></th>
<th>${window.innerWidth > 768 ? 'Temperature ' : 'T '}<sub>(°C)</sub></th>
<th>${window.innerWidth > 768 ? 'Ultra Violet ' : 'UV '}<sub>(UVI)</sub><br></th>
<th>${window.innerWidth > 768 ? 'Pressure ' : 'P '}<sub>(hPa)</sub></th>
<th>${window.innerWidth > 768 ? 'Humidity ' : 'HR '}<sub>(%)</sub></th>
</tr>
</thead>
<tbody>
<tr>
<td bgcolor="${zone.color}">${notNull(meteo.spl)}</td>
<td>${notNull(meteo.temperature)}</td>
<td bgcolor="${uv.color}">${notNull(meteo.UV)}</td>
<td>${notNull(meteo.pressure)}</td>
<td>${notNull(meteo.humidity)}</td>
</tr>
</tbody>
</table>
`;

const pannelGraphics = (qhawax)=> `
<p>Graphics from the last 24 hours. Click en <i class="tiny material-icons">remove_red_eye</i></p>
<table class="responsive-table stripped centered pannel-inca">
<thead id="graph-head">
<th>${window.innerWidth > 768 ? 'Carbon monoxide (CO)' : 'CO'}</th>
<th>${window.innerWidth > 768 ? 'Nitrogen dioxide (NO<sub>2</sub>)' : 'NO<sub>2</sub>'}</th>
<th>${window.innerWidth > 768 ? 'Ozone (O<sub>3</sub>)' : 'O<sub>3</sub>'}</th>
<th>${window.innerWidth > 768 ? 'Hydrogen sulfide (H<sub>2</sub>S)' : 'H<sub>2</sub>S'}</th>
<th>${window.innerWidth > 768 ? 'Sulfur dioxide (SO<sub>2</sub>)' : 'SO<sub>2</sub>'}</th>
<th>${window.innerWidth > 768 ? 'Particulate material ' : 'PM'}2,5&micro;</th>
<th>${window.innerWidth > 768 ? 'Particulate material ' : 'PM'}10&micro;</th>
</tr>
</thead>
<tbody>
<tr>
<td class="infowindow-graph icon-eye" ><a class="modal-trigger" href="#modalGraphic" ><i class="material-icons icon-green" data-infograph="${qhawax.name}" data-label="CO">remove_red_eye</i></a></td>
<td class="infowindow-graph icon-eye" ><a class="modal-trigger" href="#modalGraphic" ><i class="material-icons icon-green" data-infograph="${qhawax.name}" data-label="NO2">remove_red_eye</i></a></td>
<td class="infowindow-graph icon-eye" ><a class="modal-trigger" href="#modalGraphic" ><i class="material-icons icon-green" data-infograph="${qhawax.name}" data-label="O3">remove_red_eye</i></a></td>
<td class="infowindow-graph icon-eye" ><a class="modal-trigger" href="#modalGraphic" ><i class="material-icons icon-green" data-infograph="${qhawax.name}" data-label="H2S">remove_red_eye</i></a></td>
<td class="infowindow-graph icon-eye" ><a class="modal-trigger" href="#modalGraphic" ><i class="material-icons icon-green" data-infograph="${qhawax.name}" data-label="SO2">remove_red_eye</i></a></td>
<td class="infowindow-graph icon-eye" ><a class="modal-trigger" href="#modalGraphic" ><i class="material-icons icon-green" data-infograph="${qhawax.name}" data-label="PM25">remove_red_eye</i></a></td>
<td class="infowindow-graph icon-eye" ><a class="modal-trigger" href="#modalGraphic" ><i class="material-icons icon-green" data-infograph="${qhawax.name}" data-label="PM10">remove_red_eye</i></a></td>
</tr>
</tbody>
</table>
`;









export {
infowindow,
pannelGraphics,
pannelInca,
pannelMeteo,
pannelRealTime
};

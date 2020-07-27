import { drawQhawaxMap, mapCenter, zoomByCompany } from '../lib/mapAssets.js';
import {navBarClient} from '../lib/navBarClient.js';
import {viewMap} from '../lib/HtmlComponents.js';
import { requestAllQhawaxByCompany} from '../requests/get.js';

const request = async (map, company) => {
   
	const qhawax_list = await requestAllQhawaxByCompany(company);
	qhawax_list.forEach(qhawax => {

		drawQhawaxMap(map, qhawax, company);
	});
};

const viewFreeMap = company => {
	company=1;
	const mapElem = document.createElement('div');
	navBarClient(mapElem, viewMap);

	const map = new google.maps.Map(mapElem.querySelector('#map'), {
		center: mapCenter(company),
		zoom: zoomByCompany(company),
		mapTypeId: google.maps.MapTypeId.ROADMAP,
	});

	map.markers = [];


			
			const socket = io.connect(
				'https://qairamapnapi-dev.qairadrones.com/'
			);
			socket.on('update_inca', res => {
				if (qhawax.name === res.name) {
					qhawax.main_inca = res.main_inca;

					drawQhawaxMap(map, qhawax, company);
				}
			});

			request(map, company);

	return mapElem;
};

export { viewFreeMap };

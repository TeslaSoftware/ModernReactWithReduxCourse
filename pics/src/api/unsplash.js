import axios from 'axios';

export default axios.create({
	baseURL: 'https://api.unsplash.com',
	headers :{
		Authorization: 'Client-ID P2Hz6bEGCVUVZscdQt1aZal635TaZp96zdYsnCe0qsk'
	}
})
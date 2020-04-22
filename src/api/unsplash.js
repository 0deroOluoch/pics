import axios from 'axios'

export default axios.create({
    baseURL :'https://api.unsplash.com',
    headers:{
        Authorization:'Client-ID i6yT_60r6wb579epwbsXRntXd8wMzglUXCMvZs-UkUc'
    }
})
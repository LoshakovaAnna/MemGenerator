import axios from 'axios';
import qs from 'query-string';

export const putImages = (images)   => ({ type: "PUT_IMAGES", payload: images });
export const putId = (id)   => ({ type: "PUT_ID", payload: id });
export const putText = (text)   => ({ type: "PUT_TEXT", payload: text });
export const putUrl = (url)   => ({ type: "PUT_URL", payload: url });


const username ="g_user_107257642549096835361";
const password = "1234";

export const genMem = (obj) => {
    return (dispatch) =>{
        const newObj = { ...obj, username, password};
        const requeryDate = qs.stringify(newObj);

        axios.post('https://api.imgflip.com/caption_image', requeryDate)
            .then( response => {
               dispatch(putUrl(response.data.data.url));
            })
            .catch(e => {console.log(e);});
    }
    
}

export const getImages =  (count) => {
    return (dispatch) =>{
        let images=[];
        axios.get('https://api.imgflip.com/get_memes')
            .then( response  => {
                images = response.data.data.memes;
                let newArr = images.slice(0, count);            
                dispatch(putImages(newArr));
            })
            .catch(e => {console.log(e);});
    }
};
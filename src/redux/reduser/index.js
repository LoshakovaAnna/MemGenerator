const initialState = {
    images:[],
    id:null,
    text0:'',
    text1:'',
    url:null
}

export default function reducer(state = initialState, action) {
    switch (action.type) {
      case "PUT_IMAGES":
        return {                    
            ...state,                 
            images: [             
                ...action.payload 
            ]
        };
        case "PUT_ID":
            return {              
                ...state,             
                id : action.payload 
            };
        case "PUT_TEXT":
            return {                   
                ...state,                 
                text0 : action.payload.text0, 
                text1 : action.payload.text1  
            
            };
        case 'PUT_URL' :
            return {
                ...state,
                url : action.payload
        }
      
      default:
        return state;
    }
  }
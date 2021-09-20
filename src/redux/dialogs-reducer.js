import profileReducer from "./profile-reducer";

const SEND_MESSAGE = "SEND_MESSAGE"

let initialState = {
    dialogsData : [
        {id: 1, name: 'Dima'},
        {id: 2, name: 'Andrey'},
        {id: 3, name: 'Sveta'},
        {id: 4, name: 'Sasha'}
    ],
    messageData : [
        {id: 1, message:'Hi'},
        {id: 2, message: 'to'},
        {id: 3, message: 'vfvdv'},
        {id: 4, message: 'Sttehasha'}
    ],
    newMessageBody: '',
};

const dialogsReducer = (state = initialState, action) => {

    let stateCopy = {...state}

    switch (action.type){

        case SEND_MESSAGE:
            let body = action.newMassageBody;
            return {
                ...state,
                newMessageBody:'',
                messageData: [...state.messageData, {id: 5, message: body} ],
            };

        default:  return stateCopy;
    }
}

export const sendMessageCreator =(newMassageBody)=> ({ type: SEND_MESSAGE, newMassageBody })





export  default dialogsReducer
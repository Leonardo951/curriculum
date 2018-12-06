import { takeLatest, put, call } from 'redux-saga/effects';
import axios from 'axios';
import { push } from 'connected-react-router';

function setApi(data) {
    const options = {
        method: 'POST',
        data: {mail: data},
        url: '/auth/reset/password',
    };
    return axios(options)
}

function* resetPass(action) {
    try {
        const data = yield call(setApi, action.data);
        if(data.data.error){
            yield put({type: 'FAILED_SUBMIT_RESET_PASSWORD', payload: {error: data.data.error}});
        }else{
            yield put({type: 'SUCCESS_SUBMIT_RESET_PASSWORD'});
        }

    }catch(error){
        yield put({type: 'FAILED_SUBMIT_RESET_PASSWORD', payload: {error: 'Houve um erro inesperado. Tente novamente!'}});
    }
}

export default function* requestResetPass() {
    yield [
        takeLatest('REQUEST_RESET_PASSWORD', resetPass)
    ];
}
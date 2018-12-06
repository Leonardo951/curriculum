import { takeLatest, put, call } from 'redux-saga/effects';
import axios from 'axios';
import { login } from '../../services/auth';
import { push } from 'connected-react-router';

function setApi(data) {
    const options = {
        method: 'POST',
        data: data,
        url: '/auth/authenticate',
    };
    return axios(options)
}

function* authenticateUser(action) {
    try {
        const data = yield call(setApi, action.data);
        if(data.data.error){
            yield [console.log(data.data.error)];
            yield put({type: 'FAILED_LOGIN', payload: {error: data.data.error}});
        }else{
            yield put({type: 'LOGIN_VALID', payload: {user: data.data.user}});
            yield put(login(data.data.token));
            yield put(push("/cv?"+data.data.user.key));
        }

    }catch(error){
        yield put({type: 'FAILED_NEW_REGISTER', payload: {error: 'Houve um erro inesperado.\n Tente novamente!'}});
    }
}

export default function* requestLogin() {
    yield [
        takeLatest('REQUEST_LOGIN', authenticateUser)
    ];
}
import { takeLatest, put, call } from 'redux-saga/effects';
import axios from "axios";

function setApi(data) {
    return axios.post('/auth/register', {data: data})
}

function* registerUser(action) {
    try {
        const data = yield call(setApi, action.data);
        yield put({type: 'NEW_REGISTER', payload: {user: data.data.Curriculum, token: data.data.token}});
    }catch(error){
        yield put({type: 'FAILED_NEW_REGISTER', payload: {error: 'CPF já cadastrado'}});
    }
}

export default function* requestAddUser() {
    yield [
        takeLatest('REQUEST_LOADING', registerUser)
    ];
}
import { takeLatest, put, call } from 'redux-saga/effects';
import axios from 'axios';
import {getToken, login} from '../../services/auth';
import { push } from 'connected-react-router';

export default function* requestRegisterCurriculum() {
    yield [
        takeLatest('LOADING_REGISTER_CURRICULUM', registerCurriculum)
    ];
}

function* registerCurriculum(action) {
    try {
        const res = yield call(setApi, action.data);
        yield put({ type: 'UPDATE_CURRICULUM', payload: { curriculum: res.data.Curriculum } });
        yield put(login(res.data.token));
        yield put(push("/cv?id=" +res.data.Curriculum.key));
    }catch(error){
        yield [console.log(error)];
        yield put({type: 'FAILED_NEW_CURRICULUM', payload: {error: 'Houve um erro inesperado.\n Tente novamente!'}});
    }
}

function setApi(data) {
    const token = getToken();
    const options = {
        method: 'POST',
        headers: { 'authorization': `Bearer ${token}` },
        data: data,
        url: '/curriculum/set',
    };
    return axios(options)
}
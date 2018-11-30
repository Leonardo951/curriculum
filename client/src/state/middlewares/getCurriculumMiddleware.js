import { takeLatest, put, call } from 'redux-saga/effects';
import axios from 'axios';

export default function* requestCurriculum() {
    yield [
        takeLatest('LOADING_GET_CURRICULUM', getCurriculum)
    ];
}

function* getCurriculum(action) {
    try {
        const res = yield call(getApi, action.data);
        yield put({ type: 'OPEN_CURRICULUM', payload: { curriculum: res.data.Curriculum } });
    }catch(error){
        yield [console.log(error)];
        yield put({type: 'FAILED_OPEN_CURRICULUM', payload: {error: 'Curriculo não existente.\n Tente novamente!'}});
    }
}

function getApi(data) {
    const options = {
        method: 'POST',
        data: {key: data},
        url: '/curriculum/get',
    };
    return axios(options)
}
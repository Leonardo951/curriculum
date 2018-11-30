import { takeLatest, put, call } from 'redux-saga/effects';
import axios from 'axios';
import { registerValidator } from '../../services/auth';
import { push } from 'connected-react-router';

function setApi(data) {
    const options = {
        method: 'POST',
        data: data,
        url: '/auth/register',
    };
    return axios(options)
    // return axios.post('/auth/register', {data: data})
}

function* registerUser(action) {
    try {
        const data = yield call(setApi, action.data);
        if(data.data.error){
            yield [console.log(data.data.error)];
            yield put({type: 'FAILED_NEW_REGISTER', payload: {error: data.data.error}});
        }else{
            yield put({type: 'NEW_REGISTER', payload: {user: data.data.Curriculum}});
            yield put(registerValidator(data.data.token));
            yield put(push("/curriculo"));
        }

    }catch(error){
        yield put({type: 'FAILED_NEW_REGISTER', payload: {error: 'Houve um erro inesperado.\n Tente novamente!'}});
    }
}

export default function* requestAddUser() {
    yield [
        takeLatest('REQUEST_LOADING', registerUser)
    ];
}
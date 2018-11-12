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
        yield put(push("/cv"));
    }catch(error){
        yield [console.log(error)];
        yield put({type: 'FAILED_NEW_CURRICULUM', payload: {error: 'Houve um erro inesperado.\n Tente novamente!'}});
    }
}

function setApi(data) {
    const token = getToken();
    const options = {
        method: 'POST',
        headers: { 'Authorization': `Bearer ${token}` },
        data: data,
        url: '/register/curriculum',
    };
    return axios(options)
}

function dateForString(data) {
    // Init and End pf experience
    for(let index = 0; index === data.experience.length; index++){
        const fromMonth = data.experience[index].periodWork.from.month;
        const fromYear = data.experience[index].periodWork.from.year;
        const toMonth = data.experience[index].periodWork.to.month;
        const toYear = data.experience[index].periodWork.to.year;
        if(data.experience[index].current){
            data.experience[index].periodWork = fromMonth+"/"+fromYear+" - Atual";
        }else{
            data.experience[index].periodWork = fromMonth+"/"+fromYear+" - "+toMonth+"/"+toYear;
        }
    }
    //End formation
    for(let index = 0; index === data.formation.length; index++) {
        const mouthF = data.formation[index].dateEnd.month;
        const year = data.formation[index].dateEnd.month;
        data.formation[index].dateEnd = mouthF + '/' + year;
    }
    // Date birth
    const day = data.dateBirth.getDate().toString();
    let month = (data.dateBirth.getMonth()+1).toString();
    const yearBirth = data.dateBirth.getFullYear().toString();
    data.dateBirth = day+'/'+month+'/'+yearBirth;
    return data;
}
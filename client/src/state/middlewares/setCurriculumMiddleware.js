import { takeLatest, put, call } from 'redux-saga/effects';
import axios from 'axios';
import {getToken, login} from '../../services/auth';
import { push } from 'connected-react-router';
import {INPROGRESS} from "../../constant/curriculumOptions";

export default function* requestRegisterCurriculum() {
    yield [
        takeLatest('LOADING_REGISTER_CURRICULUM', registerCurriculum)
    ];
}

function* registerCurriculum(action) {
    try {
        const curriculumData = yield call(reorderArrays, action.data);
        const res = yield call(setApi, curriculumData);
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

function reorderArrays(cv) {
    cv.education.sort((a,b)=>{
        if(b.status === INPROGRESS){
            return 1
        }else if(a.status === INPROGRESS){
            return -1
        }
        if(a.dateEnd.year < b.dateEnd.year) {
            return 1
        }else if(a.dateEnd.year < b.dateEnd.year){
            return -1;
        }else{
            if(a.dateEnd.month < b.dateEnd.month){
                return 1
            }else if(a.dateEnd.month > b.dateEnd.month){
                return -1
            }else{
                return 0
            }
        }
    });
    cv.experience.sort((a,b)=> {
        if (b.current) {
            return 1
        } else if (a.current) {
            return -1
        }
        if (a.periodWork.to.year < b.periodWork.to.year) {
            return 1
        } else if (a.periodWork.to.year > b.periodWork.to.year) {
            return -1
        } else {
            // if it is the same year
            if (a.periodWork.to.month < b.periodWork.to.month) {
                return 1
            } else if (a.periodWork.to.month > b.periodWork.to.month) {
                return -1
            } else {
                // if it is the same year and the same month, it checks what started first
                if (a.periodWork.from.year < b.periodWork.from.year) {
                    return 1
                } else if (a.periodWork.from.year > b.periodWork.from.year) {
                    return -1
                } else {
                    // if it's the same start year
                    if (a.periodWork.from.month < b.periodWork.from.month) {
                        return 1
                    } else if (a.periodWork.from.month > b.periodWork.from.month) {
                        return -1
                    } else {
                        return 0
                    }
                }
            }
        }
    });
    return cv
}
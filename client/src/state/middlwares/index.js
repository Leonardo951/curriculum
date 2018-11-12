import { fork } from 'redux-saga/effects';
import requestAddUser from './auth';
import requestRegisterCurriculum from './curriculum';

export default function* root() {
    yield [fork(requestAddUser)];
    yield [fork(requestRegisterCurriculum)];
}
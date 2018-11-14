import { fork } from 'redux-saga/effects';
import requestAddUser from './authMiddleware';
import requestRegisterCurriculum from './curriculumMiddleware';

export default function* root() {
    yield [fork(requestAddUser)];
    yield [fork(requestRegisterCurriculum)];
}
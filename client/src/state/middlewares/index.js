import { fork } from 'redux-saga/effects';
import requestAddUser from './authMiddleware';
import requestRegisterCurriculum from './setCurriculumMiddleware';
import requestCurriculum from './getCurriculumMiddleware';

export default function* root() {
    yield [fork(requestAddUser)];
    yield [fork(requestRegisterCurriculum)];
    yield [fork(requestCurriculum)];
}
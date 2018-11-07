import { fork } from 'redux-saga/effects';
import requestAddUser from './auth';

export default function* root() {
    yield [fork(requestAddUser)];
}
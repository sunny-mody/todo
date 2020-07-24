import { put, takeEvery, all, fork } from 'redux-saga/effects';

import { add, edit, commit, remove, toggle, reset } from './actions';

import { REQUEST_TO_ADD, REQUEST_TO_EDIT, REQUEST_COMMIT_EDIT, REQUEST_TO_REMOVE, REQUEST_TO_TOGGLE, REQUEST_TO_RESET } from './todoConstants';
import { RequestToAdd, RequestToEdit, RequestCommitEdit, RequestToRemove, RequestToToggle, RequestToReset } from './todoTypes';

function* requestAddTodo(data: RequestToAdd) {
    try {
        yield put(add(data.todo))
    } catch(e) {
        console.error(e.message)
    }
}

function* requestEditTodo(data: RequestToEdit) {
    try {
        yield put(edit(data.id))
    } catch(e) {
        console.error(e.message)
    }
}

function* requestCommitTodo(data: RequestCommitEdit) {
    try {
        yield put(commit(data.todo))
    } catch(e) {
        console.error(e.message)
    }
}

function* requestRemoveTodo(data: RequestToRemove) {
    try {
        yield put(remove(data.id))
    } catch(e) {
        console.error(e.message)
    }
}

function* requestToggleTodo(data: RequestToToggle) {
    try {
        yield put(toggle(data.id))
    } catch(e) {
        console.error(e.message)
    }
}

function* requestReset(data: RequestToReset) {
    try {
        yield put(reset())
    } catch(e) {
        console.error(e.message)
    }
}

function* watchAddTodo() {
    yield takeEvery(REQUEST_TO_ADD, requestAddTodo);
}

function* watchEditTodo() {
    yield takeEvery(REQUEST_TO_EDIT, requestEditTodo);
}

function* watchCommitTodo() {
    yield takeEvery(REQUEST_COMMIT_EDIT, requestCommitTodo);
}

function* watchRemoveTodo() {
    yield takeEvery(REQUEST_TO_REMOVE, requestRemoveTodo);
}

function* watchToggleTodo() {
    yield takeEvery(REQUEST_TO_TOGGLE, requestToggleTodo);
}

function* watchReset() {
    yield takeEvery(REQUEST_TO_RESET, requestReset);
}

const rootSaga = function* root() {
    yield all([
        fork(watchAddTodo),
        fork(watchEditTodo),
        fork(watchCommitTodo),
        fork(watchRemoveTodo),
        fork(watchToggleTodo),
        fork(watchReset)
    ])
}

export default rootSaga;
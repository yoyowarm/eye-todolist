import request from '../utils/request'

export async function login(account, passwd) {
  return (await request.post('/auth', { account, passwd })).data
}

export async function getToDoLists() {
  return (await request.get('/to-do-list/list')).data
}

export async function getList(id) {
  return (await request.get(`/to-do-list/detail/${id}`)).data
}

export async function updateList(id, data) {
  return (await request.put(`/to-do-list/detail/${id}`), { data }).data
}

export async function deleteList(id) {
  return (await request.delete(`/to-do-list/detail/${id}`)).data
}

export async function getNewestId() {
  return (await request.get('/to-do-list/the-newest-id')).data
}
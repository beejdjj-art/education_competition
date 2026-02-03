import { request } from '$lib/utils/http';

export const studentsApi = {
  getAll: () => request('/students'),
  getOne: (id: number) => request(`/students/${id}`),
  create: (data: any) =>
    request('/students', {
      method: 'POST',
      body: JSON.stringify(data)
    }),
  update: (id: number, data: any) =>
    request(`/students/${id}`, {
      method: 'PUT',
      body: JSON.stringify(data)
    }),
  remove: (id: number) =>
    request(`/students/${id}`, { method: 'DELETE' })
};

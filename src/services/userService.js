// API service for user operations

import api from "./api"

const Users_Endpoint = "/users"

export const userService = {
  // GET All Users
  getAllUsers: async () => {
    try {
      const response = await api.get(`${Users_Endpoint}`)
      return response.data
    } catch (e) {
      console.error(`Error Fetching users : ${e}`)
      throw e
    }
  },

  // GET User by ID
  getUserById: async (id) => {
    try {
      const response = await api.get(`${Users_Endpoint}/${id}`)
      return response.data
    } catch (e) {
      console.error(`Error Fetching user ${id}: ${e}`);
      throw e
    }
  },

  // POST Create New User
  createUser: async (userData) => {
    try {
      const newUser = {
        ...userData,
        createdAt: new Date().toISOString(),
      };
      const response = await api.post(`${Users_Endpoint}`, newUser)
      return response.data
    } catch (e) {
      console.error(`Error Creating user: ${e}`)
      throw e;
    }
  },

  // PUT Update User
  updateUser: async (id, userData) => {
    try {
      const response = await api.put(`${Users_Endpoint}/${id}`, userData);
      return response.data
    } catch (e) {
      console.error(`Error Updating user ${id}: ${e}`)
      throw e;
    }
  },

  // PATCH partial update user
  patchUser: async (id, partialData) => {
    try {
      const response = await api.patch(`${Users_Endpoint}/${id}`, partialData);
      return response.data
    } catch (e) {
      console.error(`Error Patching user ${id}: ${e}`)
      throw e
    }
  },

  // DELETE User
  deleteUser: async (id) => {
    try {
      const response = await api.delete(`{${Users_Endpoint}/${id}`)
      return response.data
    } catch (e) {
      console.error(`Error Deleting user ${id}: ${e}`)
      throw e
    }
  },

  // GET Users by role (Custom Query)
  getUsersByRole: async (role) => {
    try {
      const response = await api.get(Users_Endpoint, {params: {role}})
      return response.data
    } catch (e) {
      console.error(`Error Fetching users with role ${role}: ${e}`)
      throw e
    }
  }

}

export default userService
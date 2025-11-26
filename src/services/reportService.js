// API service for report operations

import api from "./api"


const Reports_Endpoint = "/reports"

export const reportService = {
  // GET all reports
  getAllReports: async () => {
    try {
      const response = await api.get(Reports_Endpoint)
      return response.data
    } catch (e) {
      console.error(`Error fetching reports: ${e}`)
      throw e
    }
  },

  // GET report by ID
  getReportById: async (id) => {
    try {
      const response = await api.get(`${Reports_Endpoint}/${id}`)
      return response.data
    } catch (e) {
      console.error(`Error fetching report ${id}: ${e}`)
      throw e
    }
  },

  // POST create new report
  createReport: async (reportData) => {
    try {
      const newReport = {
        ...reportData,
        status: reportData.status || "pending",
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      }
      const response = await api.post(Reports_Endpoint, newReport)
      return response.data
    } catch (e) {
      console.error(`Error creating report: ${e}`)
      throw e
    }
  },

  // PUT update report
  updateReport: async (id, reportData) => {
    try {
      const updatedReport = {
        ...reportData,
        updatedAt: new Date().toISOString(),
      }
      const response = await api.put(
        `${Reports_Endpoint}/${id}`,
        updatedReport
      )
      return response.data
    } catch (e) {
      console.error(`Error updating report ${id}: ${e}`)
      throw e
    }
  },

  // PATCH partial update report (e.g., change status)
  patchReport: async (id, partialData) => {
    try {
      const updatedData = {
        ...partialData,
        updatedAt: new Date().toISOString(),
      }
      const response = await api.patch(
        `${Reports_Endpoint}/${id}`,
        updatedData
      )
      return response.data
    } catch (e) {
      console.error(`Error patching report ${id}: ${e}`)
      throw e
    }
  },

  // DELETE report
  deleteReport: async (id) => {
    try {
      const response = await api.delete(`${Reports_Endpoint}/${id}`)
      return response.data
    } catch (e) {
      console.error(`Error deleting report ${id}: ${e}`)
      throw e
    }
  },

  // GET reports by status (custom query)
  getReportsByStatus: async (status) => {
    try {
      const response = await api.get(Reports_Endpoint, {
        params: { status },
      })
      return response.data
    } catch (e) {
      console.error(`Error fetching reports with status ${status}: ${e}`)
      throw e
    }
  },

  // GET reports by category (custom query)
  getReportsByCategory: async (category) => {
    try {
      const response = await api.get(Reports_Endpoint, {
        params: { category },
      })
      return response.data
    } catch (e) {
      console.error(`Error fetching reports with category ${category}: ${e}`)
      throw e
    }
  },

  // GET reports by user ID (custom query)
  getReportsByUserId: async (userId) => {
    try {
      const response = await api.get(Reports_Endpoint, {
        params: { userId },
      })
      return response.data
    } catch (e) {
      console.error(`Error fetching reports for user ${userId}: ${e}`)
      throw e
    }
  },

  // GET reports with pagination and sorting
  getReportsWithOptions: async (options = {}) => {
    try {
      const {
        page = 1,
        limit = 10,
        sortBy = "createdAt",
        order = "desc",
      } = options
      const response = await api.get(Reports_Endpoint, {
        params: {
          _page: page,
          _limit: limit,
          _sort: sortBy,
          _order: order,
        },
      })
      return {
        data: response.data,
        totalCount: response.headers["x-total-count"],
      }
    } catch (e) {
      console.error("Error fetching reports with options:", e)
      throw e
    }
  },
}

export default reportService
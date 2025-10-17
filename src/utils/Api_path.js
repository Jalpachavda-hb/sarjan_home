// api.js
import axios from "axios";
import { toast } from "react-toastify";

// Base URL
export const BASE_URL = "https://sarjanhomes.in/api/";

// Loading state context - will be used by components
let loadingManager = {
  showLoader: () => {},
  hideLoader: () => {}
};

export const setLoadingManager = (manager) => {
  loadingManager = manager;
};

// Axios instance
const apiClient = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// All endpoints
export const API_PATHS = {
  PROJECTTYPE: {
    GETPROJECTTYPE: "showProjectTypeList",
  },

  PROJECTCATEGORY: {
    GETPROJECTCATEGORY: "showProjectCategoryList",
  },

  SITEDETAILS: {
    GETSITEDETAILS: "getSiteList",
    SITEDETAILSBYID: "getprojectDetails",
  },

  WEBSETTING: {
    GETWEBSETTING: "webSetting",
  },
};

// -------- API CALLS -------- //

// Web Setting
export const fetchWebSetting = async () => {
  loadingManager.showLoader();
  try {
    const res = await apiClient.get(API_PATHS.WEBSETTING.GETWEBSETTING);
    return res.data?.data;
  } catch (err) {
    toast.error("Failed to fetch Web Setting ❌");
    throw err;
  } finally {
    loadingManager.hideLoader();
  }
};

// Site List
export const fetchSiteList = async () => {
  loadingManager.showLoader();
  try {
    const res = await apiClient.get(API_PATHS.SITEDETAILS.GETSITEDETAILS);
    return res.data?.data;
  } catch (err) {
    toast.error("Failed to fetch Site List ❌");
    throw err;
  } finally {
    loadingManager.hideLoader();
  }
};

// Project Type
export const fetchProjectType = async () => {
  try {
    const res = await apiClient.get(API_PATHS.PROJECTTYPE.GETPROJECTTYPE);
    return res.data?.data;
  } catch (err) {
    toast.error("Failed to fetch Project Types ❌");
    throw err;
  }
};

// Project Category
export const fetchProjectCategory = async () => {
  try {
    const res = await apiClient.get(
      API_PATHS.PROJECTCATEGORY.GETPROJECTCATEGORY
    );
    return res.data?.data;
  } catch (err) {
    toast.error("Failed to fetch Project Categories ❌");
    throw err;
  }
};

// Site Details
export const fetchSiteDetails = async () => {
  try {
    const res = await apiClient.get(API_PATHS.SITEDETAILS.GETSITEDETAILS);
    return res.data?.data;
  } catch (err) {
    toast.error("Failed to fetch Site Details ❌");
    throw err;
  }
};


export const fetchProjectDetails = async (siteId) => {
  try {
    console.log('Fetching project details for siteId:', siteId);
    const res = await apiClient.get(`${API_PATHS.SITEDETAILS.SITEDETAILSBYID}?site_id=${siteId}`);
    
    console.log('API Response:', res);
    console.log('API Response data:', res.data);
    
    // Return the entire data object, not res.data.data
    return res.data;
  } catch (err) {
    console.error('API Error:', err);
    toast.error("Failed to fetch Project Details ❌");
    throw err;
  }
};
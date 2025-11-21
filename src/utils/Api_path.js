// api.js
import axios from "axios";
import { toast } from "react-toastify";

// Base URL
export const BASE_URL = "https://sarjanhomes.in/api/";

// Loading state context - will be used by components
let loadingManager = {
  showLoader: () => {},
  hideLoader: () => {},
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
    GETHEROSECTION: "hero-sliders",
    GETABOUTSECTION: "about-section",
    GETTESTIMONIAL: "getTestimonialer",
    GETSLIDER: "getSliders",
    GETCONTACTUS: "contact-us",

    // main about us Selection(MAS)
    GETMAINABOUTUSSECTION: "masGet",
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
    toast.error("Failed to fetch Web Setting ");
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
    toast.error("Failed to fetch Site List ");
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
    toast.error("Failed to fetch Project Types ");
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
    toast.error("Failed to fetch Project Categories ");
    throw err;
  }
};

// Site Details
export const fetchSiteDetails = async () => {
  try {
    const res = await apiClient.get(API_PATHS.SITEDETAILS.GETSITEDETAILS);
    return res.data?.data;
  } catch (err) {
    toast.error("Failed to fetch Site Details ");
    throw err;
  }
};

export const fetchProjectDetails = async (siteId) => {
  try {
    console.log("Fetching project details for siteId:", siteId);
    const res = await apiClient.get(
      `${API_PATHS.SITEDETAILS.SITEDETAILSBYID}?site_id=${siteId}`
    );

    console.log("API Response:", res);
    console.log("API Response data:", res.data);

    return res.data;
  } catch (err) {
    console.error("API Error:", err);
    toast.error("Failed to fetch Project Details ");
    throw err;
  }
};

export const herosliders = async () => {
  try {
    const response = await apiClient.get(API_PATHS.WEBSETTING.GETHEROSECTION);

    if (response.status === 200 && response.data?.data) {
      return response.data.data; // ✅ returns array of sliders
    } else {
      toast.error("No hero section data found ⚠️");
      return [];
    }
  } catch (error) {
    console.error("Error fetching hero section:", error);
    toast.error("Failed to fetch hero section data ");
    throw error;
  }
};

export const gettesaboutus = async () => {
  try {
    const response = await apiClient.get(API_PATHS.WEBSETTING.GETABOUTSECTION);

    if (response.status === 200 && response.data?.data) {
      return response.data.data; // ✅ returns array of sliders
    } else {
      toast.error("No testimonial data found ⚠️");
      return [];
    }
  } catch (error) {
    console.error("Error fetching testimonial:", error);
    toast.error("Failed to fetch testimonial data ");
    throw error;
  }
};

export const gettesTimonial = async () => {
  try {
    const response = await apiClient.get(API_PATHS.WEBSETTING.GETTESTIMONIAL);

    if (response.status === 200 && response.data?.data) {
      return response.data.data; // ✅ returns array of sliders
    } else {
      toast.error("No testimonial data found ⚠️");
      return [];
    }
  } catch (error) {
    console.error("Error fetching testimonial:", error);
    toast.error("Failed to fetch testimonial data ");
    throw error;
  }
};

export const fetchSlider = async () => {
  try {
    const response = await apiClient.get(API_PATHS.WEBSETTING.GETSLIDER);

    if (response.status === 200 && response.data?.data) {
      return response.data.data; // ✅ returns array of sliders
    } else {
      toast.error("No slider data found ⚠️");
      return [];
    }
  } catch (error) {
    console.error("Error fetching slider:", error);
    toast.error("Failed to fetch slider data ");
    throw error;
  }
};

export const getcontactus = async () => {
  try {
    const response = await apiClient.get(API_PATHS.WEBSETTING.GETCONTACTUS);

    if (response.status === 200 && response.data?.data) {
      return response.data.data;   // returns OBJECT, not array
    } else {
      return null;
    }
  } catch (error) {
    console.error("Error fetching contact data:", error);
    throw error;
  }
};

export const getaboutusmain = async () => {
  try {
    const response = await apiClient.get(
      API_PATHS.WEBSETTING.GETMAINABOUTUSSECTION
    );

    if (response.status === 200 && response.data?.data) {
      return response.data.data;
    } else {
      return null;
    }
  } catch (error) {
    console.error("Error fetching main about us:", error);
    throw error;
  }
};

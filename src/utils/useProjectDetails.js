import { useState, useEffect } from 'react';
import { fetchProjectDetails } from "../utils/Api_path"
import { toast } from 'react-toastify';

export const useProjectDetails = (siteId) => {
  const [projectData, setProjectData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getProjectDetails = async () => {
      if (!siteId) return;
      
      try {
        setLoading(true);
        const data = await fetchProjectDetails(siteId);  // Assuming this is an API call to get the data
        setProjectData(data);
        setError(null);
      } catch (err) {
        setError('Failed to load project details');
        console.error('Error fetching project details:', err);
      } finally {
        setLoading(false);
      }
    };

    getProjectDetails();
  }, [siteId]);

  return { projectData, loading, error };
};
import axios from 'axios';

const API_URL = '/api/goals/';

// Create new goal
const createGoal = async (goalData, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.post(API_URL, { text: goalData }, config);
  return response.data;
};

const goalsService = {
  createGoal,
};

export default goalsService;

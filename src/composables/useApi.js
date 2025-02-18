import axios from 'axios'

// https://thuisborg.dotcms.online/api/v1/content-manger/get-data/tb-faq?sortBy=id&orderBy=asc

const myAxios = axios.create({
  baseURL: 'https://thuisborg.dotcms.online/api/v1/',
  headers: {
    'Content-Type': 'application/json',
  },
})

export function useApi() {

  const getData = async (endpoint, params) => {
    return await myAxios.get(endpoint, { params })
      .then((response) => {
        return response.data
      }).catch(error => {
        handleError(error);
        return error;
      });
  };

  // const postData = (postData) => {
  //   return myAxios.post(path, postData);
  // }

  // const updateData = (path, id, updatedData) => {
  //   return myAxios.put(`${path}/${id}`, updatedData);
  // }

  // const deleteData = (postId) => {
  //   return myAxios.delete(`/posts/${postId}`);
  // }

  function handleError(error) {
    if (error.response.status === 401) {
      alert("Please Login")
    } else {
      alert('problem in api');
    }
  }

  return {
    getData,
  };
}

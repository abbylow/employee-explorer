import * as axios from 'axios';

export async function getSubordinates(name) {
  const response = await axios.get(`https://api.additivasia.io/api/v1/assignment/employees/${name}`);

  return {
    name: name,
    position: response.data[0],
    directSubordinates: response.data[1] ? response.data[1]['direct-subordinates'] : []
  }
}
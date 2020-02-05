import * as axios from 'axios';

export async function getWholeTree(name) {
  let employeesInfo = {};
  let stack = [];
  let explored = [];
  stack.push(name);
  explored.push(name);

  while (stack.length > 0) {
    let currentNode = stack.pop();
    employeesInfo[currentNode] = await getSubordinates(currentNode);
    let children = employeesInfo[currentNode].directSubordinates;
    if (children.length > 0) {
      children.filter(c => explored.indexOf(c) === -1).forEach(c => { explored.push(c); stack.push(c); })
    }
  }
  return employeesInfo;
}

async function getSubordinates(name) {
  const response = await axios.get(`http://api.additivasia.io/api/v1/assignment/employees/${name}`);
  return {
    name: name,
    position: response.data[0],
    directSubordinates: response.data[1] ? response.data[1]['direct-subordinates'] : []
  }
}
function combineUsers(...args) {
  const combinedObject = {
    users: []
  };

for (const array of args) {
  combinedObject.users = [...combinedObject.users, ...array];
}

combinedObject.merge_date =Date.today().toString("M/d/yyyy");
return combinedObject;
}



module.exports = {
  ...(typeof combineUsers !== 'undefined' && { combineUsers })
};


export let updateObjectInArray= (items, itemId, objProName, newObjProps ) => {
   
  items.map(u => {
    if (u[objProName] === itemId) {
        return {...u, ...newObjProps}
    }
    return u;
  })
}
function hasDuplicateIds(root, idSet = new Set()) {
    // if there's no root passed in, return false
    if (!root) return false; 

    // if the root'id has un id, and the idSet array has that id too, return true
    if (idSet.has(root.id)) return true;

    // if there's a root id, then add this id to the idSet array
    root.id && idSet.add(root.id); 

    // if the root has child node, we'll loop through each child
    if (root.hasChildNodes()) {
        for (let child of root.children ){
            const result = hasDuplicateIds(child, idSet); 
            // if there's a result, means there's a duplicate, so return true
            if (result) return true; 
        }
    }

    // if nothing has been returned yet, that means there's no duplicates
    return false; 
}

module.exports = hasDuplicateIds; 
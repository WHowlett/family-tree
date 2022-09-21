import FS from 'fs';
import PATH from 'path';

const dataDir = PATH.join( process.cwd(), "data");


export function getids (thisParent) {
    let fileName = (thisParent) ? "adult.json" : "child.json";

    const dataDir = PATH.join( process.cwd(), "data");
    const filepath = PATH.join( dataDir, fileName );
    const jsonData = FS.readFileSync(filepath, 'utf8');
    const jsonObj = JSON.parse(jsonData);
    return jsonObj.map( (obj) => { 
        return {
            params: {
                id: obj.id.toString()
            }
        }
    });
}

export function getSortedList (thisParent) {
    let fileName = (thisParent) ? "adult.json" : "child.json";

    const filepath = PATH.join( dataDir, fileName );
    const jsonData = FS.readFileSync(filepath);
    const jsonObj = JSON.parse(jsonData);
  
    return jsonObj.sort( (a,b) => { return a.name.localeCompare(b.name) } )
           .map( (item) => {
            return {
                id: item.id.toString(),
                name: item.name
            }
    });
}

export function getDataCommon(thisParent, id) {
    let fileName = (thisParent) ? "adult.json" : "child.json";
    
    const dataDir = PATH.join( process.cwd(), "data");
    const filepath = PATH.join( dataDir, fileName );
    const jsonData = FS.readFileSync(filepath, 'utf8');
    const jsonObj = JSON.parse(jsonData);
    let objMatch = jsonObj.filter( (obj) => { return (obj.id.toString() === id) })

    var objReturned = {};
    if (objMatch.length > 0) {
        objReturned = objMatch[0];
        objReturned["adult"] = thisParent;
    }

    console.log("Found:" + objReturned["name"]);
    return objReturned;
}

export function getNemData(thisParent, id) {
    console.log("Parent:" + thisParent + " id:" + id);
    let nemList = getDataCommon(thisParent, id)
    return nemList;
}

export async function getData(thisParent, id) {
    let objReturned = getDataCommon(thisParent, id);
    objReturned["nemData"] = getDataCommon(!thisParent, objReturned.id.toString());
    return objReturned;
}
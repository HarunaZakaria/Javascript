/*
Complete the function using the rules below to modify the object passed to the function.

Your function must always return the entire records object.
If value is an empty string, delete the given prop property from the album.
If prop isn't tracks and value isn't an empty string, assign the value to that album's prop.
If prop is tracks and value isn't an empty string, you need to update the album's tracks array. First, if the album does not have a tracks property, assign it an empty array. Then add the value as the last item in the album's tracks array.
Note: A copy of the recordCollection object is used for the tests. You should not directly modify the recordCollection object
*/

function updateRecords(records, id, prop, value) {
    const updatedRecords = { ...records }; // Create a copy to avoid direct modification
  
    if (value === "") {
      delete updatedRecords[id][prop];
    } else if (prop !== "tracks") {
      updatedRecords[id][prop] = value;
    } else {
      if (!updatedRecords[id].hasOwnProperty("tracks")) {
        updatedRecords[id]["tracks"] = [];
      }
      updatedRecords[id]["tracks"].push(value);
    }
  
    return updatedRecords;
  }
  
  // Example usage
  const recordCollection = {
    123: {
      albumTitle: "Album 1",
      artist: "Artist 1",
      tracks: ["Track 1", "Track 2"]
    },
    456: {
      albumTitle: "Album 2",
      artist: "Artist 2",
      tracks: []
    }
  };
  
  const updatedCollection = updateRecords(recordCollection, 123, "tracks", "Track 3");
  
  console.log(updatedCollection);
  
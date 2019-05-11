pragma solidity ^0.5.1;

contract Farm {
    
    struct Photo {
        bytes32 uid;
        bytes32 catogory;
    }


    uint numPhotos; 
    mapping (uint => Photo) photos;
    

    function addPhoto(bytes32 photohash, bytes32 output) public {
        uint photoID = numPhotos++;
        photos[photoID] = Photo(photohash,output);
    }

    
    function getPhoto(uint photoID) public view returns (uint,bytes32,bytes32) {
        return (photoID,photos[photoID].uid,photos[photoID].catogory);
    }
}

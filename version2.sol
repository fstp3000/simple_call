pragma solidity ^0.5.1;

contract Farm {
    
    struct Photo {
        bytes32 uid;
        bytes32 catogory;
        int32 localtime;
        int32 gpsx;
        int32 gpsy;
    }

    uint numPhotos; 
    mapping (uint => Photo) photos;
    
    function addPhoto(bytes32 uid, bytes32 catogory, int32 localtime, int32 gpsx, int32 gpsy) public {
        uint photoID = numPhotos++;
        photos[photoID] = Photo(uid, catogory, localtime, gpsx, gpsy);
    }

    
    function getPhoto(uint photoID) public view returns (uint, bytes32, bytes32, int32, int32, int32) {
        //return (photoID,photos[photoID].uid,photos[photoID].catogory);
        return (photoID,
                photos[photoID].uid,
                photos[photoID].catogory,
                photos[photoID].localtime,
                photos[photoID].gpsx,
                photos[photoID].gpsy
                );
    }
    
}

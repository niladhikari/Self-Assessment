function bestFriend(friends) {
    if (!Array.isArray(friends) || friends.length === 0) {
      return "No friends found";
    }
  
    let longestName = friends[0];
    for (let i = 1; i < friends.length; i++) {
        let friendName = friends[i].length;
      if ( friendName > longestName.length) {
        longestName = friends[i];
      }
    }
  
    return longestName;
  }
let friendsArray = ['anik','mahbub','imran','rakib','munna','akbor ali'];
let bestFriendName = bestFriend(friendsArray);
console.log("Best Friend:", bestFriendName);
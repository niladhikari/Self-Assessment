function bestFriend(bondu) {
    let friends = bondu.split(' '); 
    for(let i = 0; i<friends.length; i--){
        const element = friends[i];
        return element;
    }
}

const bFriends = ['anik','mahbub','imran','rakib','munna'];
let bestFriends = bestFriend(bFriends);
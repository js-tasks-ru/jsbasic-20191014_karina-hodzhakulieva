/**
 * Генерация HTML списка друзей
 * @param {Object[]} friends
 * @return {HTMLUListElement}
 */
function makeFriendsList(friends) {
  let friendsList = document.createElement('ul');
  friendsList.innerHTML = friends.map(friend =>
    `<li>${friend.firstName} ${friend.lastName}</li>`).join('');
  return (friendsList);
}


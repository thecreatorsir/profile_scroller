const profile = profileIterator(data);
//call first profile
nextProfile();

//next Event
document.getElementById("next").addEventListener("click", nextProfile);

//next profile Display
function nextProfile() {
  const currentProfile = profile.next().value;
  if (currentProfile !== undefined) {
    document.getElementById("profileDisplay").innerHTML = `
  <ul class='list-group'>
  <li class='list-group-item'>name: ${currentProfile.name}</li>
  <li class='list-group-item'>age: ${currentProfile.age}</li>
  <li class='list-group-item'>location: ${currentProfile.location}</li>
  <li class='list-group-item'>preference: ${currentProfile.gender} looking for ${currentProfile.lookingfor}</li>
  </ul>
  `;
    // image display
    document.getElementById(
      "imageDisplay"
    ).innerHTML = `<img src="${currentProfile.image}">`;
  } else {
    window.location.reload();
  }
}

//profile Iterator
function profileIterator(profiles) {
  let nextIndex = 0;
  return {
    next: function () {
      return nextIndex < profiles.length
        ? { value: profiles[nextIndex++], done: false }
        : { done: true };
    },
  };
}

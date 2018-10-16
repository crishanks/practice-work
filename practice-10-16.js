const profileInformationChase = {
  name: 'Chase Armstrong',
  friends: 1000000000,
  business: {
    name: 'Blush and Brulee',
    isPaidSubscriber: true,
  }
}

const profileInformationCris = {
  name: 'Cris Hanks',
  friends: 238220,
  business: null,
}

function hasBusiness(profile) {
  return profile.business;
}

if (hasBusiness(profileInformationCris)) {
  console.log('Cris has a business');
}

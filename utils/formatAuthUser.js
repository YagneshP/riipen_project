const formatAuthUser = (user, firstName, lastName) => {
  const name = `${firstName} ${lastName}`;
  return {
    uid: user.uid,
    email: user.email,
    name: name,
    provider: user.providerData[0].providerId,
    photoUrl: user.photoURL,
  };
};

export default formatAuthUser;

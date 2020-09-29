export const dealerActionHit = (score) => {
  const rand = Math.floor(Math.random() * 99);

  // ToDo: tweak
  if (score <= 10) {
    return true;
  } else if (score >= 11 && score <= 14 && rand >= 0 && rand < 80) {
    // 80% chance
    console.log("random number (0-69) =", rand);
    return true;
  } else if (score >= 15 && score <= 17 && rand >= 0 && rand < 50) {
    // 50% chance
    console.log("random number (0-49) =", rand);
    return true;
  } else if (score === 18 && rand >= 0 && rand < 30) {
    // 30% chance
    console.log("random number (0-29) =", rand);
    return true;
  } else if (score === 19 && rand >= 0 && rand < 10) {
    // 10% chance
    console.log("random number (0-9) =", rand);
    return true;
  } else if (score === 20 && rand >= 0 && rand < 5) {
    // 5% chance
    console.log("random number (0-4) = ", rand);
    return true;
  } else {
    // 21 or conditions not met
    return false;
  }
};

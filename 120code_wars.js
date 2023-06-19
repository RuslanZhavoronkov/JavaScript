function peopleWithAgeDrink(old) {
  return old < 14
    ? "drink toddy"
    : old >= 14 && old < 18
    ? "drink coke"
    : old >= 18 && old < 21
    ? "drink beer"
    : "drink whisky";
}

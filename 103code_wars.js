function greet(language) {
  let privet = "";
  switch (language) {
    case "english":
      privet = "Welcome";
      break;
    case "czech":
      privet = "Vitejte";
      break;
    case "danish":
      privet = "Velkomst";
      break;
    case "dutch":
      privet = "Welkom";
      break;
    case "estonian":
      privet = "Tere tulemast";
      break;
    case "finnish":
      privet = "Tervetuloa";
      break;
    case "flemish":
      privet = "Welgekomen";
      break;
    case "french":
      privet = "Bienvenue";
      break;
    case "german":
      privet = "Willkommen";
      break;
    case "irish":
      privet = "Failte";
      break;
    case "italian":
      privet = "Benvenuto";
      break;
    case "latvian":
      privet = "Gaidits";
      break;
    case "lithuanian":
      privet = "Laukiamas";
      break;
    case "polish":
      privet = "Witamy";
      break;
    case "spanish":
      privet = "Bienvenido";
      break;
    case "swedish":
      privet = "Valkommen";
      break;
    case "welsh":
      privet = "Croeso";
      break;
    default:
      privet = "Welcome";
      break;
  }
  return privet;
}

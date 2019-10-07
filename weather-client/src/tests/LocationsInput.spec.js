require("jest-extended");

const {
  epochDateToDayName,
  fahrenheitToCelsius,
  extractLocationsData
} = require("../logic/LocationsInput.logic");

describe("Testing LocationsInput logic", () => {
  test("Testing The date converter", () => {
    const result = epochDateToDayName(1570453033);
    expect(result).toBe("Monday");
  });

  test("Testing fahrenheit to celsius converter", () => {
    const result = fahrenheitToCelsius(59);
    expect(result).toBe(15);
  });

  test("Testing locations data extractor", () => {
    const result = extractLocationsData(locationsList);
    expect(result).toIncludeSameMembers(locationsExtractedData);
  });
});

const locationsList = [
  {
    Version: 1,
    Key: "349727",
    Type: "City",
    Rank: 15,
    LocalizedName: "Nueva York",
    Country: {
      ID: "US",
      LocalizedName: "Estados Unidos"
    },
    AdministrativeArea: {
      ID: "NY",
      LocalizedName: "Nueva York"
    }
  },
  {
    Version: 1,
    Key: "187745",
    Type: "City",
    Rank: 30,
    LocalizedName: "Nueva Delhi",
    Country: {
      ID: "IN",
      LocalizedName: "India"
    },
    AdministrativeArea: {
      ID: "DL",
      LocalizedName: "Delhi"
    }
  },
  {
    Version: 1,
    Key: "35547",
    Type: "City",
    Rank: 35,
    LocalizedName: "Nueva Iguazú",
    Country: {
      ID: "BR",
      LocalizedName: "Brasil"
    },
    AdministrativeArea: {
      ID: "RJ",
      LocalizedName: ""
    }
  },
  {
    Version: 1,
    Key: "235983",
    Type: "City",
    Rank: 35,
    LocalizedName: "Nuevo Laredo",
    Country: {
      ID: "MX",
      LocalizedName: "México"
    },
    AdministrativeArea: {
      ID: "TAM",
      LocalizedName: "Tamaulipas"
    }
  },
  {
    Version: 1,
    Key: "348585",
    Type: "City",
    Rank: 35,
    LocalizedName: "Nueva Orleans",
    Country: {
      ID: "US",
      LocalizedName: "Estados Unidos"
    },
    AdministrativeArea: {
      ID: "LA",
      LocalizedName: "Luisiana"
    }
  },
  {
    Version: 1,
    Key: "128723",
    Type: "City",
    Rank: 41,
    LocalizedName: "Nueva San Salvador",
    Country: {
      ID: "SV",
      LocalizedName: "El Salvador"
    },
    AdministrativeArea: {
      ID: "LI",
      LocalizedName: "La Libertad"
    }
  },
  {
    Version: 1,
    Key: "118543",
    Type: "City",
    Rank: 51,
    LocalizedName: "Nueva Gerona",
    Country: {
      ID: "CU",
      LocalizedName: "Cuba"
    },
    AdministrativeArea: {
      ID: "99",
      LocalizedName: "Isla de la Juventud"
    }
  },
  {
    Version: 1,
    Key: "7423",
    Type: "City",
    Rank: 55,
    LocalizedName: "Nueve de Julio",
    Country: {
      ID: "AR",
      LocalizedName: "Argentina"
    },
    AdministrativeArea: {
      ID: "B",
      LocalizedName: "Buenos Aires"
    }
  },
  {
    Version: 1,
    Key: "116945",
    Type: "City",
    Rank: 55,
    LocalizedName: "Nuevitas",
    Country: {
      ID: "CU",
      LocalizedName: "Cuba"
    },
    AdministrativeArea: {
      ID: "09",
      LocalizedName: "Camaguey"
    }
  },
  {
    Version: 1,
    Key: "232146",
    Type: "City",
    Rank: 55,
    LocalizedName: "Nuevo Casas Grandes",
    Country: {
      ID: "MX",
      LocalizedName: "México"
    },
    AdministrativeArea: {
      ID: "CHH",
      LocalizedName: "Chihuahua"
    }
  }
];
const locationsExtractedData = [
  {
    key: "349727",
    name: "Nueva York, Estados Unidos",
    WeatherText: "",
    temperature: 0
  },
  {
    key: "187745",
    name: "Nueva Delhi, India",
    WeatherText: "",
    temperature: 0
  },
  {
    key: "35547",
    name: "Nueva Iguazú, Brasil",
    WeatherText: "",
    temperature: 0
  },
  {
    key: "235983",
    name: "Nuevo Laredo, México",
    WeatherText: "",
    temperature: 0
  },
  {
    key: "348585",
    name: "Nueva Orleans, Estados Unidos",
    WeatherText: "",
    temperature: 0
  },
  {
    key: "128723",
    name: "Nueva San Salvador, El Salvador",
    WeatherText: "",
    temperature: 0
  },
  {
    key: "118543",
    name: "Nueva Gerona, Cuba",
    WeatherText: "",
    temperature: 0
  },
  {
    key: "7423",
    name: "Nueve de Julio, Argentina",
    WeatherText: "",
    temperature: 0
  },
  { key: "116945", name: "Nuevitas, Cuba", WeatherText: "", temperature: 0 },
  {
    key: "232146",
    name: "Nuevo Casas Grandes, México",
    WeatherText: "",
    temperature: 0
  }
];

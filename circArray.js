let champYears = [
    "1909",
    "1916",
    "1922",
    "1935",
    "1936",
    "1937",
    "1938",
    "1939",
    "1940",
    "1941",
    "1943",
    "1948",
    "1949",
    "1950",
    "1951",
    "1952",
    "1953",
    "1954",
    "1959",
    "1960",
    "1961",
    "1964",
    "1965",
    "1970",
    "2019"
];

function offsetYear(year, offset) {
    let title = champYears.indexOf(year)

    return champYears[(title + offset) % champYears.length]
}

offsetYear("1965", 2);
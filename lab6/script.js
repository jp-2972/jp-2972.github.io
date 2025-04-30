document.addEventListener('DOMContentLoaded', function () {
    const citySelect = document.getElementById('city');
    const currentLocationBtn = document.getElementById('cur-loc');

    const todayData = {
        sunrise: document.getElementById('sunrise'),
        sunset: document.getElementById('sunset'),
        dawn: document.getElementById('dawn'),
        dusk: document.getElementById('dusk'),
        solarNoon: document.getElementById('solar-noon'),
        dayLength: document.getElementById('dl'),
        timezone: document.getElementById('time')
    };

    const tomorrowData = {
        sunrise: document.getElementById('tom_sunrise'),
        sunset: document.getElementById('tom_sunset'),
        dawn: document.getElementById('tom_dawn'),
        dusk: document.getElementById('tom_dusk'),
        solarNoon: document.getElementById('tom_solar-noon'),
        dayLength: document.getElementById('tom_dl'),
        timezone: document.getElementById('tom_time')
    };

    function fetchData(lat, lon, date, target) {
        const url = `https://api.sunrisesunset.io/json?lat=${lat}&lng=${lon}&date=${date}&formatted=0`;

        return fetch(url)
            .then(response => response.json())
            .then(data => {
                if (data.status !== "OK") {
                    throw new Error(`API error: ${data.status}`);
                }

                target.sunrise.textContent = data.results.sunrise || "N/A";
                target.sunset.textContent = data.results.sunset || "N/A";
                target.dawn.textContent = data.results.dawn || "N/A";
                target.dusk.textContent = data.results.dusk || "N/A";
                target.solarNoon.textContent = data.results.solar_noon || "N/A";
                target.dayLength.textContent = data.results.day_length || "N/A";
                target.timezone.textContent = data.results.timezone || "N/A";
            });
    }

    function getAllData(lat, lon) {
        document.getElementById("tomorrow").style.display = "block";

        Promise.all([
            fetchData(lat, lon, "today", todayData),
            fetchData(lat, lon, "tomorrow", tomorrowData)
        ]).catch(error => {
            console.error("Error fetching sunrise/sunset data:", error);
            alert("Failed to fetch sunrise/sunset data.");
        });
    }

    // Handle city dropdown
    citySelect.addEventListener('change', function () {
        const selectedOption = citySelect.selectedOptions[0];
        const lat = selectedOption.getAttribute('data-lat');
        const lon = selectedOption.getAttribute('data-lon');
        if (lat && lon) {
            getAllData(lat, lon);
        }
    });

    // Handle geolocation
    currentLocationBtn.addEventListener('click', function () {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(function (position) {
                const lat = position.coords.latitude;
                const lon = position.coords.longitude;

                getAllData(lat, lon);

                // Get city + country
                fetch(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lon}`)
                    .then(response => response.json())
                    .then(data => {
                        const cityPart = data.address.city || data.address.town || data.address.village || data.address.state || "My Location";
                        const countryPart = data.address.country || "";
                        const fullLabel = `${cityPart}, ${countryPart}`;

                        // Check if already in dropdown
                        let found = false;
                        for (let option of citySelect.options) {
                            if (option.text.toLowerCase().includes(cityPart.toLowerCase())) {
                                option.selected = true;
                                found = true;
                                break;
                            }
                        }

                        if (!found) {
                            const newOption = document.createElement("option");
                            newOption.text = fullLabel;
                            newOption.value = fullLabel;
                            newOption.setAttribute("data-lat", lat);
                            newOption.setAttribute("data-lon", lon);
                            citySelect.add(newOption);
                            newOption.selected = true;
                        }
                    })
                    .catch(error => {
                        console.error("Reverse geocoding error:", error);
                    });
            });
        } else {
            alert("Geolocation is not supported by this browser.");
        }
    });
});

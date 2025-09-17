/* Gear options library configuration */

const gearOptions = { // all options for gears - types, models, flanges - hierarchical structure
    worm: {
        name: "Ślimakowa",
        options: {
            flange: { 
                label: "Kołnierz",
                choices: {
                    b5: "",
                    b14: ""
                }
            },
        }
    },
    bevel: {
        name: "Walcowo-Stożkowa",
        options: {
            model: {
                label: "Model",
                choices: {

                    dmkab60: {
                        label: "DMKAB60",
                        options: {
                            iec: {
                                label: "IEC",
                                choices: {
                                    "63B5": "https://raw.githubusercontent.com/Eugenia-Kysel/3D-Models/main/DMKAB60%2063B5.glb",
                                    "71B5": "https://raw.githubusercontent.com/Eugenia-Kysel/3D-Models/main/DMKAB60%2071B5.glb",
                                    "80B5": "https://raw.githubusercontent.com/Eugenia-Kysel/3D-Models/main/DMKAB60%2080B5.glb",
                                    "90B5": "https://raw.githubusercontent.com/Eugenia-Kysel/3D-Models/3D-Configurator-Project/DMKAB60%2090B5.glb",
                                    "100B5": "https://raw.githubusercontent.com/Eugenia-Kysel/3D-Models/3D-Configurator-Project/DMKAB60%20100B5.glb",
                                    "112B5": "https://raw.githubusercontent.com/Eugenia-Kysel/3D-Models/3D-Configurator-Project/DMKAB60%20112B5.glb",
                                    "132B5": "https://raw.githubusercontent.com/Eugenia-Kysel/3D-Models/3D-Configurator-Project/DMKAB60%20132B5.glb"
                                }
                            }
                        }
                    },

                    dmkab70: {
                        label: "DMKAB70",
                        options: {
                            iec: {
                                label: "IEC",
                                choices: {
                                    "80B5": "https://raw.githubusercontent.com/Eugenia-Kysel/3D-Models/main/DMKAB70%20IEC80B5.glb",
                                    "ZK76-71B5": "https://raw.githubusercontent.com/Eugenia-Kysel/3D-Models/main/ZK76-71B5.glb",
                                    "ZKK76-90B5": "https://raw.githubusercontent.com/Eugenia-Kysel/3D-Models/main/ZK76-90B5.glb",
                                    "ZK76-100B5": "https://raw.githubusercontent.com/Eugenia-Kysel/3D-Models/main/ZK76-100B5.glb",
                                    "ZK76-132B5": "https://raw.githubusercontent.com/Eugenia-Kysel/3D-Models/main/ZK76-132B5.glb",
                                    "ZK76-160B5": "https://raw.githubusercontent.com/Eugenia-Kysel/3D-Models/main/ZK76-160B5.glb"
                                }
                            }
                        }
                    },

                    dmkab80: {
                        label: "DMKAB80",
                        options: {
                            iec: {
                                label: "IEC",
                                choices: {
                                    "80B5": "https://raw.githubusercontent.com/Eugenia-Kysel/3D-Models/main/DMKAB80%20IEC%2080B5.glb",
                                    "90B5": "https://raw.githubusercontent.com/Eugenia-Kysel/3D-Models/3D-Configurator-Project/DMKAB%2080%20IEC90B5.glb",
                                    "100B5": "https://raw.githubusercontent.com/Eugenia-Kysel/3D-Models/3D-Configurator-Project/DMK90%20IEC100B5.glb",
                                    "112B5": "https://raw.githubusercontent.com/Eugenia-Kysel/3D-Models/3D-Configurator-Project/DMKAB80%20IEC%20112B5.glb",
                                    "ZK86-100B5": "https://raw.githubusercontent.com/Eugenia-Kysel/3D-Models/3D-Configurator-Project/ZK86-100B5.glb",
                                    "ZK86-132B5": "https://raw.githubusercontent.com/Eugenia-Kysel/3D-Models/3D-Configurator-Project/ZK86-132B5.glb",
                                    "ZK86-160B5": "https://raw.githubusercontent.com/Eugenia-Kysel/3D-Models/3D-Configurator-Project/ZK86-160B5.glb",
                                    "ZK86-180B5": "https://raw.githubusercontent.com/Eugenia-Kysel/3D-Models/3D-Configurator-Project/ZK86-180B5.glb",
                                }
                            }
                        }
                    },

                    dmkab90: {
                        label: "DMKAB90",
                        options: {
                            iec: {
                                label: "IEC",
                                choices: {
                                    "100B5": "https://raw.githubusercontent.com/Eugenia-Kysel/3D-Models/main/DMK90%20IEC100B5.glb",
                                    "MKA97-112B5": "https://raw.githubusercontent.com/Eugenia-Kysel/3D-Models/main/MKA97-112B5.glb",
                                    "MKA97-132B5": "https://raw.githubusercontent.com/Eugenia-Kysel/3D-Models/main/MKA97-132B5.glb",
                                    "MKA97-180B5": "https://raw.githubusercontent.com/Eugenia-Kysel/3D-Models/3D-Configurator-Project/MKAB97-180B5.STEP.glb",
                                    "MKA97-200B5": "https://raw.githubusercontent.com/Eugenia-Kysel/3D-Models/main/MKA97-200B5.glb",
                                }
                            }
                        }
                    }
                }
            }
        }
    }
};


// --- Referencje do elementów ---
const gearTypeSelect = document.getElementById('gearType');
const modelSelect = document.getElementById('modelSelect');
const gearFlangeSelect = document.getElementById('flangeSelect');
const menuModel = document.getElementById('menu-model');
const menuFlange = document.getElementById('menu-flange');
const viewer = document.getElementById('viewer');


// --- Funkcja wypełniająca modele po wyborze typu przekładni ---
function updateOptions() {
    const type = gearTypeSelect.value;
    menuModel.style.display = 'none';
    menuFlange.style.display = 'none';

    if (type === "bevel") {
        // wypełnij select modeli
        modelSelect.innerHTML = "<option value=''>Wybierz model</option>";
        const models = gearOptions[type].options.model.choices;
        for ( let key in models) {
            let opt = document.createElement('option');
            opt.value = key;
            opt.textContent = models[key].label;
            modelSelect.appendChild(opt);
        }
        menuModel.style.display = 'block';
    }
}


// --- Funkcja wypełniająca kolnierze po wyborze modelu ---
function updateFlangeOptions() {
    const type = gearTypeSelect.value;
    const model = modelSelect.value;
    menuFlange.style.display = "none";

    if (type === "bevel" && model) {
        gearFlangeSelect.innerHTML = "<option value=''>Wybierz kołnierz</option>";
        const flanges = gearOptions[type].options.model.choices[model].options.iec.choices;
        for (let key in flanges) {
            let opt = document.createElement('option');
            opt.value = key;
            opt.textContent = key;
            gearFlangeSelect.appendChild(opt);
        }
        menuFlange.style.display = 'block';
    }
}


// --- Funkcja ładująca model 3D po wyborze kołnierza ---
function loadModel() {
    const type = gearTypeSelect.value;
    const model = modelSelect.value;
    const flange = gearFlangeSelect.value;

    let modelPath = "";

    if (type === "bevel" && model && flange) {
        modelPath = gearOptions[type].options.model.choices[model].options.iec.choices[flange];
    } else if (type === "worm" && flange) {
        modelPath = gearOptions[type].options.flange.choices[flange];
    }

    viewer.src = modelPath;
}

// --- NOWA FUNKCJA RESETUJĄCA WYBORY ---
/*const resetButton = document.getElementById("resetButton");

resetButton.addEventListener("click", () => {
     // Resetuj wszystkie selecty
    gearTypeSelect.value = "";
    modelSelect.innerHTML = "";
    gearFlangeSelect.innerHTML = "";

    // Ukryj menu modeli i kołnierzy
    menuModel.style.display = "none";
    menuFlange.style.display = "none";

    // Wyczyść model 3D
    viewer.src = "";

    const placeholder = document.createElement(option);
    placeholder.value = "";
    placeholder.textContent = "Wybierz";
    gearTypeSelect.prepend(placeholder);
    gearTypeSelect.selectedIndex = 0;

});*/
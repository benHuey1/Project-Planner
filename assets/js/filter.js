let mainContainer = document.getElementById("container");
let triState = 0;
let filter;
let filterSelect = document.getElementById("task_filter_display");

export { clearDisplay, showAllTask, updateFilters };

// Réinitialiser l'affichage
function clearDisplay() {
    mainContainer.innerHTML = "";
}

/*** Filtres & tri ***/
// Tri par prix
// function sortPrice() {
//     if (triState == 0) {
//         //Task représente la carte générée => MAJ avec Jodie
//         task.sort((a, b) => (a.price > b.price ? 1 : -1));
//         triState++;
//     } else {
//         courses.sort((a, b) => (a.id > b.id ? 1 : -1));
//         triState--;
//     }
//     clearDisplay();
//     display();
//     updateFilters();
// }

// Tout

function showAllTask() {
    // container_tasks correspond à la classe des task
    const taskAll = document.querySelectorAll(".container_tasks");

    for (let i = 0; i < taskAll.length; i++) {
        taskAll[i].style.display = "flex";
    }

    // filter = "tout";
}
/*A SUPPRIMER*/
// const h1 = document.querySelector("h1");
// const main = document.querySelector("main");
// function test() {
//     let taskcontainer = document.createElement("section");
//     taskcontainer.setAttribute("class", "container_tasks");
//     taskcontainer.setAttribute("data-cat", "Home");
//     main.appendChild(taskcontainer);
// }

// Home
function showHomeTask() {
    const taskAll = document.querySelectorAll(".container_tasks");
    // Parcourir toutes les sections et cacher celles qui ne contiennent pas le mot "Home"
    for (let i = 0; i < taskAll.length; i++) {
        // tasks_category correspond à l'attribut (filtre) category home/work/hobby
        // const sections = document.querySelectorAll("section[data-cat]");
        const category = taskAll[i].getAttribute("class");

        // console.log(category);
        // let sectionsClass = sections[i].classList;
        // console.log(sectionsClass.value);
        if (!category.includes("Home")) {
            taskAll[i].style.display = "none";
            // console.log("Not home here");
        } else {
            taskAll[i].style.display = "flex";
            // console.log("its home here");
        }
    }
    // filter = "Home";
}

// Work
function showWorkTask() {
    const taskAll = document.querySelectorAll(".container_tasks");

    // Parcourir toutes les sections et cacher celles qui ne contiennent pas le mot "Work"
    for (let i = 0; i < taskAll.length; i++) {
        // const category = sections[i].getAttribute("tasks_category");
        const category = taskAll[i].getAttribute("class");
        if (!category.includes("Work")) {
            taskAll[i].style.display = "none";
            // console.log("Not work here");
        } else {
            taskAll[i].style.display = "flex";
            // console.log("its work here");
        }
    }
    // filter = "Work";
}

// Hobby
function showHobbyTask() {
    const taskAll = document.querySelectorAll(".container_tasks");

    // Parcourir toutes les sections et cacher celles qui ne contiennent pas le mot "Hobby"
    for (let i = 0; i < taskAll.length; i++) {
        // const category = sections[i].getElementsByClassName("Home");
        const category = taskAll[i].getAttribute("class");
        if (!category.includes("Hobby")) {
            taskAll[i].style.display = "none";
            // console.log("Not hobby here");
        } else {
            taskAll[i].style.display = "flex";
            // console.log("its hobby here");
        }
    }
    // filter = "Hobby";
}

// // Dessert
// function showDessertSections() {
//     // Récupérer toutes les sections avec l'attribut "tasks_category"
//     const sections = document.querySelectorAll("section[tasks_category]");

//     // Parcourir toutes les sections et cacher celles qui ne contiennent pas le mot "Dessert"
//     for (let i = 0; i < sections.length; i++) {
//         const category = sections[i].getAttribute("tasks_category");
//         if (!category.includes("Dessert")) {
//             sections[i].style.display = "none";
//         } else {
//             sections[i].style.display = "block";
//         }
//     }

//     filter = "dessert";
// }

// // Wok
// function showWokSections() {
//     const sections = document.querySelectorAll("section[tasks_category]");

//     // Parcourir toutes les sections et cacher celles qui ne contiennent pas le mot "Home"
//     for (let i = 0; i < sections.length; i++) {
//         const category = sections[i].getAttribute("tasks_category");
//         if (!category.includes("Wok")) {
//             sections[i].style.display = "none";
//         } else {
//             sections[i].style.display = "block";
//         }
//     }

//     filter = "wok";
// }

// fonction pour mettre à jour les filtres et afficher les résultats filtrés
function updateFilters() {
    if (filterSelect.value == "Home") {
        showHomeTask();
        // console.log("Home");
    } else if (filterSelect.value == "Work") {
        showWorkTask();
        // console.log("Work");
    } else if (filterSelect.value == "Hobby") {
        showHobbyTask();
        // console.log("Hobby");
    } else {
        showAllTask();
    }
}

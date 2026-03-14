/* Objects */

const hikes = [
  {
    name: "Bechler Falls",
    stub: "bechler_falls",
    imgSrc: "bechler falls.jpg",
    imgAlt: "Image of Bechler Falls",
    distance: "3 miles",
    tags: ["Caves", "Yellowstone", "Waterfall"],
    difficulty: 1,
    description:
      "Beautiful short hike in Yellowstone along the Bechler river to Bechler Falls",
    directions:
      "Take Highway 20 north to Ashton. Turn right into the town and continue through. Follow that road for a few miles then turn left again onto the Cave Falls road.Drive to the end of the Cave Falls road. There is a parking area at the trailhead.",
    trailhead: [44.14457, -110.99781]
  },
  {
    name: "Teton Canyon",
    stub: "teton_canyon",
    imgSrc: "teton canyon.webp",
    imgAlt: "Image of Teton Canyon",
    distance: "3 miles",
    tags: ["Canyon", "Tetons"],
    difficulty: 1,
    description: "Beautiful short (or long) hike through Teton Canyon.",
    directions:
      "Take Highway 33 East to Driggs. Turn left onto Teton Canyon Road. Follow that road for a few miles then turn right onto Staline Raod for a short distance, then left onto Alta Road. Veer right after Alta back onto Teton Canyon Road. There is a parking area at the trailhead.",
    trailhead: [43.75567, -110.91521]
  },
  {
    name: "Denanda Falls",
    stub: "denanda_falls",
    imgSrc:"denanda_falls.jpg",
    imgAlt: "Image of Denanda Falls",
    distance: "7 miles",
    tags: ["Caves", "Yellowstone", "Waterfall"],
    difficulty: 3,
    description: "Beautiful hike through Bechler meadows to Denanda Falls",
    directions:
      "Take Highway 20 north to Ashton. Turn right into the town and continue through. Follow that road for a few miles then turn left again onto the Cave Falls road. Drive to until you see the sign for Bechler Meadows on the left. Turn there. There is a parking area at the trailhead.",
    trailhead: [44.14974, -111.04564]
  },
  {
    name: "Coffee Pot Rapids",
    stub: "coffee_pot",
    imgSrc: "coffee_pot_rapids.jpg",
    imgAlt: "Image of Coffee Pot Rapids",
    distance: "2.2 miles",
    tags: ["Rafting"],
    difficulty: 1,
    description:
      "Beautiful hike along the Henry's Fork of the Snake River to a set of rapids.",
    directions:
      "Take Highway 20 north to Island Park. Continue almost to Mack's in. From Highway 20, turn west on Flatrock Road for 1 mile then turn off on Coffee Pot Road and travel one-half mile to the campground entrance road. There is a parking lot right outside the campground.",
    trailhead: [44.49035, -111.36619]
  },
  {
    name: "Menan Butte",
    stub: "menan_butte",
    imgSrc: "menan_butte.jpg",
    imgAlt: "Image of Menan Butte",
    distance: "3.4 miles",
    tags: ["Volcanic", "View"],
    difficulty: 2,
    description:
      "A steep climb to one of the largest volcanic tuff cones in the world. 3.4 miles is the full loop around the crater, can be shortened.",
    directions:
      "Take Highway 33 West out of Rexburg for about 8 miles. Turn left onto E Butte Road, the right onto Twin Butte road after about a mile. Follow that road for about 3 miles. You will see the parking lot/trailhead on the left.",
    trailhead: [43.78555, -111.98996]
  }
];

/* Get Elements */
const searchInput = document.getElementById("search");
const searchBtn = document.querySelector("button");
const hike_container = document.querySelector(".hike-content");
const tag_container = document.querySelector(".hike-tags");
const ratings = document.querySelector(".difficulty");
const modal = document.querySelector("dialog");


/*Event Listener*/
searchBtn.addEventListener("click",()=>{
  /* Get info from user input */
  const phrase = searchInput.value.toLowerCase();
  const results = nameSearch(phrase);
  render(results);

});  

/*Searches hikes to find the matching phrases*/
function nameSearch(phrase){
  return hikes.filter((hike)=>{
    return hike.name.toLowerCase().includes(phrase);
  })
  
};

/* Adds hikes to screen*/
function render(hikes){ 
  hike_container.innerHTML = " ";

  hikes.forEach((hike) =>{
    const div = document.createElement('div');
    div.classList.add("hike");
    div.classList.add(hike.stub);

    div.innerHTML = `
      <h2>${hike.name}</h2>
      <img src ="${hike.imgSrc}" alt ="${hike.imgAlt}">
      <p>${hike.description}</p>
      <p id ="distance">Distance: ${hike.distance}</p>
      <button class ="directionBtn"> Directions</button>
  `;

  //Create tag container
  const tagDiv = document.createElement("div");
  tagDiv.classList.add("hike-tags");
  tagBtn(hike,tagDiv);

  //Adds this to the hike container to make it appear
  div.appendChild(tagDiv)


  //Creating difficulty div
  const diffDiv = document.createElement("div");
  diffDiv.classList.add("rating");
  diffDiv.innerHTML = increaseDifficulty(hike.difficulty);
  div.appendChild(diffDiv);

  //Adds directions to modal
  const directionBtn = div.querySelector(".directionBtn");

  directionBtn.addEventListener("click", () => {
    generateDirections(hike);
    modal.showModal();
  });

  //Adds the hike container to the screen
  hike_container.appendChild(div);
  });
}

/*Creates function that adds the tags*/
function tagBtn(hike,container){
  hike.tags.forEach((tag)=>{
    const btn = document.createElement("button");
    btn.textContent = tag;
    container.appendChild(btn);
  })
}

/*Creates a function that adds boots based on the hike difficulty */
function increaseDifficulty(rating){
  let html = " ";
  for (let i = 1; i <= 5; i++) {
      if (i <= rating) {
        html += `<span aria-hidden="true" class="icon-boot"> 🥾</span>`
      } else {
        html += `<span aria-hidden="true" class="icon-empty">▫️</span>`
      }			
  }
  return html;
}

/* Adds directions to the modal */
function generateDirections(hike){

  modal.innerHTML = `
    <div class="modal-content">
      <h2>${hike.name}</h2>
      <p>${hike.directions}</p>
      <p><strong>Trailhead:</strong> ${hike.trailhead}</p>
      <button class="close-viewer">Close</button>
    </div>
    `;
  const closeBtn = modal.querySelector(".close-viewer");
  closeBtn.addEventListener('click', ()=>{
    modal.close();
  })

}


                
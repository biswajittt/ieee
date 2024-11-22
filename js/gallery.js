// document.addEventListener("DOMContentLoaded", function () {
//   console.log("hi");

//   const container = document.querySelector("[unique-script-id='w-w-dm-id']");

//   // Button click event to show the overlay
//   const btnBox = container.querySelectorAll(".btn-box");
//   btnBox.forEach(function (btn) {
//     btn.addEventListener("click", function () {
//       const overlay = this.parentElement.querySelector(".overlay");
//       overlay.style.display = "block";
//     });
//   });

//   // Close button click event to hide the overlay
//   const closeBtns = container.querySelectorAll(".close");
//   closeBtns.forEach(function (closeBtn) {
//     closeBtn.addEventListener("click", function () {
//       const overlay = container.querySelector(".overlay");
//       overlay.style.display = "none";
//     });
//   });

//   // List click event to filter project images
//   const listItems = container.querySelectorAll(".list");
//   listItems.forEach(function (listItem) {
//     listItem.addEventListener("click", function () {
//       const value = listItem.getAttribute("data-filter");
//       const projectImages = container.querySelectorAll(".project-image");

//       if (value === "all") {
//         projectImages.forEach(function (image) {
//           image.style.display = "block";
//         });
//       } else {
//         projectImages.forEach(function (image) {
//           if (!image.classList.contains(value)) {
//             image.style.display = "none";
//           } else {
//             image.style.display = "block";
//           }
//         });
//       }
//     });
//   });

//   // Add 'active' class on the clicked list item and remove it from siblings
//   listItems.forEach(function (listItem) {
//     listItem.addEventListener("click", function () {
//       listItem.classList.add("active");
//       const siblings = listItem.parentElement.children;
//       for (let sibling of siblings) {
//         if (sibling !== listItem) {
//           sibling.classList.remove("active");
//         }
//       }
//     });
//   });
// });

document.addEventListener("DOMContentLoaded", () => {
  const imageContainer = document.getElementById("image-container");
  const totalImages = 50; // Total number of images in the folder
  const folderPath = "./assets/final_50/"; // Path to your images folder

  for (let i = 1; i <= totalImages; i++) {
    // Create a new image element
    const img = document.createElement("img");

    // Set the attributes to match your existing structure
    img.alt = `Image ${i}`;
    img.classList.add("project-image", `image-${i}`);
    img.src = `${folderPath}${i}.jpg`; // Assuming images are named as image1.jpg, image2.jpg, etc.
    img.loading = "lazy"; // Add lazy loading

    // Append the image to the container
    imageContainer.appendChild(img);
  }
});

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

// document.addEventListener("DOMContentLoaded", () => {
//   const imageContainer = document.getElementById("image-container");
//   const totalImages = 50; // Total number of images in the folder
//   const folderPath = "./assets/final_50/"; // Path to your images folder

//   for (let i = 1; i <= totalImages; i++) {
//     // Create a new image element
//     const img = document.createElement("img");

//     // Set the attributes to match your existing structure
//     img.alt = `Image ${i}`;
//     img.classList.add("project-image", `image-${i}`);
//     img.src = `${folderPath}${i}.jpg`; // Assuming images are named as image1.jpg, image2.jpg, etc.
//     img.loading = "lazy"; // Add lazy loading

//     // Append the image to the container
//     imageContainer.appendChild(img);
//   }
// });

// document.addEventListener("DOMContentLoaded", () => {
//   const imageContainer = document.getElementById("image-container");
//   const totalImages = 50;
//   const folderPath = "./assets/final_50/";
//   const imagesPerPage = 10; // Number of images to load per batch
//   let loadedImages = 0;

//   const loadImages = () => {
//     const start = loadedImages + 1;
//     const end = Math.min(start + imagesPerPage - 1, totalImages);

//     for (let i = start; i <= end; i++) {
//       const img = document.createElement("img");
//       img.alt = `Image ${i}`;
//       img.classList.add("project-image", `image-${i}`);
//       img.src = `${folderPath}${i}.jpg`;
//       img.loading = "lazy";
//       imageContainer.appendChild(img);
//     }
//     loadedImages = end;

//     if (loadedImages >= totalImages) {
//       window.removeEventListener("scroll", handleScroll);
//     }
//   };

//   const handleScroll = () => {
//     if (
//       window.innerHeight + window.scrollY >=
//       document.body.offsetHeight - 100
//     ) {
//       loadImages();
//     }
//   };

//   loadImages(); // Load initial images
//   window.addEventListener("scroll", handleScroll);
// });
document.addEventListener("DOMContentLoaded", () => {
  const imageContainer = document.getElementById("image-container");
  const totalImages = 50; // Total number of images
  const folderPath = "./assets/final_50/"; // Path to your images
  const imagesPerBatch = 10; // Load 10 images at a time
  let loadedImages = 0; // Counter for loaded images

  // Create a loading spinner element
  const loadingSpinner = document.createElement("div");
  loadingSpinner.id = "loading-spinner";
  loadingSpinner.innerText = "Loading...";
  loadingSpinner.style.cssText =
    "text-align: center; margin: 20px; font-size: 16px; color: #555;";
  document.body.appendChild(loadingSpinner);

  // Function to load images in batches
  const loadImages = () => {
    // Show loading spinner
    loadingSpinner.style.display = "block";

    // Load the next batch of images
    const start = loadedImages + 1;
    const end = Math.min(start + imagesPerBatch - 1, totalImages);

    for (let i = start; i <= end; i++) {
      const img = document.createElement("img");
      img.alt = `Image ${i}`;
      img.classList.add("project-image", `image-${i}`);
      img.src = `${folderPath}${i}.jpg`; // Image path
      img.loading = "lazy"; // Lazy loading

      // Listen for load event to hide spinner when the batch is done
      img.onload = () => {
        if (i === end) {
          loadingSpinner.style.display = "none"; // Hide spinner after the batch loads
        }
      };

      // Handle image load errors
      img.onerror = () => {
        console.error(`Failed to load Image ${i}`);
      };

      // Append image to the container
      imageContainer.appendChild(img);
    }

    loadedImages = end;

    // Stop loading if all images are loaded
    if (loadedImages >= totalImages) {
      window.removeEventListener("scroll", handleScroll);
    }
  };

  // Function to handle scroll event
  const handleScroll = () => {
    if (
      window.innerHeight + window.scrollY >=
      document.body.offsetHeight - 100
    ) {
      loadImages();
    }
  };

  // Initial image load and set up scroll event listener
  loadImages(); // Load the first batch of images
  window.addEventListener("scroll", handleScroll);
});

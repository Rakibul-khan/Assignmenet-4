let interviewCountLength = [];
let rejectedCountLength = [];
let currentStatus = "all";

let totalCount = document.getElementById("total-count");
let interviewCount = document.getElementById("interview-count");
let rejectedCount = document.getElementById("rejected-count"); //Toggle buttons ids
let allFilterBtn = document.getElementById("all-filter-btn");
let interviewFilterBtn = document.getElementById("interview-filter-btn");
let rejectedFilterBtn = document.getElementById("rejected-filter-btn");
const mainContainer = document.getElementById("main-container");
const filteredSection = document.getElementById("filtered-section");
function calculateTotal() {
  totalCount.innerText = mainContainer.children.length;
  interviewCount.innerText = interviewCountLength.length;
  rejectedCount.innerText = rejectedCountLength.length;
} //Toggle Buttons
function toggle(id) {
  allFilterBtn.classList.remove("bg-[#3B82F6]", "text-white");
  interviewFilterBtn.classList.remove("bg-[#3B82F6]", "text-white");
  rejectedFilterBtn.classList.remove("bg-[#3B82F6]", "text-white");
  allFilterBtn.classList.add("bg-white");
  interviewFilterBtn.classList.add("bg-white");
  rejectedFilterBtn.classList.add("bg-white");
  let selected = document.getElementById(id);
  currentStatus = id;
  selected.classList.remove("bg-white");
  selected.classList.add("bg-[#3B82F6]", "text-white");

  if (id == "interview-filter-btn") {
    mainContainer.classList.add("hidden");
    filteredSection.classList.remove("hidden");
    renderInterview();
  } else if (id == "all-filter-btn") {
    mainContainer.classList.remove("hidden");
    filteredSection.classList.add("hidden");
  } else if (id == "rejected-filter-btn") {
    mainContainer.classList.add("hidden");
    filteredSection.classList.remove("hidden");
    renderRejected();
  }
}

document.addEventListener("click", (event) => {
  if (event.target.classList.contains("interview-btn")) {
    const parentNode = event.target.parentNode.parentNode;
    const jobName = parentNode.querySelector(".job-name").innerText;
    const jobPosition = parentNode.querySelector(".job-position").innerText;
    const jobSalary = parentNode.querySelector(".job-salary").innerText;
    const notAppliedBtn = (parentNode.querySelector(
      ".not-applied-btn",
    ).innerText = "INTERVIEW");
    const jobDescription =
      parentNode.querySelector(".job-description").innerText;

    const jobInfo = {
      jobName,
      jobPosition,
      jobSalary,
      notAppliedBtn,
      jobDescription,
    };

    const jobExist = interviewCountLength.find(
      (item) => item.jobName == jobInfo.jobName,
    );
    jobInfo.notAppliedBtn.innerText = "INTERVIEW";
    if (!jobExist) {
      interviewCountLength.push(jobInfo);
    }

    rejectedCountLength = rejectedCountLength.filter(
      (item) => item.jobName != jobInfo.jobName,
    );
    if (currentStatus == "rejected-filter-btn") {
      renderRejected();
    }
    calculateTotal();
  } else if (event.target.classList.contains("rejected-btn")) {
    const parentNode = event.target.parentNode.parentNode;
    const jobName = parentNode.querySelector(".job-name").innerText;
    const jobPosition = parentNode.querySelector(".job-position").innerText;
    const jobSalary = parentNode.querySelector(".job-salary").innerText;
    const notAppliedBtn = (parentNode.querySelector(
      ".not-applied-btn",
    ).innerText = "REJECTED");
    const jobDescription =
      parentNode.querySelector(".job-description").innerText;

    const jobInfo = {
      jobName,
      jobPosition,
      jobSalary,
      notAppliedBtn,
      jobDescription,
    };

    const jobExist = rejectedCountLength.find(
      (item) => item.jobName == jobInfo.jobName,
    );
    jobInfo.notAppliedBtn.innerText = "REJECTED";
    if (!jobExist) {
      rejectedCountLength.push(jobInfo);
    }
    interviewCountLength = interviewCountLength.filter(
      (item) => item.jobName != jobInfo.jobName,
    );

    if (currentStatus == "interview-filter-btn") {
      renderInterview();
    }

    calculateTotal();
    // renderRejected();
  }
});

function renderInterview() {
  filteredSection.innerHTML = "";
  if (interviewCountLength.length === 0) {
    filteredSection.innerHTML = `
      <div class="bg-white rounded-lg p-4 h-[400px] mt-5 flex justify-center items-center">
      <div >
      <img class="mx-auto" src="./assests/assignment_7959593 1.png">
    <h1 class="text-center font-semibold text-2xl">No jobs Available</h1>
    <p class="text-center">Check back soon for new job opportunities</p>
      </div>
      </div>
      `;
    return;
  }
  for (let interview of interviewCountLength) {
    let div = document.createElement("div");
    div.innerHTML = ` <div class="bg-white p-6 space-y-4 mt-4 rounded-lg">
        <div class="flex justify-between items-center">
          <h1 class="job-name text-xl font-semibold">Mobile First Corp</h1>
          <img
            class="h-10 rounded-full cursor-pointer bg-gray-100 p-2"
            src="./assests/Trash.png"
            alt=""
          />
        </div>
        <p class="job-position text-gray-600 text-[18px]">
          React Native Developer
        </p>
        <p class="job-salary">Remote • Full-time • $130,000 - $175,000</p>
        <button
          class="not-applied-btn bg-[#eef4ff] px-4 py-2 rounded-lg font-semibold"
        >
          NOT APPLIED
        </button>
        <p class="job-description">
          Build cross-platform mobile applications using React Native. Work on
          products used by millions of users worldwide.
        </p>
        <div class="flex gap-3">
          <button
            class="interview-btn border-2 border-green-400 px-3 py-2 font-semibold text-green-600 rounded-lg"
          >
            INTERVIEW
          </button>
          <button
            class="rejected-btn border-2 border-red-400 px-3 py-2 font-semibold text-red-600 rounded-lg"
          >
            REJECTED
          </button>
        </div>
      </div>`;
    filteredSection.appendChild(div);
  }
}
function renderRejected() {
  filteredSection.innerHTML = "";
  if (rejectedCountLength.length === 0) {
    filteredSection.innerHTML = `
      <div class="bg-white rounded-lg p-4 h-[400px] mt-5 flex justify-center items-center">
      <div >
      <img class="mx-auto" src="./assests/assignment_7959593 1.png">
    <h1 class="text-center font-semibold text-2xl">No jobs Available</h1>
    <p class="text-center">Check back soon for new job opportunities</p>
      </div>
      </div>
      `;
    return;
  }
  for (let rejected of rejectedCountLength) {
    let div = document.createElement("div");
    div.innerHTML = `  <div class="bg-white p-6 space-y-4 mt-4 rounded-lg">
        <div class="flex justify-between items-center">
          <h1 class="job-name text-xl font-semibold">Mobile First Corp</h1>
          <img
            class="h-10 rounded-full cursor-pointer bg-gray-100 p-2"
            src="./assests/Trash.png"
            alt=""
          />
        </div>
        <p class="job-position text-gray-600 text-[18px]">
          React Native Developer
        </p>
        <p class="job-salary">Remote • Full-time • $130,000 - $175,000</p>
        <button
          class="not-applied-btn bg-[#eef4ff] px-4 py-2 rounded-lg font-semibold"
        >
          NOT APPLIED
        </button>
        <p class="job-description">
          Build cross-platform mobile applications using React Native. Work on
          products used by millions of users worldwide.
        </p>
        <div class="flex gap-3">
          <button
            class="interview-btn border-2 border-green-400 px-3 py-2 font-semibold text-green-600 rounded-lg"
          >
            INTERVIEW
          </button>
          <button
            class="rejected-btn border-2 border-red-400 px-3 py-2 font-semibold text-red-600 rounded-lg"
          >
            REJECTED
          </button> 
        </div>
      </div>`;
    filteredSection.appendChild(div);
  }
}

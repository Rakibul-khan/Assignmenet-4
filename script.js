let interviewCountLength = [];
let rejectedCountLength = [];
console.log(interviewCountLength);

let totalCount = document.getElementById("total-count");
let interviewCount = document.getElementById("interview-count");
let rejectedCount = document.getElementById("rejected-count");

//Toggle buttons ids
let allFilterBtn = document.getElementById("all-filter-btn");
let interviewFilterBtn = document.getElementById("interview-filter-btn");
let rejectedFilterBtn = document.getElementById("rejected-filter-btn");

const mainContainer = document.getElementById("main-container");

function calculateTotal() {
  totalCount.innerText = mainContainer.children.length;
  interviewCount.innerText = interviewCountLength.length;
  rejectedCount.innerText = rejectedCountLength.length;
}

//Toggle Buttons
function toggle(id) {
  allFilterBtn.classList.remove("bg-[#3B82F6]", "text-white");
  interviewFilterBtn.classList.remove("bg-[#3B82F6]", "text-white");
  rejectedFilterBtn.classList.remove("bg-[#3B82F6]", "text-white");

  allFilterBtn.classList.add("bg-white");
  interviewFilterBtn.classList.add("bg-white");
  rejectedFilterBtn.classList.add("bg-white");

  let selected = document.getElementById(id);
  selected.classList.remove("bg-white");
  selected.classList.add("bg-[#3B82F6]", "text-white");
}

document.getElementById("main-container").addEventListener("click", (e) => {
  if (e.target.classList.contains("interview-btn")) {
    let title = e.target.parentNode.parentNode.children[0].innerText;
    let profession = e.target.parentNode.parentNode.children[1].innerText;
    let location = e.target.parentNode.parentNode.children[2].innerText;
    let notAppliedBtn = e.target.parentNode.parentNode.children[3].innerText;
    let description = e.target.parentNode.parentNode.children[4].innerText;

    let info = {
      title,
      profession,
      location,
      notAppliedBtn,
      description,
    };
    let existJob = interviewCountLength.find(
      (item) => item.title == info.title,
    );

    if (!existJob) {
      interviewCountLength.push(info);
      calculateTotal();
    }
  }
});

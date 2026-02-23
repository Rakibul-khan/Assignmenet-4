function getId(id) {
  return document.getElementById(id);
}
let interviewCountLength = [];
let rejectedCountLength = [];
const totalCount = document.getElementById("total-count");
const interviewCount = document.getElementById("interview-count");
const rejectedCount = document.getElementById("rejected-count");
// console.log(totalCount, interviewCount, rejectedCount);

const totalCountLength = document.getElementById("main-container");

function countInnerText() {
  totalCount.innerText = totalCountLength.children.length;
  interviewCount.innerText = interviewCountLength.length;
  rejectedCount.innerText = rejectedCountLength.length;
}
countInnerText();

//Toggle Buttons
let allFilteredBtn = getId("all-filter-btn");
let rejectedFilteredBtn = getId("rejected-filter-btn");
let interviewFilteredBtn = getId("interview-filter-btn");

function toggle(id) {
  allFilteredBtn.classList.remove("bg-[#3B82F6]", "bg-white", "text-white");
  rejectedFilteredBtn.classList.remove(
    "bg-[#3B82F6]",
    "bg-white",
    "text-white",
  );
  interviewFilteredBtn.classList.remove(
    "bg-[#3B82F6]",
    "bg-white",
    "text-white",
  );
  allFilteredBtn.classList.add("bg-white", "text-black");
  rejectedFilteredBtn.classList.add("bg-white", "text-black");
  interviewFilteredBtn.classList.add("bg-white", "text-black");

  const selected = getId(id);
  selected.classList.remove("bg-white");
  selected.classList.add("bg-[#3B82F6]", "text-white");
}
